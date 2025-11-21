import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Phone, Mail, MessageCircle, X, Send, Mic, MicOff } from "lucide-react";

export default function HomePage() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const [chatBotVisible, setChatBotVisible] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: "bot", message: "Hi! I'm here to help you with any questions about FlipIQ. How can I assist you today?" },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [selectedInquiries, setSelectedInquiries] = useState<string[]>([]);

  // Show chat bot after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setChatBotVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setShowContactForm(false);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentMessage.trim()) {
      setChatMessages([
        ...chatMessages,
        { type: "user", message: currentMessage },
        { type: "bot", message: "Thank you for your message! Our team will get back to you soon." },
      ]);
      setCurrentMessage("");
    }
  };

  const toggleVoiceInput = () => {
    setIsListening(!isListening);
    // Voice input functionality would be implemented here
  };

  const handleInquiryChange = (inquiry: string) => {
    setSelectedInquiries((prev) => (prev.includes(inquiry) ? prev.filter((i) => i !== inquiry) : [...prev, inquiry]));
  };

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans p-6 sm:p-8 md:p-12">
      {/* Header with navigation back to home and Tools for Pros */}
      <header className="w-full flex justify-between items-center mb-8">
        <Link href="/">
          <a className="flex items-center">
            <img src="/flipiq-logo-vector.svg" alt="FlipIQ Logo" width={120} height={75} />
          </a>
        </Link>
        <nav className="flex space-x-6">
          <Link href="/our-leadership">
             <a className="text-slate-700 hover:text-[#fb6200] transition-colors duration-200 font-medium">
            Our Leadership
            </a>
          </Link>
          <Link href="/tools">
            <a className="text-slate-700 hover:text-[#fb6200] transition-colors duration-200 font-medium">
            Tools for Pros
            </a>
          </Link>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-start text-center pt-12 md:pt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">
            About <span style={{ color: "#fb6200" }}>FlipIQ</span>
          </h1>

          <div className="text-left space-y-6 text-lg text-slate-700 leading-relaxed">
            <p className="text-xl font-medium text-slate-800 mb-6">
              We are FlipIQ — a frictionless, community-driven marketplace built to democratize real estate investing.
            </p>

            <p>
              Our Marketplace is powered by strategic partners—national hard money lenders, title companies, affiliates,
              coaches, trainers, and technology innovators—who share our mission. We deliver cutting-edge data, proven
              strategies, and powerful tools that make investing efficient, transparent, and profitable.
            </p>

            <p className="text-xl font-medium text-slate-800">
              At FlipIQ, value flows to those who create it. We exist to build relationships, accelerate results,
              because together, we flip smarter.
            </p>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="text-center space-y-6">
                <h2 className="text-2xl font-semibold text-slate-800 mb-6">Get in Touch</h2>

                {/* Contact Information */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Phone className="w-5 h-5 text-[#fb6200]" />
                    <a href="tel:18444354795" className="hover:text-[#fb6200] transition-colors">
                      1 (844) 435 4795
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-slate-700">
                    <Mail className="w-5 h-5 text-[#fb6200]" />
                    <button
                      onClick={() => setShowContactForm(true)}
                      className="hover:text-[#fb6200] transition-colors cursor-pointer"
                    >
                      Support@flipiq.com
                    </button>
                  </div>
                </div>

                {/* Help Bot */}
                <div className="flex justify-center">
                  <button
                    onClick={() => setShowChatBot(true)}
                    className="flex items-center gap-2 bg-gradient-to-r from-[#fb6200] to-[#e55a00] text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat with Support Bot
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-slate-800">Contact Support</h3>
              <button onClick={() => setShowContactForm(false)} className="text-slate-500 hover:text-slate-700">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb6200]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb6200]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb6200]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Type of Inquiry (select all that apply)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "Selling",
                    "Buying",
                    "Marketplace",
                    "Platform",
                    "Investor and Agent Reports",
                    "Probidder",
                    "Coaching",
                    "Script Training",
                    "Compliance",
                    "Buyeriq",
                  ].map((inquiry) => (
                    <label key={inquiry} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedInquiries.includes(inquiry)}
                        onChange={() => handleInquiryChange(inquiry)}
                        className="rounded border-slate-300 text-[#fb6200] focus:ring-[#fb6200]"
                      />
                      <span className="text-sm text-slate-700">{inquiry}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb6200]"
                  placeholder="Please describe your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#fb6200] to-[#e55a00] text-white py-2 px-4 rounded-md hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Chat Bot Widget */}
      {chatBotVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {!showChatBot ? (
            <button
              onClick={() => setShowChatBot(true)}
              className="bg-gradient-to-r from-[#fb6200] to-[#e55a00] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bmEwWcg3CinfwqDcZKdp58DJ3DXdLz.png"
                alt="Support Bot"
                width={32}
                height={32}
                className="animate-bounce"
              />
            </button>
          ) : (
            <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
              <div className="bg-gradient-to-r from-[#fb6200] to-[#e55a00] text-white p-4 rounded-t-lg flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bmEwWcg3CinfwqDcZKdp58DJ3DXdLz.png"
                    alt="Support Bot"
                    width={24}
                    height={24}
                  />
                  <span className="font-medium">FlipIQ Support</span>
                </div>
                <button onClick={() => setShowChatBot(false)} className="text-white hover:text-slate-200">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs p-3 rounded-lg ${
                        msg.type === "user" ? "bg-[#fb6200] text-white" : "bg-slate-100 text-slate-800"
                      }`}
                    >
                      {msg.message}
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleChatSubmit} className="p-4 border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb6200] text-sm"
                  />
                  <button
                    type="button"
                    onClick={toggleVoiceInput}
                    className={`p-2 rounded-md transition-colors ${
                      isListening ? "bg-red-500 text-white" : "bg-slate-200 text-slate-600 hover:bg-slate-300"
                    }`}
                  >
                    {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </button>
                  <button
                    type="submit"
                    disabled={!currentMessage.trim()}
                    className="bg-[#fb6200] text-white p-2 rounded-md hover:bg-[#e55a00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
