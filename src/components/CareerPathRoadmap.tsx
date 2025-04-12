
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, CircleDashed, ExternalLink, Clock } from "lucide-react";
import { CareerPath, CareerPathStep } from "@/types";

interface CareerPathRoadmapProps {
  careerPath: CareerPath;
}

const CareerPathRoadmap = ({ careerPath }: CareerPathRoadmapProps) => {
  const [steps, setSteps] = useState<CareerPathStep[]>(careerPath.steps);

  const toggleCompleted = (index: number) => {
    const updatedSteps = [...steps];
    updatedSteps[index].completed = !updatedSteps[index].completed;
    setSteps(updatedSteps);
  };

  return (
    <div className="py-8">
      <div className="space-y-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Your Path to {careerPath.field}</h2>
        <p className="text-slate-600">{careerPath.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-slate-50 p-4 rounded-lg">
            <p className="text-sm text-slate-500 mb-1">Average Salary</p>
            <p className="text-xl font-semibold">{careerPath.averageSalary}</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg">
            <p className="text-sm text-slate-500 mb-1">Job Growth</p>
            <p className="text-xl font-semibold">{careerPath.jobGrowth}</p>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Essential Skills</h3>
          <div className="flex flex-wrap gap-2">
            {careerPath.requiredSkills.map((skill, index) => (
              <Badge key={index} variant="outline" className="bg-white">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      
      <Separator className="my-8" />
      
      <div className="space-y-8">
        <h3 className="text-2xl font-bold">Step-by-Step Roadmap</h3>
        
        <div className="relative space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-slate-200 -ml-6"></div>
              
              <div className={`hidden md:flex absolute -left-8 top-0 items-center justify-center h-6 w-6 rounded-full border-2 ${
                step.completed ? "border-green-500 bg-green-100" : "border-slate-300 bg-white"
              }`}>
                {step.completed ? (
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                ) : (
                  <CircleDashed className="h-4 w-4 text-slate-400" />
                )}
              </div>
              
              <Card 
                className={`border-l-4 ${
                  step.completed 
                    ? "border-l-green-500 bg-green-50" 
                    : (index === 0 ? "border-l-compass-blue bg-blue-50" : "border-l-slate-200")
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => toggleCompleted(index)}
                      className={step.completed ? "text-green-600" : "text-slate-600"}
                    >
                      {step.completed ? (
                        <span className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 mr-1" /> Completed
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <CircleDashed className="h-4 w-4 mr-1" /> Mark Complete
                        </span>
                      )}
                    </Button>
                  </div>
                  <CardDescription>
                    <div className="flex items-center text-slate-600 mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Estimated Timeline: {step.timeline}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">{step.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Skills to Learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {step.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 mb-2">Recommended Resources:</h4>
                    <ul className="space-y-2">
                      {step.resources.map((resource, i) => (
                        <li key={i}>
                          <a 
                            href={resource.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-start p-2 hover:bg-white rounded-md transition-colors"
                          >
                            <div className="mr-2 mt-0.5">
                              <Badge variant="outline" className="text-xs">
                                {resource.type}
                              </Badge>
                            </div>
                            <div className="flex-grow">
                              <p className="font-medium text-compass-blue hover:underline flex items-center">
                                {resource.title} 
                                <ExternalLink className="h-3 w-3 ml-1 inline" />
                              </p>
                              <p className="text-sm text-slate-600">{resource.description}</p>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerPathRoadmap;
