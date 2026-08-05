type SectionHeaderProps = {
  title: string
  className?: string
}

export function SectionHeader({ title, className = '' }: SectionHeaderProps) {
  return <div className={`mb-10 flex items-baseline gap-5 border-b border-[rgb(210_215_218_/_9%)] pb-5 ${className}`}>
    <h2 className="m-0 font-condensed text-3xl font-medium tracking-[.12em] text-[#e0e2e4] uppercase">{title}</h2>
  </div>
}
