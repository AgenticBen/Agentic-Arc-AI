import image_ac1bf454ebce1f1134007bbbd034e054e4b7f4b1 from "figma:asset/ac1bf454ebce1f1134007bbbd034e054e4b7f4b1.png";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import benPhoto from "figma:asset/2df8ca166d327317525e93a77c34fba512616221.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import darkLogo from "figma:asset/40f0b1cc87c8aa6b7fab9fad41ba8fc63b6dc533.png";

export function About() {
  const values = [
    {
      title: "AI-Forward Innovation",
      description:
        "We believe in pushing the boundaries of what's possible with AI while maintaining practical, business-focused solutions.",
      icon: "🚀",
    },
    {
      title: "Human-Centered Design",
      description:
        "Technology should enhance human capabilities, not replace them. We design AI solutions that empower people and teams.",
      icon: "👥",
    },
    {
      title: "AI Literacy",
      description:
        "We're committed to creating lasting, measurable change through educating professionals and students about AI.",
      icon: "📚",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="animated-bg py-20">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-[10px] mt-[0px] mr-[0px] ml-[0px]">
              <h1 className="text-5xl font-bold text-white mb-6 text-[40px]">
                About
              </h1>
              <div className="mb-8">
                <img
                  src={
                    image_ac1bf454ebce1f1134007bbbd034e054e4b7f4b1
                  }
                  alt="Agentic Arc AI"
                  className="h-16 w-auto mx-auto my-[0px] rounded-[1px] mx-[366px]"
                />
              </div>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Building Bridges for Impactful AI
                Transformation. We help organizations navigate
                the complex journey from AI awareness to AI
                advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="panel-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                To help SMBs use AI that unlocks human
                potential. Deploying AI tools to remove
                repetitive work and augment human judgment, we
                free people to deepen creativity, strengthen
                connection, and make better decisions. We build
                the skills, systems, and cultures that let
                humans lead, through an AI transformation
                roadmap.
              </p>

              <h3 className="text-2xl font-bold text-primary mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the leading force in ethical AI adoption
                for SMBs, empowering them to innovate
                fearlessly, thrive sustainably, and bridge the
                gap to a more intelligent future. We envision a
                world where AI is accessible to all businesses,
                driving positive impact for growth, inclusivity,
                and the environment.
              </p>
            </div>

            <div>
              <Card className="neu-card border-0 p-8 bg-gradient-to-br from-secondary to-primary text-white">
                <CardContent>
                  <h3 className="text-2xl font-bold mb-6 text-[rgba(54,65,83,1)]">
                    Why ARC?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary font-bold text-sm mr-4">
                        A
                      </div>
                      <span className="text-[rgba(54,65,83,1)]">
                        <strong>Assess</strong> your current
                        state and readiness
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary font-bold text-sm mr-4">
                        R
                      </div>
                      <span className="text-[rgba(54,65,83,1)]">
                        <strong>Reveal</strong> implementation
                        opportunities
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary font-bold text-sm mr-4">
                        C
                      </div>
                      <span className="text-[rgba(54,65,83,1)]">
                        <strong>Chart</strong> your path to AI
                        Transformation
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="panel-light-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The principles that guide our approach to AI
              transformation and client partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="neu-card border-0 text-center p-8"
              >
                <CardHeader>
                  <div className="text-4xl mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl text-primary">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={benPhoto}
                alt="Ben - Founder of Agentic Arc AI"
                className="w-80 h-80 rounded-full mx-auto object-cover neu-card"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                Meet Ben
              </h2>
              <h3 className="text-xl text-secondary font-semibold mb-4">
                Founder & AI Transformation Expert
              </h3>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With over 15 years of experience in enterprise
                technology and digital transformation, Ben
                founded Agentic Arc AI to bridge the gap between
                AI potential and practical business
                implementation.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                His unique approach combines deep technical
                expertise with strategic business acumen,
                helping organizations navigate the complexities
                of AI adoption while ensuring measurable ROI and
                sustainable growth.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <span className="text-secondary mr-3">
                    📍
                  </span>
                  <span className="text-gray-700">
                    Based in Charlotte, NC
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-secondary mr-3">
                    📧
                  </span>
                  <span className="text-gray-700">
                    ben@agenticarc.ai
                  </span>
                </div>
              </div>

              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://calendly.com/ben-agenticarc/call-and-connect?month=2025-09",
                    "_blank",
                  )
                }
                className="neu-button btn-secondary font-bold px-8 py-3"
              >
                Book now!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="neu-card border-0 p-12">
            <CardContent>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Let's Connect
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Ready to start your AI transformation journey?
                We're here to help you chart your Arc for
                success.
              </p>

              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl mb-2">📍</div>
                  <div className="font-semibold text-primary">
                    Charlotte, NC
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📞</div>
                  <div className="font-semibold text-primary">
                    704-386-9095
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">📧</div>
                  <div className="font-semibold text-primary">
                    ben@agenticarc.ai
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://calendly.com/ben-agenticarc/call-and-connect?month=2025-09",
                    "_blank",
                  )
                }
                className="neu-button bg-secondary hover:bg-secondary/90 text-[rgba(81,173,223,1)] font-bold px-8 py-3 border-2 border-secondary"
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
