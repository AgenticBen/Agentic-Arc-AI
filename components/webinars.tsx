import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

export function Webinars() {
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    company: "",
    role: ""
  });

  const currentWorkshop = {
    title: "AI Fundamentals Webinar",
    date: "December 15, 2025",
    time: "3:00 PM - 4:00 PM EST",
    location: "Virtual Only",
    totalSeats: 100,
    seatsLeft: 47
  };

  const agenda = [
    {
      time: "9:00 AM - 10:30 AM",
      title: "AI Landscape & Opportunity Assessment",
      description: "Understanding current AI trends and identifying opportunities for your industry"
    },
    {
      time: "10:45 AM - 12:00 PM", 
      title: "The ARC Methodology Deep Dive",
      description: "Hands-on exploration of our proven AI transformation framework"
    },
    {
      time: "1:00 PM - 2:30 PM",
      title: "AI Implementation Planning Workshop",
      description: "Interactive session to develop your organization's AI roadmap"
    },
    {
      time: "2:45 PM - 4:00 PM",
      title: "Overcoming AI Implementation Challenges",
      description: "Best practices, common pitfalls, and success strategies"
    }
  ];

  const outcomes = [
    "Custom AI readiness assessment for your organization",
    "Actionable 90-day AI implementation plan",
    "Access to our exclusive AI Strategy Toolkit",
    "Direct networking with AI transformation leaders",
    "Follow-up consultation session with our team"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Workshop registration:", registrationData);
    alert("Thank you for registering! You'll receive confirmation details within 24 hours.");
  };

  const handleChange = (field: string, value: string) => {
    setRegistrationData(prev => ({ ...prev, [field]: value }));
  };

  const addToCalendar = () => {
    const event = {
      title: currentWorkshop.title,
      start: "20250315T140000Z", // March 15, 2025 9:00 AM EST in UTC
      end: "20250315T210000Z",   // March 15, 2025 4:00 PM EST in UTC
      description: "AI Strategy & Implementation Workshop with Agentic Arc AI",
      location: "Charlotte, NC"
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Agentic Arc AI//Workshop//EN
BEGIN:VEVENT
UID:${Date.now()}@agenticarc.ai
DTSTAMP:${new Date().toISOString().replace(/[:-]/g, '').split('.')[0]}Z
DTSTART:${event.start}
DTEND:${event.end}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ai-workshop.ics';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="animated-bg py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white text-gray-800 px-3 py-2 border border-gray-200 flex items-center gap-2 shadow-sm">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                Limited Seats Available
              </Badge>
            <h1 className="text-5xl font-bold text-white mb-6">
              Quarterly Into to AI Webinar
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Join our virtual webinar designed to introduce AI fundamentals with 
              practical insights, tools, and direct access to AI transformation experts.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Current Workshop Details */}
      <section className="panel-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Workshop Info */}
            <div>
              <Card className="neu-card border-0 p-8">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary mb-4">
                    {currentWorkshop.title}
                  </CardTitle>
                  <div className="space-y-3 text-lg">
                    <div className="flex items-center">
                      <span className="text-secondary mr-3">📅</span>
                      <span>{currentWorkshop.date}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-secondary mr-3">🕒</span>
                      <span>{currentWorkshop.time}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-secondary mr-3">📍</span>
                      <span>{currentWorkshop.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <a 
                    target="_blank" 
                    href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NnY2cGphMWZhb2d1cGJsdGw1bzk2NzI0bzggYmVuQGFnZW50aWNhcmMuYWk&amp;tmsrc=ben%40agenticarc.ai"
                    className="neu-button btn-secondary font-bold px-6 py-3 inline-block"
                  >
                    Save My Seat
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Registration Form */}
            <div>
              <Card className="neu-card border-0">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Save My Seat</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Full Name *"
                        required
                        value={registrationData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="neu-button border-0"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email Address *"
                        required
                        value={registrationData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="neu-button border-0"
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="Company Name *"
                        required
                        value={registrationData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        className="neu-button border-0"
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="Job Title/Role *"
                        required
                        value={registrationData.role}
                        onChange={(e) => handleChange("role", e.target.value)}
                        className="neu-button border-0"
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="neu-button btn-secondary font-bold w-full py-3"
                    >
                      Register Now
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Agenda */}
      <section className="panel-light-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Webinar Agenda</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A comprehensive introduction to AI fundamentals, practical applications, 
              and actionable next steps for your organization.
            </p>
          </div>

          <div className="relative space-y-0">
            {/* Continuous vertical line that runs behind all sections */}
            <div className="absolute left-16 top-20 bottom-0 w-1 bg-secondary opacity-60 z-0"></div>
            
            {[
              {
                title: "Introduction",
                description: "Welcome and overview of what we'll cover in today's AI fundamentals session.",
                emoji: "👋"
              },
              {
                title: "What is AI really and how does it work?",
                description: "Demystifying artificial intelligence - core concepts, technologies, and real-world applications explained in simple terms.",
                emoji: "🧠"
              },
              {
                title: "AI Landscape Today",
                description: "Current state of AI adoption across industries, major players, and emerging trends shaping the market.",
                emoji: "🌐"
              },
              {
                title: "Why We Should Care",
                description: "The business case for AI - competitive advantages, efficiency gains, and risks of falling behind.",
                emoji: "❓"
              },
              {
                title: "Getting Started with AI Implementation",
                description: "Practical first steps, common pitfalls to avoid, and building your AI readiness foundation.",
                emoji: "🚀"
              },
              {
                title: "Next Steps in AI Adoption",
                description: "Creating your AI strategy roadmap, resources for continued learning, and connecting with implementation partners.",
                emoji: "📈"
              }
            ].map((session, index) => (
              <div key={index} className="relative flex items-center mb-8">
                {/* Large centered number on the left */}
                <div className="w-32 flex justify-center z-10">
                  <div className="w-20 h-20 flex items-center justify-center text-[rgba(81,173,223,1)] font-bold text-3xl neu-card">
                    {index + 1}
                  </div>
                </div>
                
                {/* Content card */}
                <div className="flex-1 ml-8 z-10">
                  <Card className="neu-card border-0">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-primary mb-4">{session.title}</h3>
                          <p className="text-gray-700">{session.description}</p>
                        </div>
                        <div className="text-4xl ml-8 flex-shrink-0">
                          {session.emoji}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Final CTA */}
      <section className="panel-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="neu-card border-0 p-12 bg-gradient-to-br from-secondary to-primary text-white">
            <CardContent>
              <h2 className="text-3xl font-bold mb-4 text-[rgba(81,173,223,1)]">Is the ARC Methodology Right for Your Business?</h2>
              <p className="text-xl mb-8 text-[rgba(84,84,84,1)]">
                Discover how our proven Assess, Reveal, Chart framework can transform your organization's AI strategy. 
                Book a discovery call to explore your unique transformation opportunities.
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('https://calendly.com/ben-agenticarc/call-and-connect?month=2025-09', '_blank')}
                className="neu-button bg-[rgba(23,47,91,1)] text-[rgba(81,173,223,1)] hover:bg-gray-100 font-bold px-8 py-3 border-2 border-white"
              >
                Book Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
