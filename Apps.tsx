import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { About } from "./components/about";
import { CaseStudies } from "./components/case-studies";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { AITransformation } from "./components/ai-transformation";
import { Workshops } from "./components/workshops";
import { AIAcademy } from "./components/ai-academy";
import { Blog } from "./components/blog";
import { Webinars } from "./components/webinars";
import { Admin } from "./components/admin";
import { LeadPopupManager } from "./components/lead-popup";
import { TestimonialCarousel } from "./components/testimonial-carousel";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Initialize Google Analytics
  useEffect(() => {
    // Check if Google Analytics is already loaded
    if (window.gtag) {
      return;
    }

    // Add Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-03WNHEY2P6';
    script1.id = 'gtag-script';
    document.head.appendChild(script1);

    // Add Google Analytics configuration script
    const script2 = document.createElement('script');
    script2.id = 'gtag-config';
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-03WNHEY2P6');
    `;
    document.head.appendChild(script2);

    // No cleanup function needed - let scripts persist
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    // Smooth scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <HomeContent onNavigate={handleNavigate} />
          </>
        );
      case "ai-transformation":
        return <AITransformation />;
      case "workshops":
        return <Workshops />;
      case "webinars":
        return <Webinars />;
      case "ai-academy":
        return <AIAcademy />;
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "case-studies":
        return <CaseStudies />;
      case "blog":
        return <Blog />;
      case "contact":
        return <Contact />;
      case "admin":
        return <Admin />;
      case "privacy":
        return <PrivacyPolicy />;
      case "terms":
        return <TermsOfService />;
      default:
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <HomeContent onNavigate={handleNavigate} />
          </>
        );
    }
  };

  return (
    <LeadPopupManager>
      <div className="min-h-screen flex flex-col">
        {currentPage !== "admin" && <Navigation currentPage={currentPage} onNavigate={handleNavigate} />}
        <main className="flex-1">
          {renderCurrentPage()}
        </main>
        {currentPage !== "admin" && <Footer onNavigate={handleNavigate} />}
      </div>
    </LeadPopupManager>
  );
}

// Home page content sections
function HomeContent({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <>
      {/* ARC Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">The ARC Methodology</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our proven framework for AI transformation that ensures sustainable success and measurable business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="neu-card p-8 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">A</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Assess</h3>
              <p className="text-gray-700">Comprehensive evaluation of your AI readiness, capabilities, and strategic alignment.</p>
            </div>
            <div className="neu-card p-8 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">R</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Reveal</h3>
              <p className="text-gray-700">Uncover hidden opportunities and identify key areas for AI transformation impact.</p>
            </div>
            <div className="neu-card p-8 text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">C</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Chart</h3>
              <p className="text-gray-700">Create a clear path forward with actionable implementation strategies and timelines.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => onNavigate('ai-transformation')}
              className="neu-button btn-secondary font-bold px-8 py-3 text-lg"
            >
              Begin Your Transformation
            </button>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="panel-light-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Drive Real Business Impact</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our AI transformation approach delivers measurable results across three critical business dimensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="neu-card p-8 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Efficiency</h3>
              <p className="text-gray-700">Streamline operations and reduce costs through intelligent automation and AI-powered workflows.</p>
            </div>
            <div className="neu-card p-8 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Growth</h3>
              <p className="text-gray-700">Unlock new revenue opportunities and competitive advantages through data-driven insights.</p>
            </div>
            <div className="neu-card p-8 text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Compliance</h3>
              <p className="text-gray-700">Ensure responsible AI implementation with built-in governance and security frameworks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to accelerate your transformation journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="neu-card p-8 cursor-pointer hover:shadow-xl transition-shadow" onClick={() => onNavigate('ai-transformation')}>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-primary mb-4">AI Transformation</h3>
              <p className="text-gray-700 mb-4 text-[16px]">Begin AI implementation using our proven ARC Methodology.</p>
              <span className="text-secondary font-semibold">Learn More →</span>
            </div>
            <div className="neu-card p-8">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Webinar</h3>
              <p className="text-gray-700 mb-4">Quarterly AI Fundamentals Webinar.</p>
              <a 
                target="_blank" 
                href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NnY2cGphMWZhb2d1cGJsdGw1bzk2NzI0bzggYmVuQGFnZW50aWNhcmMuYWk&amp;tmsrc=ben%40agenticarc.ai"
                className="neu-button btn-secondary font-bold px-6 py-2 text-center inline-block"
              >
                Save My Seat →
              </a>
            </div>
            <div className="neu-card p-8 cursor-pointer hover:shadow-xl transition-shadow" onClick={() => onNavigate('ai-academy')}>
              <div className="text-4xl mb-4">🏫</div>
              <h3 className="text-2xl font-bold text-primary mb-4">AI Academy</h3>
              <p className="text-gray-700 mb-4">Organizational Level AI Academy.</p>
              <span className="text-secondary font-semibold">Enroll Today →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Banner */}
      <section className="panel-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="neu-card bg-white p-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Q4 2025 Intro to AI Webinar</h2>
            <div className="flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-red-600 font-semibold text-lg">Limited Seats Remaining</span>
            </div>
            <p className="text-xl text-gray-700 mb-6">
              Join leaders from across industries for our AI Fundamentals Webinar. 
              Limited seats available - December 15, 2025.
            </p>
            <a 
              target="_blank" 
              href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NnY2cGphMWZhb2d1cGJsdGw1bzk2NzI0bzggYmVuQGFnZW50aWNhcmMuYWk&amp;tmsrc=ben%40agenticarc.ai"
              className="neu-button btn-secondary font-bold px-8 py-3 text-lg inline-block"
            >
              Reserve Your Seat
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Case Study Highlight */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="neu-card p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">Success Story Spotlight</h2>
                <h3 className="text-2xl font-semibold text-secondary mb-4">Manufacturing AI Transformation</h3>
                <p className="text-lg text-gray-700 mb-6">
                  How we helped a mid-size manufacturing company reduce operational costs by 35% 
                  and increase production efficiency by 50% through strategic AI implementation.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-secondary">35%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">50%</div>
                    <div className="text-sm text-gray-600">Efficiency Increase</div>
                  </div>
                </div>
                <button 
                  onClick={() => onNavigate('case-studies')}
                  className="neu-button btn-primary font-bold px-6 py-3"
                >
                  View Full Case Study
                </button>
              </div>
              <div>
                <div className="neu-card p-8 bg-gradient-to-br from-secondary to-primary text-white">
                  <blockquote className="text-xl italic mb-4">
                    "Agentic Arc AI didn't just implement technology - they transformed our entire approach 
                    to operations. The ARC Methodology gave us a clear path from assessment to results."
                  </blockquote>
                  <footer className="font-semibold">
                    — Sarah Martinez, VP Operations
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Testimonial Slider Component
function TestimonialSlider() {
  const testimonials = [
    {
      quote: "The ARC Methodology provided exactly the structured approach we needed for our AI transformation. Results exceeded expectations.",
      author: "Michael Chen",
      role: "CTO",
      company: "TechCorp - Fortune 500"
    },
    {
      quote: "From strategy to implementation, Agentic Arc AI was with us every step. Their expertise made all the difference.",
      author: "Emily Rodriguez", 
      role: "Head of Innovation",
      company: "Growth Industries"
    },
    {
      quote: "Finally, an AI consultant that focuses on practical business outcomes rather than just technology. Highly recommended.",
      author: "David Park",
      role: "CEO",
      company: "Enterprise Solutions"
    },
    {
      quote: "Agentic Arc AI didn't just implement technology - they transformed our entire approach to operations. The results speak for themselves.",
      author: "Sarah Martinez",
      role: "VP Operations",
      company: "Manufacturing Corp"
    },
    {
      quote: "The workshop was incredibly valuable. We left with a clear 90-day AI implementation plan and the confidence to execute it.",
      author: "James Wilson",
      role: "Director of Strategy",
      company: "Innovation Labs"
    }
  ];

  return (
    <section className="panel-light-blue py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from leaders who've transformed their organizations with the ARC Methodology.
          </p>
        </div>
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}

// Simple Privacy Policy Component
function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
        <div className="neu-card p-8">
          <p className="text-gray-700 mb-4">
            This privacy policy describes how Agentic Arc AI collects, uses, and protects your information.
          </p>
          <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect information you provide directly to us, such as when you contact us or register for our services.
          </p>
          <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect to provide, maintain, and improve our services and communicate with you.
          </p>
          <p className="text-sm text-gray-600 mt-8">
            Last updated: January 2025
          </p>
        </div>
      </div>
    </div>
  );
}

// Simple Terms of Service Component  
function TermsOfService() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary mb-8">Terms of Service</h1>
        <div className="neu-card p-8">
          <p className="text-gray-700 mb-4">
            These terms of service govern your use of Agentic Arc AI's website and services.
          </p>
          <h2 className="text-2xl font-bold text-primary mb-4">Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing and using our services, you accept and agree to be bound by these terms.
          </p>
          <h2 className="text-2xl font-bold text-primary mb-4">Services</h2>
          <p className="text-gray-700 mb-4">
            We provide AI consultation, training, and implementation services as described on our website.
          </p>
          <p className="text-sm text-gray-600 mt-8">
            Last updated: January 2025
          </p>
        </div>
      </div>
    </div>
  );
}
