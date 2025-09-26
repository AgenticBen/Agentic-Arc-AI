import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

export function Workshops() {
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    company: "",
    role: ""
  });

  const currentWorkshop = {
    title: "AI Strategy & Implementation Workshop",
    date: "March 15, 2025",
    time: "9:00 AM - 4:00 PM EST",
    location: "Charlotte, NC + Virtual Option",
    totalSeats: 25,
    seatsLeft: 8
  };

  const agenda = [
    {
      time: "Beginner",
      title: "AI Fundamentals Workshop",
      description: "Fast, hands-on intro to what AI actually does for your team and how to use it responsibly. Leave with simple tools, clear use-cases, and a 30-day experiment you can start next week."
    },
    {
      time: "Steward", 
      title: "AI Council Deep Dive",
      description: "Build a lightweight AI council to steer priorities, risk, and scaling without the paperwork. We map roles, cadence, and decision rules so AI projects get budget, owners, and momentum."
    },
    {
      time: "Operator",
      title: "Role-Based Use-Case Lab",
      description: "Bring 1–2 roles you want to optimize and leave with a toolkit to scale AI across every role on your team. Walk out with measurable use-cases and a actions to equipt your teams with AI!"
    },
    {
      time: "Strategist",
      title: "Strategic AI Leader Workshops",
      description: "Turn your biggest problems into prioritized AI solutions: Quick Wins, Scale Plays, and Moonshots. We co-write problem statements + value statements and a short roadmap to test the top ideas."
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
        <div className="absolute inset-0 bg-black opacity-30 pt-[5px] pr-[0px] pb-[0px] pl-[0px]"></div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6 pt-[85px] pr-[0px] pb-[0px] pl-[0px]">
                Corporate AI Workshops
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Equip your team to lead with AI. Practical sessions, lightweight governance, and quick pilots so your organization moves faster, smarter, and more confidently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Agenda */}
      <section className="panel-light-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Workshops?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-6 text-[16px] text-center">
Because workshops turn curiosity into proven outcomes fast. In a couple of focused hours we enable you to map your workflows, and surface the highest-probability AI pilots with the tools we give you that you can run immediately. You’ll walk away with role-level toolkits (prompts, tool picks, data checklists), a one-page pilot brief with owners and success metrics, and a lightweight governance playbook to lock in sponsorship.            </p>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto text-[16px] text-justify">
              The aim is simple: deliver fast, measurable wins that prove value, train your people to scale them, and create a repeatable pipeline for new AI projects.
            </p>
          </div>

          <div className="space-y-6">
            {agenda.map((session, index) => (
              <Card key={index} className="neu-card border-0">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/4 mb-4 md:mb-0">
                      <Badge className="bg-secondary text-white px-3 py-1">
                        {session.time}
                      </Badge>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold text-primary mb-2">{session.title}</h3>
                      <p className="text-gray-700">{session.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="panel-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="neu-card border-0 p-12 bg-gradient-to-br from-secondary to-primary text-white">
            <CardContent>
              <h2 className="text-3xl font-bold mb-4 text-[rgba(23,47,91,1)]">Ready to Transform Your AI Strategy?</h2>
              <p className="text-xl mb-8 text-[rgba(52,53,57,1)]">
                Join leaders from across industries in this intensive AI transformation workshop.
                Limited seats available.
              </p>
              <Button 
                size="lg"
                onClick={() => window.open('https://calendly.com/ben-agenticarc/call-and-connect?month=2025-09', '_blank')}
                className="neu-button bg-white text-primary hover:bg-gray-100 font-bold px-8 py-3 border-2 border-white"
              >
                Reserve Your Seat
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
