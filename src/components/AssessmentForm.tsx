
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CareerField, EducationLevel, ExperienceLevel, UserProfile } from "@/types";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface AssessmentFormProps {
  onComplete: (profile: UserProfile) => void;
}

const AssessmentForm = ({ onComplete }: AssessmentFormProps) => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    educationLevel: "Some College",
    careerGoal: "Data Analysis",
    currentSkills: [],
    experienceLevel: "Some Projects"
  });
  
  const [skills, setSkills] = useState("");

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSkills(e.target.value);
  };

  const addSkill = () => {
    if (skills.trim() !== "") {
      setProfile({
        ...profile,
        currentSkills: [...profile.currentSkills, skills.trim()]
      });
      setSkills("");
    }
  };

  const removeSkill = (index: number) => {
    setProfile({
      ...profile,
      currentSkills: profile.currentSkills.filter((_, i) => i !== index)
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setProfile({
      ...profile,
      [name]: value
    });
  };

  const handleNext = () => {
    if (step === 1 && !profile.name) {
      toast({
        title: "Please enter your name",
        variant: "destructive"
      });
      return;
    }

    if (step === 3 && profile.currentSkills.length === 0) {
      toast({
        title: "Please add at least one skill",
        variant: "destructive"
      });
      return;
    }

    if (step < 4) {
      setStep(step + 1);
    } else {
      onComplete(profile);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && step === 3) {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardContent className="pt-6">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`flex items-center justify-center h-8 w-8 rounded-full ${
                  i < step
                    ? "bg-compass-blue text-white"
                    : i === step
                    ? "bg-white border-2 border-compass-blue text-compass-blue"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                {i < step ? <CheckCircle2 className="h-4 w-4" /> : i}
              </div>
            ))}
          </div>
          <div className="relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 rounded-full"></div>
            <div
              className="absolute top-0 left-0 h-1 bg-compass-blue rounded-full transition-all duration-300"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-xl font-semibold text-slate-900">Let's get started</h2>
            <p className="text-slate-600 mb-4">Tell us about yourself</p>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">What's your name?</Label>
                <Input
                  id="name"
                  name="name"
                  value={profile.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="mt-1"
                />
              </div>
              
              <div>
                <Label htmlFor="education">What's your current education level?</Label>
                <Select
                  value={profile.educationLevel}
                  onValueChange={(value) => handleSelectChange("educationLevel", value as EducationLevel)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="High School">High School</SelectItem>
                    <SelectItem value="Some College">Some College</SelectItem>
                    <SelectItem value="2-Year Degree">2-Year Degree</SelectItem>
                    <SelectItem value="4-Year Degree">4-Year Degree</SelectItem>
                    <SelectItem value="Masters">Masters</SelectItem>
                    <SelectItem value="PhD">PhD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-xl font-semibold text-slate-900">Your Career Goals</h2>
            <p className="text-slate-600 mb-4">Tell us where you want to go</p>
            
            <div>
              <Label htmlFor="careerGoal">What tech career are you interested in?</Label>
              <Select
                value={profile.careerGoal}
                onValueChange={(value) => handleSelectChange("careerGoal", value as CareerField)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select career goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Data Analysis">Data Analysis</SelectItem>
                  <SelectItem value="Software Development">Software Development</SelectItem>
                  <SelectItem value="UX/UI Design">UX/UI Design</SelectItem>
                  <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                  <SelectItem value="Cloud Computing">Cloud Computing</SelectItem>
                  <SelectItem value="Machine Learning">Machine Learning</SelectItem>
                  <SelectItem value="DevOps">DevOps</SelectItem>
                  <SelectItem value="Product Management">Product Management</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="mt-4">
              <Label>How much experience do you have in this field?</Label>
              <RadioGroup
                value={profile.experienceLevel}
                onValueChange={(value) => handleSelectChange("experienceLevel", value as ExperienceLevel)}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="No Experience" id="exp1" />
                  <Label htmlFor="exp1">No Experience</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Some Projects" id="exp2" />
                  <Label htmlFor="exp2">Some Projects</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Internship" id="exp3" />
                  <Label htmlFor="exp3">Internship</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1-2 Years" id="exp4" />
                  <Label htmlFor="exp4">1-2 Years</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="3-5 Years" id="exp5" />
                  <Label htmlFor="exp5">3-5 Years</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="5+ Years" id="exp6" />
                  <Label htmlFor="exp6">5+ Years</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-xl font-semibold text-slate-900">Your Current Skills</h2>
            <p className="text-slate-600 mb-4">Let us know what skills you already have</p>
            
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  value={skills}
                  onChange={handleSkillsChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter a skill (e.g., Python, SQL, Figma)"
                />
                <Button type="button" onClick={addSkill} variant="outline">
                  Add
                </Button>
              </div>
              
              <div>
                <Label className="mb-2 block">Your Skills:</Label>
                {profile.currentSkills.length === 0 ? (
                  <p className="text-slate-500 text-sm italic">No skills added yet</p>
                ) : (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {profile.currentSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="bg-slate-100 px-3 py-1 rounded-full flex items-center"
                      >
                        <span className="text-slate-800">{skill}</span>
                        <button
                          type="button"
                          onClick={() => removeSkill(index)}
                          className="ml-2 text-slate-500 hover:text-red-500 focus:outline-none"
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-xl font-semibold text-slate-900">Review Your Information</h2>
            <p className="text-slate-600 mb-4">Confirm your profile details</p>
            
            <div className="space-y-4 bg-slate-50 p-4 rounded-lg">
              <div>
                <span className="text-sm text-slate-500">Name:</span>
                <p className="font-medium">{profile.name}</p>
              </div>
              <div>
                <span className="text-sm text-slate-500">Education Level:</span>
                <p className="font-medium">{profile.educationLevel}</p>
              </div>
              <div>
                <span className="text-sm text-slate-500">Career Goal:</span>
                <p className="font-medium">{profile.careerGoal}</p>
              </div>
              <div>
                <span className="text-sm text-slate-500">Experience Level:</span>
                <p className="font-medium">{profile.experienceLevel}</p>
              </div>
              <div>
                <span className="text-sm text-slate-500">Current Skills:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {profile.currentSkills.map((skill, index) => (
                    <span key={index} className="bg-white px-2 py-1 text-sm rounded border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          {step > 1 ? (
            <Button type="button" variant="outline" onClick={handleBack}>
              Back
            </Button>
          ) : (
            <div></div>
          )}
          
          <Button type="button" onClick={handleNext} className="bg-compass-blue text-white">
            {step < 4 ? (
              <span className="flex items-center">
                Next <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            ) : (
              "Complete Assessment"
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AssessmentForm;
