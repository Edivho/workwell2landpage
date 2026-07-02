import React, { useState } from "react";
import { 
  X, UserPlus, Send, CheckCircle, Coffee, Check, Building2, Phone, MapPin, 
  HelpCircle, Sparkles, ClipboardCheck, ArrowRight
} from "lucide-react";

interface PartnerFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PartnerForm({ isOpen, onClose }: PartnerFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    phone: "",
    city: "Jakarta",
    seats: "5-10 Meja",
    expectPrice: "25000",
  });

  const [facilities, setFacilities] = useState<string[]>([
    "WiFi Cepat",
    "Steker Listrik"
  ]);

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  if (!isOpen) return null;

  const toggleFacility = (fac: string) => {
    if (facilities.includes(fac)) {
      setFacilities(facilities.filter(f => f !== fac));
    } else {
      setFacilities([...facilities, fac]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.businessName || !formData.phone) {
      alert("Harap lengkapi semua bidang wajib!");
      return;
    }

    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      businessName: "",
      phone: "",
      city: "Jakarta",
      seats: "5-10 Meja",
      expectPrice: "25000",
    });
    setFacilities(["WiFi Cepat", "Steker Listrik"]);
    setSubmitted(false);
  };

  const availableFacilities = [
    "WiFi Cepat",
    "Steker Listrik",
    "AC Dingin",
    "Area Outdoor",
    "Diskon Kopi/F&B",
    "Ruang Meeting",
    "Air Mineral Gratis",
    "Parkir Luas"
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-dark-brown/75 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="bg-[#F7F3EE] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-[#DCC3AA]/40 flex flex-col"
        id="partner-form-modal"
      >
        {/* Header bar */}
        <div className="px-6 py-4 bg-white border-b border-[#DCC3AA]/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary-brown flex items-center justify-center text-white">
              <UserPlus size={16} />
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-dark-brown">
                {submitted ? "Mitra Pendaftaran Berhasil!" : "Pendaftaran Mitra Work Well"}
              </h2>
              <p className="text-xs text-light-gray">
                {submitted ? "Terima kasih atas kepercayaan Anda" : "Ubah kursi kosong kafe Anda menjadi peluang profit"}
              </p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-black/5 text-dark-brown transition-colors cursor-pointer"
            id="btn-close-partner"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="p-6 overflow-y-auto max-h-[80vh]">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Info text card */}
              <div className="bg-[#8B5E3C]/5 border border-[#8B5E3C]/10 rounded-2xl p-4 flex gap-3 text-xs text-dark-brown leading-relaxed">
                <Sparkles size={16} className="text-primary-brown shrink-0 mt-0.5" />
                <span>
                  Gabung bersama ratusan pemilik kafe, lounge, dan restoran di Indonesia. Raih keuntungan dari skema bagi hasil <strong>70% Mitra : 30% Work Well</strong>.
                </span>
              </div>

              {/* Input Full Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-dark-brown uppercase tracking-wide flex items-center gap-1">
                  <Phone size={12} className="text-primary-brown" />
                  Nama Lengkap Pemilik / Pengelola <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Andi Wijaya"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#DCC3AA]/40 rounded-xl focus:outline-none focus:border-primary-brown text-sm text-dark-text"
                  id="input-partner-fullname"
                />
              </div>

              {/* Input Business Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-dark-brown uppercase tracking-wide flex items-center gap-1">
                  <Building2 size={12} className="text-primary-brown" />
                  Nama Bisnis / Kafe / Lounge <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Kopi Teman Pagi"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#DCC3AA]/40 rounded-xl focus:outline-none focus:border-primary-brown text-sm text-dark-text"
                  id="input-partner-business"
                />
              </div>

              {/* Input WhatsApp / Phone */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-dark-brown uppercase tracking-wide flex items-center gap-1">
                  <Phone size={12} className="text-primary-brown" />
                  Nomor WhatsApp Aktif <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Contoh: 081234567890"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#DCC3AA]/40 rounded-xl focus:outline-none focus:border-primary-brown text-sm text-dark-text"
                  id="input-partner-phone"
                />
              </div>

              {/* Select City & Seats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-dark-brown uppercase tracking-wide flex items-center gap-1">
                    <MapPin size={12} className="text-primary-brown" />
                    Kota Lokasi
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#DCC3AA]/40 rounded-xl focus:outline-none focus:border-primary-brown text-sm text-dark-text"
                    id="select-partner-city"
                  >
                    <option value="Jakarta">Jakarta</option>
                    <option value="Bandung">Bandung</option>
                    <option value="Bali">Bali</option>
                    <option value="Yogyakarta">Yogyakarta</option>
                    <option value="Surabaya">Surabaya</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-dark-brown uppercase tracking-wide flex items-center gap-1">
                    <Coffee size={12} className="text-primary-brown" />
                    Estimasi Kapasitas
                  </label>
                  <select
                    value={formData.seats}
                    onChange={(e) => setFormData({ ...formData, seats: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#DCC3AA]/40 rounded-xl focus:outline-none focus:border-primary-brown text-sm text-dark-text"
                    id="select-partner-seats"
                  >
                    <option value="1-5 Meja">1-5 Slot Meja</option>
                    <option value="5-10 Meja">5-10 Slot Meja</option>
                    <option value="11-20 Meja">11-20 Slot Meja</option>
                    <option value=">20 Meja">&gt; 20 Slot Meja</option>
                  </select>
                </div>
              </div>

              {/* Checkbox Facilities */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-dark-brown uppercase tracking-wide block">Fasilitas yang Tersedia</label>
                <div className="grid grid-cols-2 gap-2">
                  {availableFacilities.map((fac) => (
                    <div 
                      key={fac}
                      onClick={() => toggleFacility(fac)}
                      className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                        facilities.includes(fac)
                          ? "bg-primary-brown/5 border-primary-brown text-primary-brown font-bold"
                          : "bg-white border-[#DCC3AA]/30 text-dark-text"
                      }`}
                      id={`chk-fac-${fac.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                      <span className={`w-4   h-4 rounded-md border flex items-center justify-center shrink-0 ${
                        facilities.includes(fac) ? "bg-primary-brown border-primary-brown text-white" : "border-[#DCC3AA]/60 bg-white"
                      }`}>
                        {facilities.includes(fac) && <Check size={10} className="stroke-[3]" />}
                      </span>
                      <span>{fac}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3 bg-primary-brown hover:bg-dark-brown disabled:bg-primary-brown/50 text-white font-bold rounded-xl shadow-md transition-all cursor-pointer text-sm flex items-center justify-center gap-2"
                id="btn-submit-partner"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Memproses pendaftaran...</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Daftar Menjadi Mitra</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            /* SUBMITTED SUCCESS STATE */
            <div className="space-y-8 py-4">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto">
                  <CheckCircle size={36} className="stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-xl text-dark-brown">Pendaftaran Sukses!</h3>
                  <p className="text-xs text-light-gray mt-1">Data Anda telah masuk dalam sistem kurasi partner Work Well</p>
                </div>
              </div>

              {/* Verification Timeline */}
              <div className="bg-white rounded-2xl p-6 border border-[#DCC3AA]/30 space-y-6">
                <h4 className="font-display font-bold text-xs text-dark-brown uppercase tracking-wider flex items-center gap-1">
                  <ClipboardCheck size={14} className="text-primary-brown" />
                  Alur Verifikasi Mitra
                </h4>
                
                <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-green-100">
                  {/* Step 1: Form submitted */}
                  <div className="flex gap-4 relative">
                    <div className="w-6 h-6 rounded-full bg-green-600 border-4 border-white shadow-sm flex items-center justify-center text-white text-[10px] font-bold z-10 shrink-0">
                      ✓
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-dark-brown">Formulir Terkirim</h5>
                      <p className="text-xs text-light-gray">
                        Tim kurasi kami berhasil menerima data untuk kafe <strong>{formData.businessName}</strong>.
                      </p>
                    </div>
                  </div>

                  {/* Step 2: Verification schedule */}
                  <div className="flex gap-4 relative">
                    <div className="w-6 h-6 rounded-full bg-green-500 border-4 border-white shadow-sm flex items-center justify-center text-white text-[10px] font-bold z-10 shrink-0">
                      2
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-dark-brown">Jadwal Kontak Verifikasi</h5>
                      <p className="text-xs text-light-gray">
                        Tim kurasi kami akan menghubungi pemilik (<strong>{formData.fullName}</strong>) di nomor <strong>{formData.phone}</strong> melalui WhatsApp dalam waktu 1x24 jam untuk verifikasi foto dan fasilitas.
                      </p>
                    </div>
                  </div>

                  {/* Step 3: Activation */}
                  <div className="flex gap-4 relative">
                    <div className="w-6 h-6 rounded-full bg-[#DCC3AA] border-4 border-white shadow-sm flex items-center justify-center text-white text-[10px] font-bold z-10 shrink-0">
                      3
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-light-gray">Aktivasi & Live Booking</h5>
                      <p className="text-xs text-light-gray">
                        Setelah disetujui, workspace Anda akan otomatis tayang di web/aplikasi dan Anda siap menerima pendapatan bagi hasil langsung.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action reset */}
              <div className="flex gap-4">
                <button
                  onClick={handleReset}
                  className="flex-1 py-2.5 bg-white border border-[#DCC3AA] text-dark-brown font-bold rounded-xl text-xs transition-colors cursor-pointer"
                  id="btn-partner-reset"
                >
                  Daftarkan Kafe Lain
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 bg-primary-brown hover:bg-dark-brown text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
                  id="btn-partner-close-success"
                >
                  Kembali ke Beranda
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
