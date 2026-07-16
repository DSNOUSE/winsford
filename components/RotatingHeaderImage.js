'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const defaultSchoolPhotos = [
  '/images/School Photos/WhatsApp Image 2026-06-22 at 4.42.43 PM.jpeg',
  '/images/School Photos/WhatsApp Image 2026-06-22 at 4.42.44 PM.jpeg',
  '/images/School Photos/WhatsApp Image 2026-06-22 at 4.42.45 PM.jpeg',
  '/images/School Photos/WhatsApp Image 2026-06-22 at 4.42.50 PM (4).jpeg',
]

export default function RotatingHeaderImage({ images = defaultSchoolPhotos }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [images])

  return (
    <Image
      src={images[currentIndex]}
      alt="Winsford Schools"
      fill
      className="object-cover object-center"
      sizes="100vw"
      priority
    />
  )
}
