
import { CareerPath } from "@/types";

export const careerPaths: CareerPath[] = [
  {
    field: "Data Analysis",
    description: "Data analysts collect, process, and analyze data to help organizations make better decisions.",
    averageSalary: "$70,000 - $120,000",
    jobGrowth: "23% (Much faster than average)",
    requiredSkills: [
      "SQL", 
      "Excel", 
      "Python", 
      "Data Visualization", 
      "Statistical Analysis",
      "Database Management",
      "Critical Thinking"
    ],
    steps: [
      {
        title: "Build Foundation in Basic Analytics",
        description: "Start with understanding basic data concepts and tools used in the field.",
        timeline: "2-3 months",
        skills: ["Excel", "Basic Statistics", "Data Cleaning"],
        resources: [
          {
            title: "Excel for Data Analysis",
            type: "Course",
            url: "https://www.coursera.org/learn/excel-data-analysis",
            description: "Learn how to use Excel for data analysis and visualization."
          },
          {
            title: "Statistics Fundamentals",
            type: "Course",
            url: "https://www.khanacademy.org/math/statistics-probability",
            description: "Build a strong statistics foundation with this comprehensive course."
          }
        ],
        completed: false
      },
      {
        title: "Learn SQL for Data Querying",
        description: "Master SQL to extract and manipulate data from databases.",
        timeline: "1-2 months",
        skills: ["SQL", "Database Querying", "Data Extraction"],
        resources: [
          {
            title: "SQL for Data Science",
            type: "Course",
            url: "https://www.coursera.org/learn/sql-for-data-science",
            description: "Learn how to use SQL for data science applications."
          },
          {
            title: "Mode SQL Tutorial",
            type: "Tutorial",
            url: "https://mode.com/sql-tutorial/",
            description: "Interactive SQL tutorial for beginners to advanced users."
          }
        ],
        completed: false
      },
      {
        title: "Master Python for Data Analysis",
        description: "Learn Python and key libraries like Pandas and NumPy for data manipulation.",
        timeline: "3-4 months",
        skills: ["Python", "Pandas", "NumPy", "Data Wrangling"],
        resources: [
          {
            title: "Python for Data Analysis",
            type: "Book",
            url: "https://www.oreilly.com/library/view/python-for-data/9781491957653/",
            description: "The definitive guide to using Python for data analysis."
          },
          {
            title: "Data Analysis with Python",
            type: "Course",
            url: "https://www.freecodecamp.org/learn/data-analysis-with-python/",
            description: "FreeCodeCamp's comprehensive course on Python for data analysis."
          }
        ],
        completed: false
      },
      {
        title: "Learn Data Visualization",
        description: "Master tools and techniques to create compelling data visualizations.",
        timeline: "2-3 months",
        skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Data Storytelling"],
        resources: [
          {
            title: "Tableau for Data Visualization",
            type: "Course",
            url: "https://www.udemy.com/course/tableau-for-beginners/",
            description: "Learn how to create effective visualizations with Tableau."
          },
          {
            title: "Data Visualization with Python",
            type: "Tutorial",
            url: "https://www.datacamp.com/courses/introduction-to-data-visualization-with-python",
            description: "Master Python visualization libraries like Matplotlib and Seaborn."
          }
        ],
        completed: false
      },
      {
        title: "Build Portfolio Projects",
        description: "Create 2-3 data analysis projects to showcase your skills to employers.",
        timeline: "2-3 months",
        skills: ["Project Management", "Data Analysis", "Problem Solving", "Communication"],
        resources: [
          {
            title: "Kaggle Datasets",
            type: "Tool",
            url: "https://www.kaggle.com/datasets",
            description: "Find interesting datasets to practice your data analysis skills."
          },
          {
            title: "GitHub Portfolio Guide",
            type: "Tutorial",
            url: "https://www.dataquest.io/blog/how-to-share-data-science-portfolio/",
            description: "Learn how to build and showcase your data analysis portfolio."
          }
        ],
        completed: false
      },
      {
        title: "Prepare for Job Search",
        description: "Polish your resume, build your online presence, and prepare for interviews.",
        timeline: "1-2 months",
        skills: ["Resume Writing", "LinkedIn", "Interview Skills", "Technical Communication"],
        resources: [
          {
            title: "Data Science Interview Prep",
            type: "Course",
            url: "https://www.interviewquery.com/",
            description: "Practice with real data science interview questions."
          },
          {
            title: "Data Analyst Resume Guide",
            type: "Tutorial",
            url: "https://www.dataquest.io/blog/how-to-optimize-your-data-analyst-resume/",
            description: "Learn how to create a resume that stands out to employers."
          }
        ],
        completed: false
      }
    ]
  },
  {
    field: "Software Development",
    description: "Software developers design, build, and maintain applications and systems used by people and organizations.",
    averageSalary: "$80,000 - $150,000",
    jobGrowth: "22% (Much faster than average)",
    requiredSkills: [
      "Programming Languages", 
      "Data Structures & Algorithms", 
      "Version Control", 
      "Testing", 
      "Debugging",
      "Software Architecture",
      "Problem Solving"
    ],
    steps: [
      {
        title: "Learn Programming Fundamentals",
        description: "Master the basics of programming with a beginner-friendly language.",
        timeline: "2-3 months",
        skills: ["JavaScript/Python", "Logic", "Variables", "Functions", "Control Flow"],
        resources: [
          {
            title: "CS50's Introduction to Computer Science",
            type: "Course",
            url: "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x",
            description: "Harvard's introduction to computer science and programming."
          },
          {
            title: "The Odin Project",
            type: "Course",
            url: "https://www.theodinproject.com/",
            description: "Free full-stack curriculum with hands-on projects."
          }
        ],
        completed: false
      },
      {
        title: "Learn Data Structures & Algorithms",
        description: "Understand how to organize and manipulate data efficiently.",
        timeline: "2-3 months",
        skills: ["Arrays", "Linked Lists", "Trees", "Sorting", "Searching", "Big O Notation"],
        resources: [
          {
            title: "Data Structures & Algorithms in Python",
            type: "Book",
            url: "https://www.goodreads.com/book/show/13838796-data-structures-and-algorithms-in-python",
            description: "Comprehensive guide to DSA using Python."
          },
          {
            title: "LeetCode",
            type: "Tool",
            url: "https://leetcode.com/",
            description: "Platform to practice coding problems and prepare for technical interviews."
          }
        ],
        completed: false
      },
      {
        title: "Specialize in Web/Mobile/Backend Development",
        description: "Choose a specialization path based on your interests.",
        timeline: "3-6 months",
        skills: ["Specialized Frameworks", "Architecture Patterns", "Relevant Tools"],
        resources: [
          {
            title: "Frontend Masters",
            type: "Course",
            url: "https://frontendmasters.com/",
            description: "Deep dive courses on frontend development technologies."
          },
          {
            title: "Full Stack Open",
            type: "Course",
            url: "https://fullstackopen.com/en/",
            description: "Modern web development with JavaScript, React, Node.js, and more."
          }
        ],
        completed: false
      },
      {
        title: "Learn Version Control & Collaboration",
        description: "Master Git and collaborative development workflows.",
        timeline: "1 month",
        skills: ["Git", "GitHub", "Pull Requests", "Code Reviews", "Agile Methodologies"],
        resources: [
          {
            title: "Git & GitHub Crash Course",
            type: "Tutorial",
            url: "https://www.youtube.com/watch?v=RGOj5yH7evk",
            description: "Quick introduction to Git and GitHub for beginners."
          },
          {
            title: "Atlassian Git Tutorial",
            type: "Tutorial",
            url: "https://www.atlassian.com/git/tutorials",
            description: "Comprehensive guide to Git commands and workflows."
          }
        ],
        completed: false
      },
      {
        title: "Build Portfolio Projects",
        description: "Create substantial projects that demonstrate your skills.",
        timeline: "3-4 months",
        skills: ["Project Planning", "Full Development Lifecycle", "Testing", "Deployment"],
        resources: [
          {
            title: "GitHub Student Developer Pack",
            type: "Tool",
            url: "https://education.github.com/pack",
            description: "Free tools and services for student developers."
          },
          {
            title: "Build a SaaS Project Tutorial",
            type: "Tutorial",
            url: "https://www.freecodecamp.org/news/how-to-build-a-saas-with-next-js/",
            description: "Step-by-step guide to building a SaaS application."
          }
        ],
        completed: false
      },
      {
        title: "Prepare for Job Search",
        description: "Optimize your resume, build online presence, and practice interviews.",
        timeline: "1-2 months",
        skills: ["Resume", "LinkedIn", "Technical Interviews", "Behavioral Interviews"],
        resources: [
          {
            title: "Tech Interview Handbook",
            type: "Book",
            url: "https://techinterviewhandbook.org/",
            description: "Comprehensive guide to technical interviews."
          },
          {
            title: "Pramp",
            type: "Tool",
            url: "https://www.pramp.com/",
            description: "Platform for practicing mock interviews with peers."
          }
        ],
        completed: false
      }
    ]
  },
  {
    field: "UX/UI Design",
    description: "UX/UI designers create meaningful and relevant experiences for users when interacting with products.",
    averageSalary: "$65,000 - $130,000",
    jobGrowth: "13% (Faster than average)",
    requiredSkills: [
      "User Research", 
      "Wireframing", 
      "Prototyping", 
      "Visual Design", 
      "User Testing",
      "Design Tools",
      "Design Thinking"
    ],
    steps: [
      {
        title: "Understand Design Fundamentals",
        description: "Learn the basics of design principles and user-centered design.",
        timeline: "1-2 months",
        skills: ["Design Principles", "Color Theory", "Typography", "Layout", "UX Fundamentals"],
        resources: [
          {
            title: "Hack Design",
            type: "Course",
            url: "https://hackdesign.org/",
            description: "Free design lessons delivered to your inbox."
          },
          {
            title: "The Design of Everyday Things",
            type: "Book",
            url: "https://www.goodreads.com/book/show/840.The_Design_of_Everyday_Things",
            description: "Classic book on user-centered design principles."
          }
        ],
        completed: false
      },
      {
        title: "Learn Design Tools",
        description: "Master the essential tools used in the industry.",
        timeline: "2-3 months",
        skills: ["Figma", "Adobe XD", "Sketch", "InVision", "Prototyping"],
        resources: [
          {
            title: "Figma Tutorial for Beginners",
            type: "Tutorial",
            url: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
            description: "Learn the basics of Figma, the industry-standard design tool."
          },
          {
            title: "DesignLab UX Academy",
            type: "Course",
            url: "https://trydesignlab.com/ux-design-course/",
            description: "Comprehensive UX/UI design course with mentorship."
          }
        ],
        completed: false
      },
      {
        title: "Master User Research Methods",
        description: "Learn how to understand user needs through research techniques.",
        timeline: "2-3 months",
        skills: ["User Interviews", "Surveys", "Personas", "Journey Mapping", "Empathy"],
        resources: [
          {
            title: "Just Enough Research",
            type: "Book",
            url: "https://abookapart.com/products/just-enough-research",
            description: "Practical guide to conducting user research effectively."
          },
          {
            title: "Nielsen Norman Group Articles",
            type: "Resource",
            url: "https://www.nngroup.com/articles/",
            description: "Evidence-based user experience research and articles."
          }
        ],
        completed: false
      },
      {
        title: "Practice UI Design & Wireframing",
        description: "Develop visual design skills and create effective wireframes.",
        timeline: "2-3 months",
        skills: ["Visual Hierarchy", "Component Design", "Responsive Design", "Design Systems"],
        resources: [
          {
            title: "Refactoring UI",
            type: "Book",
            url: "https://refactoringui.com/book/",
            description: "Learn practical UI design skills from the creators of Tailwind CSS."
          },
          {
            title: "Daily UI Challenge",
            type: "Tool",
            url: "https://www.dailyui.co/",
            description: "100-day challenge to improve your UI design skills."
          }
        ],
        completed: false
      },
      {
        title: "Learn Interaction & Prototyping",
        description: "Create interactive prototypes that demonstrate user flows.",
        timeline: "1-2 months",
        skills: ["Microinteractions", "Animation", "User Flows", "Interactive Prototypes"],
        resources: [
          {
            title: "Interaction Design Foundation",
            type: "Course",
            url: "https://www.interaction-design.org/courses",
            description: "Courses on interaction design principles and practices."
          },
          {
            title: "Principle for Mac",
            type: "Tool",
            url: "https://principleformac.com/",
            description: "Tool for creating animated and interactive user interfaces."
          }
        ],
        completed: false
      },
      {
        title: "Build Your UX/UI Portfolio",
        description: "Create case studies that showcase your design process and skills.",
        timeline: "2-3 months",
        skills: ["Case Studies", "Problem Solving", "Design Process", "Portfolio Website"],
        resources: [
          {
            title: "How to Create a UX Portfolio",
            type: "Tutorial",
            url: "https://www.uxportfolioformula.com/",
            description: "Step-by-step guide to creating an effective UX portfolio."
          },
          {
            title: "Behance",
            type: "Tool",
            url: "https://www.behance.net/",
            description: "Platform to showcase and discover creative work."
          }
        ],
        completed: false
      }
    ]
  }
];
