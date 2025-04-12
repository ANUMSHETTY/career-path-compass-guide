
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ExternalLink } from "lucide-react";
import { careerPaths } from "@/data/careerPaths";
import { Resource } from "@/types";

// Collect all resources from career paths
const getAllResources = () => {
  const resources: Record<string, Resource[]> = {
    "All": [],
    "Courses": [],
    "Books": [],
    "Tutorials": [],
    "Tools": [],
    "Communities": []
  };
  
  careerPaths.forEach(path => {
    path.steps.forEach(step => {
      step.resources.forEach(resource => {
        resources["All"].push(resource);
        
        if (resource.type === "Course") resources["Courses"].push(resource);
        else if (resource.type === "Book") resources["Books"].push(resource);
        else if (resource.type === "Tutorial") resources["Tutorials"].push(resource);
        else if (resource.type === "Tool") resources["Tools"].push(resource);
        else if (resource.type === "Community") resources["Communities"].push(resource);
      });
    });
  });
  
  return resources;
};

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const resourcesByType = getAllResources();
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredResources = resourcesByType[activeTab].filter(resource => 
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Learning Resources
            </h1>
            <p className="text-xl text-slate-600">
              Curated materials to help you build skills and advance your career
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <Input 
                placeholder="Search resources..." 
                value={searchTerm}
                onChange={handleSearch}
                className="pl-10"
              />
            </div>
          </div>
          
          <Tabs defaultValue="All" className="max-w-4xl mx-auto" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              <TabsTrigger value="All">All</TabsTrigger>
              <TabsTrigger value="Courses">Courses</TabsTrigger>
              <TabsTrigger value="Books">Books</TabsTrigger>
              <TabsTrigger value="Tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="Tools">Tools</TabsTrigger>
              <TabsTrigger value="Communities">Communities</TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeTab}>
              {filteredResources.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg text-slate-600">No resources found for your search.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredResources.map((resource, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{resource.title}</CardTitle>
                          <Badge>{resource.type}</Badge>
                        </div>
                        <CardDescription>{resource.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <a 
                          href={resource.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-full"
                        >
                          <Button variant="outline" className="w-full">
                            Visit Resource <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
