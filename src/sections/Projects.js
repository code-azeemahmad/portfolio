'use client'
import React, { useRef } from 'react'
import { ExternalLink, Github, Sparkles, Folder, Star, GitBranch } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Projects = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    const categoryIcons = {
        "microservices": { icon: GitBranch, color: "from-blue-500 to-cyan-500" },
        "mern": { icon: Folder, color: "from-green-500 to-emerald-500" },
        "cpp": { icon: Star, color: "from-purple-500 to-pink-500" },
        "web": { icon: Folder, color: "from-indigo-500 to-blue-500" },
        "dsa": { icon: Star, color: "from-orange-500 to-red-500" },
        "frontend": { icon: Folder, color: "from-cyan-500 to-blue-500" },
        "oop": { icon: Folder, color: "from-pink-500 to-rose-500" },
        "ml": { icon: Star, color: "from-violet-500 to-purple-500" }
    };

    const projects = [
        {
            title: "Dream LMS",
            
            description: "A scalable learning management system built with Next.js. Developed authentication/authorization with JWT and built responsive student/instructor UI in Next.js.",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "JWT", "MongoDB"],
            github: "#",
            demo: "#",
            category: "mern"
        },
        {
            title: "Nolcha",
            description: "Built a full-stack events platform with Strapi CMS integration, email workflows, and animated responsive UI.",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi CMS", "EmailJS", "Framer Motion"],
            github: "#",
            demo: "#",
            category: "web"
        },
        {
            title: "Microservices Ticketing App",
            description: "A scalable ticketing application built with Node.js microservices, deployed on Kubernetes with Docker containerization.",
            technologies: ["Node.js", "Express.js", "Kubernetes", "Docker", "NATS", "MongoDB", "Next.js", "TypeScript"],
            github: "https://github.com/TayabAmir/Ticketing-App",
            demo: "#",
            category: "microservices"
        },
        {
            title: "Multivendor E-Shop Platform",
            description: "Full MERN stack E-Shop website with three roles i.e. customer, seller, and admin roles with chatting feature, featuring complete order management.",
            technologies: ["React", "Node.js", "MongoDB", "Redux", "Express", "socket.io", "Cloudinary", "Stripe"],
            github: "https://github.com/TayabAmir/E-Shop",
            demo: "#",
            category: "mern"
        },
        {
            title: "Social Media Addiction Predictor",
            description: "Built a machine learning-based web app using Python and Streamlit to predict social media addiction with integrate LLM. Trained multiple models, evaluated their performance, and selected the best one based on accuracy metrics.",
            technologies: ["Python", "Streamlit", "Scikit-learn", "Machine Learning"],
            github: "http://github.com/TayabAmir/AI_Final_Project",
            demo: "https://addictionpredictor.streamlit.app/",
            category: "ml"
        },
        {
            title: "My Database",
            description: "SQL-like database engine in C++ with support for complex queries, file-based storage system and features like Indexing, ACL, Transactions etc.",
            technologies: ["C++", "SQL", "File Systems", "Regex"],
            github: "https://github.com/TayabAmir/My_Database",
            demo: "#",
            category: "cpp"
        },
        {
            title: "E-Commerce",
            description: "The E-Commerce site built using MERN stack. Features include user authentication, Redux for state management, and order processing.",
            technologies: ["React", "Node.js", "MongoDB", "Redux", "Express"],
            github: "https://github.com/TayabAmir/E-Shop",
            demo: "#",
            category: "mern"
        },
        {
            title: "Solitaire Game",
            description: "Card game implementation using data structures e.g. Linked Lists, Stack, Queues and Fisher-Yates shuffle algorithm.",
            technologies: ["C++", "Data Structures", "Algorithms"],
            github: "https://github.com/TayabAmir/Solitaire-Game",
            demo: "#",
            category: "dsa"
        },
        {
            title: "Movie and Dramas Site",
            description: "A dynamic website for discovering movies and dramas using React.js, ensuring an interactive UI.",
            technologies: ["Javascript", "React.js", "Redux", "TMDB API"],
            github: "https://github.com/TayabAmir/Movix",
            demo: "https://movix-steel-gamma.vercel.app/",
            category: "frontend"
        },
        {
            title: "Mini Excel",
            description: "A business application using C# winforms applying OOP concepts e.g. Encapsulation, Inheritance, Polymorphism, and Abstraction.",
            technologies: ["C#", "WinForms", "OOP", "Business Logic"],
            github: "https://github.com/TayabAmir/Business-Application",
            demo: "#",
            category: "oop"
        },
        {
            title: "Tech Shop",
            description: "A business application using C# winforms applying OOP concepts e.g. Encapsulation, Inheritance, Polymorphism, and Abstraction.",
            technologies: ["C#", "WinForms", "OOP", "Business Logic"],
            github: "https://github.com/TayabAmir/Business-Application",
            demo: "#",
            category: "oop"
        },
    ];

    const getGradientColors = (colorStr) => {
        if (colorStr.includes('blue') && colorStr.includes('cyan')) return { start: '#3b82f6', end: '#06b6d4' };
        if (colorStr.includes('green')) return { start: '#22c55e', end: '#10b981' };
        if (colorStr.includes('purple') && colorStr.includes('pink')) return { start: '#a855f7', end: '#ec4899' };
        if (colorStr.includes('orange')) return { start: '#f97316', end: '#ef4444' };
        if (colorStr.includes('indigo')) return { start: '#6366f1', end: '#3b82f6' };
        if (colorStr.includes('cyan')) return { start: '#06b6d4', end: '#3b82f6' };
        if (colorStr.includes('pink')) return { start: '#ec4899', end: '#f43f5e' };
        if (colorStr.includes('violet')) return { start: '#8b5cf6', end: '#a855f7' };
        return { start: '#3b82f6', end: '#06b6d4' };
    };

    return (
        <section ref={sectionRef} id="projects" className="py-4 bg-gradient-to-b from-white via-purple-50/20 to-white relative overflow-hidden">
            {/* Simplified Background - No animations for performance */}
            <div className="absolute top-40 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

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
                        <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-4 py-2 rounded-full flex items-center gap-2">
                            <Sparkles className="w-4 h-4" />
                            Featured Work
                        </span>
                    </motion.div>
                    <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                        Projects
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A showcase of my technical expertise and problem-solving abilities
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => {
                        const categoryData = categoryIcons[project.category] || categoryIcons.web;
                        const CategoryIcon = categoryData.icon;
                        const colors = getGradientColors(categoryData.color);

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="relative group"
                            >
                                {/* Glow effect on hover */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500"
                                    style={{ background: `linear-gradient(135deg, ${colors.start}, ${colors.end})` }}
                                ></div>

                                <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                                    {/* Decorative background icon */}
                                    <div className="absolute top-0 right-0 opacity-5">
                                        <CategoryIcon className="w-48 h-48 text-gray-900" />
                                    </div>

                                    {/* Top gradient bar */}
                                    <div className={`h-1.5 bg-gradient-to-r ${categoryData.color}`}></div>

                                    <div className="relative p-8">
                                        {/* Category Icon Badge */}
                                        <div className={`inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-gradient-to-r ${categoryData.color} text-white shadow-lg`}>
                                            <CategoryIcon className="w-7 h-7" />
                                        </div>

                                        {/* Project number badge */}
                                        <div className="absolute top-6 right-6 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center font-bold text-gray-400 text-sm shadow-md border border-gray-200">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-12">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="bg-white text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200 hover:border-blue-400 hover:text-blue-600 transition-all duration-200"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex gap-4">
                                            {project.github !== "#" && (
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200 font-medium shadow-md"
                                            >
                                                <Github size={18} />
                                                <span>Code</span>
                                            </motion.a>
                                            )}
                                            {project.demo !== "#" && (
                                                <motion.a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${categoryData.color} text-white hover:opacity-90 transition-opacity duration-200 font-medium shadow-md`}
                                                >
                                                    <ExternalLink size={18} />
                                                    <span>Demo</span>
                                                </motion.a>
                                            )}
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

export default Projects
