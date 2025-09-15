'use client'; 

import Image from 'next/image'; 
import SpaceBackground from '../components/frontend/background';
import Menu from '../components/nav/menu';
import { orbitron } from '../components/frontend/textfont';

export default function HomePage() {
  
  const handleLinkClick = () => {
    
  };

  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <SpaceBackground />

      <div className="absolute top-0 w-full flex justify-center">
        <nav className="mt-4 w-[85vw] md:w-[70vw] lg:w-[60vw] h-14 rounded-3xl px-4 py-2 border border-white/5 bg-white/5 flex justify-between items-center backdrop-blur-lg">
          <div id="leftSec">
            <a href="#home" onClick={handleLinkClick}>
              <Image
                src="/Rotaract_Atria_Logo.png" 
                alt="Rotaract Club Logo"
                width={120} 
                height={30} 
                className="object-contain"
                priority
              />
            </a>
          </div>
          <div id="rightSec" className="text-white/70">
            <Menu />
          </div>
        </nav>
      </div>

      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-auto h-auto text-gray-300 text-center">
          <h1 
            className={`${orbitron.className} text-7xl md:text-9xl font-extrabold tracking-tight cosmic-gradient`}
          >
            <b>CYPER 4.0</b>
          </h1>
          <p 
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Innovate. Create. Inspire. Join us for a weekend of creation and collaboration.
          </p>
        </div>
      </div>
    </main>
  );
}

