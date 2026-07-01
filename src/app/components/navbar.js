'use client'
import React, { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NavigationBar = ({ isMenuOpen, setIsMenuOpen, scrolled }) => {
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.id);
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        if (setIsMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled 
                    ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
                    : 'bg-white/60 backdrop-blur-md border-b border-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-2 cursor-pointer group"
                        onClick={() => scrollToSection('home')}
                    >
                        <Sparkles className="text-blue-600 w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                            Azeem Ahmad
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-2">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.id}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                onClick={() => scrollToSection(item.id)}
                                className={`relative cursor-pointer px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                    activeSection === item.id
                                        ? 'text-blue-600'
                                        : 'text-gray-700 hover:text-blue-600'
                                }`}
                            >
                                {item.label}
                                {activeSection === item.id && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 bg-blue-50 rounded-lg -z-10"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="md:hidden text-gray-700 p-2 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden bg-white/95 backdrop-blur-xl rounded-b-2xl border-t border-gray-100 py-2"
                        >
                            {navItems.map((item, index) => (
                                <button
                                    key={item.id}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        scrollToSection(item.id);
                                    }}
                                    className={`block w-full text-left px-6 py-4 transition-all duration-200 ${
                                        activeSection === item.id
                                            ? 'text-blue-600 bg-blue-50 font-semibold'
                                            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    )
}

export default NavigationBar