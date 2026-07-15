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
  { label: 'Rezultāti', items: [
    { label: 'Rezultāti', href: '/rezultati' },
    { label: 'Tiesnešu sadaļa', href: '/tiesnesi' },
  ]},
  { label: 'BUJ', href: '/buj' },
  { label: 'Kontakti', href: '/kontakti' },
];

export const sports = ['Pludmales volejbols', 'Strītbols', 'Florbols', 'Tautas bumba', 'Futbols', 'Stafete', 'Lāzertags', 'Virves vilkšana'];

export const winners = [
  { year: 2025, team: 'Komanda tiks precizēta', note: 'Ievieto apstiprinātos vēsturiskos datus.' },
  { year: 2024, team: 'Komanda tiks precizēta', note: 'Ievieto apstiprinātos vēsturiskos datus.' },
  { year: 2023, team: 'Komanda tiks precizēta', note: 'Ievieto apstiprinātos vēsturiskos datus.' },
  { year: 2022, team: 'Komanda tiks precizēta', note: 'Ievieto apstiprinātos vēsturiskos datus.' },
];

export const timetable = [
  { time: '08:30–10:00', title: 'Ierašanās un reģistrācija', place: 'Informācijas punkts' },
  { time: '10:00–10:20', title: 'Atklāšana un kapteiņu sapulce', place: 'Galvenā skatuve' },
  { time: '10:30–13:30', title: 'Sporta disciplīnu 1. bloks', place: 'Sporta zonas' },
  { time: '13:30–14:30', title: 'Pusdienu pārtraukums', place: 'Ēdināšanas zona' },
  { time: '14:30–18:00', title: 'Sporta disciplīnu 2. bloks', place: 'Sporta zonas' },
  { time: '18:30–19:15', title: 'Fināli', place: 'Galvenais laukums' },
  { time: '20:00', title: 'Apbalvošana', place: 'Galvenā skatuve' },
];

// Legacy InfoPage atbalsts, lai Vite var droši nokompilēt arī vecās lapas.
export const pages = {
  'par-mums': { eyebrow: 'Par mums', title: 'Par Ronīšiem', intro: 'RTU rudens sporta spēles.', cards: [['Tradīcija', 'Sports, komandas gars un kopīga pieredze pie jūras.']] },
};
