import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import lightLogo from "figma:asset/ac1bf454ebce1f1134007bbbd034e054e4b7f4b1.png";

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="relative animated-bg min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">

            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Building Bridges for
              <span className="text-secondary"> Impactful AI</span>
              <br />
              <span className="text-secondary">Transformation</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              AI-Powered and Human-Centered solutions that transform business through 
              strategic AI implementation. Charting your Arc for success tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                onClick={() => window.open('https://calendly.com/ben-agenticarc/call-and-connect?month=2025-09', '_blank')}
                className="neu-button btn-secondary font-bold px-8 py-3"
              >
                Book A Call
              </Button>
              <Button 
                size="lg" 
                onClick={() => onNavigate('ai-transformation')}
                className="neu-button btn-outline font-bold px-8 py-3 bg-white text-primary border-white hover:bg-white hover:text-primary"
              >
                See AI Transformation
              </Button>
            </div>
            

          </div>
          
          <div className="lg:pl-8">
            <div className="neu-card p-8 bg-white/95">
              <h3 className="text-2xl font-bold text-primary mb-6">The ARC Methodology</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">A</div>
                  <div>
                    <h4 className="font-semibold text-primary">Assess</h4>
                    <p className="text-sm text-gray-600">Comprehensive AI readiness assessment</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">R</div>
                  <div>
                    <h4 className="font-semibold text-primary">Reveal</h4>
                    <p className="text-sm text-gray-600">Uncover AI Implementation opportunities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">C</div>
                  <div>
                    <h4 className="font-semibold text-primary">Chart</h4>
                    <p className="text-sm text-gray-600">Clear path to AI Transformation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
