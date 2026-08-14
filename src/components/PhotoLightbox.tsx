import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { photos } from '../content'
import { Icon } from './Icon'

type PhotoLightboxProps = {
  initialIndex: number
  onClose: () => void
}

export function PhotoLightbox({ initialIndex, onClose }: PhotoLightboxProps) {
  const [index, setIndex] = useState(initialIndex)
  const previous = useCallback(() => setIndex((value) => (value - 1 + photos.length) % photos.length), [])
  const next = useCallback(() => setIndex((value) => (value + 1) % photos.length), [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') previous()
      if (event.key === 'ArrowRight') next()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [next, onClose, previous])

  const photo = photos[index]

  return createPortal(
    <div aria-label="Photo viewer" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-8 backdrop-blur-[10px] max-[700px]:px-14 max-[700px]:py-4" onClick={onClose} role="dialog">
      <button aria-label="Close photo viewer" className="absolute top-4 right-6 z-1 border-0 bg-transparent text-3xl text-white/50 transition-colors hover:text-white" onClick={onClose}><Icon name="close" /></button>
      <button aria-label="Previous photo" className="absolute top-1/2 left-4 z-1 flex size-16 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/30 text-5xl text-white/70 transition-colors hover:bg-white/15 hover:text-white max-[700px]:left-1 max-[700px]:size-12 max-[700px]:text-4xl" onClick={(event) => { event.stopPropagation(); previous() }}><Icon name="chevron_left" /></button>
      <div className="flex max-h-[88vh] max-w-4xl flex-col" onClick={(event) => event.stopPropagation()}>
        <img alt={photo.title} className="h-auto max-h-[80vh] w-auto object-contain" src={photo.fullSrc} />
        <div className="mt-4 flex items-baseline justify-between gap-6 max-[700px]:block">
          <p className="m-0 text-sm text-white/90">{photo.title}</p>
          {photo.caption && <span className="text-xs text-white/40 max-[700px]:mt-1 max-[700px]:block">{photo.caption}</span>}
        </div>
        <small className="mt-1 text-right text-xs text-white/40">{index + 1} / {photos.length}</small>
      </div>
      <button aria-label="Next photo" className="absolute top-1/2 right-4 z-1 flex size-16 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/30 text-5xl text-white/70 transition-colors hover:bg-white/15 hover:text-white max-[700px]:right-1 max-[700px]:size-12 max-[700px]:text-4xl" onClick={(event) => { event.stopPropagation(); next() }}><Icon name="chevron_right" /></button>
    </div>,
    document.body,
  )
}
