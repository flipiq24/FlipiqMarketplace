import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Phone, Mail, MessageCircle, X, Send, Mic, MicOff, Search, ChevronDown } from "lucide-react";

// CTA Data mapping
const ctaData = [
  {
    id: "sell",
    text: "Sell a Property",
    description: "Connect directly with vetted cash buyers. No fees, no middlemen, no games!",
    placeholder: "Enter the property address you wish to sell.",
  },
  {
    id: "comp",
    text: "Comp with AI",
    description: "Get accurate, data-driven property comps faster and easier with AI.",
    placeholder: "Enter the property you wish to comp using AI.",
  },
  {
    id: "find",
    text: "Find Your Next Deal!",
    description: "Discover real, validated on- and off-market deals tailored to your preferences. No memberships, no fees.",
    placeholder: "Enter a city, county, or state to find properties.",
  },
];

export default function HomePage() {
  const [placeholder, setPlaceholder] = useState("Enter a property address to get started");
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  // Chatbot logic
  const [showChatBot, setShowChatBot] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{id: number, text: string, isUser: boolean}[]>([]);
  const [chatMessage, setChatMessage] = useState("");
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowChatBot(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    
    const newMessage = { id: Date.now(), text: chatMessage, isUser: true };
    setChatMessages(prev => [...prev, newMessage]);
    setChatMessage("");
    
    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: "Thanks for your message! Our support team will get back to you shortly.",
        isUser: false
      }]);
    }, 1000);
  };

  const toggleVoiceInput = () => {
    setIsListening(!isListening);
    // Mock voice input logic
  };

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-8 py-6">
        {/* Left: Contact Info */}
        <div className="flex flex-col space-y-1 text-slate-700 text-sm">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-[#fb6200]" />
            <a href="tel:18444354795" className="font-medium hover:text-[#fb6200] transition-colors">
              1 (844) 435 4795
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-[#fb6200]" />
            <a href="mailto:Support@flipiq.com" className="font-medium hover:text-[#fb6200] transition-colors">
              Support@flipiq.com
            </a>
          </div>
        </div>

        {/* Right: Navigation */}
        <div className="flex items-center space-x-8">
          {/* About Us Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setShowAboutDropdown(true)}
            onMouseLeave={() => setShowAboutDropdown(false)}
          >
            <button className="flex items-center space-x-1 text-slate-700 font-medium hover:text-[#fb6200] transition-colors">
              <span>About Us</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showAboutDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showAboutDropdown && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                <Link href="/about-us">
                  <a className="block px-4 py-2 text-slate-700 hover:bg-orange-50 hover:text-[#fb6200]">About Us</a>
                </Link>
                <Link href="/our-leadership">
                  <a className="block px-4 py-2 text-slate-700 hover:bg-orange-50 hover:text-[#fb6200]">Leadership</a>
                </Link>
              </div>
            )}
          </div>

          <Link href="/tools">
            <a className="text-slate-700 font-medium hover:text-[#fb6200] transition-colors">
              Tools for Pros
            </a>
          </Link>

          <Link href="/login">
            <a className="bg-[#fb6200] hover:bg-[#e55a00] text-white px-6 py-2.5 rounded-md font-semibold transition-all shadow-sm">
              Log In
            </a>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 mt-12 md:mt-20">
        <div className="max-w-4xl w-full text-center space-y-10">
          
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-48 h-48">
              {/* House Roof */}
              <path d="M20 100 L100 30 L180 100" fill="none" stroke="#fb6200" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Chimney */}
              <rect x="140" y="50" width="20" height="40" fill="#fb6200" />
              {/* Walls */}
              <path d="M40 100 V160 M160 100 V160" fill="none" stroke="#fb6200" strokeWidth="12" strokeLinecap="round" />
              
              {/* Lightbulb */}
              <circle cx="100" cy="110" r="30" fill="none" stroke="#fb6200" strokeWidth="10" />
              <path d="M100 110 m-10 0 a 10 10 0 0 1 20 0" fill="none" stroke="#fb6200" strokeWidth="8" strokeLinecap="round" />
              <path d="M90 150 h20 M90 160 h20" stroke="#0f172a" strokeWidth="8" strokeLinecap="round" />
              <path d="M95 170 h10" stroke="#0f172a" strokeWidth="8" strokeLinecap="round" />
              
              {/* Rays */}
              <line x1="100" y1="10" x2="100" y2="20" stroke="#fb6200" strokeWidth="8" strokeLinecap="round" />
              <line x1="50" y1="30" x2="60" y2="40" stroke="#fb6200" strokeWidth="8" strokeLinecap="round" />
              <line x1="150" y1="30" x2="140" y2="40" stroke="#fb6200" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </div>
          
          <h1 className="text-6xl font-bold text-slate-900 tracking-tight">
            Flip<span className="text-[#fb6200]">iq</span>
          </h1>

          {/* Tagline */}
          <h2 className="text-3xl font-bold text-slate-800 max-w-3xl mx-auto leading-tight">
            Powerful AI Tools for <span className="text-[#fb6200]">Smart</span>
            <br />
            Agents, Wholesalers, Investors, and Buyers
          </h2>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto w-full relative group">
            <input 
              type="text" 
              placeholder="Enter a property address to get started" 
              className="w-full px-8 py-4 rounded-full border border-gray-200 shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-[#fb6200] focus:border-transparent transition-all placeholder:text-gray-400"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-[#fb6200] transition-colors">
              <Search className="w-6 h-6" />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <Link href="/sell">
              <a className="bg-[#fb6200] hover:bg-[#e55a00] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 min-w-[200px]">
                Sell a Property
              </a>
            </Link>
            
            <Link href="/tools">
              <a className="bg-[#fb6200] hover:bg-[#e55a00] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 min-w-[200px]">
                Comp with AI
              </a>
            </Link>
            
            <Link href="/user/buy-property">
              <a className="bg-[#fb6200] hover:bg-[#e55a00] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 min-w-[200px]">
                Find Your Next Deal!
              </a>
            </Link>
          </div>

        </div>
      </main>

      {/* Chat Bot Widget */}
      {showChatBot && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="bg-[#fb6200] hover:bg-[#e55a00] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            {isChatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          </button>

          {isChatOpen && (
            <div className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
              <div className="bg-[#fb6200] p-4 text-white flex justify-between items-center">
                <span className="font-bold">FlipIQ Support</span>
                <button onClick={() => setIsChatOpen(false)}><X className="w-4 h-4" /></button>
              </div>
              
              <div className="h-64 overflow-y-auto p-4 space-y-3 bg-gray-50">
                {chatMessages.length === 0 && (
                  <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-gray-100 text-sm text-slate-600">
                    Hi! How can we help you today?
                  </div>
                )}
                {chatMessages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                    <div className={`p-3 rounded-lg text-sm max-w-[85%] ${
                      msg.isUser 
                        ? 'bg-[#fb6200] text-white rounded-tr-none' 
                        : 'bg-white text-slate-700 border border-gray-100 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleChatSubmit} className="p-3 bg-white border-t border-gray-100 flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-[#fb6200]"
                />
                <button type="submit" className="text-[#fb6200] hover:bg-orange-50 p-2 rounded-full">
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
