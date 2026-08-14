import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { videos } from '../content'
import { Icon } from './Icon'

type VideoModalProps = {
  initialIndex: number
  onClose: () => void
}

export function VideoModal({ initialIndex, onClose }: VideoModalProps) {
  const [index, setIndex] = useState(initialIndex)
  const previous = useCallback(() => setIndex((value) => (value - 1 + videos.length) % videos.length), [])
  const next = useCallback(() => setIndex((value) => (value + 1) % videos.length), [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') previous()
      if (event.key === 'ArrowRight') next()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [next, onClose, previous])

  const video = videos[index]

  return createPortal(
    <div aria-label={video.title} aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-8 backdrop-blur-[10px] max-[700px]:px-14" onClick={onClose} role="dialog">
      <button aria-label="Previous video" className="modal-control-focus absolute top-1/2 left-4 z-1 flex size-16 -translate-y-1/2 items-center justify-center text-5xl text-white/70 transition-colors hover:text-white max-[700px]:left-1 max-[700px]:size-12 max-[700px]:text-4xl" onClick={(event) => { event.stopPropagation(); previous() }}><Icon name="chevron_left" /></button>
      <div className="w-full max-w-4xl bg-[#191c1e]" onClick={(event) => event.stopPropagation()}>
        <header className="flex items-center justify-between border-b border-[rgb(210_215_218_/_9%)] px-6 py-4">
          <div><p className="m-0 text-base">{video.title}</p><span className="text-xs text-[#6a6f73]">{video.caption}</span></div>
          <button aria-label="Close video" className="modal-control-focus border-0 bg-transparent text-2xl text-white/50 transition-colors hover:text-white" onClick={onClose}><Icon name="close" /></button>
        </header>
        <iframe allow="autoplay; fullscreen" allowFullScreen className="block aspect-video w-full border-0" src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`} title={video.title} />
      </div>
      <button aria-label="Next video" className="modal-control-focus absolute top-1/2 right-4 z-1 flex size-16 -translate-y-1/2 items-center justify-center text-5xl text-white/70 transition-colors hover:text-white max-[700px]:right-1 max-[700px]:size-12 max-[700px]:text-4xl" onClick={(event) => { event.stopPropagation(); next() }}><Icon name="chevron_right" /></button>
    </div>
    ,
    document.body,
  )
}
