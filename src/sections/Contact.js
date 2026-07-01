'use client'
import React, { useRef } from 'react'
import { Mail, Phone, MapPin, Code, Linkedin, Github, Sparkles } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    return (
        <section ref={sectionRef} id="contact" className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
            {/* Simplified background - no animations for performance */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-block mb-4"
                    >
                        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                            Let's work together
                        </span>
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Let's discuss opportunities and collaborate on exciting projects
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="space-y-6"
                    >
                        {[
                            { icon: Mail, label: 'Email', value: 'azeemahmadd9@gmail.com', href: 'mailto:azeemahmadd9@gmail.com', gradient: 'from-blue-500 to-cyan-500' },
                            { icon: Phone, label: 'Phone', value: '+92-3362041965', href: 'tel:+923362041965', gradient: 'from-green-500 to-emerald-500' },
                            { icon: MapPin, label: 'Location', value: 'Lahore, Punjab, Pakistan', href: null, gradient: 'from-purple-500 to-pink-500' }
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                    whileHover={{ x: 10, scale: 1.02 }}
                                    className="group flex items-center gap-5 bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 cursor-pointer"
                                    onClick={() => item.href && window.open(item.href, '_self')}
                                >
                                    <div className={`relative p-4 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon className="text-white" size={28} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-gray-900 text-lg mb-1">{item.label}</p>
                                        <p className="text-gray-600 font-medium">{item.value}</p>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="pt-4"
                        >
                            <p className="font-bold text-gray-900 mb-5 text-lg">Connect with me:</p>
                            <div className="flex gap-4">
                                {[
                                    { icon: Linkedin, href: 'https://www.linkedin.com/in/azeem-ahmad327/', color: 'from-blue-600 to-blue-700', hoverColor: 'hover:from-blue-700 hover:to-blue-800' },
                                    { icon: Github, href: 'https://github.com/code-azeemahmad', color: 'from-gray-700 to-gray-900', hoverColor: 'hover:from-gray-800 hover:to-black' },
                                    { icon: Code, href: 'https://leetcode.com/u/code-azeem/', color: 'from-orange-500 to-orange-600', hoverColor: 'hover:from-orange-600 hover:to-orange-700' }
                                ].map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.15, rotate: 5 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`p-4 rounded-xl bg-gradient-to-br ${social.color} ${social.hoverColor} text-white shadow-lg hover:shadow-2xl transition-all duration-300`}
                                        >
                                            <Icon size={24} />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="relative"
                    >
                        <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-[2px] rounded-3xl overflow-hidden">
                            <div className="relative bg-white rounded-3xl p-10 h-full">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={isInView ? { scale: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.6, type: 'spring', bounce: 0.5 }}
                                    className="text-center mb-8"
                                >
                                    <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-xl">
                                        <Mail size={40} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Let's Connect</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Ready to bring your ideas to life? Drop me a message and let's create something amazing together!
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                    className="space-y-4"
                                >
                                    <motion.a
                                        href="mailto:azeemahmadd9@gmail.com"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg group relative overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            <Mail size={20} />
                                            Send Email
                                        </span>
                                        <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </motion.a>

                                    <motion.a
                                        href="tel:+923362041965"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="block bg-gradient-to-r from-green-600 to-emerald-600 text-white text-center py-4 px-6 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-semibold text-lg shadow-lg group relative overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            <Phone size={20} />
                                            Call Now
                                        </span>
                                        <span className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                    </motion.a>

                                    <div className="text-center text-gray-500 text-sm pt-4 flex items-center justify-center gap-2">
                                        <Sparkles className="w-4 h-4 text-purple-500" />
                                        <span>Available for freelance opportunities</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
