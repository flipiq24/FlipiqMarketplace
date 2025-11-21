import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";

export default function OurLeadership() {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  const leadership = [
    {
      name: "Tony Diaz",
      title: "Founder",
      description: "30+ years real estate with over 1100 Flips backed by PropTech development",
      linkedin: "https://www.linkedin.com/in/tony-diaz-2a0a7417/",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captur5e.JPG-MwaUreujPgbAcu74hGp5C9BzdeewwZ.jpeg",
    },
    {
      name: "Ethan Jolly",
      title: "COO/CFO",
      description: "With 25+ years in finance and software",
      linkedin: "https://www.linkedin.com/in/ethan-jolly-98b3b621/",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bXMfh78VZms2tDP2Job7Ac9EtyObiD.png",
    },
    {
      name: "Nate Worcester",
      title: "CTO",
      description: "With 20+ years in software development and real estate tech",
      linkedin: "https://www.linkedin.com/in/nate-worcester/",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQGt6KvDrtimKQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726175302664?e=1758758400&v=beta&t=JqVziBhxtqt2RqxJbYibcHS6c0tIsLzfeCzjZOqBwzw",
    },
  ];

  const advisors = [
    {
      name: "Yu-Han Chang",
      title: "AI Technology Advisor",
      description: "Yu-Han Chang, PhD, brings 12+ years of AI & CV innovation",
      linkedin: "https://www.linkedin.com/in/yu-han-chang-011543/",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQGq_z8P3YQlbA/profile-displayphoto-shrink_400_400/B56ZakBc_4HgAk-/0/1746508566942?e=1758758400&v=beta&t=JtBVJP3Lwgn08C2Rky6AMk52axXORub3Dsyqw0vL02k",
    },
    {
      name: "Christine Rifkin",
      title: "Industry Partnerships Advisor",
      description: "37+ years of experience in real estate and title services",
      linkedin: "https://www.linkedin.com/in/christine-rifkin/",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQHI1sxP0OONoQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712711213317?e=1758758400&v=beta&t=80JFcBPMwlnJwMHJNjfk00zoNZgcaZJVJTH5n6MMGsE",
    },
    {
      name: "John Nicholas",
      title: "Technology and Product",
      description: "20 years of leadership in technology, real estate, and product innovation",
      linkedin: "https://www.linkedin.com/in/john-nicholas-7444665/",
      image:
        "https://media.licdn.com/dms/image/v2/C5603AQFAPyDEDj7Nig/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1526139338284?e=1758758400&v=beta&t=yFFsmNYsQvyBLaiCen8jBqIFwqgv2rDDms6j-ZyFp_w",
    },
    {
      name: "Victor Lund",
      title: "Strategy Advisory, PR, Technology",
      description:
        "Founders of WAV Group, a strategic planning firm that empowers brokers, franchises, MLS Associations",
      linkedin: "https://www.linkedin.com/in/victorlund/",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQHLJhpquBoAwg/profile-displayphoto-crop_800_800/B56Zf6prmvHoAI-/0/1752256920592?e=1758758400&v=beta&t=y3SVxjqvpqKfNFXlADGKJg2VlfYPKlgmREsfUwdpTVw",
    },
    {
      name: "Jessica Nieto",
      title: "Real Estate Growth & Brand Advisor",
      description:
        "Expert in real estate sales, acquisitions, and leadership. Known as a relationship cultivator and master connector",
      linkedin: "https://www.linkedin.com/in/jessnietoexp/",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQEFwDI28KEMgw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731179594874?e=1758758400&v=beta&t=77c8_PN1wHFZupnR5KiEYsMydkG7G31EISHhO2T4NAg",
    },
    {
      name: "Eric Lau",
      title: "Technology, AI, and Product Strategy Advisor",
      description:
        "Head of Product for Generative AI Productivity at Amazon Web Services, with over 20 years of leadership",
      linkedin: "https://www.linkedin.com/in/ericvl/",
      image:
        "https://media.licdn.com/dms/image/v2/C5603AQGNbDJUV6j6Ww/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1608317601002?e=1758758400&v=beta&t=LW5zjlR6-GDFUwUKI-vxeSBIR1ERYH7BSy94avSF-Ps",
    },
    {
      name: "Rick Sharga",
      title: "Market Intelligence and Business Advisory",
      description: "20+ years experience in Real Estate and Mortgage Industries in Corporate Communications",
      linkedin: "https://www.linkedin.com/in/ricksharga/",
      image:
        "https://media.licdn.com/dms/image/v2/C4E03AQFhclq91h4DSA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516158414433?e=1758758400&v=beta&t=FiDsnARgv52WZotQjwMRkugQyVJLivkRGc3q6RL1Uio",
    },
    {
      name: "Matthew Dool",
      title: "Real Estate Acquisitions & Investment Strategy Advisor",
      description: "25 years of experience in real estate investment, REO markets, and strategic asset management",
      linkedin: "https://www.linkedin.com/in/mathew-dool-4b88889/",
      image:
        "https://media.licdn.com/dms/image/v2/C5603AQE7TvCObv4S8A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1652900190152?e=1758758400&v=beta&t=YNCOL3QgfLWJVtEZdEI1ogRirOLCFO0_ijqXZnMxP8o",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/">
              <a className="flex items-center">
                <img src="/flipiq-logo-vector.svg" alt="FlipIQ" width={120} height={75} className="w-30 h-auto" />
              </a>
            </Link>
            <nav className="flex space-x-8 items-center">
              <div
                className="relative group"
                onMouseEnter={() => setShowAboutDropdown(true)}
                onMouseLeave={() => setShowAboutDropdown(false)}
              >
                <button
                  className="text-gray-700 hover:text-[#fb6200] transition-colors duration-200 flex items-center space-x-1 px-2 py-1"
                >
                  <span>About Us</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAboutDropdown ? "rotate-180" : ""}`} />
                </button>

                {showAboutDropdown && (
                  <div
                    className="absolute top-full left-0 mt-2 w-48 z-50"
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
                )}
              </div>
              <Link href="/tools">
                <a className="text-gray-700 hover:text-[#fb6200] transition-colors duration-200">
                  Tools for Pros
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={person.image || "/placeholder.svg"}
                    alt={`${person.name} - ${person.title}`}
                    className={`w-full h-full object-cover ${person.name === "Tony Diaz" ? "object-top" : ""}`}
                  />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-[#fb6200]">{person.name}</h3>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#0077b5] transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
                <p className="text-gray-600 font-medium mb-3">{person.title}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{person.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Advisors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisors.map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={person.image || "/placeholder.svg"}
                    alt={`${person.name} - ${person.title}`}
                    className={`w-full h-full object-cover ${person.name === "Tony Diaz" ? "object-top" : ""}`}
                  />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-lg font-bold text-[#fb6200]">{person.name}</h3>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#0077b5] transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
                <p className="text-gray-600 font-medium mb-3 text-sm h-10 flex items-center justify-center">{person.title}</p>
                <p className="text-gray-700 text-xs leading-relaxed">{person.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
