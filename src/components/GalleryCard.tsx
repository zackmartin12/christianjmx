import type { GalleryItem } from '../content'
import { Icon } from './Icon'

type GalleryCardProps = {
  item: GalleryItem
  onClick: () => void
  video?: boolean
}

export function GalleryCard({ item, onClick, video = false }: GalleryCardProps) {
  return <figure
    aria-label={`Open ${item.title}`}
    className={`group relative m-0 cursor-pointer overflow-hidden bg-[#1c1f21] ${video ? 'aspect-[16/10]' : 'mb-3 break-inside-avoid'} ${video ? 'after:absolute after:inset-0 after:bg-black/30 after:transition-[background] after:duration-300 hover:after:bg-black/50' : ''}`}
    onClick={onClick}
    onKeyDown={(event) => {
      if (event.key === 'Enter' || event.key === ' ') onClick()
    }}
    role="button"
    tabIndex={0}
  >
    <img
      alt={item.title}
      className={`w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] group-focus-visible:scale-[1.03] ${video ? 'h-full' : 'min-h-48'}`}
      decoding="async"
      loading="lazy"
      src={item.thumbnailSrc}
    />
    {video && <div className="absolute top-1/2 left-1/2 z-1 flex size-11 -translate-1/2 items-center justify-center border border-white/30 bg-transparent backdrop-blur-[4px] transition-transform duration-300 group-hover:scale-110">
      <Icon className="translate-x-px text-[.8rem] text-white" name="play_arrow" />
    </div>}
    <figcaption className={`absolute right-0 bottom-0 left-0 z-2 translate-y-1 bg-linear-to-t from-[rgb(16_18_20_/_93%)] to-transparent px-3.5 pt-12 pb-3.5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100`}>
      <p className="m-0 text-sm">{item.title}</p>
      {item.caption && <span className="text-xs text-[#6a6f73]">{item.caption}</span>}
    </figcaption>
  </figure>
}
