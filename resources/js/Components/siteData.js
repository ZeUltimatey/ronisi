import { imagePool } from './siteImages';

export { imagePool };

export const homeCopy = {
  eyebrow: { lv: 'RTU RUDENS SPORTA SPĒLES', en: 'RTU AUTUMN SPORTS GAMES' },
  title: { lv: 'RONĪŠI 2026', en: 'RONĪŠI 2026' },
  intro: {
    lv: 'Sporta sacensības, komandas gars, atpūta pie jūras un studentu kopiena vienā pasākumā.',
    en: 'Sports competitions, team spirit, time by the sea and the student community in one event.',
  },
  eventDate: { lv: '2026. gada 19.–20. septembris', en: '19–20 September 2026' },
  apply: { lv: 'Pieteikties', en: 'Apply' },
  prepare: { lv: 'Kā sagatavoties?', en: 'How to prepare?' },
  posterAlt: { lv: 'Ronīši 2026 plakāts', en: 'Ronīši 2026 poster' },
  highlights: [
    { number: '01', title: { lv: 'Piesakies', en: 'Apply' }, href: '/pieteiksanas/dalibnieks' },
    { number: '02', title: { lv: 'Nolikums', en: 'Regulations' }, href: '/sporta-veidi' },
    { number: '03', title: { lv: 'Galerija', en: 'Gallery' }, href: '/galerija' },
  ],
  cards: [
    {
      title: { lv: 'Pieteikšanās', en: 'Applications' },
      text: {
        lv: 'Dalībnieku pieteikšanās sākas 4. septembrī plkst. 12.00. Tiesnešu anketa ir pieejama jau tagad.',
        en: 'Participant applications open on 4 September at 12:00. The judge application is already available.',
      },
      href: '/pieteiksanas/dalibnieks',
    },
    {
      title: { lv: 'Nolikums', en: 'Regulations' },
      text: {
        lv: 'Iepazīsties ar dalības nosacījumiem, sporta veidiem, vērtēšanu un praktisko informāciju.',
        en: 'Read the participation conditions, sports disciplines, scoring and practical information.',
      },
      href: '/sporta-veidi',
    },
    {
      title: { lv: 'BUJ', en: 'FAQ' },
      text: {
        lv: 'Atbildes uz būtiskākajiem jautājumiem, kas saskaņotas ar 2026. gada nolikumu.',
        en: 'Answers to the key questions, aligned with the 2026 regulations.',
      },
      href: '/buj',
    },
  ],
};

