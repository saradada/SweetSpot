import type { Restaurant } from "../data/restaurants"

export function getRandomRestaurant(
  restaurants: Restaurant[],
  neighborhood?: string,
  cuisineType?: string,
): Restaurant {
  const filteredRestaurants = restaurants.filter(
    (r) => (!neighborhood || r.neighborhood === neighborhood) && (!cuisineType || r.cuisineType === cuisineType),
  )

  if (filteredRestaurants.length === 0) {
    throw new Error("No restaurants match the selected criteria")
  }

  const randomIndex = Math.floor(Math.random() * filteredRestaurants.length)
  return filteredRestaurants[randomIndex]
}

