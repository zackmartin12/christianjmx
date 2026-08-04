export type GalleryItem = {
  id: number
  src: string
  title: string
  caption: string
}

export type VideoItem = GalleryItem & { youtubeId: string }

export type Credit = {
  year: string
  title: string
  role: string
  company: string
  description: string
}

export const photos: GalleryItem[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=900&fit=crop&auto=format', title: 'Golden Hour, Joshua Tree', caption: '35mm · 2024' },
  { id: 2, src: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1200&h=1500&fit=crop&auto=format', title: 'Urban Geometry #4', caption: 'Digital · 2023' },
  { id: 3, src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=900&fit=crop&auto=format', title: 'Pacific Coast, Dusk', caption: 'Medium Format · 2024' },
  { id: 4, src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=1350&fit=crop&auto=format', title: 'Sequoia Silence', caption: '35mm · 2023' },
  { id: 5, src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&h=900&fit=crop&auto=format', title: 'Redwood Light Study', caption: 'Digital · 2024' },
  { id: 6, src: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=1200&h=1500&fit=crop&auto=format', title: 'Reservoir, Midday', caption: '35mm · 2023' },
  { id: 7, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=900&fit=crop&auto=format', title: 'Abandoned Structure No. 7', caption: 'Digital · 2024' },
  { id: 8, src: 'https://images.unsplash.com/photo-1439853949212-36089820f23d?w=1200&h=1350&fit=crop&auto=format', title: 'Summit Haze', caption: 'Medium Format · 2023' },
  { id: 9, src: 'https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?w=1200&h=900&fit=crop&auto=format', title: 'Desert Bloom', caption: 'Digital · 2024' },
]

export const videos: VideoItem[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=500&fit=crop&auto=format', title: 'Quiet Season', caption: 'Short Documentary · 2024', youtubeId: 'dQw4w9WgXcQ' },
  { id: 2, src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=500&fit=crop&auto=format', title: 'Borderlands', caption: 'Narrative Short · 2023', youtubeId: 'dQw4w9WgXcQ' },
  { id: 3, src: 'https://images.unsplash.com/photo-1536240478700-b869ad10e2b0?w=800&h=500&fit=crop&auto=format', title: 'Neon & Concrete', caption: 'Music Video · 2024', youtubeId: 'dQw4w9WgXcQ' },
  { id: 4, src: 'https://images.unsplash.com/photo-1579201517409-c1a46a638cce?w=800&h=500&fit=crop&auto=format', title: 'The Tide Remembers', caption: 'Environmental Documentary · 2023', youtubeId: 'dQw4w9WgXcQ' },
  { id: 5, src: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=500&fit=crop&auto=format', title: 'Aperture', caption: 'Experimental · 2024', youtubeId: 'dQw4w9WgXcQ' },
  { id: 6, src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=500&fit=crop&auto=format', title: 'Interior Light', caption: 'Portrait Series · 2023', youtubeId: 'dQw4w9WgXcQ' },
]

export const education: Credit[] = [
  { year: '2026', title: 'BA Film Studies, Minor in Journalism', role: 'Graduate', company: 'University of North Carolina Wilmington', description: 'Graduated with a focus on documentary filmmaking, narrative production, and multimedia journalism. Led multiple student productions and received a competitive grant for international field research.' },
]

export const experience: Credit[] = [
  { year: '2024', title: 'Moonshiners: Master Distiller', role: 'Production Assistant', company: 'Discovery Channel', description: 'Supported the production team through filming logistics, equipment handling, and on-set coordination.' },
  { year: '2025', title: 'CineSpace Studios', role: 'Lighting & Grip Assistant Intern', company: 'Charlotte, NC', description: 'Assisted studio productions through lighting setup, grip operations, and equipment management across commercial and narrative projects.' },
  { year: '2024 – 2026', title: 'Survivor UNCW', role: 'Director of Filming & Editing', company: 'UNCW Student Production', description: 'Led a production crew across four seasons of this student reality competition series. Oversaw camera operation, directing, and full post-production of weekly episodes.' },
  { year: '2023 – 2026', title: 'Seahawk Central Sports', role: 'Sports Reporter & Photographer', company: 'UNCW', description: 'Produced on-camera reports and multimedia coverage from a professional broadcast studio. Photographed UNCW athletic events for editorial publication.' },
  { year: '2026', title: 'Lucha Libre Field Study', role: 'Documentary Researcher', company: 'Mexico City — Competitive Grant', description: 'Researched the history, culture, and artistry of lucha libre on a competitive grant. The experience continues to shape my documentary perspective and creative interests.' },
]
