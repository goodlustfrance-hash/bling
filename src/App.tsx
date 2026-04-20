import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Instagram, 
  MapPin, 
  ChevronRight, 
  Scissors, 
  Sparkles, 
  Wind, 
  Heart, 
  Waves,
  Palette,
  Eye,
  Menu,
  X
} from 'lucide-react';
import { SERVICES, CONTACT_INFO, ServiceCategory } from './data';

// WordPress Hosted Assets
const logo = "http://blingobeauty.com/wp-content/uploads/2026/04/bob-or.png";
const imgHero = "http://blingobeauty.com/wp-content/uploads/2026/04/xc.jpg"; 
const imgPedicure = "http://blingobeauty.com/wp-content/uploads/2026/04/xa.jpg"; 
const imgGallery1 = "http://blingobeauty.com/wp-content/uploads/2026/04/xa.jpg"; 
const imgGallery2 = "http://blingobeauty.com/wp-content/uploads/2026/04/xc.jpg"; 
const imgGallery3 = "http://blingobeauty.com/wp-content/uploads/2026/04/xe.jpg"; 
const imgGallery4 = "http://blingobeauty.com/wp-content/uploads/2026/04/xb.jpg"; 

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>(SERVICES[0].id);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const galleryImages = [imgHero, imgPedicure, imgGallery2, imgGallery3, imgGallery4];

  const categoryIcons: Record<string, any> = {
    epilation: Sparkles,
    massage: Heart,
    soins: Eye,
    hair: Scissors,
    makeup: Palette,
    nails: Waves,
    hammam: Wind
  };

  const currentCategory = SERVICES.find(c => c.id === activeCategory) || SERVICES[0];

  return (
    <div className="min-h-screen">
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage} 
              alt="Zoom" 
              className="max-w-full max-h-full object-contain"
            />
            <button className="absolute top-10 right-10 text-white">
              <X className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 bg-black/95 backdrop-blur-sm border-b border-gold-900/20 py-2`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Left Links */}
          <div className="hidden md:flex flex-1 items-center gap-8">
            <a href="#services" className="text-white text-[10px] uppercase tracking-[0.2em] font-semibold hover:text-gold-400 transition-colors">Services</a>
            <a href="#contact" className="text-white text-[10px] uppercase tracking-[0.2em] font-semibold hover:text-gold-400 transition-colors">Contact</a>
          </div>

          {/* Centered Logo */}
          <div className="flex flex-1 justify-center">
            <img 
              src={logo} 
              alt="Bling O Beauty Logo" 
              className="h-16 md:h-20 w-auto object-contain transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right CTA */}
          <div className="hidden md:flex flex-1 justify-end">
            <a 
              href={CONTACT_INFO.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-white text-white text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all rounded-full"
            >
              Réserver
            </a>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-6 h-6 text-gold-100" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-black p-8 flex flex-col md:hidden"
          >
            <div className="flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-8 h-8 text-gold-500" />
              </button>
            </div>
            <div className="flex flex-col gap-8 mt-20 items-center">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-gold-500">Services</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-gold-500">Contact</a>
              <a 
                href={CONTACT_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 px-10 py-4 border border-gold-500 text-gold-500 uppercase tracking-widest text-sm font-bold rounded-full"
              >
                Réserver
              </a>
              <div className="flex gap-6 mt-10">
                <a href={CONTACT_INFO.instagram} className="p-3 bg-gold-200 border border-gold-500/10 rounded-full"><Instagram className="text-gold-600" /></a>
                <a href={`tel:${CONTACT_INFO.phone}`} className="p-3 bg-gold-200 border border-gold-500/10 rounded-full"><Phone className="text-gold-600" /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative h-[110vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-50">
          <img 
            src={imgHero} 
            alt="Bling O Beauty Interior" 
            className="w-full h-full object-cover scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h4 className="text-gold-500 text-sm md:text-lg uppercase tracking-[0.4em] font-medium mb-10">
              L'excellence du soin à Casablanca
            </h4>
            <h1 className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-serif text-gold-500 font-light mb-10 leading-[0.85]">
              We make you <br />
              <span className="italic text-gold-600">bling!</span>
            </h1>
            <p className="text-gold-300/60 text-xl md:text-2xl font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              Découvrez une oasis de sérénité où beauté et bien-être se rencontrent dans un cadre luxueux et raffiné.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a 
                href="#services" 
                className="px-10 py-5 bg-gold-500 text-black uppercase tracking-[0.2em] text-xs font-bold hover:bg-gold-400 transition-all shadow-xl"
              >
                Carte des Services
              </a>
              <a 
                href={CONTACT_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 border border-white text-white uppercase tracking-[0.2em] text-xs font-bold hover:bg-white hover:text-black transition-all"
              >
                Réserver Maintenant
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold-300/50"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-gold-300 to-transparent mx-auto" />
        </motion.div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gold-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-gold-900 text-4xl md:text-6xl font-serif mb-6 uppercase tracking-wider">La Carte des Soins</h2>
            <div className="w-24 h-1 bg-gold-300 mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
            {/* Category Navigation */}
            <div className="lg:col-span-1 space-y-2 sticky top-32">
              {SERVICES.map((category) => {
                const Icon = categoryIcons[category.id] || Sparkles;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full flex items-center gap-4 px-6 py-4 transition-all group ${
                      activeCategory === category.id 
                      ? 'bg-gold-500 text-white shadow-lg' 
                      : 'hover:bg-gold-100/50 text-gold-800'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${activeCategory === category.id ? 'text-white' : 'text-gold-400 group-hover:text-gold-600'}`} />
                    <span className="text-xs uppercase tracking-widest font-semibold">{category.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Service Items */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gold-100 p-8 md:p-16 border border-gold-900/10 shadow-2xl"
                >
                  <h3 className="text-3xl md:text-4xl font-serif text-gold-500 mb-12 pb-6 border-b border-gold-900/20 uppercase tracking-widest">
                    {currentCategory.title}
                  </h3>
                  
                  <div className="space-y-8">
                    {currentCategory.items.map((service, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={service.name} 
                        className="group"
                      >
                        <div className="flex justify-between items-baseline gap-4 mb-2">
                          <span className="text-sm md:text-base font-medium text-gold-300 group-hover:text-gold-500 transition-colors uppercase tracking-wider">
                            {service.name}
                          </span>
                          <div className="flex-1 border-b border-dotted border-gold-900/30" />
                          <span className="text-sm md:text-base font-serif font-bold text-gold-500 shrink-0">
                            {service.price}
                          </span>
                        </div>
                        {service.description && (
                          <p className="text-xs text-gold-400 font-light italic leading-relaxed">
                            {service.description}
                          </p>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-16 pt-12 border-top border-gold-900/20 text-center">
                    <p className="text-gold-400 text-sm italic mb-8">Tous nos tarifs sont TTC</p>
                    <a 
                      href={CONTACT_INFO.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-gold-500 hover:text-gold-300 transition-colors uppercase text-xs tracking-widest font-bold"
                    >
                      Prendre rendez-vous <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 bg-gold-950 text-gold-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative order-2 md:order-1">
            <div className="border border-gold-500/30 p-4 md:p-10 relative z-10 bg-gold-950/50 backdrop-blur-sm">
              <img 
                src={imgPedicure} 
                alt="Espace Pédicure Bling O Beauty" 
                className="w-full h-auto grayscale-0 transition-all duration-1000 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-5 -left-5 md:-top-10 md:-left-10 w-24 h-24 md:w-40 md:h-40 border border-gold-500/20" />
            <div className="absolute -bottom-5 -right-5 md:-bottom-10 md:-right-10 w-24 h-24 md:w-40 md:h-40 bg-gold-800/10" />
          </div>

          <div className="order-1 md:order-2">
            <span className="text-gold-400 text-xs md:text-sm uppercase tracking-widest block mb-4 md:mb-6 text-center md:text-left">Notre Philosophie</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif mb-6 md:mb-10 leading-snug text-center md:text-left">Révélez votre éclat naturel</h2>
            <p className="text-gold-200/70 text-base md:text-lg font-light leading-relaxed mb-6 md:mb-8 text-center md:text-left">
              Chez Bling O Beauty, nous croyons que chaque femme détient en elle une lumière unique. Notre mission est de la faire briller à travers des protocoles de soins d'exception et une attention particulière aux détails.
            </p>
            <p className="text-gold-200/70 text-base md:text-lg font-light leading-relaxed mb-8 md:mb-12 text-center md:text-left">
              Depuis notre ouverture dans le prestigieux quartier de Racine, nous cultivons un art de vivre dédié à la beauté, combinant techniques modernes et rituels ancestraux.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="flex items-center gap-4 md:gap-5 justify-center md:justify-start">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] md:text-xs uppercase tracking-widest font-bold">Produits Premium</h4>
                  <p className="text-[10px] md:text-sm text-gold-300/50 font-light">Partenaires Thalgo & Wella</p>
                </div>
              </div>
              <div className="flex items-center gap-4 md:gap-5 justify-center md:justify-start">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-400">
                  <Scissors className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] md:text-xs uppercase tracking-widest font-bold">Experts Coiffure</h4>
                  <p className="text-[10px] md:text-sm text-gold-300/50 font-light">Spécialistes coloration & lissage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-32 bg-black overflow-hidden border-y border-gold-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-gold-500 text-4xl md:text-5xl font-serif mb-6 uppercase tracking-widest">Le Salon en Images</h2>
            <div className="flex items-center justify-center gap-4 text-gold-600/50">
              <div className="w-12 h-[1px] bg-gold-900/20" />
              <p className="text-[10px] uppercase tracking-[0.3em] font-medium">Défilez pour découvrir</p>
              <div className="w-12 h-[1px] bg-gold-900/20" />
            </div>
          </div>
          
          <div className="relative group">
            <div className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar scroll-smooth">
              {galleryImages.map((img, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 0.98 }}
                  onClick={() => setSelectedImage(img)}
                  className="min-w-[80vw] md:min-w-[40vw] lg:min-w-[30vw] aspect-[4/5] md:aspect-video snap-center cursor-zoom-in"
                >
                  <img 
                    src={img} 
                    alt={`Gallery ${i}`} 
                    className="w-full h-full object-cover border border-gold-900/20 shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Visual indicators for scroll */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-black py-32 border-t border-gold-900/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-20">
            <h2 className="text-gold-500 text-4xl md:text-5xl font-serif mb-6 uppercase tracking-widest">Nous Trouver</h2>
            <p className="text-gold-400 max-w-xl mx-auto uppercase text-xs tracking-widest font-medium">Bling O Beauty — Votre sanctuaire de détente</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gold-200 border border-gold-500/10 rounded-full flex items-center justify-center mb-8 shadow-2xl">
                <MapPin className="text-gold-600 w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl text-gold-500 mb-4 tracking-wider">Adresse</h4>
              <p className="text-gold-300 font-light leading-relaxed max-w-[200px]">
                {CONTACT_INFO.address}
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gold-200 border border-gold-500/10 rounded-full flex items-center justify-center mb-8 shadow-2xl">
                <Phone className="text-gold-600 w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl text-gold-500 mb-4 tracking-wider">Téléphone</h4>
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-gold-600 font-bold text-xl sm:text-2xl hover:text-gold-400 transition-colors break-all">
                {CONTACT_INFO.phone}
              </a>
              <p className="text-gold-400 text-xs mt-2 uppercase tracking-widest">Appelez-nous pour réserver</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gold-200 border border-gold-500/10 rounded-full flex items-center justify-center mb-8 shadow-2xl">
                <Instagram className="text-gold-600 w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl text-gold-500 mb-4 tracking-wider">Suivez-nous</h4>
              <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-gold-300 hover:text-gold-500 transition-colors font-medium break-all">
                @blingospa
              </a>
              <p className="text-gold-400 text-xs mt-2 uppercase tracking-widest">Instagram Official</p>
            </div>
          </div>

          <div className="pt-20 border-t border-gold-200 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-gold-400 text-[10px] uppercase tracking-[0.3em]">
              &copy; {new Date().getFullYear()} Bling O Beauty. All Rights Reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-gold-400 text-[10px] uppercase tracking-[0.3em] hover:text-gold-900">Mentions Légales</a>
              <a href="#" className="text-gold-400 text-[10px] uppercase tracking-[0.3em] hover:text-gold-900">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
