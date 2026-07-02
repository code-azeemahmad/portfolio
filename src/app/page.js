"use client"
import React, { useState, useEffect, useMemo } from 'react';
import Hero from '@/sections/Hero';
import NavigationBar from './components/navbar';
import About from '@/sections/About';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import Footer from './components/Footer';
import DotGrid from './components/DotGrid';
import FloatingChat from './components/FloatingChat'; // Import floating chat

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const dotGrid = useMemo(() => (
    <DotGrid
      dotSize={5}
      gap={50}
      baseColor="#cbd5e1"
      activeColors={['#FF6B6B', '#FF9F43', '#FECA57', '#48DBFB', '#0ABDE3', '#10AC84']}
      proximity={100}
      shockRadius={200}
      shockStrength={4}
      resistance={1650}
      returnDuration={1.2}
      fps={25}
      reduceOnScroll={true}
      maxDots={400}
    />
  ), []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {dotGrid}
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
      
      {/* Floating Chat - Appears on all pages */}
      <FloatingChat />
    </div>
  );
}