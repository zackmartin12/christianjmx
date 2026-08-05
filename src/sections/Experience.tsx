import { SectionHeader } from '../components/SectionHeader'
import { education, experience, type Credit } from '../content'

function CreditList({ items }: { items: Credit[] }) {
  return <ul className="m-0 list-none border-l border-[rgb(210_215_218_/_9%)] p-0">
    {items.map((item) => <li className="relative pb-9 pl-8 before:absolute before:top-[.4rem] before:-left-[.1875rem] before:size-1.5 before:bg-[rgb(106_111_115_/_30%)] before:transition-colors before:duration-150 hover:before:bg-[rgb(224_226_228_/_60%)]" key={`${item.title}-${item.year}`}>
      <div>
        <p className="m-0 text-base">{item.title} <span className="ml-4 font-condensed text-xs tracking-[.12em] text-[#6a6f73] uppercase">{item.year}</span></p>
        <small className="mt-[.2rem] block text-xs text-[#6a6f73]">{item.role} · {item.company}</small>
        <article className="mt-3 max-w-[42rem] text-sm leading-[1.65] text-[rgb(224_226_228_/_60%)]">{item.description}</article>
      </div>
    </li>)}
  </ul>
}

export function Experience() {
  return <section className="px-16 py-12 min-[701px]:max-[1000px]:px-12 max-[700px]:px-8">
    <SectionHeader title="Education" />
    <CreditList items={education} />
    <SectionHeader className="mt-14" title="Experience" />
    <CreditList items={experience} />
  </section>
}
