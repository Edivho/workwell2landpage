import React from "react";
import { Coffee, Mail, Instagram, Linkedin, ArrowUp } from "lucide-react";

interface FooterProps {
  onScrollToSection: (id: string) => void;
  onSearchClick: () => void;
  onPartnerClick: () => void;
}

export default function Footer({ onScrollToSection, onSearchClick, onPartnerClick }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-brown text-[#F7F3EE] pt-16 pb-12 border-t border-[#8B5E3C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#F7F3EE]/10">
          {/* Logo and Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={scrollToTop} id="footer-logo">
              <div className="w-10 h-10 rounded-xl bg-primary-brown flex items-center justify-center text-white">
                <Coffee size={20} className="stroke-[2.5]" />
              </div>
              <div>
                <span className="font-display font-extrabold text-xl tracking-tight text-white">
                  Work<span className="text-light-brown">Well</span>
                </span>
                <span className="block text-[10px] tracking-widest uppercase font-semibold text-light-brown/70 -mt-1">
                  Open Office Space
                </span>
              </div>
            </div>
            <p className="text-sm text-light-brown/80 leading-relaxed max-w-sm">
              Work Well membantu masyarakat mengakses ruang kerja premium berfasilitas lengkap di dalam coffee shop dan lounge lokal terdekat, sambil memberdayakan mitra bisnis untuk memaksimalkan utilitas ruang mereka.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-light-brown">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-sm text-light-brown/80">
              <li>
                <button
                  onClick={() => onScrollToSection("cara-kerja")}
                  className="hover:text-white transition-colors cursor-pointer"
                  id="footer-link-cara"
                >
                  Cara Kerja
                </button>
              </li>
              <li>
                <button
                  onClick={onSearchClick}
                  className="hover:text-white transition-colors cursor-pointer"
                  id="footer-link-cari"
                >
                  Cari Workspace
                </button>
              </li>
              <li>
                <button
                  onClick={onPartnerClick}
                  className="hover:text-white transition-colors cursor-pointer"
                  id="footer-link-mitra"
                >
                  Menjadi Partner
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection("faq")}
                  className="hover:text-white transition-colors cursor-pointer"
                  id="footer-link-faq"
                >
                  Pertanyaan Umum (FAQ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection("komunitas")}
                  className="hover:text-white transition-colors cursor-pointer"
                  id="footer-link-komunitas"
                >
                  Komunitas Mitra & Pengguna
                </button>
              </li>
            </ul>
          </div>

          {/* Contact and Socials */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-semibold text-sm tracking-widest uppercase text-light-brown">
              Hubungi Kami
            </h4>
            <div className="space-y-3 text-sm text-light-brown/80">
              <a
                href="mailto:hello@workwell.co.id"
                className="flex items-center gap-2 hover:text-white transition-colors"
                id="footer-contact-email"
              >
                <Mail size={16} />
                <span>hello@workwell.co.id</span>
              </a>
              <div className="flex gap-4 pt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#8B5E3C]/30 flex items-center justify-center text-[#F7F3EE] hover:bg-[#8B5E3C] hover:text-white transition-colors"
                  aria-label="Instagram"
                  id="footer-social-ig"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#8B5E3C]/30 flex items-center justify-center text-[#F7F3EE] hover:bg-[#8B5E3C] hover:text-white transition-colors"
                  aria-label="LinkedIn"
                  id="footer-social-in"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
            <p className="text-xs text-light-brown/50 pt-4 leading-relaxed">
              Kantor Pusat:
              <br />
              Sudirman Central Business District (SCBD), Lantai 24, Jakarta Selatan, Indonesia.
            </p>
          </div>
        </div>

        {/* Copyright and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-light-brown/60">
          <span>&copy; 2026 Work Well – Open Office Space. Hak Cipta Dilindungi.</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-brown/20 border border-[#8B5E3C]/20 hover:bg-primary-brown/40 hover:text-white transition-colors cursor-pointer text-xs"
            id="footer-btn-top"
          >
            Kembali ke Atas
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
