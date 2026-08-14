import portrait from '../assets/christian-jimenez-maldonado.png'
import { Icon } from '../components/Icon'

export function About() {
  return <section className="grid min-h-[calc(100vh-57px)] grid-cols-2 max-[700px]:block">
    <div className="aspect-[3/4] overflow-hidden bg-[#1c1f21]"><img alt="Christian Jimenez-Maldonado, filmmaker and photographer" className="size-full object-cover object-center" src={portrait} /></div>
    <div className="flex flex-col max-[700px]:justify-between px-14 py-16 min-[701px]:max-[1000px]:p-12 max-[700px]:px-8 max-[700px]:py-12">
      <div>
        <p className="mb-4 font-condensed text-xs tracking-[.18em] text-[#6a6f73] uppercase">Filmmaker · Photographer · Content Creator</p>
        <h1 className="m-0 font-condensed text-[clamp(3.5rem,5vw,4.5rem)] font-light leading-[.95] tracking-[.04em] text-[#e0e2e4]">Christian<br />Jimenez-Maldonado</h1>
        <div className="mt-8 max-w-[34rem] text-sm leading-[1.7] text-[rgb(224_226_228_/_65%)]">
          <p className="mb-4">I am a filmmaker, photographer, and content creator specializing in visual storytelling across documentary, reality television, sports media, and digital content. I hold a Bachelor of Arts in Film Studies with a minor in Journalism from the University of North Carolina Wilmington.</p>
          <p className="mb-4">At UNCW, I served as Director of Filming and Editing for Survivor UNCW — leading a production crew through four full seasons of filming, directing, and post-production. My professional credits include a Production Assistant position on <em>Moonshiners: Master Distiller</em> for Discovery Channel and a Lighting & Grip internship at CineSpace Studios.</p>
          <p className="mb-4">A competitive grant brought me to Mexico City to research the history, culture, and artistry of lucha libre — an experience that continues to inform my documentary perspective. Originally from Asheville, NC, I am currently based in Wilmington and available to travel for production opportunities.</p>
        </div>
      </div>
      <div className="mt-10 flex scroll-mt-16 flex-col gap-3 border-t border-[rgb(210_215_218_/_9%)] pt-8 text-sm text-[rgb(224_226_228_/_80%)]" id="contact">
        <a className="flex w-fit items-center gap-3 hover:text-[#e0e2e4]" href="mailto:videographychristian@gmail.com"><Icon className="text-white" name="mail" />videographychristian@gmail.com</a>
        <span className="flex w-fit items-center gap-3"><Icon className="text-white" name="call" />828-606-2372</span>
        <span className="flex w-fit items-center gap-3"><Icon className="text-white" name="location_on" />Asheville & Wilmington, NC</span>
        <a className="mt-2 flex w-fit items-center gap-2 border border-white/40 px-4 py-2 font-condensed text-xs tracking-[.14em] text-white uppercase transition-colors hover:bg-white hover:text-[#111314]" download href={`${import.meta.env.BASE_URL}christian-jimenez-maldonado-resume.pdf`}><Icon className="text-base" name="download" />Resume</a>
        <div className="mt-2 flex flex-col items-start gap-3">
          <a className="text-xs text-[#6a6f73] hover:text-[#e0e2e4]" href="https://www.instagram.com/Christianj.mx" rel="noreferrer" target="_blank">Instagram · @Christianj.mx</a>
          <a className="text-xs text-[#6a6f73] hover:text-[#e0e2e4]" href="https://www.linkedin.com/in/christian-jimenez-maldonado-b532b5412" rel="noreferrer" target="_blank">LinkedIn</a>
          <a className="text-xs text-[#6a6f73] hover:text-[#e0e2e4]" href="https://www.youtube.com/@SurvivorUNCW" rel="noreferrer" target="_blank">YouTube · SurvivorUNCW</a>
        </div>
      </div>
    </div>
  </section>
}
