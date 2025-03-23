import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Property } from '../types';
import { supabase } from '../lib/supabase';
import { Heart, ArrowLeft, BedDouble, Bath, MapPin } from 'lucide-react';

export function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = React.useState<Property | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [isFavorite, setIsFavorite] = React.useState(false);

  React.useEffect(() => {
    const fetchProperty = async () => {
      try {
        const { data, error } = await supabase
          .from('properties')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setProperty(data);

        const user = await supabase.auth.getUser();
        if (user.data.user) {
          const { data: favoriteData } = await supabase
            .from('favorites')
            .select('*')
            .eq('user_id', user.data.user.id)
            .eq('property_id', id)
            .single();

          setIsFavorite(!!favoriteData);
        }
      } catch (error) {
        console.error('Error fetching property:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  const toggleFavorite = async () => {
    const user = await supabase.auth.getUser();
    if (!user.data.user) {
      navigate('/login');
      return;
    }

    try {
      if (isFavorite) {
        await supabase
          .from('favorites')
          .delete()
          .eq('user_id', user.data.user.id)
          .eq('property_id', id);
      } else {
        await supabase
          .from('favorites')
          .insert({ user_id: user.data.user.id, property_id: id });
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to listings
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-96">
          <img
            src={property.image_url}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={toggleFavorite}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white"
          >
            <Heart
              className={clsx(
                "w-6 h-6",
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
              )}
            />
          </button>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
            <p className="text-2xl font-bold text-blue-600">
              ${property.price.toLocaleString()}
            </p>
          </div>

          <div className="flex items-center text-gray-600 mb-6">
            <MapPin className="w-5 h-5 mr-2" />
            {property.location}
          </div>

          <div className="flex gap-6 mb-8">
            <div className="flex items-center">
              <BedDouble className="w-5 h-5 mr-2 text-gray-600" />
              <span>{property.bedrooms} bedrooms</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-5 h-5 mr-2 text-gray-600" />
              <span>{property.bathrooms} bathrooms</span>
            </div>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mb-4">About this property</h2>
            <p className="text-gray-600">{property.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}