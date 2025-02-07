import type { Metadata } from "next"
import "./globals.css"
import type React from "react"

export const metadata: Metadata = {
  title: "Sweet Spot SF",
  description: "Find your next favorite restaurant in San Francisco",
  icons: {
    icon: [
      {
        url: "/icon.png",
        href: "/icon.png",
      },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-JdK2a19h7TPvfmSUejRPdjLaRfK0Lx.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "apple-touch-icon",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-JdK2a19h7TPvfmSUejRPdjLaRfK0Lx.png",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Sweet Spot SF",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rjf6wko.css" />
        <link
          rel="apple-touch-icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-JdK2a19h7TPvfmSUejRPdjLaRfK0Lx.png"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sweet Spot SF" />
      </head>
      <body className="font-gopher">{children}</body>
    </html>
  )
}

