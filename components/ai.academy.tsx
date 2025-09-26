import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";

export function AIAcademy() {
  const [enrollmentData, setEnrollmentData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    experience: "",
    format: ""
  });

  const curriculumModules = [
    {
      title: "AI Foundations & Strategy",
      duration: "2 weeks",
      topics: ["AI landscape overview", "Strategic planning", "ROI assessment", "Risk management"]
    },
    {
      title: "Data & Analytics Readiness",
      duration: "3 weeks", 
      topics: ["Data governance", "Quality assessment", "Analytics infrastructure", "Privacy compliance"]
    },
    {
      title: "AI Implementation Planning",
      duration: "3 weeks",
      topics: ["Technology selection", "Integration strategies", "Change management", "Success metrics"]
    },
    {
      title: "Leadership & Governance",
      duration: "2 weeks",
      topics: ["AI ethics", "Team building", "Vendor management", "Continuous improvement"]
    }
  ];

  const formats = [
    {
      name: "Self-Paced Online",
      duration: "10 weeks",
      price: "$2,997",
      features: [
        "Complete video curriculum",
        "Interactive assessments", 
        "Downloadable resources",
        "Community forum access",
        "Certificate of completion"
      ]
    },
    {
      name: "Cohort-Based Course",
      duration: "8 weeks",
      price: "$4,997",
      features: [
        "Live weekly sessions",
        "Direct expert mentorship",
        "Peer collaboration",
        "Custom case studies",
        "1:1 strategy session"
      ]
    },
    {
      name: "Enterprise Training",
      duration: "Custom",
      price: "Contact us",
      features: [
        "Customized curriculum",
        "On-site delivery option",
        "Team assessments",
        "Implementation support",
        "Ongoing consultation"
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Academy enrollment:", enrollmentData);
    alert("Thank you for your interest! We'll contact you within 24 hours with enrollment details.");
  };

  const handleChange = (field: string, value: string) => {
    setEnrollmentData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="panel-ivory py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white text-gray-800 px-3 py-2 border border-gray-200 flex items-center gap-2 shadow-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Enrollment Limited
            </Badge>
            <h1 className="text-5xl font-bold text-primary mb-6">
              Org AI Academy
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive AI leadership training program designed to transform 
              organizational leaders into AI-forward strategic thinkers and implementers.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Transform Your Organization's AI Capabilities
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                The Org AI Academy is a comprehensive leadership development program that 
                equips executives and senior managers with the knowledge, frameworks, and 
                practical skills needed to successfully lead AI transformation initiatives.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-secondary mr-3">✓</span>
                  <span>Strategic AI planning and implementation</span>
                </div>
                <div className="flex items-center">
                  <span className="text-secondary mr-3">✓</span>
                  <span>Data governance and ethical AI practices</span>
                </div>
                <div className="flex items-center">
                  <span className="text-secondary mr-3">✓</span>
                  <span>Change management for AI adoption</span>
                </div>
                <div className="flex items-center">
                  <span className="text-secondary mr-3">✓</span>
                  <span>ROI measurement and performance tracking</span>
                </div>
              </div>
            </div>

            <div>
              <Card className="neu-card border-0 p-8">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary mb-4">Program Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-secondary">95%</div>
                      <div className="text-sm text-gray-600">Completion Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-secondary">87%</div>
                      <div className="text-sm text-gray-600">Implementation Success</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-secondary">150+</div>
                      <div className="text-sm text-gray-600">Leaders Trained</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-secondary">$2.3M</div>
                      <div className="text-sm text-gray-600">Avg ROI Generated</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="panel-ivory py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Comprehensive Curriculum</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Four comprehensive modules covering every aspect of AI leadership and implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculumModules.map((module, index) => (
              <Card key={index} className="neu-card border-0">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-primary">{module.title}</CardTitle>
                    <Badge className="bg-secondary text-white">{module.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {module.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="text-secondary mr-2">•</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Format Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Choose Your Learning Format</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Flexible options designed to fit your schedule and learning preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formats.map((format, index) => (
              <Card key={index} className={`neu-card border-0 ${index === 1 ? 'ring-2 ring-secondary' : ''}`}>
                <CardHeader className="text-center">
                  {index === 1 && (
                    <Badge className="mb-2 bg-secondary text-white">Most Popular</Badge>
                  )}
                  <CardTitle className="text-2xl text-primary">{format.name}</CardTitle>
                  <div className="text-sm text-gray-600 mb-2">{format.duration}</div>
                  <div className="text-3xl font-bold text-secondary">{format.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {format.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="text-secondary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="neu-button bg-secondary hover:bg-secondary/90 text-[rgba(81,173,223,1)] font-bold w-full mt-6 border-2 border-secondary"
                    onClick={() => window.open('https://calendly.com/ben-agenticarc/call-and-connect?month=2025-09', '_blank')}
                  >
                    Book now!
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="panel-charcoal py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[rgba(81,173,223,1)] mb-4">Enroll Today</h2>
            <p className="text-xl text-gray-300">
              Take the first step toward becoming an AI-forward leader in your organization.
            </p>
          </div>

          <Card className="neu-card border-0">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Full Name *"
                    required
                    value={enrollmentData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="neu-button border-0"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    required
                    value={enrollmentData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="neu-button border-0"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Company Name *"
                    required
                    value={enrollmentData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="neu-button border-0"
                  />
                  <Input
                    type="text"
                    placeholder="Job Title/Role *"
                    required
                    value={enrollmentData.role}
                    onChange={(e) => handleChange("role", e.target.value)}
                    className="neu-button border-0"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select onValueChange={(value) => handleChange("experience", value)}>
                    <SelectTrigger className="neu-button border-0">
                      <SelectValue placeholder="AI Experience Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select onValueChange={(value) => handleChange("format", value)}>
                    <SelectTrigger className="neu-button border-0">
                      <SelectValue placeholder="Preferred Format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="self-paced">Self-Paced Online</SelectItem>
                      <SelectItem value="cohort">Cohort-Based Course</SelectItem>
                      <SelectItem value="enterprise">Enterprise Training</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="neu-button bg-secondary hover:bg-secondary/90 text-white font-bold w-full py-3 border-2 border-secondary"
                >
                  Enroll Now
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
