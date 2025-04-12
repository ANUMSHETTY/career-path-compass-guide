
import { 
  BookOpen, 
  MapPin, 
  ArrowUpRight, 
  Compass, 
  LineChart, 
  CheckCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Compass className="h-10 w-10 text-compass-blue" />,
    title: "Personalized Career Roadmap",
    description: "Get a step-by-step path tailored to your skills, experience, and career goals."
  },
  {
    icon: <LineChart className="h-10 w-10 text-compass-teal" />,
    title: "Skills Gap Analysis",
    description: "Identify exactly what skills you need to develop to reach your target role."
  },
  {
    icon: <BookOpen className="h-10 w-10 text-compass-blue" />,
    title: "Curated Learning Resources",
    description: "Access carefully selected courses, tutorials, and tools for each step of your journey."
  },
  {
    icon: <CheckCircle className="h-10 w-10 text-compass-teal" />,
    title: "Progress Tracking",
    description: "Track your progress and celebrate milestones as you advance toward your career goals."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Your Clear Path to Success
          </h2>
          <p className="text-xl text-slate-600">
            We eliminate confusion by providing actionable steps customized to your situation and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/assessment">
            <Button className="bg-compass-blue hover:bg-compass-dark-blue text-white text-lg py-6 px-8">
              Find Your Path <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
