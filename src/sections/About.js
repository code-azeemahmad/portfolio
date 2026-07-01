'use client'
import React from 'react'
import { Code, GraduationCap, Award, Zap, Trophy, Target, Briefcase, Sparkles, Rocket } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    // Achievements data
    const achievements = [
        {
            title: "ICPC Regional Finalist 2026",
            position: "Runner-Up",
            description: "Qualified by competing in the first round and participated in the ICPC Regional Finals.",
            date: "February 2026"
        },
        {
            title: "CosmoCon'25 Competitive Programming Contest",
            position: "Runner-Up",
            description: "Secured 2nd place out of 70+ teams.",
            date: "December 2025"
        },
        {
            title: "Digital Pakistan Speed Programming",
            position: "Top 25 Nationally",
            description: "Qualified for finals among 1400+ teams nationwide and competed with Top 50 teams in final round and secured position in Top 25",
            date: "Jul 2025"
        },
        {
            title: "PUCON'25 Programming Contest",
            position: "Runner-Up",
            description: "Secured 2nd place out of 130+ teams by competing in 2 rounds.",
            date: "May 2025"
        },
        {
            title: "Code Rush'25 Programming Contest",
            position: "2nd Runner-Up",
            description: "Secured 3rd position out of 130+ teams by competing in 2 rounds.",
            date: "May 2025"
        },
        {
            title: "Logiz Blitz'25 Speed Programming",
            position: "Winner",
            description: "Secured 1st place by solving complex coding problems",
            date: "May 2025"
        },
        {
            title: "SOFTEC'25 Programming Competition",
            position: "2nd Runner-Up",
            description: "170 Programming teams ' hours of coding and secured 3rd position.",
            date: "April 2025"
        },
        {
            title: "UTS 5.0 Coding Competition",
            position: "Runner-Up",
            description: "Secured 2nd place by solving challenging algorithmic problems under time constraints.",
            date: "January 2025"
        },
        {
            title: "CodeX Programming Contest",
            position: "2nd Runner-Up",
            description: "Achieved 3rd place, solving 5/6 problems, demonstrating strong problem-solving skills.",
            date: "January 2025"
        },
        {
            title: "ACM Coding Contest",
            position: "Winner",
            description: "1st place in complex coding challenges",
            date: "Dec 2024"
        },
        {
            title: "Speed Coding at MechTech’24",
            position: "Runner-Up",
            description: "Earned 2nd place for writing optimized code under time pressure.",
            date: "January 2024"
        }
    ];


    // Skills data
    const skills = {
        "Frontend": ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML/CSS", "Redux"],
        "Backend": ["Node.js", "Express.js", "REST APIs", "Microservices"],
        "Databases": ["MongoDB", "MySQL", "SQL"],
        "DevOps": ["Docker", "Kubernetes", "CI/CD"],
        "Languages": ["C++", "JavaScript", "TypeScript", "C#"]
    };

    return (
        <section ref={sectionRef} id="about" className="pt-16 lg:pt-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden " >
            <div className="absolute top-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

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
                            Get to know me
                        </span>
                    </motion.div>

                    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-12">
                        About Me
                    </h2>

                    {/* New Presentation - Card Grid instead of Slider */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
                        {[
                            {
                                title: "Full Stack Developer",
                                icon: Code,
                                gradient: "from-blue-500 to-cyan-500",
                                description: "Skilled in MERN stack, Next.js, and TypeScript. Building scalable web applications with Microservices architecture, Docker, and RESTful APIs.",
                            },
                            {
                                title: "Technical Expertise",
                                icon: Zap,
                                gradient: "from-purple-500 to-pink-500",
                                description: "Strong foundation in OOP and software design. Expert in C++ and JavaScript with competitive programming experience.",
                            },
                            {
                                title: "Education & Goals",
                                icon: GraduationCap,
                                gradient: "from-indigo-500 to-blue-500",
                                description: "BS Computer Science at UET Lahore. Seeking opportunities to contribute to impactful software projects.",
                            }
                        ].map((card, index) => {
                            const Icon = card.icon;
                            const getGradientColors = (grad) => {
                                if (grad.includes('blue') && grad.includes('cyan')) return { start: '#3b82f6', end: '#06b6d4' };
                                if (grad.includes('purple') && grad.includes('pink')) return { start: '#a855f7', end: '#ec4899' };
                                if (grad.includes('indigo')) return { start: '#6366f1', end: '#3b82f6' };
                                return { start: '#3b82f6', end: '#06b6d4' };
                            };
                            const colors = getGradientColors(card.gradient);
                            
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="relative group"
                                >
                                    {/* Glow effect on hover - same as Stats */}
                                    <div 
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500" 
                                        style={{ background: `linear-gradient(135deg, ${colors.start}, ${colors.end})` }}
                                    ></div>
                                    
                                    <div className="relative text-center bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                                        {/* Background watermark icon - same as Stats */}
                                        <div className="absolute top-0 right-0 opacity-5">
                                            <Icon className="w-32 h-32 text-gray-900" />
                                        </div>
                                        
                                        {/* Icon badge - same as Stats */}
                                        <div className={`inline-flex items-center justify-center w-16 h-16 mb-4 rounded-xl bg-gradient-to-r ${card.gradient} text-white shadow-lg`}>
                                            <Icon className="w-8 h-8" />
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                            {card.title}
                                        </h3>

                                        <p className="text-gray-600 leading-relaxed text-base">
                                            {card.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {[
                        { value: '10+', label: 'Full-Stack and Academic Projects', icon: Code, gradient: 'from-blue-500 to-cyan-500', delay: 0 },
                        { value: '700+', label: 'Problems Solved Across Platforms', icon: Target, gradient: 'from-purple-500 to-pink-500', delay: 0.2 },
                        { value: '10+', label: 'Competition Wins', icon: Trophy, gradient: 'from-orange-500 to-red-500', delay: 0.4 }
                    ].map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: stat.delay }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${stat.gradient.includes('blue') ? '#3b82f6' : stat.gradient.includes('purple') ? '#a855f7' : '#f97316'}, ${stat.gradient.includes('cyan') ? '#06b6d4' : stat.gradient.includes('pink') ? '#ec4899' : '#ef4444'})` }}></div>
                                <div className="relative text-center bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                                    <div className="absolute top-0 right-0 opacity-5">
                                        <Icon className="w-32 h-32 text-gray-900" />
                                    </div>
                                    <div className={`inline-flex items-center justify-center w-16 h-16 mb-4 rounded-xl bg-gradient-to-r ${stat.gradient} text-white shadow-lg`}>
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <motion.div 
                                        className={`text-5xl font-extrabold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                                        initial={{ scale: 0 }}
                                        animate={isInView ? { scale: 1 } : {}}
                                        transition={{ duration: 0.6, delay: stat.delay + 0.3, type: 'spring', bounce: 0.5 }}
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <div className="text-gray-700 font-medium text-base">{stat.label}</div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mb-20"
                >
                    <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(skills).map(([category, skillList], categoryIndex) => {
                            const gradients = {
                                "Frontend": "from-blue-500 to-cyan-500",
                                "Backend": "from-green-500 to-emerald-500",
                                "Databases": "from-purple-500 to-pink-500",
                                "DevOps": "from-orange-500 to-red-500",
                                "Languages": "from-indigo-500 to-blue-500"
                            };
                            const gradient = gradients[category] || "from-blue-500 to-cyan-500";
                            const getGradientColors = (grad) => {
                                if (grad.includes('blue')) return { start: '#3b82f6', end: '#06b6d4' };
                                if (grad.includes('green')) return { start: '#22c55e', end: '#10b981' };
                                if (grad.includes('purple')) return { start: '#a855f7', end: '#ec4899' };
                                if (grad.includes('orange')) return { start: '#f97316', end: '#ef4444' };
                                if (grad.includes('indigo')) return { start: '#6366f1', end: '#3b82f6' };
                                return { start: '#3b82f6', end: '#06b6d4' };
                            };
                            const colors = getGradientColors(gradient);
                            
                            return (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.7 + categoryIndex * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="relative group"
                                >
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${colors.start}, ${colors.end})` }}></div>
                                    <div className="relative text-center bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
                                        <div className="absolute top-0 right-0 opacity-5">
                                            <Code className="w-32 h-32 text-gray-900" />
                                        </div>
                                        <div className={`inline-flex items-center justify-center w-16 h-16 mb-4 rounded-xl bg-gradient-to-r ${gradient} text-white shadow-lg`}>
                                            <Code className="w-8 h-8" />
                                        </div>
                                        <h4 className="text-2xl font-bold text-gray-900 mb-6">{category}</h4>
                                        <div className="flex flex-wrap gap-2.5 justify-center">
                                            {skillList.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="bg-white text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200 hover:border-blue-400 hover:text-blue-600 transition-all duration-200"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Achievements */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">Achievements & Awards</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="relative group bg-gradient-to-br from-white via-blue-50/30 to-white p-6 rounded-2xl border border-blue-100 hover:border-blue-300 transition-all duration-300 shadow-md hover:shadow-2xl overflow-hidden"
                            >
                                {/* Animated background on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Decorative corner */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <motion.div
                                            whileHover={{ rotate: 360, scale: 1.2 }}
                                            transition={{ duration: 0.6 }}
                                            className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg"
                                        >
                                            <Award size={24} />
                                        </motion.div>
                                        <span className="text-sm text-blue-600 font-semibold bg-blue-100 px-3 py-1 rounded-full">
                                            {achievement.date}
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                        {achievement.title}
                                    </h4>
                                    <p className="text-purple-600 font-semibold mb-3 text-base">
                                        {achievement.position}
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {achievement.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About