import { useState } from "react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import lightLogo from "figma:asset/ac1bf454ebce1f1134007bbbd034e054e4b7f4b1.png";
import darkLogo from "figma:asset/88581ceff6f50b12ebe942a63f2c623bbc8f1b2d.png";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isServicesPage = ['ai-transformation', 'workshops', 'webinars', 'ai-academy'].includes(currentPage);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 neu-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <img 
              src={darkLogo} 
              alt="Agentic Arc AI" 
              className="h-8 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'home'
                  ? 'text-primary font-semibold'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`px-3 py-2 rounded-md transition-colors flex items-center ${
                    isServicesPage
                      ? 'text-primary font-semibold'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                >
                  Services
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="neu-card border-0">
                <DropdownMenuItem onClick={() => onNavigate('ai-transformation')}>
                  AI Transformation
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate('workshops')}>
                  Workshops
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate('webinars')}>
                  Webinars
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onNavigate('ai-academy')}>
                  AI Academy
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => onNavigate('case-studies')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'case-studies'
                  ? 'text-primary font-semibold'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Case Studies
            </button>

            <button
              onClick={() => onNavigate('about')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'about'
                  ? 'text-primary font-semibold'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              About
            </button>

            <button
              onClick={() => onNavigate('blog')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'blog'
                  ? 'text-primary font-semibold'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Blog
            </button>

            <button
              onClick={() => onNavigate('contact')}
              className={`px-3 py-2 rounded-md transition-colors ${
                currentPage === 'contact'
                  ? 'text-primary font-semibold'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Contact
            </button>
          </div>

          {/* CTA Button & Login */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => onNavigate('admin')}
              className="text-xs text-gray-400 hover:text-gray-600 px-2 py-1 transition-colors"
              title="Admin Login"
            >
              ⚙️
            </button>
            <Button 
              onClick={() => window.open('https://calendly.com/ben-agenticarc/call-and-connect?month=2025-09', '_blank')}
              className="neu-button btn-secondary font-bold px-6 py-2"
            >
              Book now!
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="neu-button p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 neu-card mt-2">
              <button
                onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => { onNavigate('ai-transformation'); setMobileMenuOpen(false); }}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary w-full text-left"
              >
                AI Transformation
              </button>
              <button
                onClick={() => { onNavigate('workshops'); setMobileMenuOpen(false); }}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary w-full text-left"
              >
                Workshops
              </button>
              <button
                onClick={() => { onNavigate('webinars'); setMobileMenuOpen(false); }}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary w-full text-left"
              >
                Webinars
              </button>
              <button
                onClick={() => { onNavigate('ai-academy'); setMobileMenuOpen(false); }}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary w-full text-left"
              >
                AI Academy
              </button>
              <button
                onClick={() => { onNavigate('case-studies'); setMobileMenuOpen(false); }}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary w-full text-left"
              >
                Case Studies
              </button>
              <button
                onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => { onNavigate('blog'); setMobileMenuOpen(false); }}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary w-full text-left"
              >
                Blog
              </button>
              <button
                onClick={() => { onNavigate('contact'); setMobileMenuOpen(false); }}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary w-full text-left"
              >
                Contact
              </button>
              <Button 
                onClick={() => {
                  window.open('https://calendly.com/ben-agenticarc/call-and-connect?month=2025-09', '_blank');
                  setMobileMenuOpen(false);
                }}
                className="neu-button btn-secondary font-bold px-6 py-2 w-full mt-2"
              >
                Book now!
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