export const pages = {
  preparation: {
    title: { lv: 'KĀ SAGATAVOTIES SPORTA SPĒLĒM?', en: 'HOW TO PREPARE FOR THE SPORTS GAMES' },
    subtitle: { lv: 'Svarīgākais pirms došanās uz Ronīšiem', en: 'The essentials before travelling to Ronīši' },
    blocks: [
      {
        title: { lv: 'Dokumenti', en: 'Documents' },
        text: {
          lv: 'Visiem apmeklētājiem jāņem līdzi personu apliecinošs dokuments. Studentiem nepieciešama arī derīga studenta apliecība vai izziņa no augstskolas.',
          en: 'All visitors must bring an identity document. Students must also bring a valid student ID or a certificate issued by their higher education institution.',
        },
      },
      {
        title: { lv: 'Apģērbs un laikapstākļi', en: 'Clothing and weather' },
        text: {
          lv: 'Paņem sportam, lietum un vēsākam vakaram piemērotu apģērbu, kā arī maiņas apavus un personīgos higiēnas piederumus.',
          en: 'Bring clothing suitable for sport, rain and a cooler evening, as well as spare footwear and personal hygiene items.',
        },
      },
      {
        title: { lv: 'Komandas karogs', en: 'Team flag' },
        text: {
          lv: 'Komanda var iegūt 3 papildu punktus kopvērtējumā, pirmās sporta spēļu dienas laikā uzrādot izveidotu komandas karogu.',
          en: 'A team can earn 3 additional overall points by presenting a team flag during the first day of the sports games.',
        },
      },
      {
        title: { lv: 'Veselība un drošība', en: 'Health and safety' },
        text: {
          lv: 'Katrs dalībnieks atbild par savu veselības stāvokli un personiskajām mantām. Paņem nepieciešamos medikamentus un ievēro tiesnešu un organizatoru norādījumus.',
          en: 'Each participant is responsible for their health and personal belongings. Bring any necessary medication and follow the instructions of judges and organisers.',
        },
      },
      {
        title: { lv: 'Ēdināšana', en: 'Meals' },
        text: {
          lv: 'Dalības maksā ir iekļautas brokastis 20. septembrī. Sestdienas un svētdienas pusdienām var pieteikties atsevišķi līdz 9. septembra plkst. 23.59.',
          en: 'The participation fee includes breakfast on 20 September. Saturday and Sunday lunches can be ordered separately until 9 September at 23:59.',
        },
      },
      {
        title: { lv: 'Komandas informācija', en: 'Team information' },
        text: {
          lv: 'Komandu kapteiņiem jāseko e-pastam: tur tiks nosūtīts apstiprinājums, rēķins, informācija par pusdienām, mājiņu rezervēšanu un sacensību grafiku.',
          en: 'Team captains should monitor their email for confirmation, the invoice, lunch details, cottage booking information and the competition schedule.',
        },
      },
    ],
  },
  about: {
    title: { lv: 'PAR MUMS', en: 'ABOUT US' },
    subtitle: { lv: 'Kas ir RTU rudens sporta spēles “Ronīši”?', en: 'What are the RTU Autumn Sports Games “Ronīši”?' },
    blocks: [
      {
        title: { lv: 'Mērķis', en: 'Purpose' },
        text: {
          lv: 'Pasākuma mērķis ir popularizēt sportu RTU un citu augstskolu studentu vidū, kā arī iepazīstināt ar RTU Konferenču un sporta centra “Ronīši” iespējām.',
          en: 'The event promotes sport among RTU students and students of other higher education institutions while introducing the opportunities offered by the RTU Conference and Sports Centre “Ronīši”.',
        },
      },
      {
        title: { lv: 'Norises vieta', en: 'Venue' },
        text: {
          lv: 'Sporta spēles notiek RTU Konferenču un sporta centrā “Ronīši” Klapkalnciemā, Engures pagastā, Tukuma novadā.',
          en: 'The sports games take place at the RTU Conference and Sports Centre “Ronīši” in Klapkalnciems, Engure Parish, Tukums Municipality.',
        },
      },
      {
        title: { lv: 'Dalībnieki', en: 'Participants' },
        text: {
          lv: 'Pasākumā piedalās līdz 32 komandām ar 8–12 dalībniekiem komandā. Komandas veido RTU un citu augstskolu studenti, kā arī noteiktos gadījumos RTU absolventi.',
          en: 'Up to 32 teams take part, with 8–12 participants per team. Teams include RTU students, students from other higher education institutions and, in specified cases, RTU alumni.',
        },
      },
      {
        title: { lv: 'Divas dienas pie jūras', en: 'Two days by the sea' },
        text: {
          lv: 'Sacensības notiek 2026. gada 19. un 20. septembrī, apvienojot komandu sportu, individuālās disciplīnas un kopīgu studentu pieredzi.',
          en: 'The event takes place on 19 and 20 September 2026, combining team sports, individual disciplines and a shared student experience.',
        },
      },
    ],
  },
  organizers: {
    title: { lv: 'ORGANIZATORI', en: 'ORGANISERS' },
    subtitle: { lv: 'Pasākuma organizatoru komanda', en: 'The event organising team' },
    blocks: [
      {
        title: { lv: 'Izstrādes procesā', en: 'In development' },
        text: { lv: 'Informācija par organizatoru komandu tiks publicēta vēlāk.', en: 'Information about the organising team will be published later.' },
      },
      {
        title: { lv: 'Organizācijas', en: 'Organisations' },
        text: {
          lv: 'Pasākumu organizē RTU Studentu parlaments un biedrība “Rīgas Tehniskās universitātes Studentu parlaments”.',
          en: 'The event is organised by the RTU Student Parliament and the association “Riga Technical University Student Parliament”.',
        },
      },
    ],
  },
  lunch: {
    title: { lv: 'PUSDIENAS', en: 'LUNCHES' },
    subtitle: { lv: 'Papildu ēdināšanas pieteikšana', en: 'Optional meal ordering' },
    blocks: [
      {
        title: { lv: 'Pieteikšanās', en: 'Ordering' },
        text: {
          lv: 'Komanda var pieteikt sestdienas un/vai svētdienas pusdienas līdz 09.09.2026. plkst. 23.59, izmantojot komandas kapteinim e-pastā nosūtīto anketu.',
          en: 'A team may order Saturday and/or Sunday lunches until 9 September 2026 at 23:59 using the form emailed to the team captain.',
        },
      },
      {
        title: { lv: 'Apmaksa un taloni', en: 'Payment and vouchers' },
        text: {
          lv: 'Maksa par pusdienām tiks iekļauta dalības maksas rēķinā. Apmaksātā skaita pusdienu talonus komandas kapteinis saņems reģistrācijas laikā 19. septembrī.',
          en: 'Lunch charges will be included in the participation-fee invoice. The team captain will receive the paid lunch vouchers during registration on 19 September.',
        },
      },
    ],
  },
  lodging: {
    title: { lv: 'NAKTSMĪTNES', en: 'ACCOMMODATION' },
    subtitle: { lv: 'Mājiņu rezervēšana pasākuma dalībniekiem', en: 'Cottage booking for event participants' },
    blocks: [
      {
        title: { lv: 'Pieejamība', en: 'Availability' },
        text: {
          lv: 'Mājiņu noma sporta spēļu komandām būs pieejama RTU Konferenču un sporta centrā “Ronīši” no 19.09.2026. līdz 20.09.2026.',
          en: 'Cottage accommodation for sports-game teams will be available at the RTU Conference and Sports Centre “Ronīši” from 19 to 20 September 2026.',
        },
      },
      {
        title: { lv: 'Rezervēšanas kārtība', en: 'Booking procedure' },
        text: {
          lv: 'Pēc dalības maksas apmaksas komandas kapteinim e-pastā tiks nosūtīta informācija par mājiņu rezervācijas tiešsaistes zvanu. Izvēles secību nosaka izloze komandu sapulcē.',
          en: 'After the participation fee has been paid, the team captain will receive information about the online cottage-booking call. The booking order is determined by a draw at the team meeting.',
        },
      },
      {
        title: { lv: 'Komandas vajadzībām', en: 'For team needs' },
        text: {
          lv: 'Komandai var piešķirt tikai tik daudz mājiņu, cik nepieciešams visu tās dalībnieku izmitināšanai.',
          en: 'A team may be allocated only the number of cottages required to accommodate all its participants.',
        },
      },
    ],
  },
};

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

