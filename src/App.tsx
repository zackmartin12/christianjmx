import { useEffect, useState } from 'react'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { PhotoGallery } from './sections/PhotoGallery'
import { VideoGallery } from './sections/VideoGallery'
import type { Tab } from './types'

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('about')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollToContact, setScrollToContact] = useState(false)
  const selectTab = (tab: Tab) => { setActiveTab(tab); setMenuOpen(false); setScrollToContact(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const selectContact = () => { setActiveTab('about'); setMenuOpen(false); setScrollToContact(true) }
  const tabs = [{ id: 'photos', label: 'Photos' }, { id: 'videos', label: 'Videos' }, { id: 'experience', label: 'Experience' }] as const
  useEffect(() => {
    if (scrollToContact && activeTab === 'about') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setScrollToContact(false)
    }
  }, [activeTab, scrollToContact])
  return <div className="min-h-screen bg-[#111314]">
    <SiteHeader activeTab={activeTab} menuOpen={menuOpen} onSelectContact={selectContact} onSelectTab={selectTab} onToggleMenu={() => setMenuOpen(!menuOpen)} tabs={tabs} />
    <main className="animate-tab-fade" key={activeTab}>{activeTab === 'about' && <About />}{activeTab === 'photos' && <PhotoGallery />}{activeTab === 'videos' && <VideoGallery />}{activeTab === 'experience' && <Experience />}</main>
    <SiteFooter />
  </div>
}
