import React, { useState } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle, X } from "lucide-react";

export default function ToolsForProsPage() {
  const [showHelpBot, setShowHelpBot] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      type: "bot",
      message:
        "Hi! I'm here to help you with any questions about FlipIQ. You can type your message or use the microphone to speak",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = "en-US";

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
      };

      recognition.start();
    }
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setChatMessages((prev) => [...prev, { type: "user", message: inputMessage }]);

      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            type: "bot",
            message:
              "Thank you for your question! Our team will get back to you shortly. For immediate assistance, please call 1 (844) 435 4795 or email Support@flipiq.com.",
          },
        ]);
      }, 1000);

      setInputMessage("");
    }
  };

  const services = [
    {
      title: "Marketplace",
      description: "Off-market MLS connecting buyers and sellers directly.",
      image: "/network-connections-digital-marketplace-real-estat.png",
      url: "https://app.flipiq.com/",
    },
    {
      title: "Platform",
      description: "Full enterprise solution for operators (Acquisition and Disposition).",
      image: "/business-people-reviewing-property-listings-on-com.png",
      url: "https://platform.flipiq.com/login",
    },
    {
      title: "Agent/Investor Reports",
      description: "Complete data to connect with investor-friendly agents and active buyers by track record.",
      image: "/real-estate-analytics-dashboard.png",
      url: "https://data.flipiq.com/",
    },
    {
      title: "ProBidder",
      description: "Scope-of-work creator & Construction management.",
      image: "/construction-worker-using-computer-with-project-ma.png",
      url: "https://probidder.flipiq.com/login",
    },
    {
      title: "Coaching",
      description: "AI-driven coaching for agents, investors, and wholesalers.",
      image: "/ai-network-visualization-with-connected-nodes-and-.png",
      url: "https://seegoal.replit.app/",
    },
    {
      title: "AI Script Training",
      description: "AI-driven script coaching for agent outreach and direct sales to sellers.",
      image: "/ai-brain-visualization-with-neural-networks-and-co.png",
      url: "https://flipiq.vercel.app/",
    },
    {
      title: "Compliance",
      description: "Comprehensive compliance solutions for real estate professionals and transactions.",
      image: "/legal-compliance-documents-and-checkmarks-for-real.png",
      url: "https://compliance-estate-td2535.replit.app/",
    },
    {
      title: "BuyeriQ",
      description: "Intelligent buyer matching and qualification system powered by advanced analytics.",
      image: "/buyer-analytics-and-matching-system-with-data-visu.png",
      url: "https://anchorloans-buyeriq.vercel.app/",
    },
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans p-6 sm:p-8 md:p-12">
      <header className="w-full flex justify-between items-center mb-8">
        <Link href="/">
          <a className="flex items-center">
            <img src="/flipiq-logo-vector.svg" alt="FlipIQ Logo" width={120} height={75} />
          </a>
        </Link>
        <nav className="flex space-x-6">
          <Link href="/our-leadership">
            <a className="text-slate-700 hover:text-[#fb6200] font-medium transition-colors duration-200">
              Our Leadership
            </a>
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setShowAboutDropdown(true)}
            onMouseLeave={() => setShowAboutDropdown(false)}
          >
            <Link href="/about-us">
              <a className="text-slate-700 hover:text-[#fb6200] font-medium transition-colors duration-200 flex items-center space-x-1 px-2 py-1">
                <span>About Us</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${showAboutDropdown ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </Link>

            <div
              className={`absolute top-full right-0 mt-2 w-48 transition-all duration-300 transform origin-top-right ${
                showAboutDropdown
                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
              style={{
                paddingTop: "8px",
                paddingBottom: "8px",
                paddingLeft: "8px",
                paddingRight: "8px",
                marginTop: "-8px",
              }}
              onMouseEnter={() => setShowAboutDropdown(true)}
              onMouseLeave={() => setShowAboutDropdown(false)}
            >
              <div className="bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50">
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
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-start text-center pt-8 md:pt-12 relative">
        <div className="max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Tools for <span style={{ color: "#fb6200" }}>Pros</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover FlipIQ's comprehensive suite of professional tools designed to streamline your real estate
            operations, enhance productivity, and drive success in today's competitive market.
          </p>

          <div className="flex justify-end items-center mt-8 max-w-2xl mx-auto">
            <span className="text-slate-600 mr-3">Click here to ask any questions</span>
            <Button
              onClick={() => setShowHelpBot(true)}
              className="bg-gradient-to-r from-[#fb6200] to-[#e55a00] hover:from-[#e55a00] hover:to-[#cc4f00] text-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader className="p-0">
                <div className="w-full h-48 overflow-hidden rounded-t-xl bg-gray-100 flex items-center justify-center">
                   {/* Placeholder image since we can't assume assets exist */}
                   <div className="text-gray-400 text-sm">Image Placeholder</div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-xl font-bold text-slate-800 mb-3">{service.title}</CardTitle>
                <CardDescription className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  asChild
                  className="w-full text-white font-semibold py-3 px-6 rounded-md transition-all duration-200"
                  style={{
                    backgroundColor: "#fb6200",
                    background: "linear-gradient(135deg, #fb6200 0%, #e55a00 100%)",
                  }}
                >
                  <a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Access Application
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      {showHelpBot && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md h-96 flex flex-col">
            <div className="bg-gradient-to-r from-[#fb6200] to-[#e55a00] text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">FlipIQ Support</h3>
              <Button
                onClick={() => setShowHelpBot(false)}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      msg.type === "user" ? "bg-[#fb6200] text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb6200] text-sm"
              />
               <Button onClick={handleSendMessage} className="bg-[#fb6200] hover:bg-[#e55a00]">
                 <MessageCircle className="w-4 h-4" />
               </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
