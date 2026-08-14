export type GalleryItem = {
  id: number
  thumbnailSrc: string
  fullSrc: string
  title: string
  caption: string
}

export type PhotoCollection = {
  title: string
  items: GalleryItem[]
}

export type VideoItem = GalleryItem & { youtubeId: string }

type PhotoCategory = 'lucha-libre' | 'graduation'

export const photoAsset = (category: PhotoCategory, variant: 'thumbnails' | 'full', filename: string) => (
  `${import.meta.env.BASE_URL}images/photos/${category}/${variant}/${filename}`
)

const photo = (id: number, category: PhotoCategory, slug: string, title: string): GalleryItem => ({
  id,
  thumbnailSrc: photoAsset(category, 'thumbnails', `${slug}-thumb.jpg`),
  fullSrc: photoAsset(category, 'full', `${slug}.jpg`),
  title,
  caption: '',
})

export type Credit = {
  year: string
  title: string
  role: string
  company: string
  description: string
}

export const photoCollections: PhotoCollection[] = [
  {
    title: 'Lucha Libre',
    items: [
      photo(1, 'lucha-libre', 'lucha-masks-10', 'Lucha Masks No. 10'),
      photo(2, 'lucha-libre', 'lucha-masks-12', 'Lucha Masks No. 12'),
      photo(3, 'lucha-libre', 'mom-and-daughter', 'Mother and Daughter I'),
      photo(4, 'lucha-libre', 'mom-and-daughter-1', 'Mother and Daughter II'),
      photo(5, 'lucha-libre', 'penta-seller', 'Penta Seller I'),
      photo(6, 'lucha-libre', 'penta-seller-1', 'Penta Seller II'),
      photo(7, 'lucha-libre', 'penta-seller-2', 'Penta Seller III'),
      photo(8, 'lucha-libre', 'penta-seller-3', 'Penta Seller IV'),
    ],
  },
  {
    title: 'Graduation Photos',
    items: [
      photo(12, 'graduation', '240a1261', 'Graduation Portrait I'),
      photo(13, 'graduation', '240a1620', 'Graduation Portrait II'),
      photo(14, 'graduation', '240a1855', 'Graduation Portrait III'),
      photo(15, 'graduation', 'copy-of-img-9630', 'Graduation Portrait IV'),
      photo(16, 'graduation', 'img-4706', 'Graduation Portrait V'),
      photo(17, 'graduation', 'img-4928', 'Graduation Portrait VI'),
      photo(18, 'graduation', 'img-4948-2', 'Graduation Portrait VII'),
      photo(19, 'graduation', 'img-4982', 'Graduation Portrait VIII'),
      photo(20, 'graduation', 'img-5093', 'Graduation Portrait IX'),
      photo(21, 'graduation', 'img-6068-2', 'Graduation Portrait X'),
      photo(22, 'graduation', 'img-6071-2', 'Graduation Portrait XI'),
      photo(23, 'graduation', 'img-6114', 'Graduation Portrait XII'),
      photo(24, 'graduation', 'img-6266-2', 'Graduation Portrait XIII'),
      photo(25, 'graduation', 'img-9294-3', 'Graduation Portrait XIV'),
      photo(26, 'graduation', 'img-9305-2', 'Graduation Portrait XV'),
      photo(27, 'graduation', 'img-9466-2', 'Graduation Portrait XVI'),
      photo(28, 'graduation', 'sarah-c-11', 'Graduation Portrait XVII'),
      photo(29, 'graduation', 'sarah-c-36', 'Graduation Portrait XVIII'),
      photo(30, 'graduation', 'uncommon-029', 'Graduation Portrait XIX'),
      photo(31, 'graduation', 'uncommon-041', 'Graduation Portrait XX'),
      photo(32, 'graduation', 'uncommon-042', 'Graduation Portrait XXI'),
      photo(33, 'graduation', 'uncommon-056', 'Graduation Portrait XXII'),
      photo(34, 'graduation', 'uncommon-152', 'Graduation Portrait XXIII'),
      photo(35, 'graduation', 'lucha-masks-192', 'Graduation Portrait XXIV'),
      photo(36, 'graduation', 'lucha-masks-209', 'Graduation Portrait XXV'),
      photo(37, 'graduation', 'lucha-masks-297', 'Graduation Portrait XXVI'),
    ],
  },
]

