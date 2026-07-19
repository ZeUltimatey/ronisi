const demoImages = Array.from({ length: 24 }, (_, index) => `/images/${index + 1}.jpg`);

export const galleryAlbums = [
  { id: '2025-anna', year: 2025, photographer: 'Anna Ozola', cover: demoImages[0], images: demoImages.slice(0, 6) },
  { id: '2024-elgars', year: 2024, photographer: 'Elgars Vaļģis', cover: demoImages[6], images: demoImages.slice(6, 12) },
  { id: '2023-samanta', year: 2023, photographer: 'Samanta Nagle', cover: demoImages[12], images: demoImages.slice(12, 18) },
  { id: '2022-krista', year: 2022, photographer: 'Krista Milaseviča', cover: demoImages[18], images: demoImages.slice(18, 24) },
];

export const highlightedGallery = [
  { id: 'highlight-1', src: '/images/8.jpg', title: 'Komandu starts', meta: 'Ronīši 2025 · Anna Ozola' },
  { id: 'highlight-2', src: '/images/14.jpg', title: 'Fināla emocijas', meta: 'Ronīši 2024 · Elgars Vaļģis' },
  { id: 'highlight-3', src: '/images/22.jpg', title: 'Vakars pie jūras', meta: 'Ronīši 2023 · Samanta Nagle' },
];

export const supporters = [
  { id: 'rtu', name: 'Rīgas Tehniskā universitāte', logo: '/images/plakats.png', image: '/images/3.jpg', description: 'Galvenais pasākuma partneris un studentu sporta tradīciju atbalstītājs.' },
  { id: 'red-bull', name: 'Red Bull', logo: '/images/redbull.png', image: '/images/9.jpg', description: 'Demo atbalstītāja ieraksts enerģijai, aktivitātēm un pasākuma pieredzei.' },
  { id: 'ronisi', name: 'RTU centrs “Ronīši”', logo: '/images/karogs.jpg', image: '/images/18.jpg', description: 'Norises vieta pie jūras, kur sports satiek studentu kopienu.' },
  { id: 'partneris', name: 'Demo partneris', logo: '/images/map.jpg', image: '/images/24.jpg', description: 'Vieta nākamā sponsora stāstam, piedāvājumam vai sadarbības aprakstam.' },
];

export const newsPosts = [
  {
    slug: 'ronisi-2026-playliste',
    title: 'Ronīši 2026 playliste ir klāt',
    excerpt: 'Iesildīšanās sākas vēl pirms pirmās svilpes. Klausies dalībnieku kopīgi veidoto playlisti.',
    date: '2026-07-18',
    image: '/images/5.jpg',
    content: [
      'Sporta spēļu atmosfēra sākas ceļā uz Ronīšiem. Tāpēc esam sagatavojuši kopīgu playlisti ar dziesmām, kuras izvēlas arī dalībnieki.',
      'Noklausies treniņa laikā!',
    ],
  },
  {
    slug: 'pieteiksanas-sakums',
    title: 'Drīzumā sāksies komandu pieteikšanās',
    excerpt: 'Vienuviet apkopoti svarīgākie termiņi, komandas sastāvs un sagatavošanās soļi.',
    date: '2026-07-12',
    image: '/images/11.jpg',
    content: [
      'Komandu kapteiņiem pirms pieteikuma iesniegšanas būs jāpārbauda dalībnieku sastāvs un kontaktinformācija.',
      'Detalizētie noteikumi tiks publicēti atsevišķi.',
    ],
  },
  {
    slug: 'galerija-atjaunota',
    title: 'Atjaunota Ronīšu foto galerija',
    excerpt: 'Bildes tagad iespējams atlasīt pēc gada un fotogrāfa, nevis bezgalīgi skrollēt kā 2009. gadā.',
    date: '2026-07-04',
    image: '/images/20.jpg',
    content: [
      'Galerijas sākumā redzama izcelto attēlu izlase, bet zem tās pieejami albumi un filtri.',
      'Apskati bildes!',
    ],
  },
];
