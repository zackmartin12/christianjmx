import { useState } from 'react'
import { GalleryCard } from '../components/GalleryCard'
import { SectionHeader } from '../components/SectionHeader'
import { VideoModal } from '../components/VideoModal'
import { videos, type VideoItem } from '../content'

export function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null)

  return <section className="px-16 py-12 min-[701px]:max-[1000px]:px-12 max-[700px]:px-8">
    <SectionHeader title="Video" />
    <div className="grid grid-cols-3 gap-3 min-[701px]:max-[1000px]:grid-cols-2 max-[700px]:grid-cols-1">
      {videos.map((video) => <GalleryCard item={video} key={video.id} onClick={() => setActiveVideo(video)} video />)}
    </div>
    {activeVideo && <VideoModal onClose={() => setActiveVideo(null)} video={activeVideo} />}
  </section>
}
