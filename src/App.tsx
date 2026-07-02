import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Coffee, MapPin, Wifi, Check, Star, ChevronDown, ChevronUp, 
  Sparkles, ShieldCheck, DollarSign, ArrowRight, TrendingUp, Users, 
  CheckCircle, Briefcase, GraduationCap, Rocket, QrCode
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IncomeSimulation from "./components/IncomeSimulation";
import PartnerForm from "./components/PartnerForm";
import { testimonialsData, faqData, communityData } from "./data";

export default function App() {
  // Navigation & Modal States
  const [isPartnerOpen, setIsPartnerOpen] = useState<boolean>(false);
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>(null);
  const [showRedirectToast, setShowRedirectToast] = useState<boolean>(false);
  const BOOKING_APP_URL = "http://localhost:3001";

  const handleSearchClick = () => {
    try {
      window.open(BOOKING_APP_URL, "_blank", "noopener,noreferrer");
    } catch (e) {
      console.log("Navigation blocked by sandbox or browser setting");
    }
    
    // Show toast notification for redirection
    setShowRedirectToast(true);
    setTimeout(() => {
      setShowRedirectToast(false);
    }, 4500);
  };

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Toggle FAQ accordion
  const toggleFaq = (id: string) => {
    setExpandedFaqId(expandedFaqId === id ? null : id);
  };

  // Icon switcher helper for community cards
  const renderCommunityIcon = (iconName: string) => {
    switch (iconName) {
      case "Briefcase":
        return <Briefcase className="text-primary-brown" size={24} />;
      case "GraduationCap":
        return <GraduationCap className="text-primary-brown" size={24} />;
      case "Rocket":
        return <Rocket className="text-primary-brown" size={24} />;
      case "Coffee":
        return <Coffee className="text-primary-brown" size={24} />;
      default:
        return <Users className="text-primary-brown" size={24} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary-brown selection:text-white" id="main-app">
      
      {/* Header element */}
      <Header 
        onSearchClick={handleSearchClick}
        onPartnerClick={() => setIsPartnerOpen(true)}
        onScrollToSection={scrollToSection}
      />

      <main className="flex-grow">
        
        {/* ======================================= */}
        {/* SECTION 1: HERO SECTION                 */}
        {/* ======================================= */}
        <section id="hero" className="relative pt-12 pb-24 sm:pb-32 overflow-hidden bg-gradient-to-b from-[#F7F3EE] via-[#F7F3EE] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Hero Left Info */}
              <div className="lg:col-span-6 space-y-8 text-left">
                {/* Badge */}
                <div 
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary-brown/5 border border-primary-brown/15 text-[11px] sm:text-xs font-semibold tracking-wide text-primary-brown uppercase"
                  id="hero-badge"
                >
                  <Sparkles size={14} className="animate-pulse" />
                  Pioneer Sharing-Profit Workspace Platform in Indonesia
                </div>

                {/* Headline */}
                <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-dark-brown tracking-tight leading-[1.1]" id="hero-headline">
                  Ubah Ruang Menjadi <span className="text-primary-brown relative inline-block">Peluang<span className="absolute bottom-1 left-0 w-full h-[6px] bg-primary-brown/15 -z-10 rounded-full"></span></span>.
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg text-light-gray leading-relaxed max-w-xl" id="hero-description">
                  Temukan workspace nyaman di coffee shop, lounge, dan ruang komersial pilihan. Bekerja lebih produktif sekaligus membantu pertumbuhan bisnis lokal.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    onClick={handleSearchClick}
                    className="px-8 py-4 bg-primary-brown hover:bg-dark-brown text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.01] cursor-pointer text-center text-sm"
                    id="btn-hero-cari"
                  >
                    Cari Workspace
                  </button>
                  <button
                    onClick={() => setIsPartnerOpen(true)}
                    className="px-8 py-4 bg-[#DCC3AA]/15 hover:bg-[#DCC3AA]/25 text-dark-brown font-bold rounded-2xl border border-[#DCC3AA]/40 transition-all text-center text-sm cursor-pointer"
                    id="btn-hero-mitra"
                  >
                    Jadi Mitra
                  </button>
                </div>
              </div>

              {/* Hero Right Visual Column */}
              <div className="lg:col-span-6 relative">
                {/* Large Rounded Main Hero image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#DCC3AA]/30 group aspect-video lg:aspect-[4/3] bg-gray-100">
                  <img 
                    src="/src/assets/images/coffee_workspace_hero_1782823233777.jpg" 
                    alt="Premium Modern Coffee Shop Workspace"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                    id="hero-img"
                  />
                  {/* Glassmorphism gradient cover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-dark-brown/10 via-transparent to-transparent"></div>
                </div>

                {/* Floating UI cards */}
                {/* Card 1: WiFi */}
                <div 
                  className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-[#DCC3AA]/30 shadow-lg flex items-center gap-3 animate-fade-in"
                  id="float-card-wifi"
                >
                  <div className="w-9 h-9 rounded-xl bg-green-500/10 text-green-600 flex items-center justify-center">
                    <Wifi size={18} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-dark-brown leading-tight">WiFi Cepat</span>
                    <span className="block text-[10px] text-green-600 font-semibold mt-0.5">Koneksi Unlimited</span>
                  </div>
                </div>

                {/* Card 2: Price */}
                <div 
                  className="absolute -bottom-5 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-[#DCC3AA]/30 shadow-lg flex items-center gap-3"
                  id="float-card-price"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary-brown/10 text-primary-brown flex items-center justify-center text-sm font-extrabold font-mono">
                    Rp
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-dark-brown leading-tight">Mulai Rp25.000/jam</span>
                    <span className="block text-[10px] text-light-gray mt-0.5">Tanpa Biaya Admin</span>
                  </div>
                </div>

                {/* Card 3: Verified */}
                <div 
                  className="absolute top-12 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-[#DCC3AA]/30 shadow-lg flex items-center gap-3"
                  id="float-card-verified"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#8B5E3C]/10 text-primary-brown flex items-center justify-center">
                    <Check size={18} className="stroke-[3]" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-dark-brown leading-tight">Verified Workspace</span>
                    <span className="block text-[10px] text-light-gray mt-0.5">Sudah Terkurasi</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ======================================= */}
        {/* SECTION 2: HOW WORK WELL WORKS          */}
        {/* ======================================= */}
        <section id="cara-kerja" className="py-24 bg-white border-t border-[#DCC3AA]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-brown bg-primary-brown/5 px-3.5 py-1.5 rounded-full border border-primary-brown/10">
                Alur Kerja Mudah
              </span>
              <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-dark-brown tracking-tight">
                Cara Kerja Work Well
              </h2>
              <p className="mt-3 text-base text-light-gray">
                Sederhana. Cepat. Aman.
              </p>
            </div>

            {/* Grid of Two Large Horizontal Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              
              {/* Card 1: Untuk Pengguna */}
              <div className="bg-[#F7F3EE] rounded-3xl p-8 border border-[#DCC3AA]/30 flex flex-col justify-between space-y-8" id="card-cara-pengguna">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary-brown flex items-center justify-center text-white text-xs font-bold font-mono">
                      01
                    </div>
                    <h3 className="font-display font-extrabold text-xl text-dark-brown">Untuk Pengguna</h3>
                  </div>
                  <p className="text-xs text-light-gray leading-relaxed">
                    Akses ruang kerja fleksibel berfasilitas lengkap dengan jaminan kenyamanan tingkat tinggi tanpa komitmen biaya bulanan.
                  </p>
                </div>

                {/* Steps layout with modern icons */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
                  {[
                    { label: "Cari Workspace", desc: "Pilih kafe favorit" },
                    { label: "Pilih Jadwal", desc: "Tentukan jam & hari" },
                    { label: "Bayar Online", desc: "Instan lewat QRIS" },
                    { label: "Scan & Mulai", desc: "Tiba di lokasi mitra" }
                  ].map((step, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-4 border border-[#DCC3AA]/20 flex flex-col items-center text-center relative">
                      <div className="w-8 h-8 rounded-full bg-primary-brown/10 text-primary-brown flex items-center justify-center text-xs font-bold mb-2">
                        {idx + 1}
                      </div>
                      <h4 className="text-xs font-bold text-dark-brown leading-tight">{step.label}</h4>
                      <p className="text-[10px] text-light-gray mt-1 leading-normal">{step.desc}</p>
                      
                      {/* Arrow connecting next step (Desktop only) */}
                      {idx < 3 && (
                        <div className="hidden sm:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 text-primary-brown/40 font-bold font-mono">
                          &rarr;
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Untuk Mitra */}
              <div className="bg-[#F7F3EE] rounded-3xl p-8 border border-[#DCC3AA]/30 flex flex-col justify-between space-y-8" id="card-cara-mitra">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary-brown flex items-center justify-center text-white text-xs font-bold font-mono">
                      02
                    </div>
                    <h3 className="font-display font-extrabold text-xl text-dark-brown">Untuk Mitra</h3>
                  </div>
                  <p className="text-xs text-light-gray leading-relaxed">
                    Monetisasi setiap sudut meja atau kursi menganggur di tempat usaha Anda dan rasakan lompatan profit mingguan yang mengalir otomatis.
                  </p>
                </div>

                {/* Timeline steps */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center">
                  {[
                    { title: "Daftar Mitra", desc: "Formulir singkat" },
                    { title: "Verifikasi", desc: "Review 1x24 jam" },
                    { title: "Upload Ruang", desc: "Foto & fasilitas" },
                    { title: "Terima Booking", desc: "Pantau sistem" },
                    { title: "Bagi Hasil", desc: "Cair mingguan" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-3 border border-[#DCC3AA]/20 flex flex-col items-center text-center relative">
                      <div className="w-6 h-6 rounded-full bg-primary-brown text-white flex items-center justify-center text-[10px] font-bold mb-2 font-mono">
                        {idx + 1}
                      </div>
                      <h4 className="text-[11px] font-bold text-dark-brown leading-tight">{item.title}</h4>
                      <p className="text-[9px] text-light-gray mt-0.5 leading-normal">{item.desc}</p>

                      {/* Arrow connection */}
                      {idx < 4 && (
                        <div className="hidden sm:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10 text-primary-brown/40 text-[10px] font-mono">
                          &rarr;
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ======================================= */}
        {/* SECTION 3: MENGAPA MEMILIH WORK WELL    */}
        {/* ======================================= */}
        <section id="mengapa-kami" className="py-24 bg-[#F7F3EE]/50 border-t border-[#DCC3AA]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-brown bg-primary-brown/5 px-3.5 py-1.5 rounded-full border border-primary-brown/10">
                Nilai Tambah Kami
              </span>
              <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-dark-brown tracking-tight">
                Mengapa Memilih Work Well?
              </h2>
              <p className="mt-3 text-base text-light-gray max-w-xl mx-auto">
                Platform modern yang menghubungkan gaya hidup produktif dengan efisiensi pengelolaan aset ruang secara bersahabat.
              </p>
            </div>

            {/* Grid of 6 Premium Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Workspace Terverifikasi",
                  desc: "Setiap lokasi mitra melalui proses verifikasi ketat meliputi kualitas WiFi, ketersediaan stopkontak listrik, dan kenyamanan tempat duduk.",
                  color: "bg-amber-500"
                },
                {
                  title: "Booking Instan",
                  desc: "Pesan meja kerja favorit Anda secara instan dalam hitungan detik. Kapan pun Anda butuh, ruang siap menampung energi produktivitas Anda.",
                  color: "bg-blue-500"
                },
                {
                  title: "QR Check-in",
                  desc: "Cukup tunjukkan e-ticket Anda dan biarkan kasir memindai QR code unik. Bebas ribet, langsung duduk, dan mulailah berkarya.",
                  color: "bg-purple-500"
                },
                {
                  title: "Tanpa Membership",
                  desc: "Bebas dari kewajiban biaya bulanan atau komitmen tahunan. Anda memegang kendali penuh atas pengeluaran workspace Anda secara fleksibel.",
                  color: "bg-indigo-500"
                },
                {
                  title: "Harga Terjangkau",
                  desc: "Bekerja di area premium dengan tarif bersahabat mulai dari Rp25.000 per jam, jauh lebih efisien dibanding menyewa coworking space tradisional.",
                  color: "bg-rose-500"
                },
                {
                  title: "Revenue Sharing Transparan",
                  desc: "Bagi hasil 70% : 30% yang jujur. Dilengkapi dashboard keuangan detail yang mencatat setiap detail transaksi secara real-time.",
                  color: "bg-emerald-500"
                }
              ].map((feature, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#DCC3AA]/30 hover:border-primary-brown/60 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                  id={`feature-card-${idx}`}
                >
                  <div className="space-y-4">
                    {/* Small Aesthetic Accent line/circle */}
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-primary-brown/10 flex items-center justify-center text-primary-brown font-bold text-xs font-mono">
                        0{idx + 1}
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-brown"></span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-display font-extrabold text-lg text-dark-brown group-hover:text-primary-brown transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-light-gray leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4 mt-4 border-t border-[#DCC3AA]/15 text-xs font-bold text-primary-brown/40 group-hover:text-primary-brown flex items-center gap-1 transition-colors">
                    Work Well Verified &bull; Terjamin
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ======================================= */}
        {/* SECTION 4: PARTNER REVENUE SHARING     */}
        {/* ======================================= */}
        <section id="bagi-hasil" className="py-24 bg-white border-t border-[#DCC3AA]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Infographic Left text block */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-brown bg-primary-brown/5 px-3.5 py-1.5 rounded-full border border-primary-brown/10">
                  Transparansi Keuangan
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-dark-brown tracking-tight leading-tight">
                  70% Untuk Mitra.<br />30% Untuk Work Well.
                </h2>
                <p className="text-sm sm:text-base text-light-gray leading-relaxed">
                  Kami mengedepankan model kemitraan yang adil dan mendukung pertumbuhan bisnis lokal. Sebagian besar hasil pendapatan dialokasikan langsung untuk mengapresiasi ruang yang Anda miliki.
                </p>

                {/* Clean list with green indicators */}
                <div className="space-y-3.5 pt-2">
                  {[
                    "Partner menerima 70% dari setiap nilai transaksi booking",
                    "Work Well hanya menerima komisi platform sebesar 30%",
                    "Tanpa ada biaya pendaftaran (Zero Registration Fee)",
                    "Tanpa beban biaya berlangganan bulanan (Zero Subscription)",
                    "Tanpa potongan tersembunyi atau biaya admin fiktif"
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-dark-text">
                      <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                        <Check size={12} className="stroke-[3]" />
                      </span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Infographic Right Visual element: Stacked Horizontal Bars */}
              <div className="lg:col-span-7 bg-[#F7F3EE] rounded-3xl p-8 sm:p-10 border border-[#DCC3AA]/40 space-y-8">
                <div>
                  <h3 className="font-display font-bold text-lg text-dark-brown">Bagan Proporsi Hasil Pemesanan</h3>
                  <p className="text-xs text-light-gray">Persentase pembagian transparan yang dihitung otomatis oleh sistem</p>
                </div>

                {/* Horizontal Stacked Infographic */}
                <div className="space-y-6">
                  {/* Visual Combined Bar */}
                  <div className="h-14 w-full rounded-2xl overflow-hidden flex shadow-inner border border-[#DCC3AA]/50 font-mono text-xs font-extrabold text-white">
                    {/* Partner 70% */}
                    <div 
                      className="bg-primary-brown flex items-center justify-center gap-1 transition-all hover:opacity-90 relative group"
                      style={{ width: "70%" }}
                    >
                      <span>MITRA 70%</span>
                      <span className="absolute -top-1 right-2 text-[10px] opacity-30 font-bold">Share</span>
                    </div>
                    {/* Work Well 30% */}
                    <div 
                      className="bg-[#5A3B28] flex items-center justify-center gap-1 transition-all hover:opacity-90"
                      style={{ width: "30%" }}
                    >
                      <span>WW 30%</span>
                    </div>
                  </div>

                  {/* Descriptions block for both sides */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                    {/* Partner Details */}
                    <div className="bg-white p-5 rounded-2xl border border-primary-brown/20 relative">
                      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary-brown"></div>
                      <span className="text-[10px] font-bold text-primary-brown uppercase tracking-wider block">Bagi Hasil Mitra</span>
                      <span className="font-display font-black text-3xl text-dark-brown mt-1 block">70%</span>
                      <p className="text-xs text-light-gray mt-2 leading-relaxed">
                        Dikreditkan secara otomatis setiap minggu langsung ke rekening bank mitra terdaftar setelah dipotong pajak daerah.
                      </p>
                    </div>

                    {/* Platform Details */}
                    <div className="bg-white p-5 rounded-2xl border border-[#5A3B28]/20 relative">
                      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#5A3B28]"></div>
                      <span className="text-[10px] font-bold text-[#5A3B28] uppercase tracking-wider block">Platform Commission</span>
                      <span className="font-display font-black text-3xl text-dark-brown mt-1 block">30%</span>
                      <p className="text-xs text-light-gray mt-2 leading-relaxed">
                        Komisi yang dialokasikan kembali untuk optimalisasi server, bantuan marketing, pemeliharaan sistem keamanan, dan asuransi proteksi aset.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ======================================= */}
        {/* SECTION 5: PARTNER INCOME SIMULATION     */}
        {/* ======================================= */}
        <IncomeSimulation />


        {/* ======================================= */}
        {/* SECTION 6: BECOME OUR PARTNER            */}
        {/* ======================================= */}
        <section id="daftar-partner" className="py-24 bg-white border-b border-[#DCC3AA]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-brown bg-primary-brown/5 px-3.5 py-1.5 rounded-full border border-primary-brown/10">
                Pendaftaran Mitra
              </span>
              <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-dark-brown tracking-tight">
                Mulai Hasilkan Pendapatan dari Ruang yang Sudah Anda Miliki
              </h2>
              <p className="mt-3 text-base text-light-gray max-w-xl mx-auto">
                Coffee shop, lounge, restoran, hotel, maupun ruang komersial dapat bergabung menjadi partner resmi Work Well.
              </p>
            </div>

            {/* Registration Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
              {[
                { step: "1", title: "Isi Form Pendaftaran", desc: "Tulis data diri dan profil ringkas mengenai kafe atau usaha Anda lewat formulir online." },
                { step: "2", title: "Verifikasi Tim", desc: "Tim verifikator kami akan berkunjung atau memproses verifikasi fasilitas Anda dalam 1x24 jam." },
                { step: "3", title: "Upload Workspace", desc: "Masukkan ketersediaan meja, jumlah slot kursi, serta jam operasional bebas booking." },
                { step: "4", title: "Mulai Terima Booking", desc: "Terima kunjungan kerja para profesional, kumpulkan koin profit, cairkan otomatis setiap pekan." }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#F7F3EE] rounded-2xl p-6 border border-[#DCC3AA]/30 flex flex-col justify-between" id={`step-mitra-${idx}`}>
                  <div className="space-y-4">
                    <span className="font-mono font-black text-3xl text-[#DCC3AA]">
                      {item.step}
                    </span>
                    <h4 className="font-display font-bold text-base text-dark-brown">
                      {item.title}
                    </h4>
                    <p className="text-xs text-light-gray leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden lg:block text-right text-primary-brown font-mono mt-4">
                      &rarr;
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Onboarding CTA */}
            <div className="text-center">
              <button
                onClick={() => setIsPartnerOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-brown hover:bg-dark-brown text-white font-bold rounded-2xl shadow-lg transition-transform hover:scale-[1.01] cursor-pointer text-sm"
                id="btn-mitra-onboarding"
              >
                Daftar Menjadi Mitra
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>


        {/* ======================================= */}
        {/* SECTION 7: JOIN OUR COMMUNITY           */}
        {/* ======================================= */}
        <section id="komunitas" className="py-24 bg-[#F7F3EE]/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Community Info Left */}
              <div className="lg:col-span-5 space-y-6 text-left">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary-brown bg-primary-brown/5 px-3.5 py-1.5 rounded-full border border-primary-brown/10">
                  Sinergi Komunitas
                </span>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-dark-brown tracking-tight leading-tight">
                  Bergabung Bersama Komunitas Work Well
                </h2>
                <p className="text-sm sm:text-base text-light-gray leading-relaxed">
                  Kami membangun ekosistem produktivitas yang menghubungkan freelancer, mahasiswa, startup, remote worker, UMKM, serta pemilik bisnis dalam satu platform besar yang saling memberdayakan.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold text-primary-brown inline-flex items-center gap-1">
                    Aktif &bull; Terhubung &bull; Kolaboratif
                  </span>
                </div>
              </div>

              {/* Community Cards Right */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {communityData.map((item) => (
                  <div 
                    key={item.id}
                    className={`bg-white rounded-2xl p-6 border border-[#DCC3AA]/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between`}
                    id={`community-card-${item.id}`}
                  >
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-primary-brown/5 flex items-center justify-center border border-primary-brown/15">
                        {renderCommunityIcon(item.icon)}
                      </div>
                      <h4 className="font-display font-bold text-base text-dark-brown">
                        {item.title}
                      </h4>
                      <p className="text-xs text-light-gray leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>


        {/* ======================================= */}
        {/* SECTION 8: TESTIMONIALS                 */}
        {/* ======================================= */}
        <section id="testimoni" className="py-24 bg-white border-y border-[#DCC3AA]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-brown bg-primary-brown/5 px-3.5 py-1.5 rounded-full border border-primary-brown/10">
                Suara Pengguna
              </span>
              <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-dark-brown tracking-tight">
                Testimoni Pengguna & Mitra
              </h2>
              <p className="mt-3 text-base text-light-gray">
                Apa kata mereka yang telah merasakan fleksibilitas dan kenyamanan ekosistem Work Well.
              </p>
            </div>

            {/* Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonialsData.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="bg-[#F7F3EE] rounded-3xl p-6 sm:p-8 border border-[#DCC3AA]/30 flex flex-col justify-between space-y-6 hover:border-primary-brown/40 hover:shadow-lg transition-all"
                  id={`testimonial-${testimonial.id}`}
                >
                  <div className="space-y-4">
                    {/* Stars */}
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, idx) => (
                        <Star key={idx} size={15} className="text-amber-500 fill-amber-500 stroke-none" />
                      ))}
                    </div>
                    {/* Comment */}
                    <p className="text-xs sm:text-sm text-dark-text/90 italic leading-relaxed">
                      "{testimonial.comment}"
                    </p>
                  </div>

                  {/* Profile avatar row */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[#DCC3AA]/30">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-[#DCC3AA]/50"
                    />
                    <div>
                      <h4 className="font-display font-bold text-sm text-dark-brown leading-tight">
                        {testimonial.name}
                      </h4>
                      <span className="text-[10px] text-light-gray block mt-0.5 font-medium">
                        {testimonial.profession}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ======================================= */}
        {/* SECTION 9: FAQ (ACCORDION STYLE)        */}
        {/* ======================================= */}
        <section id="faq" className="py-24 bg-[#F7F3EE]/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {/* Title */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-brown bg-primary-brown/5 px-3.5 py-1.5 rounded-full border border-primary-brown/10">
                Pertanyaan Umum
              </span>
              <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-dark-brown tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-sm text-light-gray">
                Temukan jawaban cepat mengenai pemesanan workspace maupun skema program kemitraan kami.
              </p>
            </div>

            {/* Accordions */}
            <div className="space-y-4">
              {faqData.map((faq) => {
                const isExpanded = expandedFaqId === faq.id;
                return (
                  <div 
                    key={faq.id}
                    className="bg-white rounded-2xl border border-[#DCC3AA]/30 overflow-hidden transition-all shadow-sm hover:shadow-md"
                    id={`faq-item-${faq.id}`}
                  >
                    {/* Question button toggle */}
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-display font-bold text-sm sm:text-base text-dark-brown cursor-pointer hover:text-primary-brown transition-colors"
                      aria-expanded={isExpanded}
                      id={`faq-btn-${faq.id}`}
                    >
                      <span>{faq.question}</span>
                      <span className="text-primary-brown shrink-0 bg-[#F7F3EE] p-1.5 rounded-lg border border-[#DCC3AA]/30">
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </span>
                    </button>

                    {/* Expandable Answer */}
                    {isExpanded && (
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-light-gray leading-relaxed border-t border-[#DCC3AA]/10 animate-fade-in">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* ======================================= */}
        {/* SECTION 10: FINAL CTA                   */}
        {/* ======================================= */}
        <section id="final-cta" className="py-24 bg-dark-brown text-white relative overflow-hidden text-center border-t border-primary-brown/20">
          {/* Decorative shapes background */}
          <div className="absolute -left-20 -bottom-20 w-52 h-52 bg-primary-brown opacity-25 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -right-20 -top-20 w-52 h-52 bg-[#DCC3AA] opacity-15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#F7F3EE] tracking-tight leading-tight">
              Siap Mengubah Ruang Menjadi Peluang?
            </h2>
            <p className="text-sm sm:text-base text-light-brown max-w-xl mx-auto leading-relaxed">
              Mulai booking workspace favorit Anda atau jadilah partner Work Well hari ini.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <button
                onClick={handleSearchClick}
                className="w-full sm:w-auto px-8 py-4 bg-primary-brown hover:bg-white hover:text-dark-brown text-white font-bold rounded-2xl shadow-lg transition-all text-sm cursor-pointer"
                id="btn-final-cari"
              >
                Cari Workspace
              </button>
              <button
                onClick={() => setIsPartnerOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/15 text-[#F7F3EE] font-bold rounded-2xl border border-white/10 hover:border-[#DCC3AA]/30 transition-all text-sm cursor-pointer"
                id="btn-final-mitra"
              >
                Jadi Mitra
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer element */}
      <Footer 
        onScrollToSection={scrollToSection}
        onSearchClick={handleSearchClick}
        onPartnerClick={() => setIsPartnerOpen(true)}
      />

      {/* Toast Notification for External Redirection */}
      {showRedirectToast && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-white rounded-2xl border border-[#DCC3AA] shadow-2xl p-5 animate-fade-in" id="redirect-toast">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-brown/10 text-primary-brown flex items-center justify-center shrink-0">
              <Sparkles size={20} className="animate-pulse text-primary-brown" />
            </div>
            <div className="flex-1 space-y-1">
              <h4 className="font-display font-bold text-sm text-dark-brown">Mengarahkan ke Website Booking...</h4>
              <p className="text-xs text-light-gray leading-relaxed">
                Menghubungkan Anda ke aplikasi booking workspace kami.
              </p>
              <div className="pt-2">
                <a 
                  href={BOOKING_APP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary-brown hover:text-dark-brown transition-colors underline"
                >
                  Klik di sini jika tidak terarah otomatis
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
            <button 
              onClick={() => setShowRedirectToast(false)}
              className="text-light-gray hover:text-dark-brown transition-colors text-xs font-bold cursor-pointer"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Partner Registration Modal Overlay */}
      <PartnerForm 
        isOpen={isPartnerOpen}
        onClose={() => setIsPartnerOpen(false)}
      />

    </div>
  );
}
