import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function Blog() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="animated-bg py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-8">
                AI Transformation Insights
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12">
                Follow Ben on LinkedIn for the latest insights, strategic frameworks, and real-world lessons from the frontlines of AI transformation.
              </p>
              
              <Card className="neu-card border-0 p-12 bg-white max-w-2xl mx-auto">
                <CardContent className="text-center">
                  <div className="text-6xl mb-6">📱</div>
                  <h2 className="text-3xl font-bold text-primary mb-6">Connect on LinkedIn</h2>
                  <p className="text-lg text-gray-700 mb-8">
                    Get AI strategy insights, industry discussions, and exclusive content from Ben Dudley, founder of Agentic Arc AI.
                  </p>
                  <Button 
                    size="lg"
                    onClick={() => window.open('https://www.linkedin.com/in/ben-dudley1/recent-activity/all/', '_blank')}
                    className="neu-button btn-secondary font-bold px-12 py-4 text-xl"
                  >
                    Follow on LinkedIn
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
