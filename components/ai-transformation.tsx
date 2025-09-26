import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function AITransformation() {
  const arcSteps = [
    {
      letter: "A",
      title: "Assess",
      subtitle: "AI Readiness Discovery",
      description: "We begin with comprehensive discovery calls to understand your current state, challenges, and AI readiness across people, processes, and technology.",
      outcomes: [
        "Current state analysis",
        "AI readiness scorecard", 
        "Capability gap identification",
        "Risk assessment"
      ]
    },
    {
      letter: "R",
      title: "Reveal", 
      subtitle: "Opportunity Discovery & Analysis",
      description: "We uncover hidden opportunities and identify key areas where AI can create the most significant impact for your organization.",
      outcomes: [
        "Opportunity identification",
        "Impact assessment",
        "Quick wins mapping",
        "ROI potential analysis"
      ]
    },
    {
      letter: "C",
      title: "Chart",
      subtitle: "Strategic Path Creation", 
      description: "We create a clear, actionable roadmap that charts your path from current state to AI-powered success with defined milestones.",
      outcomes: [
        "Implementation roadmap",
        "Milestone definition",
        "Resource planning",
        "Success measurement framework"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="animated-bg py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-[50px] mt-[0px] mr-[0px] ml-[0px]">
              <h1 className="text-5xl font-bold text-white mb-6 pt-[40px] pr-[0px] pb-[10px] pl-[0px]">
                AI Transformation Through the ARC Methodology
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Our proven approach to AI-Forward transformation that builds bridges between 
                your current state and your AI-powered future.
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('https://calendly.com/ben-agenticarc/call-and-connect?month=2025-09', '_blank')}
                className="neu-button btn-secondary font-bold px-8 py-3"
              >
                Book now!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ARC Methodology Details */}
      <section className="panel-white py-20">
        <div className="flex justify-center">
          <div className="animate-bounce">
            <svg 
              className="w-8 h-8 text-secondary" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </section>

      {/* ARC Methodology Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">The ARC Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to AI transformation that ensures sustainable success 
              and measurable business impact.
            </p>
          </div>

          <div className="space-y-12">
            {arcSteps.map((step, index) => (
              <div key={index} className={`${index % 2 === 1 ? 'panel-ivory' : ''} py-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8`}>
                <div className="max-w-7xl mx-auto">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                          {step.letter}
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-primary">{step.title}</h3>
                          <p className="text-lg text-secondary font-semibold">{step.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                        {step.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-primary mb-3">Key Outcomes:</h4>
                        <ul className="space-y-2">
                          {step.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-center text-gray-700">
                              <span className="text-secondary mr-3">✓</span>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                      <Card className="neu-card border-0 h-64 flex items-center justify-center">
                        <CardContent className="text-center">
                          <div className="w-24 h-24 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white font-bold text-4xl mx-auto mb-4">
                            {step.letter}
                          </div>
                          <h4 className="text-xl font-bold text-primary">{step.title}</h4>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Take Away */}
      <section className="panel-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What You'll Take Away</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every AI transformation engagement delivers concrete tools, strategies, and next steps 
              to immediately begin your organization's AI journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="neu-card border-0 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <span className="text-secondary mr-4 text-xl">✓</span>
                  <p className="text-gray-700">Comprehensive AI readiness assessment and scorecard</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="neu-card border-0 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <span className="text-secondary mr-4 text-xl">✓</span>
                  <p className="text-gray-700">Custom AI Transformation roadmap with defined timeline</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="neu-card border-0 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <span className="text-secondary mr-4 text-xl">✓</span>
                  <p className="text-gray-700">Prioritized quick wins and high-impact opportunity analysis</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="neu-card border-0 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <span className="text-secondary mr-4 text-xl">✓</span>
                  <p className="text-gray-700">Resource planning and budget framework for AI initiatives</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="neu-card border-0 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <span className="text-secondary mr-4 text-xl">✓</span>
                  <p className="text-gray-700">Success measurement framework and KPI definitions</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="neu-card border-0 bg-white">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <span className="text-secondary mr-4 text-xl">✓</span>
                  <p className="text-gray-700">Ongoing support and strategic guidance throughout implementation</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="neu-card border-0 p-12 bg-gradient-to-br from-secondary to-primary text-white">
            <CardContent>
              <h2 className="text-3xl font-bold mb-4 text-[rgba(81,173,223,1)]">Ready to Start Your AI Transformation?</h2>
              <p className="text-xl mb-8 text-[rgba(100,105,109,1)]">
                Book a discovery call to learn how the ARC Methodology can accelerate 
                your organization's AI journey.
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('https://calendly.com/ben-agenticarc/call-and-connect?month=2025-09', '_blank')}
                className="neu-button bg-[rgba(81,173,223,1)] text-primary hover:bg-gray-100 font-bold px-8 py-3 border-2 border-white"
              >
                Book now!
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
