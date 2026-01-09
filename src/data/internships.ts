export interface Internship {
  id: string;
  title: string;
  company: string;
  type: string; // "Remote" only
  duration: string;
  stipend: number;
  image: string;
  skills: string[];
  description: string;
  category: string;
}

export const internships: Internship[] = [
  {
    id: "1",
    title: "Software Development Intern",
    company: "TechCorp Solutions",
    type: "Remote",
    duration: "6",
    stipend: 25000,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    skills: ["React", "Node.js", "MongoDB", "JavaScript"],
    description: "Work on real-world projects and gain hands-on experience in full-stack development.",
    category: "Web Development"
  },
  {
    id: "2",
    title: "Data Science Intern",
    company: "DataAnalytics Pro",
    type: "Remote",
    duration: "3",
    stipend: 20000,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
    description: "Analyze large datasets and build predictive models using advanced ML techniques.",
    category: "Data Science"
  },
  {
    id: "3",
    title: "UI/UX Design Intern",
    company: "Creative Design Studio",
    type: "Remote",
    duration: "4",
    stipend: 18000,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    description: "Design user interfaces and create engaging user experiences for digital products.",
    category: "Design"
  },
  {
    id: "4",
    title: "Digital Marketing Intern",
    company: "Growth Marketing Agency",
    type: "Remote",
    duration: "3",
    stipend: 15000,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    skills: ["SEO", "Social Media", "Content Marketing", "Analytics"],
    description: "Manage social media campaigns and analyze marketing performance metrics.",
    category: "Marketing"
  },
  {
    id: "5",
    title: "Cloud Engineering Intern",
    company: "CloudTech Innovations",
    type: "Remote",
    duration: "6",
    stipend: 30000,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    skills: ["AWS", "Docker", "Kubernetes", "DevOps"],
    description: "Work with cloud infrastructure and deploy scalable applications on AWS.",
    category: "Cloud"
  },
  {
    id: "6",
    title: "Mobile App Development Intern",
    company: "AppDev Solutions",
    type: "Remote",
    duration: "4",
    stipend: 22000,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    description: "Develop mobile applications for iOS and Android platforms.",
    category: "Mobile Development"
  },
  {
    id: "7",
    title: "Agentic AI Intern",
    company: "AI Innovations Lab",
    type: "Remote",
    duration: "6",
    stipend: 35000,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    skills: ["Python", "LLMs", "Autonomous Agents", "AI Frameworks"],
    description: "Build autonomous AI agents and intelligent systems using cutting-edge AI technologies.",
    category: "AI/ML"
  },
  {
    id: "8",
    title: "Generative AI Intern",
    company: "GenAI Solutions",
    type: "Remote",
    duration: "5",
    stipend: 32000,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    skills: ["GPT Development", "LLM Fine-tuning", "Creative AI", "NLP"],
    description: "Develop generative AI models and create innovative AI-powered applications.",
    category: "AI/ML"
  },
  {
    id: "9",
    title: "Data Analytics Intern",
    company: "Analytics Pro",
    type: "Remote",
    duration: "4",
    stipend: 24000,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    skills: ["SQL", "Power BI", "Tableau", "Python", "Data Visualization"],
    description: "Analyze business data, create dashboards, and provide actionable insights.",
    category: "Data Science"
  },
  {
    id: "10",
    title: "Backend Development Intern",
    company: "Backend Solutions Inc",
    type: "Remote",
    duration: "6",
    stipend: 28000,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    skills: ["Node.js", "Python", "API Development", "Database Design", "Server Architecture"],
    description: "Build scalable backend systems, APIs, and server-side applications.",
    category: "Web Development"
  }
];

