import type { Tab } from '../types'

type NavigationTab = {
  id: Exclude<Tab, 'about'>
  label: string
}

type SiteHeaderProps = {
  activeTab: Tab
  menuOpen: boolean
  onSelectTab: (tab: Tab) => void
  onToggleMenu: () => void
  tabs: readonly NavigationTab[]
}

const navigationButtonClass = (isActive: boolean) => `relative border-0 bg-transparent px-4 py-5 font-condensed text-xs tracking-[.15em] text-[#6a6f73] uppercase transition-colors duration-150 hover:text-[#e0e2e4] ${isActive ? 'text-[#e0e2e4] after:absolute after:right-4 after:bottom-0 after:left-4 after:h-px after:bg-[rgb(224_226_228_/_60%)]' : ''}`

export function SiteHeader({ activeTab, menuOpen, onSelectTab, onToggleMenu, tabs }: SiteHeaderProps) {
  return <header className="sticky top-0 z-20 border-b border-[rgb(210_215_218_/_9%)] [background:rgb(17_19_20_/_95%)] backdrop-blur-[12px]">
    <div className="flex items-center justify-between px-16 min-[701px]:max-[1000px]:px-12 max-[700px]:px-8">
      <button className="border-0 bg-transparent py-5 font-condensed text-[.9rem] font-medium tracking-[.15em] text-[#e0e2e4] uppercase" onClick={() => onSelectTab('about')}>Christian Jimenez</button>
      <nav aria-label="Portfolio sections" className="flex self-stretch max-[700px]:hidden">
        {tabs.map((tab) => <button className={navigationButtonClass(activeTab === tab.id)} key={tab.id} onClick={() => onSelectTab(tab.id)}>{tab.label}</button>)}
      </nav>
      <button aria-controls="mobile-menu" aria-expanded={menuOpen} className="hidden border-0 bg-transparent py-4 text-[1.3rem] text-[#6a6f73] max-[700px]:block" onClick={onToggleMenu}>
        {menuOpen ? '×' : '☰'}<span className="sr-only">Toggle menu</span>
      </button>
    </div>
    {menuOpen && <nav aria-label="Portfolio sections" className="hidden border-t border-[rgb(210_215_218_/_9%)] max-[700px]:flex max-[700px]:flex-col" id="mobile-menu">
      {tabs.map((tab) => <button className={`border-0 bg-transparent px-8 py-4 text-left font-condensed text-xs tracking-[.15em] text-[#6a6f73] uppercase ${activeTab === tab.id ? 'text-[#e0e2e4]' : ''}`} key={tab.id} onClick={() => onSelectTab(tab.id)}>{tab.label}</button>)}
    </nav>}
  </header>
}
