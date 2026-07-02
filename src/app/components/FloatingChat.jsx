'use client';
import { useState, useRef, useEffect } from 'react';
import { Send, User, X, MessageCircle, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isQuestionsOpen, setIsQuestionsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      role: 'assistant', 
      content: '👋 Hello! Ask me about Azeem\'s skills, projects, or achievements!' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const dropdownRef = useRef(null);
  const chatWindowRef = useRef(null);

  // Knowledge base with all portfolio information
  const knowledgeBase = {
    'tell me about yourself': `I'm Azeem Ahmad, a Full Stack Developer and Competitive Programmer. I'm currently pursuing my BS in Computer Science at UET Lahore. I'm passionate about building scalable web applications with modern technologies like React, Next.js, Node.js, and TypeScript.`,

    'who are you': `I'm Azeem Ahmad, a Full Stack Developer and Competitive Programmer passionate about building scalable web applications and solving complex problems.`,

    'what are your skills': `🎨 Frontend: React.js, Next.js, JavaScript, TypeScript, HTML/CSS, Redux, Tailwind CSS\n⚙️ Backend: Node.js, Express.js, REST APIs, Microservices\n🗄️ Databases: MongoDB, MySQL, SQL\n🐳 DevOps: Docker, Kubernetes, CI/CD\n💻 Languages: C++, JavaScript, TypeScript, C#`,

    'what projects have you built': `📚 Dream LMS - Learning management system with Next.js & JWT\n🎯 Nolcha - Events platform with Strapi CMS\n🎫 Microservices Ticketing App - Node.js microservices on Kubernetes\n🛒 Multivendor E-Shop - Full MERN stack with real-time chat\n🧠 Social Media Predictor - ML with Python & Streamlit\n🗄️ My Database - SQL engine in C++\n🎮 Solitaire Game - C++ with data structures`,

    'what competitions have you won': `🏆 ICPC Regional Finalist 2026\n🏆 CosmoCon'25 - Runner-Up (2nd/70+ teams)\n🏆 Digital Pakistan - Top 25/1400+ teams\n🏆 PUCON'25 - Runner-Up (2nd/130+ teams)\n🏆 Code Rush'25 - 2nd Runner-Up\n🏆 Logiz Blitz'25 - Winner (1st place)\n🏆 SOFTEC'25 - 2nd Runner-Up\n🏆 UTS 5.0 - Runner-Up\n🏆 ACM Coding Contest - Winner`,

    'how to contact you': `📧 Email: azeemahmadd9@gmail.com\n📱 Phone: +92-3362041965\n📍 Location: Lahore, Pakistan\n\n🔗 LinkedIn: linkedin.com/in/azeem-ahmad327\n🔗 GitHub: github.com/code-azeemahmad`,

    'summarize your portfolio': `👤 Azeem Ahmad - Full Stack Developer & Competitive Programmer\n💻 Skills: React, Next.js, Node.js, TypeScript, MongoDB, Docker\n🏆 10+ competition wins including ICPC Regional Finalist\n📁 11+ projects including Dream LMS, Nolcha, Microservices App\n📫 Contact: azeemahmadd9@gmail.com`,

    'what is your education': `I'm currently pursuing my BS in Computer Science at UET Lahore with a focus on software engineering, algorithms, and system design.`,

    'what technologies do you use': `🖥️ Frontend: React.js, Next.js, TypeScript, Tailwind CSS, Redux\n⚙️ Backend: Node.js, Express.js, REST APIs, Microservices\n🗄️ Databases: MongoDB, MySQL, SQL\n🐳 DevOps: Docker, Kubernetes, CI/CD\n💻 Languages: C++, JavaScript, TypeScript, C#`,

    'what are your strengths': `💡 Strong problem-solving (700+ problems solved)\n🚀 Full-stack development expertise\n📊 Microservices & cloud deployment\n🧩 Clean code & software design\n🤝 Team collaboration\n🎯 Quick learner`,

    'what is your experience': `I have 11+ projects including learning management systems, e-commerce platforms, event management, and microservices. I've also participated in 10+ competitions achieving top positions nationally and regionally.`,

    'what are you looking for': `I'm seeking opportunities in:\n• Full-stack development roles\n• Software engineering positions\n• Freelance opportunities\n• Open-source contributions\n• Collaborations on exciting projects`
  };

  const getAnswer = (question) => {
    const lowerQuestion = question.toLowerCase().trim();
    
    for (const [key, answer] of Object.entries(knowledgeBase)) {
      if (lowerQuestion.includes(key) || key.includes(lowerQuestion)) {
        return answer;
      }
    }
    
    if (lowerQuestion.includes('hello') || lowerQuestion.includes('hi')) {
      return '👋 Hello! How can I help you today? Ask about my skills, projects, or achievements!';
    }
    
    if (lowerQuestion.includes('project')) {
      return "I've built Dream LMS, Nolcha, Microservices Ticketing App, Multivendor E-Shop, and more! Check the Projects section for details.";
    }
    
    if (lowerQuestion.includes('competition') || lowerQuestion.includes('win') || lowerQuestion.includes('award')) {
      return "I've won 10+ competitions including ICPC Regional Finalist 2026 and multiple first place finishes in hackathons and coding contests!";
    }
    
    if (lowerQuestion.includes('contact') || lowerQuestion.includes('reach') || lowerQuestion.includes('email')) {
      return "Email: azeemahmadd9@gmail.com | Phone: +92-3362041965 | LinkedIn: linkedin.com/in/azeem-ahmad327";
    }
    
    if (lowerQuestion.includes('skill') || lowerQuestion.includes('technology') || lowerQuestion.includes('tech')) {
      return "I specialize in React, Next.js, Node.js, TypeScript, MongoDB, Docker, and Kubernetes. Check the Skills section for the complete list!";
    }
    
    return "Great question! I can tell you about Azeem's skills, projects, achievements, or how to contact him. What would you like to know?";
  };

  const suggestedQuestions = [
    { text: 'Tell me about yourself', icon: '👤' },
    { text: 'What are your skills?', icon: '💻' },
    { text: 'What projects have you built?', icon: '📁' },
    { text: 'What competitions have you won?', icon: '🏆' },
    { text: 'How can I contact you?', icon: '📫' },
    { text: 'Summarize your portfolio', icon: '📊' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsQuestionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutsideChat = (event) => {
      if (
        isOpen && 
        chatWindowRef.current && 
        !chatWindowRef.current.contains(event.target) &&
        !event.target.closest('.chat-bubble-button')
      ) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutsideChat);
    return () => document.removeEventListener('mousedown', handleClickOutsideChat);
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUnreadCount(1);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { id: Date.now(), role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setIsQuestionsOpen(false);

    setTimeout(() => {
      const response = getAnswer(input);
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        role: 'assistant', 
        content: response 
      }]);
      setIsLoading(false);
    }, 500 + Math.random() * 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleQuestionClick = (question) => {
    setInput(question);
    setIsQuestionsOpen(false);
    setTimeout(() => {
      sendMessage();
    }, 100);
  };

  return (
    <>
      {/* Chat Bubble Button with Gradient and Tooltip */}
      <div className="fixed bottom-6 right-6 z-50 group chat-bubble-button">
        <button
          onClick={() => {
            setIsOpen(true);
            setUnreadCount(0);
          }}
          className={`w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center ${
            isOpen ? 'scale-0' : 'scale-100 hover:scale-110'
          } relative`}
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
              {unreadCount}
            </span>
          )}
        </button>
        
        {/* Tooltip - Ask me anything */}
        <div className={`absolute right-full top-1/2 -translate-y-1/2 mr-3 pointer-events-none transition-all duration-300 ${
          isOpen ? 'opacity-0 scale-95' : 'opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-sm font-medium px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Ask me anything ✨
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2.5 h-2.5 bg-gradient-to-r from-purple-600 to-pink-600"></div>
          </div>
        </div>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatWindowRef}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200"
          >
            {/* Header - With Profile Photo */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-3 text-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-white">
                  <Image
                    src="/Azeem_Ahmad.png"
                    alt="Azeem Ahmad"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm">Azeem Ahmad</h3>
                  <p className="text-[10px] opacity-80">Online • Ready to chat</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-7 h-7 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-[300px] overflow-y-auto p-3 space-y-2 bg-gradient-to-b from-gray-50 to-white">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-1.5 ${
                    msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'border-2 border-white shadow-sm'
                  }`}>
                    {msg.role === 'user' ? (
                      <User className="w-3 h-3" />
                    ) : (
                      <Image
                        src="/Azeem_Ahmad.png"
                        alt="Azeem"
                        width={24}
                        height={24}
                        className="object-cover rounded-full"
                      />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] px-3 py-2 rounded-xl text-xs ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-100'
                    }`}
                  >
                    <p className="leading-relaxed whitespace-pre-line">{msg.content}</p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex items-start gap-1.5">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden border-2 border-white shadow-sm">
                    <Image
                      src="/Azeem_Ahmad.png"
                      alt="Azeem"
                      width={24}
                      height={24}
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="bg-white px-3 py-2 rounded-xl rounded-bl-none shadow-sm border border-gray-100">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions Dropdown */}
            <div className="px-3 pt-2 pb-1 bg-gray-50 border-t border-gray-100" ref={dropdownRef}>
              <button
                onClick={() => setIsQuestionsOpen(!isQuestionsOpen)}
                className="w-full flex items-center justify-between text-xs text-gray-600 hover:text-gray-900 transition-colors py-1"
              >
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-blue-500" />
                  Suggested Questions
                </span>
                {isQuestionsOpen ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </button>
              
              <AnimatePresence>
                {isQuestionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-1.5 pb-0.5 flex flex-wrap gap-1.5">
                      {suggestedQuestions.map((q, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuestionClick(q.text)}
                          className="text-[10px] px-2 py-1 bg-white border border-gray-200 rounded-full hover:border-blue-500 hover:bg-blue-50 transition-colors text-gray-700 whitespace-nowrap"
                          disabled={isLoading}
                        >
                          {q.icon} {q.text}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-gray-100">
              <div className="flex gap-1.5">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xs"
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5 hover:scale-105"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}