export interface ServiceItem {
  name: string;
  price: string;
  description?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  items: ServiceItem[];
}

export const SERVICES: ServiceCategory[] = [
  {
    id: "epilation",
    title: "Épilation",
    items: [
      { name: "Duvet", price: "30 Dh" },
      { name: "Sourcils", price: "40 Dh" },
      { name: "Narine", price: "20 Dh" },
      { name: "Visage", price: "130 Dh" },
      { name: "Aisselles", price: "50 Dh" },
      { name: "Bras", price: "90 Dh" },
      { name: "Avant Bras", price: "60 Dh" },
      { name: "Jambes", price: "150 Dh" },
      { name: "Demi-jambes", price: "80 Dh" },
      { name: "Fesses", price: "50 Dh" },
      { name: "Dos", price: "80 Dh" },
      { name: "Ventre", price: "50 Dh" },
      { name: "Maillot intégral", price: "100 Dh" },
      { name: "Maillot échancré", price: "80 Dh" },
      { name: "Bords de maillot", price: "50 Dh" },
      { name: "Pack Epilation (Maillot + Aisselles + Jambes)", price: "280 Dh" },
    ]
  },
  {
    id: "massage",
    title: "Massage",
    items: [
      { name: "Massage relaxant 45min", price: "250 Dh" },
      { name: "Massage Drainant", price: "250 Dh" },
      { name: "Massage Amincissant", price: "300 Dh" },
      { name: "Massage Amincissant (couverture chauffante)", price: "400 Dh" },
      { name: "Massage pierres chaudes", price: "350 Dh" },
      { name: "Maderothérapie", price: "480 Dh" },
    ]
  },
  {
    id: "soins",
    title: "Soins & Cils",
    items: [
      { name: "Soin de visage", price: "à partir de 400 Dh" },
      { name: "Normal (Cils)", price: "200 Dh" },
      { name: "En Soie (Cils)", price: "600 Dh" },
      { name: "Rehaussement de cils", price: "250 Dh" },
      { name: "Brow Lift", price: "350 Dh" },
    ]
  },
  {
    id: "hair",
    title: "Coiffure & Coloration",
    items: [
      { name: "Brushing", price: "à partir de 50 Dh" },
      { name: "Shampoing spécial", price: "à partir de 20 Dh" },
      { name: "Wavy babyliss", price: "à partir de 120 Dh" },
      { name: "Racine", price: "250 - 350 Dh" },
      { name: "Balayage / Ombré", price: "à partir de 900 Dh" },
      { name: "Coloration", price: "à partir de 500 Dh" },
      { name: "Soin Wella plex", price: "450 Dh" },
      { name: "Soin hydratant", price: "à partir de 200 Dh" },
      { name: "Coupe", price: "250 Dh" },
      { name: "Coiffure", price: "à partir de 300 Dh" },
      { name: "Lissage", price: "à partir de 800 Dh" },
      { name: "Soin lissage Enzymotherapie", price: "à partir de 1800 Dh" },
    ]
  },
  {
    id: "makeup",
    title: "Make Up",
    items: [
      { name: "Maquillage Jour", price: "500 Dh" },
      { name: "Maquillage Soir", price: "800 Dh" },
    ]
  },
  {
    id: "nails",
    title: "Nails",
    items: [
      { name: "Pose vernis", price: "50 Dh" },
      { name: "Manucure simple", price: "100 Dh" },
      { name: "Manucure spa", price: "130 Dh" },
      { name: "Pédicure simple", price: "150 Dh" },
      { name: "Pédicure spa", price: "190 Dh" },
      { name: "Pédicure médical", price: "200 Dh" },
      { name: "Pose vernis Permanent", price: "150 Dh" },
      { name: "Pose permanent + renforcement", price: "250 Dh" },
      { name: "Gel + permanent", price: "400 Dh" },
      { name: "Gel normal", price: "300 Dh" },
      { name: "Faux ongles + Pose", price: "200 Dh" },
      { name: "Faux ongles + permanent", price: "300 Dh" },
      { name: "Pose Iris dip", price: "250 Dh" },
      { name: "Baby Boomer", price: "350 Dh" },
      { name: "BIAB", price: "350 Dh" },
    ]
  },
  {
    id: "hammam",
    title: "Hammam Rituals",
    items: [
      { name: "Hammam Traditionnel", price: "180 Dh", description: "Savon noir, gommage avec gant (Kiss) et savonnage" },
      { name: "Hammam Signature", price: "450 Dh", description: "Savon noir, henné, gommage, gommage hydratant, masque visage à l'argile, enveloppement corps, savonnage au gel douche" },
      { name: "Hammam Royal", price: "450 Dh", description: "Savon noir d'eucalyptus, henné ou Tbrima, gommage avec gant (Kiss), gommage hydratant, enveloppement corps, masque visage à l'argile/ miel/ nila, savonnage" },
      { name: "Hammam Cérémonial", price: "680 Dh", description: "Rituel Hammam + masque visage miel safran ou Nila + massage 30min" },
    ]
  }
];

export const CONTACT_INFO = {
  phone: "+212663362688",
  instagram: "https://www.instagram.com/blingospa/",
  address: "4, rue Al mansour saadi, les iris Racine, Casablanca",
  email: "contact@blingbeauty.ma",
  bookingUrl: "https://calendar.google.com/calendar/u/0/appointments/schedules/placeholder" // Le client devra remplacer le lien par son vrai lien Google Appointment
};
