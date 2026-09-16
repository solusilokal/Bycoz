import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowDown, 
  Share,
  Copy,
  Check,
  Twitter,
  Clock,
  Star,
  Quote,
  Bike,
  Info,
  History,
  Tag,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Map,
  ShieldCheck
} from 'lucide-react';

const pageData = {
  name: "Bycoz",
  phone: "6289529605601", 
  address: "Jl. Junjung Buih IIIA No.5a, Langkai, Kec. Pahandut, Kota Palangka Raya, Kalimantan Tengah 73111",
  title: "Jelajahi Kota dengan Sepeda Premium",
  description: "Sewa sepeda mudah, terjangkau, dan berkualitas. Bycoz adalah solusi mobilitas sehat dan ramah lingkungan untuk petualangan kota Anda hari ini.",
  profileImg: "./logo-bycoz.png", 
  heroImg: "Gemini_Generated_Image_y111djy111djy111.jpg",
  links: {
    instagram: "https://www.instagram.com/solusilokal.id/",
    tiktok: "https://www.tiktok.com/@solusilokal.id",
    maps: "https://maps.google.com/?cid=4877586082037570425",
    facebook: "https://facebook.com/", 
  },
  highlights: [
    { text: "Terawat Baik", icon: "ShieldCheck" },
    { text: "Layanan 12 Jam", icon: "Clock" },
    { text: "Helm Gratis", icon: "Check" }
  ],
  about: "Bycoz didirikan dengan visi untuk membuat kota lebih hijau dan masyarakat lebih sehat. Kami percaya bahwa bersepeda bukan hanya sekadar olahraga atau hobi, melainkan gaya hidup yang membawa kebahagiaan, kebebasan, dan kontribusi nyata untuk lingkungan yang lebih bersih.",
  history: [
    { year: "2021", event: "Bycoz resmi berdiri dengan 10 unit sepeda lipat pertama di pusat kota." },
    { year: "2022", event: "Ekspansi armada menjadi 50+ sepeda, mencakup Road Bike dan MTB." },
    { year: "2024", event: "Mencapai lebih dari 1.000+ penyewa bulanan dan menjadi andalan car free day." }
  ],
  catalog: [
    { 
      id: 1,
      name: "Urban City Cruiser", 
      type: "City Bike", 
      price: "Rp 50.000", 
      unit: "/hari", 
      img: "./bike-city-cruiser.webp" 
    },
    { 
      id: 2,
      name: "Mountain Explorer Pro", 
      type: "MTB", 
      price: "Rp 85.000", 
      unit: "/hari", 
      img: "./bike-mountain-explorer.webp" 
    },
    { 
      id: 3,
      name: "Fold & Go Lite", 
      type: "Sepeda Lipat", 
      price: "Rp 60.000", 
      unit: "/hari", 
      img: "./bike-fold-go.webp" 
    },
    { 
      id: 4,
      name: "Aero Speedster", 
      type: "Road Bike", 
      price: "Rp 120.000", 
      unit: "/hari", 
      img: "./bike-aero-speedster.webp" 
    },
  ],
  faqs: [
    { q: "Apa syarat utama menyewa sepeda?", a: "Anda cukup menitipkan identitas asli (KTP/SIM/Paspor) yang masih berlaku sebagai jaminan selama masa penyewaan." },
    { q: "Apakah ada biaya deposit?", a: "Ya, kami mengenakan biaya deposit sebesar Rp 50.000 per sepeda yang akan dikembalikan secara penuh saat sepeda dikembalikan dalam kondisi baik." },
    { q: "Bagaimana jika terjadi kerusakan?", a: "Penyewa bertanggung jawab penuh atas kerusakan akibat kelalaian (jatuh, tabrakan). Biaya perbaikan akan dipotong dari deposit atau ditagihkan jika melebihi nilai deposit." },
    { q: "Bolehkah sewa untuk beberapa hari?", a: "Sangat bisa! Kami memberikan harga khusus (diskon 15%) untuk penyewaan lebih dari 3 hari beruntun." }
  ],
  testimonials: [
    { name: "Andi R.", rating: 5, text: "Sepedanya terawat banget, gowes pagi keliling Sudirman jadi makin asyik. Proses sewanya juga cepat via WhatsApp, ga ribet." },
    { name: "Rina S.", rating: 5, text: "Penyelamat pas weekend pengen sepedaan bareng teman tapi belum punya sepeda sendiri. Harga terjangkau dan pelayanannya ramah." },
    { name: "Bimo A.", rating: 4, text: "Koleksi sepeda lipatnya lumayan lengkap dan kondisinya prima. Enak buat dibawa masuk MRT atau ditaruh di bagasi mobil buat jalan-jalan." }
  ]
};

