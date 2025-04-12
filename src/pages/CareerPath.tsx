
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import CareerPathRoadmap from "@/components/CareerPathRoadmap";
import { careerPaths } from "@/data/careerPaths";
import { CareerPath as CareerPathType } from "@/types";
import { ArrowLeft } from "lucide-react";

const CareerPath = () => {
  const { pathId } = useParams<{ pathId: string }>();
  const [careerPath, setCareerPath] = useState<CareerPathType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!pathId) return;
    
    // Convert path-id format to CareerField format
    const formattedPathId = pathId
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Find matching career path
    const matchedPath = careerPaths.find(path => 
      path.field.toLowerCase() === formattedPathId.toLowerCase() ||
      path.field.toLowerCase().replace(/\//g, '-') === pathId.toLowerCase()
    );
    
    if (matchedPath) {
      setCareerPath(matchedPath);
    }
  }, [pathId]);

  if (!careerPath) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <p className="text-lg text-slate-600">Loading career path details...</p>
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
          <div className="mb-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate(-1)}
              className="flex items-center text-compass-blue"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back
            </Button>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border p-6 md:p-8">
            <CareerPathRoadmap careerPath={careerPath} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CareerPath;
