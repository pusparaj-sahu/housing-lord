import React from 'react';
import { PropertyCard } from '../components/PropertyCard';
import { SearchFilters } from '../components/SearchFilters';
import { Property } from '../types';
import { supabase } from '../lib/supabase';

export function Home() {
  const [properties, setProperties] = React.useState<Property[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [favorites, setFavorites] = React.useState<Set<string>>(new Set());

  const fetchProperties = async () => {
    try {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProperties(data || []);
    } catch (error) {
      console.error('Error fetching properties:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchFavorites = async () => {
    const user = await supabase.auth.getUser();
    if (!user.data.user) return;

    try {
      const { data, error } = await supabase
        .from('favorites')
        .select('property_id')
        .eq('user_id', user.data.user.id);

      if (error) throw error;
      setFavorites(new Set(data?.map(f => f.property_id)));
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  React.useEffect(() => {
    fetchProperties();
    fetchFavorites();
  }, []);

  const handleSearch = async (filters: any) => {
    setLoading(true);
    try {
      let query = supabase.from('properties').select('*');

      if (filters.query) {
        query = query.or(`title.ilike.%${filters.query}%,location.ilike.%${filters.query}%`);
      }
      if (filters.minPrice) {
        query = query.gte('price', filters.minPrice);
      }
      if (filters.bedrooms) {
        query = query.eq('bedrooms', filters.bedrooms);
      }

      const { data, error } = await query;
      if (error) throw error;
      setProperties(data || []);
    } catch (error) {
      console.error('Error searching properties:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = async (propertyId: string) => {
    const user = await supabase.auth.getUser();
    if (!user.data.user) return;

    const isFavorite = favorites.has(propertyId);
    try {
      if (isFavorite) {
        await supabase
          .from('favorites')
          .delete()
          .eq('user_id', user.data.user.id)
          .eq('property_id', propertyId);
        favorites.delete(propertyId);
      } else {
        await supabase
          .from('favorites')
          .insert({ user_id: user.data.user.id, property_id: propertyId });
        favorites.add(propertyId);
      }
      setFavorites(new Set(favorites));
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-900">Find Your Perfect Home</h1>
      <SearchFilters onSearch={handleSearch} />
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map(property => (
            <PropertyCard
              key={property.id}
              property={property}
              isFavorite={favorites.has(property.id)}
              onFavoriteToggle={() => toggleFavorite(property.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}