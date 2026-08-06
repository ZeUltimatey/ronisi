export const navGroups = [
  { label: { lv: 'Sākums', en: 'Home' }, href: '/' },
  { label: { lv: 'Aktuālais', en: 'News' }, href: '/aktualais' },
  { label: { lv: 'Par mums', en: 'About us' }, items: [
    { label: { lv: 'Par mums', en: 'About us' }, href: '/par-mums' },
    { label: { lv: 'Uzvarētāji', en: 'Winners' }, href: '/uzvaretaji' },
    { label: { lv: 'Organizatori', en: 'Organisers' }, href: '/organizatori' },
    { label: { lv: 'Galerija', en: 'Gallery' }, href: '/galerija' },
  ]},
  { label: { lv: 'Pieteikumi', en: 'Applications' }, items: [
    { label: { lv: 'Dalībnieks', en: 'Participant' }, href: '/pieteiksanas/dalibnieks' },
    { label: { lv: 'Tiesnesis', en: 'Judge' }, href: '/pieteiksanas/tiesnesis' },
  ]},
  { label: { lv: 'Pasākums', en: 'Event' }, items: [
    { label: { lv: 'Laika plāns', en: 'Schedule' }, href: '/laika-plans' },
    { label: { lv: 'Karte', en: 'Map' }, href: '/karte' },
    { label: { lv: 'Nolikums', en: 'Regulations' }, href: '/sporta-veidi' },
  ]},
  { label: { lv: 'Rezultāti', en: 'Results' }, href: '/rezultati' },
  { label: { lv: 'BUJ', en: 'FAQ' }, href: '/buj' },
  { label: { lv: 'Kontakti', en: 'Contacts' }, href: '/kontakti' },
];

export const sports = [
  { title: { lv: 'Pludmales volejbols', en: 'Beach volleyball' }, text: { lv: '4 dalībnieki, vismaz 1 sieviete.', en: '4 participants, at least 1 woman.' } },
  { title: { lv: 'Strītbols', en: '3×3 basketball' }, text: { lv: '3 dalībnieki, vismaz 1 sieviete.', en: '3 participants, at least 1 woman.' } },
  { title: { lv: 'Florbols', en: 'Floorball' }, text: { lv: '3 dalībnieki, vismaz 1 sieviete.', en: '3 participants, at least 1 woman.' } },
  { title: { lv: 'Pludmales handbols', en: 'Beach handball' }, text: { lv: '4 dalībnieki, vismaz 1 sieviete.', en: '4 participants, at least 1 woman.' } },
  { title: { lv: 'Futbols', en: 'Football' }, text: { lv: '4 dalībnieki, vismaz 1 sieviete.', en: '4 participants, at least 1 woman.' } },
  { title: { lv: 'Stafete', en: 'Relay' }, text: { lv: '8 dalībnieki, vismaz 2 sievietes.', en: '8 participants, at least 2 women.' } },
  { title: { lv: 'Rogainings', en: 'Rogaining' }, text: { lv: '5 dalībnieki, vismaz 2 sievietes.', en: '5 participants, at least 2 women.' } },
  { title: { lv: 'Virves vilkšana', en: 'Tug of war' }, text: { lv: '5 dalībnieki.', en: '5 participants.' } },
  { title: { lv: 'Individuālās disciplīnas', en: 'Individual disciplines' }, text: { lv: 'Vismaz 5 dalībnieki.', en: 'At least 5 participants.' } },
];

export const winners = [
  {
    year: 2025,
    sections: [
      { title: { lv: 'Kopvērtējums', en: 'Overall' }, items: ['1. A kam viegli?', '2. Ložmetēji', '3. JDS'] },
      { title: { lv: 'Tautas bumba', en: 'Dodgeball' }, items: ['1. Ložmetēji', '2. Haļavas', '3. JDS'] },
      { title: { lv: 'Volejbols', en: 'Volleyball' }, items: ['1. Maiznieki', '2. JDS', '3. Studentu mix'] },
      { title: { lv: 'Virve', en: 'Tug of war' }, items: ['1. A kam viegli?', '2. LUņi', '3. Porcija olu'] },
      { title: { lv: 'Florbols', en: 'Floorball' }, items: ['1. Šī gada favorīt', '2. A kam viegli?', '3. LUņi'] },
      { title: { lv: 'Futbols', en: 'Football' }, items: ['1. Tefteļi', '2. JDS', '3. Taltech'] },
      { title: { lv: 'Strītbols', en: '3×3 basketball' }, items: ['1. Jet2Holiday', '2. Šis lauks ir obligāts', '3. Fiņķi'] },
      { title: { lv: 'Stafete', en: 'Relay' }, items: ['1. Šī gada favorīti', '2. A kam viegli?', '3. Porcija olu'] },
    ],
  },
  {
    year: 2024,
    sections: [
      { title: { lv: 'Kopvērtējums', en: 'Overall' }, items: ['1. Šī gada favorīti', '2. LU-PĪ', '3. JDS'] },
      { title: { lv: 'Volejbols', en: 'Volleyball' }, items: ['1. Maiznieks', '2. LU-PĪ', '3. Audzinātājs Reinis un 37. bērnudārza grupiņa'] },
      { title: { lv: 'Virve', en: 'Tug of war' }, items: ['1. Šī gada favorīti', '2. LU-PĪ', '3. Ložmetējs'] },
      { title: { lv: 'Florbols', en: 'Floorball' }, items: ['1. Lielie sarkanie', '2. pīrādziņ, nāc ārā', '3. Iemetiens'] },
      { title: { lv: 'Futbols', en: 'Football' }, items: ['1. Lielie dūži', '2. SINOPTIĶI', '3. Lieli sapņi, mazs…'] },
      { title: { lv: 'Strītbols', en: '3×3 basketball' }, items: ['1. JDS', '2. Lielie sarkanie', '3. LU-PĪ'] },
    ],
  },
  {
    year: 2023,
    sections: [
      { title: { lv: 'Kopvērtējums', en: 'Overall' }, items: ['1. JDS', '2. A kam viegli', '3. Līnijas'] },
      { title: { lv: 'Volejbols', en: 'Volleyball' }, items: ['1. JDS'] },
      { title: { lv: 'Virve', en: 'Tug of war' }, items: ['1. A kam viegli?'] },
      { title: { lv: 'Florbols', en: 'Floorball' }, items: ['1. JDS'] },
      { title: { lv: 'Futbols', en: 'Football' }, items: ['1. Bubši'] },
      { title: { lv: 'Strītbols', en: '3×3 basketball' }, items: ['1. Hārvarda'] },
      { title: { lv: 'Stafete', en: 'Relay' }, items: ['1. Studentu Pritons 4.0'] },
      { title: { lv: 'Frisbijs', en: 'Frisbee' }, items: ['1. Atpūtnieku ministrija'] },
    ],
  },
  { year: 2022,
    sections: [
      { title: { lv: 'Kopvērtējums', en: 'Overall' }, items: ['1. JDS', '2. A.D.I.D.A.S.', '3. Nekādi ritmi'] },
    ]
  },
  {
    year: 2021,
    sections: [
      { title: { lv: 'Kopvērtējums', en: 'Overall' }, items: ['1. Ūdens šķēlēji', '2. Audzinātājs Reinis un 37. Bērnudārzu palīggrupiņa', '3. Spirts un kustība'] },
    ],
  },
];

