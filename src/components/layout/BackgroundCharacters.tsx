'use client';

import React from 'react';
import Image from 'next/image';

const BackgroundCharacters = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none select-none" style={{ zIndex: -1 }}>
      {/* Top Left */}
      <div className="absolute top-[10%] left-[-5%] w-64 h-64 bg-character animate-float opacity-10 md:opacity-15">
        <Image 
          src="/characters.png" 
          alt="background character" 
          fill
          style={{ objectFit: 'contain', mixBlendMode: 'multiply' }}
        />
      </div>

      {/* Mid Right */}
      <div className="absolute top-[40%] right-[-8%] w-80 h-80 bg-character animate-float-slow opacity-5 md:opacity-10" style={{ animationDelay: '-2s' }}>
        <Image 
          src="/characters.png" 
          alt="background character" 
          fill
          style={{ objectFit: 'contain', transform: 'rotate(15deg)', mixBlendMode: 'multiply' }}
        />
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-[15%] left-[5%] w-48 h-48 bg-character animate-float opacity-5 md:opacity-10" style={{ animationDelay: '-4s' }}>
        <Image 
          src="/characters.png" 
          alt="background character" 
          fill
          style={{ objectFit: 'contain', transform: 'rotate(-10deg)', mixBlendMode: 'multiply' }}
        />
      </div>

      {/* Top Right */}
      <div className="absolute top-[5%] right-[10%] w-40 h-40 bg-character animate-float-slow opacity-5 md:opacity-8" style={{ animationDelay: '-1s' }}>
        <Image 
          src="/characters.png" 
          alt="background character" 
          fill
          style={{ objectFit: 'contain', transform: 'scaleX(-1)', mixBlendMode: 'multiply' }}
        />
      </div>
    </div>
  );
};

export default BackgroundCharacters;
