'use client'
import React, { useRef } from 'react'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const Experience = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    const experiences = [
        {
            company: "Turing",
            logo: "/turing_logo.jpeg",
            position: "AI Reasoning Engineer",
            duration: "Oct '25 — Current",
            location: "Remote",
            description: "Review and refine CP problems, generate edge cases, and fix flawed solutions to improve LLM reasoning performance. Served as a POD Lead in Context Learning Based (CLB) tasks for LLM training and evaluation.",
            gradient: "from-blue-500 to-cyan-500",
            tags: ["AI", "LLM Training", "Problem Solving", "Team Lead"]
        },
        {
            company: "CoDev Digital",
            logo: "/codevdigital_logo.jpeg",
            position: "Developer",
            duration: "Aug '25 — Oct '25",
            location: "Remote",
            description: "Responsible for developing and maintaining both frontend and backend features and their seamless integration, while ensuring smooth functionality, performance, and user experience across the applications.",
            gradient: "from-purple-500 to-pink-500",
            tags: ["Full Stack", "Next.js", "Node.js", "API Development"]
        }
    ];

    const getGradientColors = (grad) => {
        if (grad.includes('blue') && grad.includes('cyan')) return { start: '#3b82f6', end: '#06b6d4' };
        if (grad.includes('purple') && grad.includes('pink')) return { start: '#a855f7', end: '#ec4899' };
        return { start: '#3b82f6', end: '#06b6d4' };
    };

    return (
        <section ref={sectionRef} id="experience" className="py-6 bg-gradient-to-b from-white via-purple-50/20 to-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

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
                        <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-4 py-2 rounded-full">
                            Career Journey
                        </span>
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                        Experience
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Professional journey in software development and AI
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {experiences.map((exp, index) => {
                        const colors = getGradientColors(exp.gradient);
                        
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="relative group"
                            >
                                {/* Glow effect on hover - same as other cards */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500"
                                    style={{ background: `linear-gradient(135deg, ${colors.start}, ${colors.end})` }}
                                ></div>

                                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                                    {/* Top gradient bar */}
                                    <div className={`h-1.5 bg-gradient-to-r ${exp.gradient}`}></div>

                                    <div className="p-8">
                                        {/* Company Logo and Info */}
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-gray-100 flex-shrink-0 bg-white">
                                                <img
                                                    src={exp.logo}
                                                    alt={`${exp.company} logo`}
                                                    className="w-full h-full object-contain p-1"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                                    {exp.company}
                                                </h3>
                                                <p className={`text-lg font-semibold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent mb-2`}>
                                                    {exp.position}
                                                </p>
                                                <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-4 h-4" />
                                                        {exp.duration}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <MapPin className="w-4 h-4" />
                                                        {exp.location}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 leading-relaxed mb-6 text-left">
                                            {exp.description}
                                        </p>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="bg-white text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200 hover:border-blue-400 hover:text-blue-600 transition-all duration-200"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Experience