export const faq = [
  {
    question: { lv: 'Kad un kur notiks Ronīši 2026?', en: 'When and where will Ronīši 2026 take place?' },
    answer: {
      lv: 'Pasākums notiks RTU Konferenču un sporta centrā “Ronīši” no 19. septembra plkst. 09.30 līdz 20. septembra plkst. 19.00. Reģistrēšanās 19. septembrī notiks no plkst. 8.00 līdz 9.15.',
      en: 'The event will take place at the RTU Conference and Sports Centre “Ronīši” from 19 September at 09:30 until 20 September at 19:00. Registration on 19 September will be open from 08:00 to 09:15.',
    },
  },
  {
    question: { lv: 'Kādas ir komandas sastāva prasības?', en: 'What are the team composition requirements?' },
    answer: {
      lv: 'Komandā jābūt 8–12 cilvēkiem, tostarp vismaz 3 sievietēm un vismaz 3 vīriešiem. Ne vairāk kā 3 dalībnieki drīkst būt citu augstskolu studenti un/vai RTU absolventi, kuri RTU absolvējuši pēdējo 3 gadu laikā.',
      en: 'A team must have 8–12 people, including at least 3 women and at least 3 men. No more than 3 participants may be students of other higher education institutions and/or RTU alumni who graduated within the last 3 years.',
    },
  },
  {
    question: { lv: 'Kad var pieteikt komandu?', en: 'When can a team apply?' },
    answer: {
      lv: 'Pieteikumi tiek pieņemti no 04.09.2026. plkst. 12.00 līdz 09.09.2026. plkst. 17.00. Anketu var slēgt agrāk, ja sasniegts maksimālais 32 komandu skaits.',
      en: 'Applications are accepted from 4 September 2026 at 12:00 until 9 September 2026 at 17:00. The form may close earlier if the maximum of 32 teams is reached.',
    },
  },
  {
    question: { lv: 'Kas notiek, ja pieteikušās vairāk nekā 32 komandas?', en: 'What happens if more than 32 teams apply?' },
    answer: {
      lv: 'Komandas, kas nav starp pirmajām 32, tiek ievietotas gaidīšanas rindā pieteikšanās secībā. Ja apstiprināta komanda atsakās, tiek uzaicināta pirmā gaidīšanas rindā esošā komanda.',
      en: 'Teams outside the first 32 are placed on a waiting list in application order. If a confirmed team withdraws, the first team on the waiting list is invited.',
    },
  },
  {
    question: { lv: 'Cik maksā dalība un kas ir iekļauts?', en: 'What is the participation fee and what does it include?' },
    answer: {
      lv: 'Dalības maksa komandai ir 135 EUR. Tajā ietilpst dalība sporta spēlēs, brokastis 20. septembra rītā, pirmā medicīniskā palīdzība sacensību vietā un apbalvojumi godalgoto vietu ieguvējiem.',
      en: 'The participation fee is EUR 135 per team. It includes participation in the sports games, breakfast on the morning of 20 September, first aid at the venue and awards for prize winners.',
    },
  },
  {
    question: { lv: 'Kad jāapmaksā dalības maksa?', en: 'When must the participation fee be paid?' },
    answer: {
      lv: 'Dalības maksa jāapmaksā līdz 13.09.2026. plkst. 17.00. Ja maksājums netiek veikts laikā, komandas pieteikums tiek anulēts.',
      en: 'The participation fee must be paid by 13 September 2026 at 17:00. If payment is not made on time, the team application is cancelled.',
    },
  },
  {
    question: { lv: 'Vai drīkst mainīt komandas dalībniekus?', en: 'Can team members be changed?' },
    answer: {
      lv: 'Komandas sastāvu iespējams mainīt līdz 13.09.2026. plkst. 23.59, par izmaiņām rakstot dalībnieku koordinatorei uz sportaspeles.ronisi@rtusp.lv. Sporta spēļu laikā komandas sastāvs paliek nemainīgs, izņemot nolikumā paredzētas ārkārtas situācijas.',
      en: 'The team roster may be changed until 13 September 2026 at 23:59 by emailing the participant coordinator at sportaspeles.ronisi@rtusp.lv. During the sports games the roster remains unchanged, except in exceptional cases covered by the regulations.',
    },
  },
  {
    question: { lv: 'Kā notiek mājiņu rezervēšana?', en: 'How does cottage booking work?' },
    answer: {
      lv: 'Mājiņas no 19. līdz 20. septembrim ir pieejamas tikai sporta spēļu komandām. Pēc dalības maksas apmaksas kapteinim tiks nosūtīta informācija par rezervācijas tiešsaistes zvanu, bet izvēles secību noteiks izloze komandu sapulcē.',
      en: 'Cottages from 19 to 20 September are available only to sports-game teams. After payment, the captain will receive information about the online booking call, and the selection order will be determined by a draw at the team meeting.',
    },
  },
  {
    question: { lv: 'Vai var pieteikt pusdienas?', en: 'Can lunches be ordered?' },
    answer: {
      lv: 'Jā. Papildu var pieteikt sestdienas un/vai svētdienas pusdienas līdz 09.09.2026. plkst. 23.59. Informācija un anketa tiks nosūtīta komandas kapteinim pēc komandas apstiprināšanas.',
      en: 'Yes. Saturday and/or Sunday lunches may be ordered until 9 September 2026 at 23:59. Information and the form will be sent to the team captain after confirmation.',
    },
  },
  {
    question: { lv: 'Kādi sporta veidi būs Ronīšos?', en: 'Which sports will be included?' },
    answer: {
      lv: 'Pludmales volejbols, strītbols, florbols, pludmales handbols, futbols, stafete, rogainings, virves vilkšana un individuālās disciplīnas.',
      en: 'Beach volleyball, 3×3 basketball, floorball, beach handball, football, relay, rogaining, tug of war and individual disciplines.',
    },
  },
  {
    question: { lv: 'Kādi dokumenti jāņem līdzi?', en: 'Which documents should participants bring?' },
    answer: {
      lv: 'Visiem apmeklētājiem jābūt līdzi personu apliecinošam dokumentam. Studentiem nepieciešama arī derīga studenta apliecība vai izziņa no augstskolas.',
      en: 'All visitors must carry an identity document. Students must also have a valid student ID or a certificate from their higher education institution.',
    },
  },
];

