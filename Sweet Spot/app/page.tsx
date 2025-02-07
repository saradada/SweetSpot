"use client"

import { useState, useEffect } from "react"
import {
  neighborhoods,
  cuisineTypes,
  type Restaurant,
  getStoredRestaurants,
  storeRestaurants,
} from "../data/restaurants"
import { getRandomRestaurant } from "../utils/randomSelection"
import { SelectionForm } from "./SelectionForm"
import { ResultDisplay } from "./ResultDisplay"
import { AboutModal } from "./AboutModal"
import { SubmitRestaurantForm } from "./SubmitRestaurantForm"
import { MemeModal } from "./MemeModal"
import { Button } from "@/components/ui/button"
import { Heart, PlusCircle } from "lucide-react"

export default function Home() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null)
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false)
  const [isSubmitFormOpen, setIsSubmitFormOpen] = useState(false)
  const [isMemeModalOpen, setIsMemeModalOpen] = useState(false)

  useEffect(() => {
    setRestaurants(getStoredRestaurants())
  }, [])

  const handleSelection = (neighborhood: string | null, cuisineType: string | null) => {
    try {
      const restaurant = getRandomRestaurant(restaurants, neighborhood || undefined, cuisineType || undefined)
      setSelectedRestaurant(restaurant)
    } catch (error) {
      alert("No restaurants match the selected criteria. Please try again.")
    }
  }

  const handleReset = () => {
    setSelectedRestaurant(null)
  }

  const handleSubmitRestaurant = (newRestaurant: Restaurant) => {
    const updatedRestaurants = [...restaurants, newRestaurant]
    setRestaurants(updatedRestaurants)
    storeRestaurants(updatedRestaurants)
    alert(`${newRestaurant.name} has been added to the list!`)
  }

  return (
    <div className="min-h-screen bg-pink-50 py-4 sm:py-6 flex flex-col items-center font-gopher">
      <div className="w-full max-w-md mx-auto px-4 sm:px-6 md:max-w-xl">
        <div className="relative py-3">
          <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-8 bg-white shadow-lg rounded-3xl sm:p-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center text-red-600 font-gopher">Sweet Spot</h1>
            <p className="text-sm sm:text-base font-light italic text-center text-red-400 mb-6 font-gopher whitespace-nowrap">
              Because &apos;Whatever You Want&apos; Isn&apos;t a Restaurant
            </p>
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setIsMemeModalOpen(true)}
                className="bg-transparent border-none cursor-pointer p-0 transition-transform hover:scale-110"
                aria-label="Open meme modal"
              >
                <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-red-500" />
              </button>
            </div>
            <SelectionForm
              neighborhoods={neighborhoods}
              cuisineTypes={cuisineTypes}
              onSelection={handleSelection}
              onReset={handleReset}
            />
            {selectedRestaurant && <ResultDisplay restaurant={selectedRestaurant} />}
            <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
              <Button
                variant="outline"
                onClick={() => setIsAboutModalOpen(true)}
                className="w-full sm:w-auto text-red-600 border-red-600 hover:bg-red-50"
              >
                About This App
              </Button>
              <Button
                onClick={() => setIsSubmitFormOpen(true)}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white"
              >
                <PlusCircle className="w-4 h-4 mr-2" />
                Add a Spot
              </Button>
            </div>
          </div>
        </div>
      </div>
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
      <SubmitRestaurantForm
        isOpen={isSubmitFormOpen}
        onClose={() => setIsSubmitFormOpen(false)}
        onSubmit={handleSubmitRestaurant}
      />
      <MemeModal isOpen={isMemeModalOpen} onClose={() => setIsMemeModalOpen(false)} />
    </div>
  )
}

