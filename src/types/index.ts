
export type CareerField = 
  | 'Data Analysis'
  | 'Software Development'
  | 'UX/UI Design'
  | 'Cybersecurity'
  | 'Cloud Computing'
  | 'Machine Learning'
  | 'DevOps'
  | 'Product Management';

export type EducationLevel = 
  | 'High School'
  | 'Some College'
  | '2-Year Degree'
  | '4-Year Degree'
  | 'Masters'
  | 'PhD';

export type ExperienceLevel = 
  | 'No Experience'
  | 'Some Projects'
  | 'Internship'
  | '1-2 Years'
  | '3-5 Years'
  | '5+ Years';

export interface UserProfile {
  name: string;
  educationLevel: EducationLevel;
  careerGoal: CareerField;
  currentSkills: string[];
  experienceLevel: ExperienceLevel;
}

export interface CareerPathStep {
  title: string;
  description: string;
  timeline: string;
  skills: string[];
  resources: Resource[];
  completed: boolean;
}

export interface Resource {
  title: string;
  type: 'Course' | 'Book' | 'Tutorial' | 'Tool' | 'Community';
  url: string;
  description: string;
}

export interface CareerPath {
  field: CareerField;
  description: string;
  averageSalary: string;
  jobGrowth: string;
  requiredSkills: string[];
  steps: CareerPathStep[];
}
