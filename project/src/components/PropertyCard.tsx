import React from 'react';
import { Heart } from 'lucide-react';
import { Property } from '../types';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
}

export function PropertyCard({ property, isFavorite, onFavoriteToggle }: PropertyCardProps) {
  const navigate = useNavigate();
  const user = supabase.auth.getUser();

  const handleFavoriteClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) {
      navigate('/login');
      return;
    }
    onFavoriteToggle?.();
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02]"
      onClick={() => navigate(`/property/${property.id}`)}
    >
      <div className="relative h-48">
        <img 
          src={property.image_url} 
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <button
          onClick={handleFavoriteClick}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white"
        >
          <Heart 
            className={clsx(
              "w-5 h-5",
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            )}
          />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{property.title}</h3>
        <p className="text-gray-600 mb-2">{property.location}</p>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-gray-900">${property.price.toLocaleString()}</p>
          <div className="flex gap-2 text-gray-600">
            <span>{property.bedrooms} beds</span>
            <span>•</span>
            <span>{property.bathrooms} baths</span>
          </div>
        </div>
      </div>
    </div>
  );
}