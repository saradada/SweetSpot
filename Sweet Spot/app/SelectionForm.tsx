import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SelectionFormProps {
  neighborhoods: string[]
  cuisineTypes: string[]
  onSelection: (neighborhood: string | null, cuisineType: string | null) => void
  onReset: () => void
}

export function SelectionForm({ neighborhoods, cuisineTypes, onSelection, onReset }: SelectionFormProps) {
  const [neighborhood, setNeighborhood] = useState<string | null>(null)
  const [cuisineType, setCuisineType] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSelection(neighborhood, cuisineType)
  }

  const handleReset = () => {
    setNeighborhood(null)
    setCuisineType(null)
    onReset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Select value={neighborhood || ""} onValueChange={(value) => setNeighborhood(value)}>
        <SelectTrigger className="w-full border-red-300 focus:ring-red-500">
          <SelectValue placeholder="Choose a neighborhood" />
        </SelectTrigger>
        <SelectContent className="bg-white border border-red-300 rounded-md shadow-lg max-h-60 overflow-auto z-50">
          {neighborhoods.map((n) => (
            <SelectItem key={n} value={n} className="hover:bg-red-50">
              {n}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={cuisineType || ""} onValueChange={(value) => setCuisineType(value)}>
        <SelectTrigger className="w-full border-red-300 focus:ring-red-500">
          <SelectValue placeholder="Choose a cuisine" />
        </SelectTrigger>
        <SelectContent className="bg-white border border-red-300 rounded-md shadow-lg max-h-60 overflow-auto z-50">
          {cuisineTypes.map((c) => (
            <SelectItem key={c} value={c} className="hover:bg-red-50">
              {c}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
        Find Restaurant
      </Button>
      <Button
        type="button"
        onClick={handleReset}
        variant="outline"
        className="w-full text-red-600 border-red-600 hover:bg-red-50"
      >
        Reset
      </Button>
    </form>
  )
}

