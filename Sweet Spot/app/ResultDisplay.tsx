import type { Restaurant } from "../data/restaurants"
import { Heart } from "lucide-react"

interface ResultDisplayProps {
  restaurant: Restaurant
}

export function ResultDisplay({ restaurant }: ResultDisplayProps) {
  return (
    <div className="mt-6 p-4 sm:p-6 bg-pink-50 rounded-lg border-2 border-red-200">
      <h2 className="text-xl sm:text-2xl font-bold mb-2 text-red-600">{restaurant.name}</h2>
      <p className="mb-1 text-sm sm:text-base">
        <strong className="font-bold text-red-500">Cuisine:</strong> {restaurant.cuisineType}
      </p>
      <p className="mb-1 text-sm sm:text-base">
        <strong className="font-bold text-red-500">Neighborhood:</strong> {restaurant.neighborhood}
      </p>
      <a
        href={restaurant.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:underline flex items-center mt-2 text-sm sm:text-base"
      >
        <Heart className="w-4 h-4 mr-1" /> View on Google Maps
      </a>
    </div>
  )
}