export const contacts = [
  { role: { lv: 'Galvenais tiesnesis', en: 'Head judge' }, name: 'Francis Gulbis', email: '', phone: '27573035' },
  { role: { lv: 'Galvenā tiesneša palīgs', en: 'Assistant head judge' }, name: 'Eduards Otomers', email: '', phone: '20256011' },
  { role: { lv: 'Dalībnieku koordinatore', en: 'Participant coordinator' }, name: 'Betija Eiduka', email: 'sportaspeles.ronisi@rtusp.lv', phone: '25603992' },
];

export const pageLabels = {
  eventEyebrow: { lv: 'RTU rudens sporta spēles', en: 'RTU Autumn Sports Games' },
  faqTitle: { lv: 'BIEŽĀK UZDOTIE JAUTĀJUMI', en: 'FREQUENTLY ASKED QUESTIONS' },
  faqSubtitle: { lv: 'Atbildes, kas saskaņotas ar 2026. gada nolikumu.', en: 'Answers aligned with the 2026 regulations.' },
  contactsTitle: { lv: 'KONTAKTI', en: 'CONTACTS' },
  contactsSubtitle: { lv: 'Sazinies ar mums.', en: 'Get in touch with us.' },
  contactsIntro: { lv: 'Jautājumu gadījumā sazinies ar atbildīgo personu.', en: 'For questions, contact the relevant person.' },
  locationTitle: { lv: 'KUR MĒS ATRODAMIES', en: 'WHERE TO FIND US' },
  location: {
    lv: 'RTU Konferenču un sporta centrs “Ronīši”, Tukuma novads, Engures pagasts, Klapkalnciems, LV-3113',
    en: 'RTU Conference and Sports Centre “Ronīši”, Klapkalnciems, Engure Parish, Tukums Municipality, LV-3113, Latvia',
  },
  regulationsTitle: { lv: 'NOLIKUMS', en: 'REGULATIONS' },
  regulationsSubtitle: { lv: 'Iepazīsties ar pasākuma nolikumu un sporta veidiem.', en: 'Read the event regulations and sports disciplines.' },
  regulationsLv: { lv: 'Nolikums latviešu valodā', en: 'Regulations in Latvian' },
  regulationsEn: { lv: 'Nolikums angļu valodā', en: 'Regulations in English' },
  sportsTitle: { lv: 'Sporta veidi', en: 'Sports disciplines' },
  sportsIntro: {
    lv: 'Komandu sastāva prasības katrai disciplīnai. Detalizēti noteikumi pieejami pasākuma nolikumā.',
    en: 'Team composition requirements for each discipline. Detailed rules are available in the event regulations.',
  },
  scheduleEyebrow: { lv: 'Pasākuma norise', en: 'Event programme' },
  scheduleTitle: { lv: 'Laika plāns', en: 'Schedule' },
  mapEyebrow: { lv: 'Orientēšanās Ronīšos', en: 'Finding your way around Ronīši' },
  mapTitle: { lv: 'Teritorijas karte', en: 'Venue map' },
  inDevelopment: { lv: 'Sadaļa ir izstrādes procesā.', en: 'This section is under development.' },
  scheduleLater: { lv: 'Detalizēts pasākuma laika plāns tiks publicēts vēlāk.', en: 'The detailed event schedule will be published later.' },
  mapLater: { lv: 'Pasākuma teritorijas karte tiks publicēta vēlāk.', en: 'The event venue map will be published later.' },
  resultsTitle: { lv: 'Rezultāti', en: 'Results' },
  resultsSubtitle: { lv: 'Komandu punkti un vietu sadalījums', en: 'Team points and standings' },
  liveData: { lv: 'Tiešsaistes dati', en: 'Live data' },
  searchTable: { lv: 'Meklēt tabulā', en: 'Search table' },
  searchPlaceholder: { lv: 'Meklēt komandu, disciplīnu...', en: 'Search for a team or discipline...' },
  updated: { lv: 'Atjaunots', en: 'Updated' },
  loading: { lv: 'Ielādē datus…', en: 'Loading data…' },
  loadError: { lv: 'Datus neizdevās ielādēt.', en: 'The data could not be loaded.' },
  column: { lv: 'Kolonna', en: 'Column' },
  noResults: { lv: 'Nekas netika atrasts.', en: 'No results found.' },
};
