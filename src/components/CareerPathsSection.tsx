
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Code, Paintbrush } from "lucide-react";
import { Link } from "react-router-dom";

const paths = [
  {
    icon: <Database className="h-8 w-8 text-compass-blue" />,
    title: "Data Analysis",
    description: "Transform raw data into actionable insights to help organizations make better decisions.",
    skills: ["SQL", "Python", "Data Visualization", "Statistics"],
    color: "bg-blue-50 border-blue-200"
  },
  {
    icon: <Code className="h-8 w-8 text-compass-teal" />,
    title: "Software Development",
    description: "Design and build applications that power the digital world we live in.",
    skills: ["JavaScript", "React", "Node.js", "Algorithms"],
    color: "bg-teal-50 border-teal-200"
  },
  {
    icon: <Paintbrush className="h-8 w-8 text-purple-500" />,
    title: "UX/UI Design",
    description: "Create intuitive, accessible interfaces that provide exceptional user experiences.",
    skills: ["Figma", "User Research", "Prototyping", "Visual Design"],
    color: "bg-purple-50 border-purple-200"
  }
];

const CareerPathsSection = () => {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Popular Career Paths
          </h2>
          <p className="text-xl text-slate-600">
            Explore detailed roadmaps for in-demand tech careers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paths.map((path, index) => (
            <Card key={index} className={`${path.color} border-2 h-full flex flex-col`}>
              <CardHeader>
                <div className="mb-2">{path.icon}</div>
                <CardTitle className="text-2xl font-bold">{path.title}</CardTitle>
                <CardDescription className="text-slate-700 text-base">
                  {path.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mt-2">
                  {path.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-white">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link to={`/paths/${path.title.toLowerCase().replace(/\s+/g, '-')}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    View Career Path
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/paths">
            <Button variant="outline" className="text-lg py-6 px-8">
              View All Career Paths
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareerPathsSection;
