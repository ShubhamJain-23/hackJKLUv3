"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import HomeComponent from './components/home';
import Footer from './components/footer';

const Home: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="/bg.png"
          alt="Background Image"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-25"
        />
      </div>

      <HomeComponent />
    </div>
  );
};

export default Home;
