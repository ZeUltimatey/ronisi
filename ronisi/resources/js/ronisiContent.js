export const navGroups = [
  { label: 'Sākums', href: '/' },
  { label: 'AKTUĀLAIS', items: [{ label: 'Kā sagatavoties?', href: '/ka-sagatavoties' }] },
  { label: 'Par mums', items: [
    { label: 'Par mums', href: '/par-mums' }, { label: 'Atbalstītāji', href: '/atbalstitaji' }, { label: 'Organizatori', href: '/organizatori' }, { label: 'Galerija', href: '/galerija' }
  ]},
  { label: 'Pieteikšanās', href: '/pieteiksanas' },
  { label: 'Norise', items: [
    { label: 'Norise', href: '/norise' }, { label: 'Sporta veidi', href: '/sporta-veidi' }, { label: 'Teritorija', href: '/teritorija' }
  ]},
  { label: 'BUJ', href: '/buj' },
  { label: 'Kontakti', href: '/kontakti' },
];

export const pages = {
  'aktualais': { eyebrow:'Aktuālais', title:'Aktuālā informācija', intro:'Jaunumi, termiņi un svarīgākie paziņojumi par RTU Rudens sporta spēlēm “Ronīši” 2026.', cards:[['Jaunumi','Šeit ievieto aktualitātes, izmaiņas programmā, komandu sarakstus un svarīgus paziņojumus.'],['Svarīgi','Pārbaudi nolikumu, pieteikšanās termiņus un sagatavošanās informāciju pirms brauciena.']]},
  'ka-sagatavoties': { eyebrow:'Aktuālais', title:'Kā sagatavoties?', intro:'Praktiska informācija dalībniekiem pirms došanās uz Ronīšiem.', cards:[['Līdzi jāņem','Sporta apģērbs, maiņas apavi, personīgās higiēnas lietas, laikapstākļiem piemērots apģērbs un komandas gars.'],['Pirms pasākuma','Pārliecinies, ka komanda ir pieteikta, dalībnieki zina programmu un ir sagatavoti sporta aktivitātēm.'],['Drošība','Ievēro organizatoru norādījumus, saudzē sevi, citus dalībniekus un teritoriju.']]},
  'par-mums': { eyebrow:'Par mums', title:'Par RTU Rudens sporta spēlēm “Ronīši”', intro:'Rudens sporta spēles “Ronīši” ir RTU studentu sporta un kopienas pasākums ar sacensībām, komandas aktivitātēm un kopīgu atpūtu.', cards:[['Ideja','Pasākums apvieno sportu, sadarbību un studentu dzīves enerģiju.'],['Vieta','RTU Konferenču un sporta centrs “Ronīši”, Klapkalnciems.'],['Mērķis','Radīt aktīvu, draudzīgu un atmiņā paliekošu sporta pieredzi.']]},
  'atbalstitaji': { eyebrow:'Par mums', title:'Atbalstītāji', intro:'Šeit būs 2026. gada atbalstītāju sadaļa.', cards:[['Atbalstītāji','Pievieno atbalstītāju logotipus, aprakstus un saites. Logotipus liec public/images/supporters.']]},
  'organizatori': { eyebrow:'Par mums', title:'Organizatori', intro:'Pasākumu organizē RTU studentu komanda un iesaistītie partneri.', cards:[['Organizatori','Šeit ievieto organizatoru komandu, pienākumus un kontaktinformāciju.'],['Koordinācija','Pieteikšanās, sporta disciplīnas, teritorija, komunikācija un drošība.']]},
  'norise': { eyebrow:'Norise', title:'Norise', intro:'Programmas plāns un galvenās aktivitātes pasākuma laikā.', cards:[['Ierašanās','Dalībnieku ierašanās, reģistrācija un iekārtošanās.'],['Sporta spēles','Komandu sacensības un disciplīnas visas dienas garumā.'],['Vakars','Apbalvošana, kopīgas aktivitātes un atpūta.']]},
  'sporta-veidi': { eyebrow:'Norise', title:'Sporta veidi', intro:'Sacensību disciplīnas un komandu aktivitātes.', cards:[['Komandu sporti','Futbols, volejbols, stafetes vai citas organizatoru apstiprinātas disciplīnas.'],['Individuālie izaicinājumi','Papildu aktivitātes dalībniekiem ārpus galvenajām sacensībām.'],['Noteikumi','Precīzi noteikumi tiek publicēti pirms pasākuma.']]},
  'teritorija': { eyebrow:'Norise', title:'Teritorija', intro:'Informācija par RTU Konferenču un sporta centru “Ronīši”.', cards:[['Atrašanās vieta','Klapkalnciems, Latvija.'],['Zonas','Sporta laukumi, ēdināšanas vietas, naktsmītnes un kopīgās aktivitāšu zonas.'],['Kārtība','Saudzē teritoriju un ievēro organizatoru norādes.']]},
  'buj': { eyebrow:'BUJ', title:'Biežāk uzdotie jautājumi', intro:'Īsās atbildes uz dalībnieku biežākajiem jautājumiem.', cards:[['Kā pieteikties?','Aizpildi pieteikuma formu sadaļā “Pieteikšanās”.'],['Kur notiek pasākums?','RTU Konferenču un sporta centrā “Ronīši”, Klapkalnciemā.'],['Ko ņemt līdzi?','Sporta apģērbu, personīgās lietas un laikapstākļiem piemērotu apģērbu.']]},
  'kontakti': { eyebrow:'Kontakti', title:'Sazinies', intro:'Jautājumiem par pieteikšanos, norisi un organizāciju.', cards:[['Kontaktpersona','Santa Ābele'],['E-pasts','sportaspeles.ronisi@rtusp.lv'],['Tālrunis','+371 26678395'],['Adrese','RTU Konferenču un sporta centrs “Ronīši”, Klapkalnciems, Latvija']]},
};

export const sports = ['Futbols','Volejbols','Stafetes','Orientēšanās','Galda spēles','Cits'];
