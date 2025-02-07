import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Heart } from "lucide-react"
import Image from "next/image"

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AboutModal({ isOpen, onClose }: AboutModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[450px] max-h-[90vh] overflow-y-auto font-gopher bg-white rounded-3xl shadow-xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] sm:w-full">
        <DialogHeader>
          <DialogTitle className="text-red-600 font-bold flex items-center justify-center font-gopher text-lg sm:text-xl">
            <Heart className="w-5 h-5 mr-2" /> About This App
          </DialogTitle>
        </DialogHeader>
        <div className="w-4/5 mx-auto mb-4">
          <div className="relative w-full" style={{ paddingTop: "85%" }}>
            <Image
              src="https://raioxdjfzm899rme.public.blob.vercel-storage.com/frame-rGygTzPrYRQODpSy6QxdcIfALKo1em.gif"
              alt="Animated GIF"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="mt-2 text-xs sm:text-sm text-muted-foreground font-gopher">
          <div className="mb-4 font-regular">
            Hi Daksh! I designed this mini web app to make your life a little easier the next time I have no idea where
            I want to eat. This app is populated with SF spots from{" "}
            <a href="www.corner.inc/saradada" className="hyperlink font-normal">
              my corner
            </a>{" "}
            and supports local storage if you want to add additional locations to the list.
          </div>
          <div className="mb-4 font-regular">
            This app was built with my besties figma, claude, and v0. I hope you're impressed by my #womeninstem moment
            ;).
          </div>
          <div className="italic font-medium text-red-600 mb-2">
            Thank you for being my favorite person. Happy Valentines Day!
          </div>
        </div>
      </DialogContent>
      <style jsx>{`
        .hyperlink {
          color: #e53e3e;
          text-decoration: underline;
          transition: color 0.2s ease-in-out;
        }
        .hyperlink:hover {
          color: #c53030;
        }
      `}</style>
    </Dialog>
  )
}

