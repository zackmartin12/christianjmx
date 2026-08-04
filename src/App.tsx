import { useCallback, useEffect, useState } from 'react'
import portrait from './assets/christian-jimenez-maldonado.png'
import { education, experience, photos, videos, type Credit, type GalleryItem, type VideoItem } from './content'

type Tab = 'about' | 'photos' | 'videos' | 'experience'

function Icon({ children }: { children: string }) {
  return <span aria-hidden="true" className="icon">{children}</span>
}

function SectionHeader({ title, count }: { title: string; count?: number }) {
  return <div className="section-header"><h2>{title}</h2>{count !== undefined && <span>{count} works</span>}</div>
}

function PhotoLightbox({ initialIndex, onClose }: { initialIndex: number; onClose: () => void }) {
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
  return <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={onClose}>
    <button className="modal-close" onClick={onClose} aria-label="Close photo viewer"><Icon>×</Icon></button>
    <button className="modal-arrow previous" onClick={(event) => { event.stopPropagation(); previous() }} aria-label="Previous photo"><Icon>‹</Icon></button>
    <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
      <img src={photo.src} alt={photo.title} />
      <div><p>{photo.title}</p><span>{photo.caption}</span></div>
      <small>{index + 1} / {photos.length}</small>
    </div>
    <button className="modal-arrow next" onClick={(event) => { event.stopPropagation(); next() }} aria-label="Next photo"><Icon>›</Icon></button>
  </div>
}

function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  return <section className="tab-content gallery"><SectionHeader title="Photography" count={photos.length} />
    <div className="masonry">{photos.map((photo, index) => <GalleryCard item={photo} key={photo.id} onClick={() => setLightboxIndex(index)} />)}</div>
    {lightboxIndex !== null && <PhotoLightbox initialIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />}
  </section>
}

function GalleryCard({ item, onClick, video }: { item: GalleryItem; onClick: () => void; video?: boolean }) {
  return <figure className={`gallery-card${video ? ' video-card' : ''}`} onClick={onClick} tabIndex={0} role="button" onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') onClick() }} aria-label={`Open ${item.title}`}>
    <img src={item.src} alt={item.title} />
    {video && <div className="play-button"><Icon>▶</Icon></div>}
    <figcaption><p>{item.title}</p><span>{item.caption}</span></figcaption>
  </figure>
}

function VideoModal({ video, onClose }: { video: VideoItem; onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])
  return <div className="video-modal" role="dialog" aria-modal="true" aria-label={video.title} onClick={onClose}>
    <div className="video-modal-content" onClick={(event) => event.stopPropagation()}>
      <header><div><p>{video.title}</p><span>{video.caption}</span></div><button onClick={onClose} aria-label="Close video"><Icon>×</Icon></button></header>
      <iframe src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`} title={video.title} allow="autoplay; fullscreen" allowFullScreen />
    </div>
  </div>
}

function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null)
  return <section className="tab-content gallery"><SectionHeader title="Video" count={videos.length} />
    <div className="video-grid">{videos.map((video) => <GalleryCard item={video} key={video.id} video onClick={() => setActiveVideo(video)} />)}</div>
    {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
  </section>
}

function About() {
  return <section className="about">
    <div className="portrait"><img src={portrait} alt="Christian Jimenez-Maldonado, filmmaker and photographer" /></div>
    <div className="about-copy"><div><p className="kicker">Filmmaker · Photographer · Content Creator</p><h1>Christian<br />Jimenez-Maldonado</h1>
      <div className="bio"><p>I am a filmmaker, photographer, and content creator specializing in visual storytelling across documentary, reality television, sports media, and digital content. I hold a Bachelor of Arts in Film Studies with a minor in Journalism from the University of North Carolina Wilmington.</p>
      <p>At UNCW, I served as Director of Filming and Editing for Survivor UNCW — leading a production crew through four full seasons of filming, directing, and post-production. My professional credits include a Production Assistant position on <em>Moonshiners: Master Distiller</em> for Discovery Channel and a Lighting & Grip internship at CineSpace Studios.</p>
      <p>A competitive grant brought me to Mexico City to research the history, culture, and artistry of lucha libre — an experience that continues to inform my documentary perspective. Originally from Asheville, NC, I am currently based in Wilmington and available to travel for production opportunities.</p></div>
    </div><div className="contact"><a href="mailto:videographychristian@gmail.com"><Icon>✉</Icon>videographychristian@gmail.com</a><span><Icon>☎</Icon>828-606-2372</span><span><Icon>⌖</Icon>Asheville & Wilmington, NC</span>
      <div className="socials"><a href="https://www.instagram.com/Christianj.mx" target="_blank" rel="noreferrer">Instagram · @Christianj.mx</a><a href="https://www.linkedin.com/in/christian-jimenez-maldonado-b532b5412" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://www.youtube.com/@SurvivorUNCW" target="_blank" rel="noreferrer">YouTube · SurvivorUNCW</a></div>
    </div></div>
  </section>
}

function CreditList({ items }: { items: Credit[] }) {
  return <ul className="credits">{items.map((item) => <li key={`${item.title}-${item.year}`}><div><p>{item.title} <span>{item.year}</span></p><small>{item.role} · {item.company}</small><article>{item.description}</article></div></li>)}</ul>
}

function Experience() {
  return <section className="tab-content experience"><SectionHeader title="Education" /><CreditList items={education} /><SectionHeader title="Experience" /><CreditList items={experience} /></section>
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('about')
  const [menuOpen, setMenuOpen] = useState(false)
  const selectTab = (tab: Tab) => { setActiveTab(tab); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const tabs: { id: Tab; label: string }[] = [{ id: 'photos', label: 'Photos' }, { id: 'videos', label: 'Videos' }, { id: 'experience', label: 'Experience' }]
  return <div className="site">
    <header className="site-header"><div className="header-inner"><button className="site-name" onClick={() => selectTab('about')}>Christian Jimenez</button>
      <nav className="desktop-nav" aria-label="Portfolio sections">{tabs.map((tab) => <button key={tab.id} className={activeTab === tab.id ? 'active' : ''} onClick={() => selectTab(tab.id)}>{tab.label}</button>)}</nav>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu">{menuOpen ? '×' : '☰'}<span className="sr-only">Toggle menu</span></button></div>
      {menuOpen && <nav id="mobile-menu" className="mobile-nav" aria-label="Portfolio sections">{tabs.map((tab) => <button key={tab.id} className={activeTab === tab.id ? 'active' : ''} onClick={() => selectTab(tab.id)}>{tab.label}</button>)}</nav>}
    </header>
    <main key={activeTab} className="tab-fade">{activeTab === 'about' && <About />}{activeTab === 'photos' && <PhotoGallery />}{activeTab === 'videos' && <VideoGallery />}{activeTab === 'experience' && <Experience />}</main>
    <footer><span>© 2026 Christian Jimenez-Maldonado</span><span>Filmmaker & Photographer</span></footer>
  </div>
}
