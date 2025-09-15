'use client'; // Needed for state and event handlers

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Function to handle link clicks and close the mobile menu
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      {/* Changed bg-blue-950/40 to bg-purple-950/40 for a cosmic purple glass effect */}
      <nav className="mt-4 w-[90vw] max-w-4xl rounded-full px-6 py-3 border border-white/10 bg-purple-950/40 backdrop-blur-xl flex justify-between items-center">
        
        {/* Left Section: Logo */}
        <div id="leftSec">
          <a href="#home" onClick={handleLinkClick}>
            <Image
              src="/Rotaract_Atria_Logo.png" // IMPORTANT: Place your logo in the 'public' folder
              alt="Rotaract Club Logo"
              width={120} 
              height={30} 
              className="object-contain"
              priority
            />
          </a>
        </div>

        {/* Right Section: Menu */}
        <div id="rightSec" className="text-white/80">
          {/* Desktop Links (Visible on medium screens and up) */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#aboutus" onClick={handleLinkClick} className="transition hover:text-white">About Us</a>
            <a href="#statement" onClick={handleLinkClick} className="transition hover:text-white">Statements</a>
            <a href="#FAQs" onClick={handleLinkClick} className="transition hover:text-white">FAQs</a>
          </div>
          
          {/* Mobile Menu Toggle Button (Visible on small screens) */}
          <div className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown (Burgeoning Menu) */}
      {/* Changed bg-blue-950/60 to bg-purple-950/60 */}
      <div 
        className={`
          md:hidden
          absolute top-20 w-[90vw]
          flex flex-col items-center gap-4 px-6 py-4
          border border-white/10 rounded-3xl bg-purple-950/60 backdrop-blur-xl
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}
      >
        <a href="#aboutus" onClick={handleLinkClick} className="transition hover:text-white">About Us</a>
        <a href="#statement" onClick={handleLinkClick} className="transition hover:text-white">Statements</a>
        <a href="#Roadmap" onClick={handleLinkClick} className="transition hover:text-white">Roadmap</a>
        <a href="#FAQs" onClick={handleLinkClick} className="transition hover:text-white">FAQs</a>
      </div>
    </header>
  );
};

export default Header;

