"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

interface MemeModalProps {
  isOpen: boolean
  onClose: () => void
}

const memes = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download.jpg-pinNtUZjMifnaAU4ZAhUXQXFrDtRrO.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-1.jpg-msiZTFYoPGLENdNU28ddoGRzNyanXd.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9jdoub.jpg-4IQpE0JpU02hRuSbaMU8gFztHNTqot.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9jdona.jpg-IU5yv16w4yVXJsjxLbqjIySQiWdltP.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9jdohd.jpg-30VObuy6xCXnkByDtoh9i8IpH2xOsb.jpeg",
]

export function MemeModal({ isOpen, onClose }: MemeModalProps) {
  const [currentMemeIndex, setCurrentMemeIndex] = useState(0)

  const handleNext = () => {
    setCurrentMemeIndex((prev) => (prev + 1) % memes.length)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 bg-white rounded-3xl shadow-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] sm:w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-4">
          <img
            src={memes[currentMemeIndex] || "/placeholder.svg"}
            alt="Restaurant decision meme"
            className="w-full rounded-lg"
          />
          <Button onClick={handleNext} className="w-full bg-red-600 hover:bg-red-700">
            <Sparkles className="w-4 h-4 mr-2" />
            Show Another
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

