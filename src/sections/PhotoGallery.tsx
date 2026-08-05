import { useState } from 'react'
import { GalleryCard } from '../components/GalleryCard'
import { PhotoLightbox } from '../components/PhotoLightbox'
import { SectionHeader } from '../components/SectionHeader'
import { photos } from '../content'

export function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return <section className="px-16 py-12 min-[701px]:max-[1000px]:px-12 max-[700px]:px-8">
    <SectionHeader title="Photography" />
    <div className="columns-3 gap-3 min-[701px]:max-[1000px]:columns-2 max-[700px]:columns-1">
      {photos.map((photo, index) => <GalleryCard item={photo} key={photo.id} onClick={() => setLightboxIndex(index)} />)}
    </div>
    {lightboxIndex !== null && <PhotoLightbox initialIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />}
  </section>
}
