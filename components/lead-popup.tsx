import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface LeadPopupProps {
  onClose: () => void;
}

export function LeadPopup({ onClose }: LeadPopupProps) {
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBookNow = () => {
    window.open('https://calendly.com/ben-agenticarc/call-and-connect?month=2025-09', '_blank');
    onClose();
  };

  const handleNoThanks = () => {
    onClose();
  };

  // Submit form data to Formspree
  const submitLead = async (email: string, interest: string) => {
    if (!email || !interest) return false;

    setIsSubmitting(true);

    try {
      // Submit to Formspree
      const response = await fetch("https://formspree.io/f/xrbyezbr", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          interest: interest,
          source: 'popup',
          message: `New lead from website popup:\n\nEmail: ${email}\nInterest: ${interest}\nPage: ${window.location.href}\nTime: ${new Date().toLocaleString()}`
        })
      });

      if (response.ok) {
        console.log("Lead sent via Formspree");
        return true;
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error("Failed to submit lead:", error);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if required fields are filled
    if (!email || !interest) {
      alert("Please fill in both your email and what interests you most.");
      return;
    }
    
    const success = await submitLead(email, interest);
    if (success) {
      // Show success message briefly before redirecting
      alert("Thank you! Let's get connected - redirecting to book your time with Ben.");
    }
    
    handleBookNow();
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-20 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="neu-card bg-white p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-gray-600 mb-6">
            Let's get connected! Share your email and I'll help you book a time to discuss your AI transformation journey.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 mb-6">
            <div>
              <Input
                type="email"
                placeholder="Enter your email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="neu-button border-0"
                required
              />
            </div>
            
            <div>
              <Select value={interest} onValueChange={setInterest} required>
                <SelectTrigger className="neu-button border-0">
                  <SelectValue placeholder="What interests you most? *" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ai-transformation">AI Transformation</SelectItem>
                  <SelectItem value="workshops">Workshops</SelectItem>
                  <SelectItem value="webinars">Webinars</SelectItem>
                  <SelectItem value="ai-academy">AI Academy</SelectItem>
                  <SelectItem value="general-consultation">General Consultation</SelectItem>
                  <SelectItem value="custom-training">Custom Training</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <p className="text-xs text-gray-500 text-left">* Required fields</p>
          </form>

          <div className="space-y-3">
            <Button 
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="neu-button btn-secondary font-bold px-8 py-3 w-full text-lg"
            >
              {isSubmitting ? "Connecting..." : "Connect!"}
            </Button>
            
            <button
              onClick={handleNoThanks}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors block w-full"
            >
              no thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface LeadPopupManagerProps {
  children: React.ReactNode;
}

export function LeadPopupManager({ children }: LeadPopupManagerProps) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 20000); // 20 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {children}
      {showPopup && <LeadPopup onClose={() => setShowPopup(false)} />}
    </>
  );
}
