import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function Services() {
  const services = [
    {
      title: "AI Strategy & Consulting",
      description: "Develop comprehensive AI strategies aligned with your business objectives and digital transformation goals.",
      features: ["AI Readiness Assessment", "ROI Analysis", "Technology Roadmap", "Risk Assessment"],
      icon: "🎯"
    },
    {
      title: "Machine Learning Solutions",
      description: "Build custom ML models and algorithms to solve complex business problems and drive intelligent automation.",
      features: ["Predictive Analytics", "Computer Vision", "Natural Language Processing", "Recommendation Systems"],
      icon: "🤖"
    },
    {
      title: "Data Analytics & Intelligence",
      description: "Transform raw data into actionable insights with advanced analytics and business intelligence solutions.",
      features: ["Data Pipeline Development", "Real-time Analytics", "Dashboard Creation", "Performance Monitoring"],
      icon: "📊"
    },
    {
      title: "Process Automation",
      description: "Streamline operations with intelligent automation solutions that reduce costs and improve efficiency.",
      features: ["Workflow Automation", "Document Processing", "Quality Assurance", "Resource Optimization"],
      icon: "⚡"
    },
    {
      title: "AI Training & Support",
      description: "Empower your team with comprehensive AI training programs and ongoing technical support.",
      features: ["Team Training", "Best Practices", "Technical Support", "Knowledge Transfer"],
      icon: "🎓"
    },
    {
      title: "Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your existing systems with minimal disruption to operations.",
      features: ["System Integration", "Cloud Deployment", "API Development", "Performance Optimization"],
      icon: "🔧"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our AI Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-secondary">
              <CardHeader>
                <div className="text-4xl mb-2">{service.icon}</div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="mr-2 mb-2">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
