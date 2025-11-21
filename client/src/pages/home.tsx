import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Search, X, Phone, Mail, Mic, Send, ChevronDown, MessageCircle, MicOff } from "lucide-react";

type CtaItem = {
  id: string;
  text: string;
  description: string;
  placeholder: string;
};

const ctaData: CtaItem[] = [
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
    description:
      "Discover real, validated on- and off-market deals tailored to your preferences. No memberships, no fees.",
    placeholder: "Enter a city, county, or state to find properties.",
  },
];

export default function MinimalistLandingPage() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [placeholder, setPlaceholder] = useState("Enter a property address to get started");
  const [isAddressSectionActive, setIsAddressSectionActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const [hideBanner, setHideBanner] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<Array<{ id: number; text: string; isUser: boolean }>>([]);
  const [isListening, setIsListening] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatBot(true);
    }, 3000); // Show after 3 seconds

    const bannerTimer = setTimeout(() => {
      setHideBanner(true);
    }, 30000); // Hide banner after 30 seconds

    return () => {
      clearTimeout(timer);
      clearTimeout(bannerTimer);
    };
  }, []);

  const handleButtonClick = (newPlaceholder: string, buttonId?: string) => {
    setPlaceholder(newPlaceholder);
    setIsAddressSectionActive(true);

    if (buttonId === "find") {
      // Small delay to show the address section activation, then redirect
      setTimeout(() => {
        setLocation("/user/buy-property");
      }, 500);
    }
  };

  const handleFindOutMore = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleSupportClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowSupportModal(true);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      const newMessage = {
        id: Date.now(),
        text: chatMessage,
        isUser: true,
      };
      setChatMessages((prev) => [...prev, newMessage]);

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: Date.now() + 1,
          text: "Thanks for your message! Our support team will get back to you shortly. You can also call us at 1 (844) 435 4795 or email Support@flipiq.com for immediate assistance.",
          isUser: false,
        };
        setChatMessages((prev) => [...prev, botResponse]);
      }, 1000);

      setChatMessage("");
    }
  };

  const handleVoiceInput = () => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setChatMessage(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      alert("Speech recognition is not supported in your browser.");
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans p-6 sm:p-8 md:p-12">
      <header className="w-full flex justify-between items-center mb-12">
        <div className="flex flex-col space-y-1 text-slate-700">
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-orange-500" />
            <a
              href="tel:18444354795"
              className="text-lg font-semibold hover:text-orange-500 transition-colors duration-300"
            >
              1 (844) 435 4795
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5 text-orange-500" />
            <button
              onClick={handleSupportClick}
              className="text-lg font-semibold hover:text-orange-500 transition-colors duration-300 cursor-pointer"
            >
              Support@flipiq.com
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div
            className="relative group"
            onMouseEnter={() => setShowAboutDropdown(true)}
            onMouseLeave={() => setShowAboutDropdown(false)}
          >
            <Link href="/about-us">
              <a className="text-lg font-medium text-slate-700 hover:text-orange-500 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-orange-50 flex items-center space-x-1">
                <span>About Us</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAboutDropdown ? "rotate-180" : ""}`} />
              </a>
            </Link>

            <div
              className={`absolute top-full left-0 mt-2 w-48 transition-all duration-300 transform origin-top-left z-50 ${
                showAboutDropdown
                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="bg-white rounded-xl shadow-2xl border border-gray-200 py-2">
                <div className="px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200 rounded-t-xl">
                  <p className="text-sm font-semibold text-orange-800">Learn More About FlipIQ</p>
                </div>

                <div className="py-1">
                  <Link href="/about-us">
                    <a
                      className="group flex items-center px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 transition-all duration-200 font-medium"
                      onClick={() => setShowAboutDropdown(false)}
                    >
                      <span className="flex-1">About Us</span>
                    </a>
                  </Link>
                  <Link href="/our-leadership">
                    <a
                      className="group flex items-center px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 transition-all duration-200 font-medium rounded-b-xl"
                      onClick={() => setShowAboutDropdown(false)}
                    >
                      <span className="flex-1">Leadership</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/tools">
            <a className="text-lg font-medium text-slate-700 hover:text-orange-500 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-orange-50">
              Tools for Pros
            </a>
          </Link>

          <div
            className="relative group"
            onMouseEnter={() => setShowLoginDropdown(true)}
            onMouseLeave={() => setShowLoginDropdown(false)}
          >
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center space-x-2">
              <span>Log In</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showLoginDropdown ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`absolute top-full right-0 mt-2 w-64 transition-all duration-300 transform origin-top-right z-50 ${
                showLoginDropdown
                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="bg-white rounded-xl shadow-2xl border border-gray-200 py-2">
                <div className="px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200 rounded-t-xl">
                  <p className="text-sm font-semibold text-orange-800">Choose Your Platform</p>
                </div>

                <div className="py-1">
                  <a
                    href="https://app.flipiq.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 transition-all duration-200 font-medium"
                    onClick={() => setShowLoginDropdown(false)}
                  >
                    <span className="flex-1">Marketplace</span>
                  </a>
                  <a
                    href="https://platform.flipiq.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 transition-all duration-200 font-medium"
                    onClick={() => setShowLoginDropdown(false)}
                  >
                    <span className="flex-1">Platform</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center max-w-6xl mx-auto w-full px-4 text-center">
        {/* Logo */}
        <div className="mb-8 transform hover:scale-105 transition-transform duration-500 flex flex-col items-center">
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 280" className="w-64 h-64">
              {/* House Roof */}
              <path d="M50 120 L150 40 L250 120" fill="none" stroke="#fb6200" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Chimney */}
              <path d="M210 60 V90" fill="none" stroke="#fb6200" strokeWidth="12" strokeLinecap="round" />
              {/* Walls - Vertical Lines */}
              <path d="M80 130 V200" fill="none" stroke="#fb6200" strokeWidth="12" strokeLinecap="round" />
              <path d="M220 130 V200" fill="none" stroke="#fb6200" strokeWidth="12" strokeLinecap="round" />
              
              {/* Rays */}
              <line x1="150" y1="10" x2="150" y2="25" stroke="#fb6200" strokeWidth="10" strokeLinecap="round" />
              <line x1="90" y1="30" x2="105" y2="45" stroke="#fb6200" strokeWidth="10" strokeLinecap="round" />
              <line x1="210" y1="30" x2="195" y2="45" stroke="#fb6200" strokeWidth="10" strokeLinecap="round" />

              {/* Lightbulb */}
              <circle cx="150" cy="140" r="35" fill="none" stroke="#fb6200" strokeWidth="10" />
               {/* Bulb Filament checkmark style */}
              <path d="M135 135 L150 150 L165 135" fill="none" stroke="#fb6200" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />

              {/* Bulb Base */}
              <path d="M135 180 h30" stroke="#0f172a" strokeWidth="10" strokeLinecap="round" />
              <path d="M135 192 h30" stroke="#0f172a" strokeWidth="10" strokeLinecap="round" />
              <path d="M140 204 h20" stroke="#0f172a" strokeWidth="10" strokeLinecap="round" />
              
              {/* Text "Flip" */}
              <text x="40" y="260" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="60" fill="#0f172a">Flip</text>
              
              {/* Text "iq" with custom Q arrow */}
              <text x="155" y="260" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="60" fill="#fb6200">iq</text>
              
              {/* Custom Arrow for 'q' tail */}
               <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#fb6200" />
                </marker>
              </defs>
              {/* Drawing the arrow on the q */}
              <line x1="205" y1="260" x2="215" y2="270" stroke="#fb6200" strokeWidth="8" strokeLinecap="round" markerEnd="url(#arrowhead)" />
            </svg>
        </div>

        {/* Tagline */}
        <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-10 leading-tight max-w-4xl tracking-tight">
          Powerful AI Tools for <span className="text-[#fb6200]">Smart</span>
          <br className="hidden md:block" /> Agents, Wholesalers, Investors, and Buyers
        </h2>

        {/* Search Bar */}
        <div className={`w-full max-w-3xl mb-16 relative transition-all duration-500 ${isAddressSectionActive ? 'scale-105 ring-4 ring-orange-100 rounded-full' : ''}`}>
           <input
            type="text"
            placeholder={placeholder}
            className="w-full px-8 py-5 rounded-full border border-gray-200 shadow-lg text-lg focus:outline-none focus:border-[#fb6200] focus:ring-2 focus:ring-[#fb6200] transition-all text-slate-700 placeholder:text-slate-400"
            autoFocus={isAddressSectionActive}
          />
          <button className="absolute right-2 top-2 bg-white p-3 rounded-full text-slate-400 hover:text-[#fb6200] transition-colors">
            <Search className="w-6 h-6" />
          </button>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-5xl">
          {ctaData.map((item) => (
            <button
              key={item.id}
              onClick={() => handleButtonClick(item.placeholder, item.id)}
              onMouseEnter={() => setHoveredButton(item.id)}
              onMouseLeave={() => setHoveredButton(null)}
              className="bg-[#fb6200] hover:bg-[#e55a00] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 min-w-[240px]"
            >
              {item.text}
            </button>
          ))}
        </div>
      </main>

      {/* Chat Bot Widget */}
      {showChatBot && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            {isChatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          </button>

          {isChatOpen && (
            <div className="absolute bottom-20 right-0 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 text-white flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <span className="font-bold">FlipIQ Support</span>
                </div>
              </div>
              
              <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {chatMessages.length === 0 && (
                  <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-gray-100 max-w-[80%]">
                    <p className="text-slate-700">Hi there! How can I help you today?</p>
                  </div>
                )}
                {chatMessages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                    <div className={`p-3 rounded-lg max-w-[80%] shadow-sm ${
                      msg.isUser 
                        ? 'bg-orange-500 text-white rounded-tr-none' 
                        : 'bg-white text-slate-700 rounded-tl-none border border-gray-100'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleChatSubmit} className="p-4 bg-white border-t border-gray-100 flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
                <button
                  type="button"
                  onClick={handleVoiceInput}
                  className={`p-2 rounded-full transition-colors ${isListening ? 'bg-red-500 text-white' : 'text-slate-400 hover:text-orange-500'}`}
                >
                  {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </button>
                <button 
                  type="submit"
                  disabled={!chatMessage.trim()}
                  className="text-orange-500 hover:text-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      {/* Support Modal */}
      {showSupportModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-slate-800">Contact Support</h3>
              <button onClick={() => setShowSupportModal(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <a href="tel:18444354795" className="flex items-center space-x-4 p-4 rounded-xl border border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition-all group">
                <div className="bg-orange-100 p-3 rounded-full group-hover:bg-orange-200">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Call Us</p>
                  <p className="text-slate-600">1 (844) 435 4795</p>
                </div>
              </a>
              <a href="mailto:Support@flipiq.com" className="flex items-center space-x-4 p-4 rounded-xl border border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition-all group">
                <div className="bg-orange-100 p-3 rounded-full group-hover:bg-orange-200">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Email Us</p>
                  <p className="text-slate-600">Support@flipiq.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
