import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CaseStudies() {
  const caseStudies = [
    {
      title: "AI Note-Taking for Private Therapy Practice",
      client: "Private Therapy Practice",
      industry: "Healthcare",
      location: "California",
      challenge: "Therapy (HIPAA-compliant AI note-taking)",
      solution: "Deployed a HIPAA-compliant AI note-taking system that drafts session notes, routes them to the therapist for quick review & sign-off, and ties notes into scheduling/billing workflows.",
      summary: "Reduced documentation time and helped the therapist be more present during sessions.",
      results: [
        "~25% of administrative time reclaimed for clinical work",
        "$96,000/year estimated additional billable capacity unlocked",
        "Faster, more consistent patient records; therapist reports greater session presence"
      ],
      technologies: ["HIPAA-compliant NLP", "Secure Cloud Storage", "Workflow Integration", "Human-in-the-loop Review"],
      image: "https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGluaWNpYW4lMjBsYXB0b3AlMjBoZWFsdGhjYXJlJTIwdGhlcmFweXxlbnwxfHx8fDE3NTg5MTI2NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "ARC-Powered AI Transformation for Bulk Material Handling",
      client: "Manufacturing Company",
      industry: "Manufacturing",
      methodology: "ARC Methodology",
      challenge: "Manufacturing (ARC Methodology & high-ROI AI pipeline)",
      solution: "Applied the ARC discovery framework to map workflows, assess data readiness, and prioritize pilots — then launched knowledge-base, agent, and governance pilots to prove value.",
      summary: "Discovery with ARC surfaced 10 high-ROI AI opportunities and built the governance/training to scale pilots.",
      results: [
        "10 prioritized, high-ROI AI opportunities identified",
        "~30% process-time reduction after building a domain-trained knowledge base",
        "Faster contract review, project analytics via internal DB, and governance via AI Academy + AI Council"
      ],
      technologies: ["Domain Knowledge Base", "Retrieval-augmented Agents", "Contract-analysis NLP", "Training & Governance (AI Academy / AI Council)"],
      image: "https://images.unsplash.com/photo-1720036236694-d0a231c52563?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1ODkxMjc3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Accessible AI Agent for Assistive-Tech Training",
      client: "Non-profit Organization",
      industry: "Social Impact",
      location: "North Carolina",
      pilot: "Pilot",
      challenge: "Non-profit (Assistive AI for visually impaired learners)",
      solution: "Built a custom, accessibility-first AI agent trained on assistive-technology curriculum to deliver guided practice, answer contextual questions, and extend training into rural/underserved areas.",
      summary: "A custom AI tutor that reinforces assistive-tech training for visually impaired learners — built for voice-first, on-demand practice.",
      results: [
        "Pilot launched and actively used by learners",
        "Strong early qualitative engagement and perceived usefulness",
        "Evaluation plan in development to track skills, retention, and confidence"
      ],
      technologies: ["Custom Conversational Agent", "Voice UX", "Accessibility-first Design", "Offline/Low-bandwidth Delivery"],
      image: "https://images.unsplash.com/photo-1576864333223-db90dadfb975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmlsaXR5JTIwc21hcnRwaG9uZSUyMGFzc2lzdGl2ZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU4OTEyOTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped organizations across industries achieve transformational 
            results through strategic AI implementation.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="order-2 lg:order-1">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{study.industry}</Badge>
                      {study.methodology && <Badge variant="secondary">{study.methodology}</Badge>}
                      {study.location && !study.methodology && <Badge variant="secondary">{study.location}</Badge>}
                      {study.pilot && <Badge variant="secondary">{study.pilot}</Badge>}
                      {!study.location && !study.methodology && !study.pilot && <Badge variant="secondary">{study.client}</Badge>}
                    </div>
                    <CardTitle className="text-2xl text-primary">{study.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {study.summary || study.challenge}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Key Results</h4>
                        <ul className="space-y-1">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <span className="text-secondary mr-2">✓</span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="border-secondary text-secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>


                    </div>
                  </CardContent>
                </div>
                
                <div className="order-1 lg:order-2">
                  <ImageWithFallback 
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>


      </div>
    </section>
  );
}
