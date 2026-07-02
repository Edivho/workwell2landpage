import React from "react";
import { Coffee, MapPin, Sparkles, UserPlus } from "lucide-react";

interface HeaderProps {
  onSearchClick: () => void;
  onPartnerClick: () => void;
  onScrollToSection: (id: string) => void;
}

export default function Header({ onSearchClick, onPartnerClick, onScrollToSection }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#F7F3EE]/80 border-b border-[#DCC3AA]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => onScrollToSection("hero")}
          className="flex items-center gap-2 cursor-pointer group"
          id="header-logo"
        >
          <div className="w-10 h-10 rounded-xl bg-primary-brown flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105 shadow-md">
            <Coffee size={20} className="stroke-[2.5]" />
          </div>
          <div>
            <span className="font-display font-extrabold text-xl tracking-tight text-dark-brown">
              Work<span className="text-primary-brown">Well</span>
            </span>
            <span className="block text-[10px] tracking-widest uppercase font-semibold text-light-gray -mt-1">
              Open Office Space
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => onScrollToSection("cara-kerja")}
            className="text-sm font-medium text-dark-text hover:text-primary-brown transition-colors cursor-pointer"
            id="nav-cara-kerja"
          >
            Cara Kerja
          </button>
          <button 
            onClick={() => onScrollToSection("mengapa-kami")}
            className="text-sm font-medium text-dark-text hover:text-primary-brown transition-colors cursor-pointer"
            id="nav-mengapa"
          >
            Mengapa Kami
          </button>
          <button 
            onClick={() => onScrollToSection("bagi-hasil")}
            className="text-sm font-medium text-dark-text hover:text-primary-brown transition-colors cursor-pointer"
            id="nav-bagi-hasil"
          >
            Bagi Hasil
          </button>
          <button 
            onClick={() => onScrollToSection("komunitas")}
            className="text-sm font-medium text-dark-text hover:text-primary-brown transition-colors cursor-pointer"
            id="nav-komunitas"
          >
            Komunitas
          </button>
          <button 
            onClick={() => onScrollToSection("faq")}
            className="text-sm font-medium text-dark-text hover:text-primary-brown transition-colors cursor-pointer"
            id="nav-faq"
          >
            FAQ
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onSearchClick}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-primary-brown bg-primary-brown/5 border border-primary-brown/20 hover:bg-primary-brown/10 transition-all cursor-pointer"
            id="btn-header-cari"
          >
            <MapPin size={15} />
            Cari Workspace
          </button>
          <button
            onClick={onPartnerClick}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium text-white bg-primary-brown hover:bg-dark-brown transition-all shadow-sm hover:shadow-md cursor-pointer"
            id="btn-header-mitra"
          >
            <UserPlus size={15} />
            Jadi Mitra
          </button>
        </div>
      </div>
    </header>
  );
}
