
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AssessmentForm from "@/components/AssessmentForm";
import { UserProfile } from "@/types";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";

const Assessment = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleComplete = (profile: UserProfile) => {
    setLoading(true);
    
    // Simulate API call to process the assessment
    setTimeout(() => {
      // Save profile to localStorage
      localStorage.setItem("userProfile", JSON.stringify(profile));
      
      toast({
        title: "Assessment Completed!",
        description: "Your personalized career roadmap is ready.",
      });
      
      // Redirect to roadmap page
      navigate("/roadmap");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Career Path Assessment
            </h1>
            <p className="text-xl text-slate-600">
              Answer a few questions to get your personalized career roadmap
            </p>
          </div>
          
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 className="h-12 w-12 text-compass-blue animate-spin mb-4" />
              <p className="text-lg text-slate-700">Creating your personalized roadmap...</p>
            </div>
          ) : (
            <AssessmentForm onComplete={handleComplete} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Assessment;
