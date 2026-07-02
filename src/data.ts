import { Workspace, Testimonial, FAQItem, CommunityType } from "./types";

export const workspacesData: Workspace[] = [
  {
    id: "ws-1",
    name: "Cafe Kopi Teman Sejalan",
    area: "Senopati, Jakarta Selatan",
    description: "Coffee shop bertema industrial modern dengan pencahayaan alami yang melimpah, steker di setiap sudut meja, dan area khusus hening untuk produktivitas maksimal.",
    pricePerHour: 25000,
    rating: 4.8,
    reviewsCount: 142,
    wifiSpeedMbps: 120,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    facilities: ["WiFi Cepat 120 Mbps", "Steker di Setiap Meja", "Coffee Discount 15%", "Area AC & Non-AC", "Air Mineral Gratis"],
    address: "Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12190"
  },
  {
    id: "ws-2",
    name: "The Glasshouse Lounge",
    area: "Dago, Bandung",
    description: "Lounge premium berbalut kaca dengan pemandangan perbukitan Dago yang asri. Memberikan ketenangan bekerja di tengah udara sejuk dengan pilihan kopi khas Jawa Barat.",
    pricePerHour: 35000,
    rating: 4.9,
    reviewsCount: 98,
    wifiSpeedMbps: 150,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    facilities: ["WiFi Cepat 150 Mbps", "Colokan Listrik", "Ergonomic Chairs", "Outdoor Garden View", "Teh & Kopi Premium"],
    address: "Jl. Dago Pakar No. 17, Ciburial, Kec. Cimenyan, Bandung, Jawa Barat 40198"
  },
  {
    id: "ws-3",
    name: "Bloom & Brew Cafe",
    area: "Canggu, Bali",
    description: "Estetika tropis berpadu dengan fungsionalitas workspace tinggi. Lokasi favorit para digital nomad internasional dengan koneksi internet serat optik super stabil.",
    pricePerHour: 40000,
    rating: 4.9,
    reviewsCount: 215,
    wifiSpeedMbps: 200,
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=800",
    facilities: ["WiFi Cepat 200 Mbps", "Meja Tinggi Ergonomis", "Free Pool Access", "AC Dingin", "Power Outlet Universal"],
    address: "Jl. Batu Bolong No. 88, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali 80361"
  },
  {
    id: "ws-4",
    name: "Ruang Teduh Cafe & Work",
    area: "Sleman, Yogyakarta",
    description: "Suasana tenang khas Jogja dengan sentuhan arsitektur kayu tradisional. Sangat cocok bagi mahasiswa, freelancer, dan akademisi yang mencari fokus berkarya.",
    pricePerHour: 20000,
    rating: 4.7,
    reviewsCount: 86,
    wifiSpeedMbps: 100,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800",
    facilities: ["WiFi Cepat 100 Mbps", "Suasana Tenang", "Harga Mahasiswa", "Bebas Parkir", "Steker Melimpah"],
    address: "Jl. Kaliurang KM 5.6, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281"
  },
  {
    id: "ws-5",
    name: "Nomaden Coffee & Lounge",
    area: "Gubeng, Surabaya",
    description: "Workspace modern di pusat bisnis Surabaya Timur. Layout meja dirancang khusus agar ideal untuk meeting kasual maupun sesi deep work perorangan.",
    pricePerHour: 25000,
    rating: 4.6,
    reviewsCount: 104,
    wifiSpeedMbps: 115,
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=800",
    facilities: ["WiFi Cepat 115 Mbps", "Ruang Rapat Kecil", "Ergonomic Desk", "Sofa Santai", "Free Infused Water"],
    address: "Jl. Raya Gubeng No. 12, Gubeng, Kec. Gubeng, Kota Surabaya, Jawa Timur 60281"
  },
  {
    id: "ws-6",
    name: "Urban Oasis Coffee",
    area: "Menteng, Jakarta Pusat",
    description: "Restorasi rumah kolonial Belanda yang megah menjadi pusat produktivitas di Menteng. Menawarkan suasana eksklusif, tenang, dan dikelilingi rindangnya pepohonan.",
    pricePerHour: 30000,
    rating: 4.8,
    reviewsCount: 75,
    wifiSpeedMbps: 140,
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=800",
    facilities: ["WiFi Cepat 140 Mbps", "Area Outdoor Rindang", "Steker USB Built-in", "Teh Herbal Gratis", "Layanan Printer"],
    address: "Jl. Teuku Umar No. 5, Menteng, Kec. Menteng, Kota Jakarta Pusat, DKI Jakarta 10310"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Jessica Amanda",
    profession: "Freelance Graphic Designer",
    rating: 5,
    comment: "Booking di Kopi Teman Sejalan lewat Work Well gampang banget! Cukup datang, scan QR, langsung bisa kerja tenang. Harganya terjangkau banget dibanding sewa coworking space bulanan, dan dapet diskon kopinya lagi!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "test-2",
    name: "Rian Dwi",
    profession: "Remote Software Engineer",
    rating: 5,
    comment: "Sangat membantu remote worker seperti saya yang sering bosan kerja dari rumah. Work Well ngasih alternatif tempat kerja baru setiap minggunya dengan jaminan WiFi kencang dan steker yang mumpuni. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: "test-3",
    name: "Farhan Alatas",
    profession: "Founder Tech Startup",
    rating: 5,
    comment: "Konsep revenue sharing-nya top banget untuk pemilik kafe. Coffee shop milik saya yang biasanya sepi di hari kerja (Senin-Kamis) jam siang, sekarang selalu terisi penuh oleh para pekerja lepas. Pendapatan pasif naik signifikan!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
  }
];

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Bagaimana cara melakukan booking workspace?",
    answer: "Caranya sangat mudah! Cari workspace favorit Anda di kota Anda melalui platform kami, pilih jadwal kunjungan (tanggal dan jam), tentukan durasi sewa, lalu selesaikan pembayaran instan online. Setelah berhasil, Anda akan menerima e-ticket lengkap dengan kode QR untuk check-in di lokasi."
  },
  {
    id: "faq-2",
    question: "Bagaimana sistem bagi hasil (revenue sharing) untuk Mitra?",
    answer: "Kami menggunakan model bagi hasil yang transparan dan bersahabat yaitu 70% untuk Mitra (pemilik tempat) dan 30% untuk Work Well (platform komisi). Setiap pemesanan yang masuk akan dicatat secara real-time dan diakumulasikan secara mingguan tanpa ada potongan administrasi tersembunyi."
  },
  {
    id: "faq-3",
    question: "Apakah ada biaya langganan bulanan bagi pengguna atau Mitra?",
    answer: "Tidak ada biaya berlangganan bulanan atau tahunan (Zero Subscription). Pengguna hanya membayar per jam sesuai dengan workspace yang mereka pesan secara fleksibel. Begitu pula bagi Mitra, pendaftaran dan publikasi ruang usaha Anda di platform Work Well 100% GRATIS."
  },
  {
    id: "faq-4",
    question: "Metode pembayaran apa saja yang didukung?",
    answer: "Kami menyediakan berbagai opsi pembayaran digital yang aman dan instan di Indonesia, meliputi QRIS (bisa scan menggunakan GoPay, OVO, ShopeePay, Dana, LinkAja, serta Mobile Banking), Transfer Virtual Account (BCA, Mandiri, BNI, BRI), serta Kartu Kredit."
  },
  {
    id: "faq-5",
    question: "Bagaimana cara bergabung menjadi Mitra Work Well?",
    answer: "Jika Anda memiliki coffee shop, lounge, restoran, ruang pertemuan hotel, atau ruang komersial menganggur lainnya, Anda tinggal mengeklik tombol 'Jadi Mitra' di bagian atas atau bawah halaman ini. Isi formulir singkat mengenai profil tempat Anda, dan tim kurasi Work Well akan menjadwalkan verifikasi tempat dalam kurun waktu 1x24 jam."
  }
];

export const communityData: CommunityType[] = [
  {
    id: "comm-1",
    title: "Creative Hub & Content Creator (Jakarta Chapter)",
    description: "Ruang kolaborasi kreatif bagi para desainer, penulis, dan pembuat konten digital. Hadir dengan sesi sharing dan networking bulanan. (Upcoming - Q3 2026)",
    bgGradient: "from-[#8B5E3C]/10 to-[#5A3B28]/5",
    icon: "Users"
  },
  {
    id: "comm-2",
    title: "Digital Nomad & Tech Founders (Bali Chapter)",
    description: "Wadah bertukar gagasan bagi remote engineers, freelancer, dan pendiri tech startup. Dilengkapi program bimbingan dan kolaborasi proyek. (Upcoming - Q4 2026)",
    bgGradient: "from-[#DCC3AA]/20 to-[#8B5E3C]/5",
    icon: "Rocket"
  }
];
