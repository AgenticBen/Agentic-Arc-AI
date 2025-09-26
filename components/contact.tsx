import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    topic: "",
    message: "",
    consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please agree to our privacy policy to continue.");
      return;
    }
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      title: "Location",
      details: "Charlotte, NC",
      description: "Serving clients nationwide",
      icon: "📍"
    },
    {
      title: "Phone",
      details: "704-386-9095",
      description: "Call for immediate assistance",
      icon: "📞"
    },
    {
      title: "Email",
      details: "ben@agenticarc.ai",
      description: "We respond within 24 hours",
      icon: "📧"
    },
    {
      title: "Response Time",
      details: "Within 24 hours",
      description: "Quick turnaround guaranteed",
      icon: "⚡"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="animated-bg py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                Let's Start Your AI Journey
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
                Ready to transform your business through AI? Get in touch to discuss your 
                project requirements and explore how we can help you achieve your goals.
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

      {/* Contact Form & Info */}
      <section className="panel-white py-20">

      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="neu-card border-0">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary">Get in Touch</CardTitle>
                  <p className="text-gray-700">
                    Tell us about your AI transformation goals and we'll provide 
                    personalized guidance for your journey.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        type="text"
                        placeholder="Full Name *"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="neu-button border-0"
                      />
                      <Input
                        type="email"
                        placeholder="Email Address *"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="neu-button border-0"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        type="text"
                        placeholder="Company Name *"
                        required
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        className="neu-button border-0"
                      />
                      <Input
                        type="text"
                        placeholder="Job Title/Role"
                        value={formData.role}
                        onChange={(e) => handleChange("role", e.target.value)}
                        className="neu-button border-0"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="neu-button border-0"
                      />
                      <Select onValueChange={(value) => handleChange("topic", value)}>
                        <SelectTrigger className="neu-button border-0">
                          <SelectValue placeholder="Topic of Interest *" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ai-transformation">AI Transformation</SelectItem>
                          <SelectItem value="workshops">Workshops</SelectItem>
                          <SelectItem value="ai-academy">AI Academy</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Textarea
                      placeholder="Tell us about your AI goals, challenges, and how we can help... *"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className="neu-button border-0"
                    />

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleChange("consent", checked as boolean)}
                        required
                      />
                      <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed">
                        I agree to the{" "}
                        <a href="#" className="text-secondary hover:underline">Privacy Policy</a>{" "}
                        and{" "}
                        <a href="#" className="text-secondary hover:underline">Terms of Service</a>.
                        I consent to being contacted about AI transformation services.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="neu-button btn-secondary font-bold w-full py-3"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="neu-card border-0 text-center">
                    <CardContent className="p-6">
                      <div className="text-3xl mb-3">{info.icon}</div>
                      <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                      <p className="text-lg font-medium text-gray-900 mb-1">{info.details}</p>
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Why Choose Agentic Arc */}
              <Card className="neu-card border-0 panel-navy text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Why Choose Agentic Arc AI?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-3 text-lg">✓</span>
                      <span>Proven ARC Methodology with measurable results</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-3 text-lg">✓</span>
                      <span>AI-Forward and Human-Centered approach</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-3 text-lg">✓</span>
                      <span>End-to-end support from strategy to implementation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-3 text-lg">✓</span>
                      <span>Industry expertise across multiple sectors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-300 mr-3 text-lg">✓</span>
                      <span>Ongoing training and support programs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Quick Action */}
              <Card className="neu-card border-0 text-center">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Book a discovery call to discuss your AI transformation needs directly with our team.
                  </p>
                  <Button
                    size="lg"
                    onClick={() => window.open('https://calendly.com/ben-agenticarc/call-and-connect?month=2025-09', '_blank')}
                    className="neu-button btn-secondary font-bold px-8 py-3"
                  >
                    Book now!
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="panel-light-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Visit Us in Charlotte</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Based in Charlotte, NC, we serve clients nationwide with both in-person 
              and virtual AI transformation services.
            </p>
          </div>

          <Card className="neu-card border-0 p-8 text-center">
            <CardContent>
              <div className="text-6xl mb-6">🏢</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Charlotte, North Carolina</h3>
              <p className="text-lg text-gray-700 mb-6">
                Located in the heart of the Southeast's technology corridor, 
                we're perfectly positioned to serve organizations across the region and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.open('tel:7043869095')}
                  className="neu-button btn-primary font-bold px-6 py-3"
                >
                  Call: 704-386-9095
                </Button>
                <Button
                  onClick={() => window.open('mailto:ben@agenticarc.ai')}
                  className="neu-button btn-outline font-bold px-6 py-3"
                >
                  Email: ben@agenticarc.ai
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