export const timetable = {
    '1. diena': [
        {
            time: '08:30–10:00',
            title: { lv: 'Ierašanās un reģistrācija', en: 'Arrival and registration' },
            place: { lv: 'Informācijas punkts', en: 'Information desk' }
        },
        {
            time: '10:00–10:20',
            title: { lv: 'Atklāšana un kapteiņu sapulce', en: 'Opening and captains’ meeting' },
            place: { lv: 'Galvenā skatuve', en: 'Main stage' }
        },
        {
            time: '10:30–13:30',
            title: { lv: 'Sporta disciplīnu 1. bloks', en: 'Sports block 1' },
            place: { lv: 'Sporta zonas', en: 'Sports areas' }
        },
    ],

    '2. diena': [
        {
            time: '09:00–10:00',
            title: { lv: 'Komandu ierašanās', en: 'Team arrival' },
            place: { lv: 'Informācijas punkts', en: 'Information desk' }
        },
        {
            time: '10:00–14:00',
            title: { lv: 'Fināla spēles', en: 'Final games' },
            place: { lv: 'Galvenais laukums', en: 'Main field' }
        },
        {
            time: '18:00',
            title: { lv: 'Noslēguma pasākums', en: 'Closing event' },
            place: { lv: 'Galvenā skatuve', en: 'Main stage' }
        },
    ],

    '3. diena': [
        {
            time: '10:00',
            title: { lv: 'Brīvais laiks un aktivitātes', en: 'Free time and activities' },
            place: { lv: 'Sporta zonas', en: 'Sports areas' }
        }
    ]
};

export const galleries = [
  {
    year: 2020,
    video: null,
    photographers: [
      {
        name: 'Elizabete Leigute',
        flickrAlbum: 'https://www.flickr.com/photos/rtusp/albums/72157716294254272',
        image: 'https://live.staticflickr.com/65535/50429391411_064ae10700_h.jpg',
        externalLink: null,
      },
      {
        name: 'Krista Milaseviča',
        flickrAlbum: 'https://www.flickr.com/photos/rtusp/albums/72157716291253223',
        image: 'https://live.staticflickr.com/65535/50430963166_a0d58d3e2f_h.jpg',
        externalLink: null,
      },
    ],
  },
  {
    year: 2019,
    video: 'https://www.facebook.com/watch/?v=1302665386743497',
    photographers: [
      {
        name: 'Emīls Brenčs',
        flickrAlbum: 'https://www.flickr.com/photos/rtusp/albums/72157711134792206',
        image: 'https://live.staticflickr.com/65535/48822010283_1d9a3e31ea_h.jpg',
        externalLink: null,
      },
      {
        name: 'Lāsma Līga Reisa',
        flickrAlbum: 'https://www.flickr.com/photos/rtusp/albums/72157711237899641',
        image: 'https://live.staticflickr.com/65535/48861558021_dd63fc6a55_h.jpg',
        externalLink: null,
      },
      {
        name: 'Valtenbergs Photography',
        flickrAlbum: 'https://www.flickr.com/photos/rtusp/albums/72157711638613427',
        image: 'https://live.staticflickr.com/65535/49013328602_f45aa0484b_h.jpg',
        externalLink: 'https://www.facebook.com/ValtenbergsPhoto/',
      },
    ],
  },
];

// Legacy InfoPage atbalsts, lai Vite var droši nokompilēt arī vecās lapas.
export const pages = {
  'par-mums': {
    eyebrow: { lv: 'Par mums', en: 'About us' },
    title: { lv: 'Par Ronīšiem', en: 'About Ronīši' },
    intro: { lv: 'RTU rudens sporta spēles.', en: 'RTU autumn sports games.' },
    cards: [
      {
        title: { lv: 'Tradīcija', en: 'Tradition' },
        text: { lv: 'Sports, komandas gars un kopīga pieredze pie jūras.', en: 'Sports, team spirit and a shared experience by the sea.' },
      },
    ],
  },
};
