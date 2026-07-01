'use client'
import { Download, Sparkles, Code2, Award, ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ setIsMenuOpen }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            className="mb-8"
          >
            <div className="relative w-40 h-40 mx-auto mb-6">
              <motion.div
                // animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1"
              >
                <div className="w-full h-full rounded-full bg-white p-1">
                  <img
                    src="/Azeem_Ahmad.png"
                    alt="Azeem Ahmad"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl"></div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <Sparkles className="w-6 h-6 text-yellow-500" />
              <span className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Welcome to my portfolio</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl font-extrabold mb-6 leading-tight ">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Azeem{' '}
              </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Ahmad
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4"
          >
            <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-2 flex items-center justify-center gap-3 ">
              <Code2 className="w-6 h-6 text-blue-600" />
              Full Stack Developer
            </p>
            <p className="text-lg md:text-xl text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-medium flex items-center justify-center gap-2">
              <Award className="w-5 h-5 text-purple-600" />
              Competitive Programmer
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Crafting scalable web applications with modern technologies. 
            Passionate about clean code and innovative solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            {/* <motion.a
              href="/Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 cursor-pointer overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <Download size={20} className="relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </motion.a> */}
            
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 rounded-xl font-semibold cursor-pointer overflow-hidden group border-2 border-blue-600 text-blue-600 hover:text-white transition-colors duration-300 shadow-md hover:shadow-xl"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative z-10">Contact Me</span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center gap-4 mb-16"
          >
            {[
              { icon: Github, href: 'https://github.com/code-azeemahmad', color: 'hover:text-gray-900' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/azeem-ahmad327/', color: 'hover:text-blue-600' },
              { icon: Mail, href: 'mailto:azeemahmadd9@gmail.com', color: 'hover:text-purple-600' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 rounded-xl bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl text-gray-600 ${social.color} transition-all duration-300`}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mb-2 flex flex-col items-center cursor-pointer"
            onClick={() => scrollToSection('about')}
          >
            <span className="text-sm text-gray-500 mb-2 font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-8 text-blue-600" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </section>
  );
}
