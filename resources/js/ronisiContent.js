export const navGroups = [
  { label: 'Sākums', href: '/' },
  { label: 'Aktuālais', href: '/aktualais' },
  { label: 'Par mums', items: [
    { label: 'Par mums', href: '/par-mums' },
    { label: 'Uzvarētāji', href: '/uzvaretaji' },
    { label: 'Atbalstītāji', href: '/atbalstitaji' },
    { label: 'Organizatori', href: '/organizatori' },
    { label: 'Galerija', href: '/galerija' },
  ]},
  { label: 'Pieteikšanās', href: '/pieteiksanas' },
  { label: 'Pasākums', items: [
    { label: 'Laika plāns', href: '/laika-plans' },
    { label: 'Karte', href: '/karte' },
    { label: 'Sporta veidi', href: '/sporta-veidi' },
  ]},
  { label: 'Rezultāti', href: '/rezultati' },
  { label: 'BUJ', href: '/buj' },
  { label: 'Kontakti', href: '/kontakti' },
];

export const sports = ['Pludmales volejbols', 'Strītbols', 'Florbols', 'Tautas bumba', 'Futbols', 'Stafete', 'Lāzertags', 'Virves vilkšana'];

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
