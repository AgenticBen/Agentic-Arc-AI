import { Button } from "./ui/button";
import { Input } from "./ui/input";
import lightLogo from "figma:asset/ac1bf454ebce1f1134007bbbd034e054e4b7f4b1.png";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "AI Transformation", id: "ai-transformation" },
    { name: "Workshops", id: "workshops" },
    { name: "Webinars", id: "webinars" },
    { name: "AI Academy", id: "ai-academy" },
    { name: "Case Studies", id: "case-studies" },
    { name: "About", id: "about" },
    { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" }
  ];

  const services = [
    "AI Strategy & Consulting",
    "ARC Methodology Implementation", 
    "Quarterly Workshops",
    "AI Fundamentals Webinars",
    "Org AI Academy",
    "Corporate Training",
    "Implementation Support"
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    alert("Thank you for subscribing! You'll receive our latest AI insights.");
  };

  return (
    <footer className="panel-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <img 
              src={lightLogo} 
              alt="Agentic Arc AI" 
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-300 mb-6">
              Building Bridges for Impactful AI Transformation. AI-Powered and Human-Centered solutions.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <span className="mr-2">📍</span>
                Charlotte, NC
              </div>
              <div className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:7043869095" className="hover:text-white transition-colors">
                  704-386-9095
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:ben@agenticarc.ai" className="hover:text-white transition-colors">
                  ben@agenticarc.ai
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-300 hover:text-white transition-colors text-sm block text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Workshop */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Attend Our Workshop</h4>
            <p className="text-gray-300 text-sm mb-4">
              Join our quarterly AI Fundamentals Workshop - limited seats available for hands-on learning and strategic planning.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <span className="text-secondary mr-2">📅</span>
                Next Workshop: Q1 2025 - March 15
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="text-secondary mr-2">📍</span>
                Charlotte, NC + Virtual Option
              </div>
              <Button 
                onClick={() => onNavigate('workshops')}
                size="sm" 
                className="neu-button btn-secondary w-full"
              >
                Reserve Your Seat
              </Button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Early bird pricing available.
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Agentic Arc AI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button 
                onClick={() => onNavigate('privacy')}
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => onNavigate('terms')}
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </button>
              <a 
                href="https://linkedin.com/in/ben-agenticarc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
