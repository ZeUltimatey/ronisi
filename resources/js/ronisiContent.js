export const navGroups = [
  { label: { lv: 'Sākums', en: 'Home' }, href: '/' },
  { label: { lv: 'Aktuālais', en: 'News' }, href: '/aktualais' },
  { label: { lv: 'Par mums', en: 'About us' }, items: [
    { label: { lv: 'Par mums', en: 'About us' }, href: '/par-mums' },
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

export const sports = ['Pludmales volejbols', 'Strītbols', 'Florbols', 'Pludmales handbols', 'Futbols', 'Stafete', 'Rogainings', 'Virves vilkšana', 'Individuālās disciplīnas'];

export const winners = [
  { year: 2025, team: '-', note: '-.' },
  { year: 2024, team: '-', note: '-.' },
  { year: 2023, team: '-', note: '-.' },
  { year: 2022, team: '-', note: '-.' },
];

export const timetable = {
    '1. diena': [
        {
            time: '08:30–10:00',
            title: 'Ierašanās un reģistrācija',
            place: 'Informācijas punkts'
        },
        {
            time: '10:00–10:20',
            title: 'Atklāšana un kapteiņu sapulce',
            place: 'Galvenā skatuve'
        },
        {
            time: '10:30–13:30',
            title: 'Sporta disciplīnu 1. bloks',
            place: 'Sporta zonas'
        },
    ],

    '2. diena': [
        {
            time: '09:00–10:00',
            title: 'Komandu ierašanās',
            place: 'Informācijas punkts'
        },
        {
            time: '10:00–14:00',
            title: 'Fināla spēles',
            place: 'Galvenais laukums'
        },
        {
            time: '18:00',
            title: 'Noslēguma pasākums',
            place: 'Galvenā skatuve'
        },
    ],

    '3. diena': [
        {
            time: '10:00',
            title: 'Brīvais laiks un aktivitātes',
            place: 'Sporta zonas'
        }
    ]
};

// Legacy InfoPage atbalsts, lai Vite var droši nokompilēt arī vecās lapas.
export const pages = {
  'par-mums': { eyebrow: 'Par mums', title: 'Par Ronīšiem', intro: 'RTU rudens sporta spēles.', cards: [['Tradīcija', 'Sports, komandas gars un kopīga pieredze pie jūras.']] },
};
