
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Your Personal GPS for <span className="text-compass-blue">Career Success</span>
          </h1>
          <p className="text-xl text-slate-700 mb-8 leading-relaxed">
            Stop feeling lost in your tech career journey. Get personalized guidance and a clear roadmap to reach your dream job with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/assessment">
              <Button className="bg-compass-blue hover:bg-compass-dark-blue text-white text-lg py-6 px-8">
                Start Your Assessment <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/paths">
              <Button variant="outline" className="text-lg py-6 px-8">
                Explore Career Paths
              </Button>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <img 
            src="/lovable-uploads/e7d87103-e741-4a79-8eba-ef39eb9f6a15.png" 
            alt="Career guidance illustration" 
            className="w-full h-auto rounded-lg shadow-xl" 
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
