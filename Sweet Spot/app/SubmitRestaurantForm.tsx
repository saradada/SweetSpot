"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { neighborhoods, cuisineTypes } from "../data/restaurants"

interface SubmitRestaurantFormProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (restaurant: {
    name: string
    cuisineType: string
    neighborhood: string
    googleMapsUrl: string
  }) => void
}

export function SubmitRestaurantForm({ isOpen, onClose, onSubmit }: SubmitRestaurantFormProps) {
  const [name, setName] = useState("")
  const [cuisineType, setCuisineType] = useState("")
  const [neighborhood, setNeighborhood] = useState("")
  const [googleMapsUrl, setGoogleMapsUrl] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && cuisineType && neighborhood && googleMapsUrl) {
      onSubmit({ name, cuisineType, neighborhood, googleMapsUrl })
      setName("")
      setCuisineType("")
      setNeighborhood("")
      setGoogleMapsUrl("")
      onClose()
    } else {
      alert("Please fill in all fields")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white rounded-3xl shadow-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] sm:w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900">Add a New Spot</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="name" className="text-red-600">
              Restaurant Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-red-300 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <Label htmlFor="cuisineType" className="text-red-600">
              Cuisine Type
            </Label>
            <Select value={cuisineType} onValueChange={setCuisineType} required>
              <SelectTrigger className="w-full border-red-300 focus:ring-red-500">
                <SelectValue placeholder="Select cuisine type" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-red-300 rounded-md shadow-lg max-h-60 overflow-auto z-50">
                {cuisineTypes.map((type) => (
                  <SelectItem key={type} value={type} className="hover:bg-red-50">
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="neighborhood" className="text-red-600">
              Neighborhood
            </Label>
            <Select value={neighborhood} onValueChange={setNeighborhood} required>
              <SelectTrigger className="w-full border-red-300 focus:ring-red-500">
                <SelectValue placeholder="Select neighborhood" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-red-300 rounded-md shadow-lg max-h-60 overflow-auto z-50">
                {neighborhoods.map((n) => (
                  <SelectItem key={n} value={n} className="hover:bg-red-50">
                    {n}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="googleMapsUrl" className="text-red-600">
              Google Maps URL
            </Label>
            <Input
              id="googleMapsUrl"
              value={googleMapsUrl}
              onChange={(e) => setGoogleMapsUrl(e.target.value)}
              className="w-full border-red-300 focus:ring-red-500"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
            Add Restaurant
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

