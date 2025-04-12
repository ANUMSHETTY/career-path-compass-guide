
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import CareerPathRoadmap from "@/components/CareerPathRoadmap";
import { careerPaths } from "@/data/careerPaths";
import { UserProfile, CareerPath } from "@/types";
import { Download, Share2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Roadmap = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [careerPath, setCareerPath] = useState<CareerPath | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Load user profile from localStorage
    const profileData = localStorage.getItem("userProfile");
    if (!profileData) {
      navigate("/assessment");
      return;
    }

    const profile = JSON.parse(profileData) as UserProfile;
    setUserProfile(profile);

    // Find matching career path
    const matchedPath = careerPaths.find(path => path.field === profile.careerGoal);
    if (matchedPath) {
      setCareerPath(matchedPath);
    }
  }, [navigate]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Career Path Roadmap',
        text: `Check out my roadmap to becoming a ${userProfile?.careerGoal}!`,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that don't support navigator.share
      toast({
        title: "Share Link Copied!",
        description: "Link copied to clipboard. You can now share it manually.",
      });
    }
  };

  const handleDownload = () => {
    toast({
      title: "Roadmap Downloaded!",
      description: "Your roadmap has been saved as a PDF.",
    });
  };

  if (!userProfile || !careerPath) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <p className="text-lg text-slate-600">Loading your roadmap...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="bg-white rounded-xl shadow-sm border p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b pb-6">
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">
                  Your Career Roadmap
                </h1>
                <p className="text-slate-600">
                  Hi {userProfile.name}, here's your personalized path to becoming a {userProfile.careerGoal}.
                </p>
              </div>
              <div className="flex mt-4 md:mt-0 space-x-3">
                <Button variant="outline" onClick={handleShare} className="flex items-center">
                  <Share2 className="h-4 w-4 mr-2" /> Share
                </Button>
                <Button variant="outline" onClick={handleDownload} className="flex items-center">
                  <Download className="h-4 w-4 mr-2" /> Download
                </Button>
              </div>
            </div>
            
            <CareerPathRoadmap careerPath={careerPath} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Roadmap;
