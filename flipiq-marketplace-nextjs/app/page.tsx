"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, X, Phone, Mail, Mic, Send } from "lucide-react"

type CtaItem = {
  id: string
  text: string
  description: string
  placeholder: string
}

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
]

export default function MinimalistLandingPage() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  const [placeholder, setPlaceholder] = useState("Enter a property address to get started")
  const [isAddressSectionActive, setIsAddressSectionActive] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showSupportModal, setShowSupportModal] = useState(false)
  const [showChatBot, setShowChatBot] = useState(false)
  const [hideBanner, setHideBanner] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatMessage, setChatMessage] = useState("")
  const [chatMessages, setChatMessages] = useState<Array<{ id: number; text: string; isUser: boolean }>>([])
  const [isListening, setIsListening] = useState(false)
  const [showLoginDropdown, setShowLoginDropdown] = useState(false)
  const [showAboutDropdown, setShowAboutDropdown] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatBot(true)
    }, 3000)

    const bannerTimer = setTimeout(() => {
      setHideBanner(true)
    }, 30000)

    return () => {
      clearTimeout(timer)
      clearTimeout(bannerTimer)
    }
  }, [])

  const handleButtonClick = (newPlaceholder: string, buttonId?: string) => {
    setPlaceholder(newPlaceholder)
    setIsAddressSectionActive(true)

    if (buttonId === "find") {
      setTimeout(() => {
        window.location.href = "/find-your-next-deal"
      }, 500)
    }
  }

  const handleFindOutMore = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowModal(true)
  }

  const handleSupportClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowSupportModal(true)
  }

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (chatMessage.trim()) {
      const newMessage = {
        id: Date.now(),
        text: chatMessage,
        isUser: true,
      }
      setChatMessages((prev) => [...prev, newMessage])

      setTimeout(() => {
        const botResponse = {
          id: Date.now() + 1,
          text: "Thanks for your message! Our support team will get back to you shortly. You can also call us at 1 (844) 435 4795 or email Support@flipiq.com for immediate assistance.",
          isUser: false,
        }
        setChatMessages((prev) => [...prev, botResponse])
      }, 1000)

      setChatMessage("")
    }
  }

  const handleVoiceInput = () => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
      const recognition = new SpeechRecognition()

      recognition.continuous = false
      recognition.interimResults = false
      recognition.lang = "en-US"

      recognition.onstart = () => {
        setIsListening(true)
      }

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setChatMessage(transcript)
        setIsListening(false)
      }

      recognition.onerror = () => {
        setIsListening(false)
      }

      recognition.onend = () => {
        setIsListening(false)
      }

      recognition.start()
    } else {
      alert("Speech recognition is not supported in your browser.")
    }
  }

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans p-6 sm:p-8 md:p-12">
      <header className="w-full flex justify-between items-center mb-4">
        <div className="flex flex-col space-y-1 text-slate-700">
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-orange-500" />
            
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
            className="relative"
            onMouseEnter={() => setShowAboutDropdown(true)}
            onMouseLeave={() => setShowAboutDropdown(false)}
          >
            <Link
              href="/about"
              className="text-lg font-medium text-slate-700 hover:text-orange-500 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-orange-50 flex items-center space-x-1"
            >
              <span>About Us</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${showAboutDropdown ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <div
              className={`absolute top-full left-0 mt-2 w-48 transition-all duration-300 transform origin-top-left ${
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
                  <Link
                    href="/about"
                    className="group flex items-center px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 transition-all duration-200 font-medium"
                    onClick={() => setShowAboutDropdown(false)}
                  >
                    <span className="flex-1">About Us</span>
                  </Link>
                  <Link
                    href="/our-leadership"
                    className="group flex items-center px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 transition-all duration-200 font-medium rounded-b-xl"
                    onClick={() => setShowAboutDropdown(false)}
                  >
                    <span className="flex-1">Leadership</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/tools-for-pros"
            className="text-lg font-medium text-slate-700 hover:text-orange-500 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-orange-50"
          >
            Tools for Pros
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setShowLoginDropdown(true)}
            onMouseLeave={() => setShowLoginDropdown(false)}
          >
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center space-x-2">
              <span>Log In</span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${showLoginDropdown ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>

            <div
              className={`absolute top-full right-0 mt-2 w-64 transition-all duration-300 transform origin-top-right ${
                showLoginDropdown
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
              onMouseEnter={() => setShowLoginDropdown(true)}
              onMouseLeave={() => setShowLoginDropdown(false)}
            >
              <div className="bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50">
                <div className="px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200 rounded-t-xl">
                  <p className="text-sm font-semibold text-orange-800">Choose Your Platform</p>
                </div>

                <div className="py-1">
                  
                    href="https://app.flipiq.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 transition-all duration-200 font-medium"
                    onClick={() => setShowLoginDropdown(false)}
                  >
                    <span className="flex-1">Marketplace</span>
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  
                    href="https://platform.flipiq.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 transition-all duration-200 font-medium"
                    onClick={() => setShowLoginDropdown(false)}
                  >
                    <span className="flex-1">Platform</span>
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  
                    href="https://data.flipiq.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 transition-all duration-200 font-medium"
                    onClick={() => setShowLoginDropdown(false)}
                  >
                    <span className="flex-1">Agent/Investor Reports</span>
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  
                    href="https://seegoal.replit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 transition-all duration-200 font-medium"
                    onClick={() => setShowLoginDropdown(false)}
                  >
                    <span className="flex-1">Coaching</span>
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  
                    href="https://probidder.flipiq.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 transition-all duration-200 font-medium"
                    onClick={() => setShowLoginDropdown(false)}
                  >
                    <span className="flex-1">Probidder</span>
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  
                    href="https://flipiq.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 transition-all duration-200 font-medium"
                    onClick={() => setShowLoginDropdown(false)}
                  >
                    <span className="flex-1">AI Scripts Coaching</span>
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  
                    href="https://compliance-estate-td2535.replit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 transition-all duration-200 font-medium"
                    onClick={() => setShowLoginDropdown(false)}
                  >
                    <span className="flex-1">Compliance</span>
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  
                    href="https://anchorloans-buyeriq.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center px-4 py-3 text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:text-orange-700 transition-all duration-200 font-medium rounded-b-xl"
                    onClick={() => setShowLoginDropdown(false)}
                  >
                    <span className="flex-1">BuyeriQ</span>
                    <svg
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-start text-center pt-12 md:pt-20">
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <Image src="/flipiq-logo-vector.svg" alt="FlipIQ Logo" width={240} height={150} priority />
          </div>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Powerful AI Tools for <span style={{ color: "#fb6200" }}>Smart</span>
            <br />
            Agents, Wholesalers, Investors, and Buyers
          </h2>
        </div>

        <div className="w-full max-w-2xl mx-auto my-8">
          <div
            className={`relative transition-all duration-300 ${
              isAddressSectionActive ? "ring-4 ring-orange-400 ring-opacity-50 rounded-full" : ""
            }`}
          >
            <input
              type="text"
              placeholder={placeholder}
              className={`w-full h-16 pl-6 pr-16 text-lg bg-gray-50 rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all duration-300 ${
                isAddressSectionActive
                  ? "border-2 border-orange-500"
                  : "border-2 border-gray-200 focus:border-orange-500"
              }`}
              aria-label="Property address input"
              key={placeholder}
            />
            <button
              className="absolute top-0 right-0 h-full w-16 flex items-center justify-center text-gray-400 hover:text-orange-500 transition-colors"
              aria-label="Search address"
              type="button"
            >
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-center md:space-x-10 space-y-16 md:space-y-0 mt-8">
            {ctaData.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col items-center"
                onMouseEnter={() => setHoveredButton(item.id)}
                onMouseLeave={() => setHoveredButton(null)}
                onFocus={() => setHoveredButton(item.id)}
                onBlur={() => setHoveredButton(null)}
              >
                <button
                  onClick={() => handleButtonClick(item.placeholder, item.id)}
                  aria-describedby={`${item.id}-desc`}
                  style={{
                    background: "linear-gradient(135deg, #fb6200 0%, #e55a00 100%)",
                  }}
                  className="w-56 h-14 hover:shadow-lg text-white hover:text-white focus:text-white active:text-white text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300 ease-in-out"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #e55a00 0%, #d14f00 100%)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #fb6200 0%, #e55a00 100%)"
                  }}
                  type="button"
                >
                  {item.text}
                </button>
                <div className="absolute top-full mt-4 w-[280px] h-24 flex items-start justify-center">
                  <p
                    id={`${item.id}-desc`}
                    aria-hidden={hoveredButton !== item.id}
                    className={`text-base font-medium text-gray-700 text-center transition-opacity duration-300 ${
                      hoveredButton === item.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {item.id === "sell" ? (
                      <>
                        Connect directly with vetted cash buyers. No fees, no middlemen, no games!{" "}
                        <button
                          onClick={handleFindOutMore}
                          className="text-orange-600 hover:text-orange-700 underline font-semibold transition-colors duration-200 cursor-pointer"
                        >
                          Find out more
                        </button>
                      </>
                    ) : item.id === "find" ? (
                      <>
                        {item.description}{" "}
                        
                          href="https://marketplace.flipiq.com/buyers/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 hover:text-orange-700 underline font-semibold transition-colors duration-200"
                        >
                          Find out more
                        </a>
                      </>
                    ) : (
                      item.description
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative transform translate-x-36">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold text-slate-800 text-center mb-6">Who are you?</h3>

            <div className="space-y-4">
              
                href="https://marketplace.flipiq.com/sellers/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full p-4 text-center text-lg font-semibold text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #fb6200 0%, #e55a00 100%)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, #e55a00 0%, #d14f00 100%)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, #fb6200 0%, #e55a00 100%)"
                }}
              >
                Seller
              </a>

              
                href="https://marketplace.flipiq.com/wholesalers/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full p-4 text-center text-lg font-semibold text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #fb6200 0%, #e55a00 100%)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, #e55a00 0%, #d14f00 100%)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, #fb6200 0%, #e55a00 100%)"
                }}
              >
                Wholesaler
              </a>

              
                href="https://marketplace.flipiq.com/agents/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full p-4 text-center text-lg font-semibold text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #fb6200 0%, #e55a00 100%)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, #e55a00 0%, #d14f00 100%)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, #fb6200 0%, #e55a00 100%)"
                }}
              >
                Agent
              </a>
            </div>
          </div>
        </div>
      )}

      {showSupportModal && (
        <div className="fixed inset-0 bg-transparent flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative max-h-[90vh] overflow-y-auto transform translate-x-36">
            <button
              onClick={() => setShowSupportModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-2xl font-bold text-slate-800 text-center mb-6">Contact Support</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Type of Inquiry * (Select all that apply)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="inquiryType"
                      value="selling"
                      className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Selling</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="inquiryType"
                      value="buying"
                      className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Buying</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="inquiryType"
                      value="marketplace"
                      className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Marketplace</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="inquiryType"
                      value="platform"
                      className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Platform</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="inquiryType"
                      value="investor-agent-reports"
                      className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Investor and Agent Reports</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="inquiryType"
                      value="probidder"
                      className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Probidder</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="inquiryType"
                      value="coaching"
                      className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Coaching</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="inquiryType"
                      value="script-training"
                      className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Script Training</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="inquiryType"
                      value="compliance"
                      className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Compliance</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="inquiryType"
                      value="buyeriq"
                      className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">BuyeriQ</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full p-4 text-center text-lg font-semibold text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #fb6200 0%, #e55a00 100%)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, #e55a00 0%, #d14f00 100%)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "linear-gradient(135deg, #fb6200 0%, #e55a00 100%)"
                }}
              >
                Submit Support Request
              </button>
            </form>
          </div>
        </div>
      )}

      {showChatBot && (
        <div className="fixed bottom-6 right-6 z-50">
          {!isChatOpen ? (
            <div className="relative">
              <button
                onClick={() => setIsChatOpen(true)}
                className={`bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${
                  hideBanner ? "" : "animate-bounce"
                }`}
                aria-label="Open chat support"
              >
                <div className="relative">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bmEwWcg3CinfwqDcZKdp58DJ3DXdLz.png"
                    alt="Support Bot"
                    width={hideBanner ? 32 : 48}
                    height={hideBanner ? 32 : 48}
                    className="animate-pulse"
                  />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                </div>
              </button>
              {!hideBanner && (
                <div className="absolute bottom-full right-0 mb-2 bg-white text-slate-800 px-4 py-2 rounded-lg shadow-lg border border-gray-200 whitespace-nowrap">
                  <div className="text-sm font-medium">Need help? Click me! 👋</div>
                  <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col border border-gray-200">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bmEwWcg3CinfwqDcZKdp58DJ3DXdLz.png"
                    alt="Support Bot"
                    width={32}
                    height={32}
                  />
                  <div>
                    <h4 className="font-semibold">FlipIQ Support</h4>
                    <p className="text-xs opacity-90">We're here to help!</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                <div className="bg-gray-100 p-3 rounded-lg text-sm">
                  <p>
                    Hi! I'm here to help you with any questions about FlipIQ. You can type your message or use the
                    microphone to speak.
                  </p>
                </div>
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`p-3 rounded-lg text-sm max-w-[80%] ${
                      message.isUser ? "bg-orange-500 text-white ml-auto" : "bg-gray-100 text-slate-800"
                    }`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>

              <form onSubmit={handleChatSubmit} className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
                  />
                  <button
                    type="button"
                    onClick={handleVoiceInput}
                    className={`p-2 rounded-lg transition-colors ${
                      isListening ? "bg-red-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                    aria-label="Voice input"
                  >
                    <Mic className="w-4 h-4" />
                  </button>
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition-colors"
                    aria-label="Send message"
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
  )
}
