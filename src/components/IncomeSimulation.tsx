import React, { useState } from "react";
import { Calculator, DollarSign, ArrowRight, ShieldCheck, TrendingUp, Info } from "lucide-react";

export default function IncomeSimulation() {
  // Simulator State
  const [price, setPrice] = useState<number>(30000); // Rp30.000/jam
  const [bookingsPerDay, setBookingsPerDay] = useState<number>(10); // 10 booking jam per hari
  const [days, setDays] = useState<number>(30); // 30 hari operasional

  // Calculation formulas
  const grossMonthlyIncome = price * bookingsPerDay * days;
  const partnerShare = grossMonthlyIncome * 0.70;
  const platformShare = grossMonthlyIncome * 0.30;

  // Formatting utility for Rupiah
  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section id="simulasi" className="py-24 bg-white border-y border-[#DCC3AA]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary-brown bg-primary-brown/5 px-3.5 py-1.5 rounded-full border border-primary-brown/10">
            Kalkulator Finansial
          </span>
          <h2 className="mt-4 font-display font-bold text-3xl sm:text-4xl text-dark-brown tracking-tight">
            Simulasi Pendapatan Mitra
          </h2>
          <p className="mt-3 text-base text-light-gray">
            Hitung sendiri potensi keuntungan bulanan yang bisa didapatkan dari meja atau kursi kosong di tempat usaha Anda.
          </p>
        </div>

        {/* Simulator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Controls - Left side */}
          <div className="lg:col-span-5 bg-[#F7F3EE] rounded-3xl p-8 border border-[#DCC3AA]/30 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-[#DCC3AA]/30">
                <div className="w-8 h-8 rounded-lg bg-primary-brown/10 text-primary-brown flex items-center justify-center">
                  <Calculator size={18} />
                </div>
                <h3 className="font-display font-bold text-lg text-dark-brown">
                  Parameter Keuntungan
                </h3>
              </div>

              {/* Slider 1: Harga Workspace */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-dark-text">Harga Sewa per Jam</span>
                  <span className="font-mono font-bold text-primary-brown text-base">
                    {formatRupiah(price)}/jam
                  </span>
                </div>
                <input
                  type="range"
                  min="15000"
                  max="60000"
                  step="2500"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full h-2 bg-[#DCC3AA]/40 rounded-lg appearance-none cursor-pointer accent-primary-brown focus:outline-none"
                  id="slider-price"
                />
                <div className="flex justify-between text-[11px] text-light-gray font-mono">
                  <span>Rp15.000</span>
                  <span>Rp30.000</span>
                  <span>Rp60.000</span>
                </div>
              </div>

              {/* Slider 2: Jam Booking Per Hari */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-dark-text">Total Jam Booking / Hari</span>
                  <span className="font-mono font-bold text-primary-brown text-base">
                    {bookingsPerDay} Jam
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="16"
                  step="1"
                  value={bookingsPerDay}
                  onChange={(e) => setBookingsPerDay(Number(e.target.value))}
                  className="w-full h-2 bg-[#DCC3AA]/40 rounded-lg appearance-none cursor-pointer accent-primary-brown focus:outline-none"
                  id="slider-bookings"
                />
                <div className="flex justify-between text-[11px] text-light-gray font-mono">
                  <span>1 Jam</span>
                  <span>8 Jam</span>
                  <span>16 Jam</span>
                </div>
              </div>

              {/* Slider 3: Hari Operasional */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium text-dark-text">Hari Operasional / Bulan</span>
                  <span className="font-mono font-bold text-primary-brown text-base">
                    {days} Hari
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full h-2 bg-[#DCC3AA]/40 rounded-lg appearance-none cursor-pointer accent-primary-brown focus:outline-none"
                  id="slider-days"
                />
                <div className="flex justify-between text-[11px] text-light-gray font-mono">
                  <span>5 Hari</span>
                  <span>15 Hari</span>
                  <span>30 Hari</span>
                </div>
              </div>
            </div>

            {/* Quick Fact */}
            <div className="bg-[#DCC3AA]/15 rounded-2xl p-4 border border-[#DCC3AA]/30 flex gap-3 text-xs text-dark-brown leading-relaxed">
              <Info size={16} className="text-primary-brown shrink-0 mt-0.5" />
              <span>
                Asumsi: Jika rata-rata terdapat <strong>5-10 slot meja</strong> aktif terpesan bergantian oleh pengguna sepanjang jam operasional Anda.
              </span>
            </div>
          </div>

          {/* Results - Right side */}
          <div className="lg:col-span-7 bg-[#5A3B28] text-white rounded-3xl p-8 sm:p-10 border border-[#8B5E3C]/30 flex flex-col justify-between shadow-xl relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute -right-16 -top-16 w-48 h-48 bg-[#8B5E3C] opacity-20 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-8 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#DCC3AA] bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  Hasil Perhitungan Bulanan
                </span>
                <TrendingUp size={18} className="text-[#DCC3AA]" />
              </div>

              {/* Total gross income */}
              <div>
                <span className="text-sm text-[#DCC3AA] block">Estimasi Pendapatan Kotor</span>
                <span className="font-mono font-extrabold text-3xl sm:text-4xl text-[#F7F3EE] tracking-tight mt-1 block">
                  {formatRupiah(grossMonthlyIncome)}
                </span>
                <span className="text-xs text-white/50 block mt-1">Total akumulasi booking terkumpul sebelum sistem bagi hasil</span>
              </div>

              {/* Revenue Splits Display */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {/* Partner Card */}
                <div className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold tracking-wider text-[#DCC3AA] uppercase">
                      Bagian Mitra (70%)
                    </span>
                    <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                      Sukses
                    </span>
                  </div>
                  <span className="font-mono font-bold text-2xl text-white block mt-2">
                    {formatRupiah(partnerShare)}
                  </span>
                  <span className="text-[11px] text-white/60 mt-1 block">Bersih dikirim langsung ke rekening bank Anda</span>
                </div>

                {/* Work Well Card */}
                <div className="bg-white/5 rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all">
                  <span className="text-xs font-semibold tracking-wider text-[#DCC3AA] uppercase block">
                    Komisi Platform (30%)
                  </span>
                  <span className="font-mono font-bold text-2xl text-light-brown block mt-2">
                    {formatRupiah(platformShare)}
                  </span>
                  <span className="text-[11px] text-white/60 mt-1 block">Biaya pengelolaan sistem, garansi keamanan, & promosi</span>
                </div>
              </div>
            </div>

            {/* Extra assurance footer */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-white/60 relative z-10">
              <div className="flex items-center gap-1.5 text-[#DCC3AA]">
                <ShieldCheck size={16} />
                <span>Tanpa Biaya Admin Tersembunyi</span>
              </div>
              <span>Sistem bagi hasil dibayar tepat waktu setiap minggunya.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
