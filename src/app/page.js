"use client"
import React, { useState, useEffect } from 'react';
import Hero from '@/sections/Hero';
import NavigationBar from './components/navbar';
import About from '@/sections/About';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import Footer from './components/Footer';
import DotGrid from './components/DotGrid';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotGrid
          dotSize={5}
          gap={40}
          baseColor="#cbd5e1" // Base color (light gray)
          activeColors={[
            '#FF6B6B', // Red
            '#FF9F43', // Orange
            '#FECA57', // Yellow
            '#48DBFB', // Light Blue
            '#0ABDE3', // Blue
            '#10AC84', // Green
            '#FF6BFF', // Pink
            '#A29BFE', // Purple
            '#FD79A8', // Rose
            '#00CEC9', // Teal
          ]}
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={1650}
          returnDuration={1.2}
        />
      </div>
      <div className="relative z-10">
        <NavigationBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrolled={scrolled} />
        <div className='mt-5'>
          <Hero setIsMenuOpen={setIsMenuOpen} />
        </div>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}