export default function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const date = formData.get('date');
    const duration = formData.get('duration');
    const bikeType = formData.get('bikeType');
    const notes = formData.get('notes');
    
    const waUrl = `https://wa.me/${pageData.phone}?text=Halo%20Admin%20${pageData.name},%20saya%20${name}.%20Saya%20ingin%20sewa%20sepeda%20tipe%20*${bikeType}*%20untuk%20tanggal%20${date}%20selama%20${duration}.%20Catatan:%20${notes || '-'}`;
    window.open(waUrl, '_blank');
  };

  const getShareUrl = () => {
    return typeof window !== 'undefined' && window.location.href.startsWith('http') 
      ? window.location.href 
      : 'https://bycoz.solusilokal.id';
  };

  const getShareText = () => {
    return `${pageData.name} - ${pageData.title}. Sewa sepeda mudah dan terjangkau di Palangka Raya! Hubungi Admin: https://wa.me/${pageData.phone}`;
  };

  const handleShare = (e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    setShowShareModal(true);
  };

  const copyToClipboard = async () => {
    const textToCopy = getShareUrl();
    let success = false;
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        success = true;
      } catch (e) {
        success = false;
      }
    }
    if (!success) {
      try {
        const tempInput = document.createElement('textarea');
        tempInput.value = textToCopy;
        tempInput.style.position = 'fixed';
        tempInput.style.left = '-9999px';
        tempInput.style.top = '0';
        document.body.appendChild(tempInput);
        tempInput.focus();
        tempInput.select();
        success = document.execCommand('copy');
        document.body.removeChild(tempInput);
      } catch (e) {
        console.error('Copy fallback error:', e);
      }
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        
        body {
          background-color: #F1F5F9;
          color: #0F172A;
          margin: 0;
          font-family: 'Outfit', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-white min-h-screen overflow-hidden pb-28">
        
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[90dvh] flex flex-col justify-end pb-12 px-6 bg-slate-900">
          <button
            onClick={handleShare}
            type="button"
            aria-label="Bagikan Halaman"
            className="absolute top-6 right-6 z-30 p-3.5 bg-slate-900/60 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-slate-900/80 active:scale-90 transition-all shadow-lg cursor-pointer flex items-center justify-center"
          >
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img 
              src={pageData.heroImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover object-center opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-32">
            <div className="w-28 h-28 rounded-full p-2 bg-white/95 backdrop-blur-md mb-6 shadow-2xl border-2 border-teal-500/50 overflow-hidden flex items-center justify-center">
              <img 
                src={pageData.profileImg} 
                alt="Profile" 
                className="w-full h-full object-contain"
              />
            </div>

            <h1 className="text-4xl font-extrabold text-white mb-2 leading-tight tracking-tight">
              {pageData.name}
            </h1>
            <p className="text-teal-400 font-medium text-lg mb-4">{pageData.title}</p>
            <p className="text-slate-300 font-light text-sm leading-relaxed mb-8 max-w-[95%]">
              {pageData.description}
            </p>

            {}
            <div className="flex flex-col w-full max-w-sm mb-8 gap-3">
              <div className="grid grid-cols-2 gap-3 w-full">
                <a 
                  href={pageData.links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
                >
                  <Instagram size={18} /> Instagram
                </a>
                <a 
                  href={pageData.links.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg> TikTok
                </a>
              </div>
              <a 
                href={pageData.links.maps}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 w-full rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium"
              >
                <MapPin size={18} /> Lokasi Kami
              </a>
            </div>

            <button 
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-2 w-full max-w-sm py-4 bg-teal-600 text-white rounded-xl font-bold text-[15px] hover:bg-teal-700 transition-all shadow-[0_8px_30px_rgba(13,148,136,0.3)]"
            >
              <Bike size={20} />
              Mulai Sewa Sekarang
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform ml-1 opacity-70" />
            </button>
          </div>
        </section>

        {/* HIGHLIGHTS BAR */}
        <section className="py-4 px-6 bg-teal-700 shadow-inner">
          <div className="flex flex-wrap justify-center gap-3 w-full max-w-md mx-auto">
            {pageData.highlights.map((item, idx) => (
              <span key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-black/10 rounded-full text-[11px] text-white font-medium">
                {item.icon === 'ShieldCheck' && <ShieldCheck size={14} className="text-teal-200" />}
                {item.icon === 'Clock' && <Clock size={14} className="text-teal-200" />}
                {item.icon === 'Check' && <Check size={14} className="text-teal-200" />}
                {item.text}
              </span>
            ))}
          </div>
        </section>

        {}
        {/* TENTANG KAMI */}
        <section className="py-12 px-6 bg-white">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-teal-100 rounded-lg text-teal-700">
              <Info size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Tentang Kami</h2>
          </div>
          <p className="text-slate-600 text-[15px] leading-relaxed text-justify">
            {pageData.about}
          </p>
        </section>

        {/* HISTORY */}
        <section className="py-12 px-6 bg-slate-50 border-y border-slate-100">
          <div className="flex items-center gap-2 mb-8">
            <div className="p-2 bg-teal-100 rounded-lg text-teal-700">
              <History size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Perjalanan Bycoz</h2>
          </div>
          
          <div className="relative border-l-2 border-teal-200 ml-4 space-y-8 pb-4">
            {pageData.history.map((item, idx) => (
              <div key={idx} className="relative pl-6">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-teal-600 border-4 border-slate-50"></div>
                <h3 className="font-bold text-teal-700 text-lg leading-none mb-2">{item.year}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.event}</p>
              </div>
            ))}
          </div>
        </section>

        {/* KATALOG & HARGA */}
        <section className="py-12 px-6 bg-white">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-teal-100 rounded-lg text-teal-700">
                <Tag size={20} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Katalog & Harga</h2>
            </div>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 pt-1 no-scrollbar -mx-6 px-6">
            {pageData.catalog.map((bike) => (
              <div key={bike.id} className="snap-center shrink-0 w-[260px] flex flex-col gap-4 p-4 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-teal-300 transition-colors">
                <div className="w-full h-44 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                  <img src={bike.img} alt={bike.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex flex-col flex-grow">
                  <span className="text-[10px] font-bold text-teal-700 uppercase tracking-wider mb-2 bg-teal-50 w-fit px-2 py-1 rounded-md">
                    {bike.type}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base leading-tight mb-2">{bike.name}</h3>
                  <div className="flex items-end gap-1 mt-auto pt-2">
                    <span className="font-extrabold text-slate-900 text-lg">{bike.price}</span>
                    <span className="text-xs text-slate-500 font-medium mb-1">{bike.unit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        {/* LOKASI */}
        <section className="py-12 px-6 bg-slate-900 text-white">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-slate-800 rounded-lg text-teal-400">
              <Map size={20} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Lokasi Kami</h2>
          </div>
          
          <div className="w-full h-48 bg-slate-800 rounded-2xl mb-4 overflow-hidden relative group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800&h=400')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <a 
                href={pageData.links.maps} 
                target="_blank" 
                rel="noreferrer"
                className="bg-teal-600 text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-lg flex items-center gap-2 hover:bg-teal-500 transition-all group-hover:scale-105"
              >
                <MapPin size={16} /> Buka di Google Maps
              </a>
            </div>
          </div>
          <p className="text-slate-300 text-sm text-center font-light">{pageData.address}</p>
        </section>

        {/* FAQ */}
        <section className="py-12 px-6 bg-white border-b border-slate-100">
          <div className="flex items-center gap-2 mb-8">
            <div className="p-2 bg-teal-100 rounded-lg text-teal-700">
              <HelpCircle size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Tanya Jawab (FAQ)</h2>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openFaqIndex === idx ? 'border-teal-600 bg-teal-50/50' : 'border-slate-200 bg-white'}`}
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                >
                  <span className={`font-semibold text-[15px] ${openFaqIndex === idx ? 'text-teal-800' : 'text-slate-800'}`}>
                    {faq.q}
                  </span>
                  {openFaqIndex === idx ? (
                    <ChevronUp size={20} className="text-teal-700 shrink-0 ml-2" />
                  ) : (
                    <ChevronDown size={20} className="text-slate-400 shrink-0 ml-2" />
                  )}
                </button>
                
                <div 
                  className={`px-4 pb-4 text-slate-600 text-sm leading-relaxed transition-all duration-300 ${openFaqIndex === idx ? 'block opacity-100' : 'hidden opacity-0'}`}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONI */}
        <section className="py-12 px-6 bg-slate-50">
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-teal-100 rounded-lg text-teal-700">
              <Quote size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Kata Mereka</h2>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar -mx-6 px-6">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">"{testi.text}"</p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-bold text-sm">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-sm font-bold text-slate-900">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {}
        {/* BOOKING FORM */}
        <section id="booking-form" className="py-12 px-6 bg-teal-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-800 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3"></div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl relative z-10">
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Formulir Sewa</h2>
              <p className="text-slate-500 text-sm">Isi detail pesanan, dan sistem kami akan menghubungkan Anda langsung ke Admin via WhatsApp.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5 ml-1">Nama Lengkap</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Ketik nama Anda"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5 ml-1">Tgl Mulai</label>
                  <input 
                    type="date" 
                    name="date" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5 ml-1">Durasi</label>
                  <select 
                    name="duration" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-all appearance-none"
                  >
                    <option value="1 Hari">1 Hari</option>
                    <option value="2 Hari">2 Hari</option>
                    <option value="3 Hari">3 Hari</option>
                    <option value="1 Minggu">1 Minggu</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5 ml-1">Pilih Sepeda</label>
                <select 
                  name="bikeType" 
                  required
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-all appearance-none"
                >
                  <option value="">Pilih dari katalog...</option>
                  {pageData.catalog.map(bike => (
                    <option key={bike.id} value={bike.name}>{bike.name} ({bike.type})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5 ml-1">Catatan Tambahan</label>
                <textarea 
                  name="notes" 
                  rows="2"
                  placeholder="Misal: Perlu tambahan helm 2, tinggi badan 170cm..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-2 bg-[#25D366] text-white font-bold text-[15px] tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#1EBE5D] transition-colors shadow-lg"
              >
                Kirim via WhatsApp
                <MessageCircle size={20} className="fill-current" />
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-10 pb-12 text-center flex flex-col items-center justify-center mx-6 mt-4">
          <div className="w-16 h-16 bg-white rounded-full shadow-sm border border-teal-100 flex items-center justify-center mb-4 p-1 overflow-hidden">
            <img src={pageData.profileImg} alt="Footer Logo" className="w-full h-full object-contain" />
          </div>
          
          <div className="text-slate-600 flex flex-col gap-1 items-center mb-6">
            <span className="font-extrabold text-slate-900 text-lg">{pageData.name}</span>
            <span className="text-sm max-w-[250px]">{pageData.address}</span>
          </div>

          <div className="w-full h-px bg-slate-200 mb-6"></div>

          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>

          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 text-[10px] mt-2 tracking-wide font-medium hover:text-slate-700 transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {/* STICKY CTA */}
        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="w-full flex items-center justify-between px-6 py-4 bg-slate-900 backdrop-blur-xl border border-slate-700 rounded-2xl text-white shadow-2xl hover:bg-slate-800 active:scale-[0.98] transition-all"
          >
            <span className="font-bold text-[15px] tracking-wide">Pesan Sepeda Sekarang</span>
            <div className="bg-teal-600 text-white p-2 rounded-xl">
              <Bike size={18} />
            </div>
          </button>
        </div>

      </main>

      {}
      {/* SHARE MODAL */}
      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/70 backdrop-blur-sm sm:items-center transition-all p-0 sm:p-4"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-white sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden shadow-2xl animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-slate-900 font-extrabold text-lg">Bagikan {pageData.name}</h3>
              <button
                type="button"
                onClick={() => setShowShareModal(false)}
                aria-label="Tutup"
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-all cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Profile banner preview */}
            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-4 flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-full bg-white border border-teal-200 p-1 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                <img 
                  src={pageData.profileImg} 
                  alt="Profile" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <h4 className="text-slate-900 font-bold text-base leading-tight truncate">{pageData.name}</h4>
                <p className="text-teal-700 text-xs font-medium truncate">{pageData.title}</p>
                <p className="text-slate-500 text-[11px] truncate mt-0.5">{pageData.address}</p>
              </div>
            </div>

            {/* Copy Link Input Bar */}
            <div className="mb-5">
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5 ml-1">
                Tautan Halaman
              </label>
              <div className="flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-xl p-1.5 pr-2 focus-within:border-teal-600 transition-colors">
                <input 
                  type="text"
                  readOnly
                  value={getShareUrl()}
                  className="w-full bg-transparent px-2.5 text-xs text-slate-700 outline-none select-all"
                />
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="shrink-0 flex items-center gap-1.5 px-3 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer active:scale-95"
                >
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                  {copied ? 'Tersalin!' : 'Salin'}
                </button>
              </div>
            </div>

            {/* Social Share Buttons */}
            <div>
              <span className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2.5 ml-1">
                Bagikan Langsung Ke
              </span>
              <div className="grid grid-cols-4 gap-2.5">
                {/* WhatsApp */}
                <button
                  type="button"
                  onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(getShareText() + ' ' + getShareUrl())}`, '_blank')}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 transition-all cursor-pointer group active:scale-95"
                >
                  <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                    <MessageCircle size={22} className="fill-current" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-700">WhatsApp</span>
                </button>

                {/* Telegram */}
                <button
                  type="button"
                  onClick={() => window.open(`https://t.me/share/url?url=${encodeURIComponent(getShareUrl())}&text=${encodeURIComponent(getShareText())}`, '_blank')}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-800 transition-all cursor-pointer group active:scale-95"
                >
                  <div className="w-11 h-11 rounded-full bg-[#229ED9] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-slate-700">Telegram</span>
                </button>

                {/* Facebook */}
                <button
                  type="button"
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl())}`, '_blank')}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 transition-all cursor-pointer group active:scale-95"
                >
                  <div className="w-11 h-11 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-slate-700">Facebook</span>
                </button>

                {/* X (Twitter) */}
                <button
                  type="button"
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(getShareUrl())}&text=${encodeURIComponent(getShareText())}`, '_blank')}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 transition-all cursor-pointer group active:scale-95"
                >
                  <div className="w-11 h-11 rounded-full bg-slate-900 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                    <Twitter size={20} />
                  </div>
                  <span className="text-[11px] font-bold text-slate-700">X</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}