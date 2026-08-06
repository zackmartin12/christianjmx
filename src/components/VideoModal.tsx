import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import type { VideoItem } from '../content'
import { Icon } from './Icon'

type VideoModalProps = {
  video: VideoItem
  onClose: () => void
}

export function VideoModal({ video, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return createPortal(
    <div aria-label={video.title} aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-8 backdrop-blur-[10px]" onClick={onClose} role="dialog">
      <div className="w-full max-w-4xl bg-[#191c1e]" onClick={(event) => event.stopPropagation()}>
        <header className="flex items-center justify-between border-b border-[rgb(210_215_218_/_9%)] px-6 py-4">
          <div><p className="m-0 text-base">{video.title}</p><span className="text-xs text-[#6a6f73]">{video.caption}</span></div>
          <button aria-label="Close video" className="border-0 bg-transparent text-2xl text-[#6a6f73]" onClick={onClose}><Icon>×</Icon></button>
        </header>
        <iframe allow="autoplay; fullscreen" allowFullScreen className="block aspect-video w-full border-0" src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`} title={video.title} />
      </div>
    </div>
    ,
    document.body,
  )
}
