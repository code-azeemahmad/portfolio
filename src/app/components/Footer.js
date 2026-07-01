'use client'
import React from 'react'
import { Heart, Code2, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-[float_8s_ease-in-out_infinite]"></div>
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-[float_10s_ease-in-out_infinite]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    {/* Decorative line */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-px w-20 bg-gradient-to-r from-transparent to-blue-500"></div>
                        <Sparkles className="w-5 h-5 text-blue-400" />
                        <div className="h-px w-20 bg-gradient-to-l from-transparent to-purple-500"></div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mb-6"
                    >
                        <p className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                            Azeem Ahmad
                        </p>
                        {/* <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
                            <span>© 2025</span>
                            <span className="hidden sm:inline">•</span>
                            <span className="flex items-center gap-2">
                                Built with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> using
                            </span>
                            <span className="flex items-center gap-1.5 font-medium text-gray-300">
                                <Code2 className="w-4 h-4 text-blue-400" />
                                Next.js & Tailwind CSS
                            </span>
                        </p> */}
                    </motion.div>

                    {/* Bottom decorative line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                    />
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer