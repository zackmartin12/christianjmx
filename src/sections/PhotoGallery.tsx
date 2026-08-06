import { useState } from 'react'
import { GalleryCard } from '../components/GalleryCard'
import { PhotoLightbox } from '../components/PhotoLightbox'
import { SectionHeader } from '../components/SectionHeader'
import { photoCollections, photos } from '../content'

export function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return <section className="px-16 py-12 min-[701px]:max-[1000px]:px-12 max-[700px]:px-8">
    <SectionHeader title="Photography" />
    {photoCollections.map((collection) => <section className="mb-14 last:mb-0" key={collection.title}>
      <h3 className="mb-5 font-condensed text-xl font-medium tracking-[.12em] text-[#e0e2e4] uppercase">{collection.title}</h3>
      <div className="columns-3 gap-3 min-[701px]:max-[1000px]:columns-2 max-[700px]:columns-1">
        {collection.items.map((photo) => <GalleryCard item={photo} key={photo.id} onClick={() => setLightboxIndex(photos.findIndex((entry) => entry.id === photo.id))} />)}
      </div>
    </section>)}
    {lightboxIndex !== null && <PhotoLightbox initialIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />}
  </section>
}
