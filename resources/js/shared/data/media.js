const demoImages = Array.from({ length: 24 }, (_, index) => `/images/${index + 1}.jpg`);

export const galleryAlbums = [
  { id: '2025-anna', year: 2025, photographer: 'Anna Ozola', cover: demoImages[0], images: demoImages.slice(0, 6) },
  { id: '2024-elgars', year: 2024, photographer: 'Elgars Vaļģis', cover: demoImages[6], images: demoImages.slice(6, 12) },
  { id: '2023-samanta', year: 2023, photographer: 'Samanta Nagle', cover: demoImages[12], images: demoImages.slice(12, 18) },
  { id: '2022-krista', year: 2022, photographer: 'Krista Milaseviča', cover: demoImages[18], images: demoImages.slice(18, 24) },
];

export const highlightedGallery = [
  { id: 'highlight-1', src: '/images/8.jpg', title: { lv: 'Komandu starts', en: 'Team start' }, meta: 'Ronīši 2025 · Anna Ozola' },
  { id: 'highlight-2', src: '/images/14.jpg', title: { lv: 'Fināla emocijas', en: 'Final-round emotions' }, meta: 'Ronīši 2024 · Elgars Vaļģis' },
  { id: 'highlight-3', src: '/images/22.jpg', title: { lv: 'Vakars pie jūras', en: 'An evening by the sea' }, meta: 'Ronīši 2023 · Samanta Nagle' },
];

export const supporters = [];

export const newsPosts = [
  {
    slug: 'ronisi-2026-playliste',
    title: { lv: 'Ronīši 2026 dziesmu izlase ir klāt', en: 'The Ronīši 2026 playlist is here' },
    excerpt: {
      lv: 'Iesildīšanās sākas vēl pirms pirmās svilpes. Klausies Ronīšu 2026 dziesmu izlasi Spotify.',
      en: 'The warm-up begins before the first whistle. Listen to the Ronīši 2026 playlist on Spotify.',
    },
    date: '2026-07-18',
    image: '/images/5.jpg',
    link: 'https://ej.uz/ronisu-ritms',
    linkLabel: { lv: 'Klausīties Spotify', en: 'Listen on Spotify' },
    content: [
      {
        lv: 'Sporta spēļu atmosfēra sākas jau ceļā uz Ronīšiem. Tāpēc esam sagatavojuši dziesmu izlasi, kas palīdzēs noskaņoties treniņiem, sacensībām un pasākumam.',
        en: 'The sports-game atmosphere begins on the way to Ronīši. We have prepared a playlist to help you get ready for training, competition and the event itself.',
      },
      {
        lv: 'Pievieno izlasi savai Spotify bibliotēkai un sāc iesildīšanos jau tagad.',
        en: 'Add the playlist to your Spotify library and start warming up now.',
      },
    ],
  },
  {
    slug: 'galerija-atjaunota',
    title: { lv: 'Atjaunota Ronīšu foto galerija', en: 'The Ronīši photo gallery has been updated' },
    excerpt: {
      lv: 'Apskati iepriekšējo gadu Ronīšu spilgtākos mirkļus foto galerijā.',
      en: 'Explore memorable moments from previous Ronīši events in the photo gallery.',
    },
    date: '2026-07-04',
    image: '/images/20.jpg',
    content: [
      {
        lv: 'Galerijas sākumā redzama izcelto attēlu izlase, bet zem tās pieejami albumi un filtri.',
        en: 'The gallery begins with a selection of highlighted images, followed by albums and filters.',
      },
      {
        lv: 'Apskati bildes un atceries Ronīšu spilgtākos mirkļus.',
        en: 'Browse the photos and revisit the brightest Ronīši moments.',
      },
    ],
  },
];
