
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Code, Paintbrush, Shield, Cloud, Brain, Terminal, Briefcase } from "lucide-react";
import { careerPaths } from "@/data/careerPaths";

const pathIcons = {
  "Data Analysis": <Database className="h-8 w-8 text-blue-500" />,
  "Software Development": <Code className="h-8 w-8 text-teal-500" />,
  "UX/UI Design": <Paintbrush className="h-8 w-8 text-purple-500" />,
  "Cybersecurity": <Shield className="h-8 w-8 text-red-500" />,
  "Cloud Computing": <Cloud className="h-8 w-8 text-sky-500" />,
  "Machine Learning": <Brain className="h-8 w-8 text-indigo-500" />,
  "DevOps": <Terminal className="h-8 w-8 text-orange-500" />,
  "Product Management": <Briefcase className="h-8 w-8 text-amber-500" />
};

const colorClasses = {
  "Data Analysis": "bg-blue-50 border-blue-200",
  "Software Development": "bg-teal-50 border-teal-200",
  "UX/UI Design": "bg-purple-50 border-purple-200",
  "Cybersecurity": "bg-red-50 border-red-200",
  "Cloud Computing": "bg-sky-50 border-sky-200",
  "Machine Learning": "bg-indigo-50 border-indigo-200",
  "DevOps": "bg-orange-50 border-orange-200",
  "Product Management": "bg-amber-50 border-amber-200"
};

const Paths = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Explore Career Paths
            </h1>
            <p className="text-xl text-slate-600">
              Discover detailed roadmaps for in-demand technology careers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerPaths.map((path, index) => (
              <Card 
                key={index} 
                className={`${colorClasses[path.field]} border-2 h-full flex flex-col transition-all hover:shadow-md`}
              >
                <CardHeader>
                  <div className="mb-2">{pathIcons[path.field]}</div>
                  <CardTitle className="text-2xl font-bold">{path.field}</CardTitle>
                  <CardDescription className="text-slate-700 text-base">
                    {path.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-slate-500">Average Salary</p>
                      <p className="font-medium">{path.averageSalary}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Job Growth</p>
                      <p className="font-medium">{path.jobGrowth}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Key Skills</p>
                      <div className="flex flex-wrap gap-2">
                        {path.requiredSkills.slice(0, 5).map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-white">
                            {skill}
                          </Badge>
                        ))}
                        {path.requiredSkills.length > 5 && (
                          <Badge variant="outline" className="bg-white">
                            +{path.requiredSkills.length - 5} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full"
                    onClick={() => navigate(`/paths/${path.field.toLowerCase().replace(/\//g, '-').replace(/\s+/g, '-')}`)}
                  >
                    View Detailed Roadmap
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Paths;