export const photos = photoCollections.flatMap((collection) => collection.items)

export const videos: VideoItem[] = [
  { id: 1, thumbnailSrc: 'https://i.ytimg.com/vi/wnNFT0Tn5GA/hqdefault.jpg', fullSrc: 'https://i.ytimg.com/vi/wnNFT0Tn5GA/hqdefault.jpg', title: 'SURVIVOR UNCW ALL STARS: OFFICIAL TRAILER', caption: 'Survivor UNCW 2026', youtubeId: 'wnNFT0Tn5GA' },
  { id: 2, thumbnailSrc: 'https://i.ytimg.com/vi/525qkT2wGKI/hqdefault.jpg', fullSrc: 'https://i.ytimg.com/vi/525qkT2wGKI/hqdefault.jpg', title: 'SEASON 4 OFFICIAL TRAILER', caption: 'Survivor UNCW 2026', youtubeId: '525qkT2wGKI' },
  { id: 3, thumbnailSrc: 'https://i.ytimg.com/vi/sKdZ8zVxfLg/hqdefault.jpg', fullSrc: 'https://i.ytimg.com/vi/sKdZ8zVxfLg/hqdefault.jpg', title: 'SEASON 3 OFFICIAL TRAILER', caption: 'Survivor UNCW 2025', youtubeId: 'sKdZ8zVxfLg' },
  { id: 4, thumbnailSrc: 'https://i.ytimg.com/vi/schZWtwju8I/hqdefault.jpg', fullSrc: 'https://i.ytimg.com/vi/schZWtwju8I/hqdefault.jpg', title: 'SEASON 2 FINALE OFFICIAL TRAILER', caption: 'Survivor UNCW 2025', youtubeId: 'schZWtwju8I' },
  { id: 5, thumbnailSrc: 'https://i.ytimg.com/vi/vSp8IlTXUps/hqdefault.jpg', fullSrc: 'https://i.ytimg.com/vi/vSp8IlTXUps/hqdefault.jpg', title: 'SEASON 2 OFFICIAL TRAILER', caption: 'Survivor UNCW 2025', youtubeId: 'vSp8IlTXUps' },
]

export const education: Credit[] = [
  { year: '2026', title: 'BA Film Studies, Minor in Journalism', role: 'Graduate', company: 'University of North Carolina Wilmington', description: 'Graduated with a focus on documentary filmmaking, narrative production, and multimedia journalism. Led multiple student productions and received a competitive grant for international field research.' },
]

export const experience: Credit[] = [
  { year: '2024', title: 'Moonshiners: Master Distiller', role: 'Production Assistant', company: 'Discovery Channel', description: 'Supported the production team through filming logistics, equipment handling, and on-set coordination.' },
  { year: '2025', title: 'CineSpace Studios', role: 'Lighting & Grip Assistant Intern', company: 'Charlotte, NC', description: 'Assisted studio productions through lighting setup, grip operations, and equipment management across commercial and narrative projects.' },
  { year: '2024 – 2026', title: 'Survivor UNCW', role: 'Director of Filming & Editing', company: 'UNCW Student Production', description: 'Led a production crew across four seasons of this student reality competition series. Oversaw camera operation, directing, and full post-production of weekly episodes.' },
  { year: '2022 – 2023', title: 'Seahawk Central Sports', role: 'Sports Reporter & Photographer', company: 'UNCW', description: 'Produced on-camera reports and multimedia coverage from a professional broadcast studio. Photographed UNCW athletic events for editorial publication.' },
  { year: '2026', title: 'Lucha Libre Field Study', role: 'Documentary Researcher', company: 'Mexico City — Competitive Grant', description: 'Researched the history, culture, and artistry of lucha libre on a competitive grant. The experience continues to shape my documentary perspective and creative interests.' },
]
