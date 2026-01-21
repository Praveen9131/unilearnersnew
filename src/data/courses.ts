export interface Course {
  id: string;
  title: string;
  category: string;
  instructors: string[];
  image: string;
  language: string;
  features: string[];
  targetAudience: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  duration: string;
  level: string;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Data Science Masters Pro 2024",
    category: "Data Science",
    instructors: ["Praveen"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    language: "English",
    features: ["Course Resources", "Self Paced Learning", "Live Sessions", "Certification"],
    targetAudience: "College Student & Working Professional",
    price: 8000,
    originalPrice: 10000,
    discount: 20,
    duration: "6 months",
    level: "Advanced"
  },
  {
    id: "2",
    title: "Full Stack Web Development",
    category: "Web Development",
    instructors: ["Karthik"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
    language: "English",
    features: ["Project Based", "Mentorship", "Job Assistance", "Portfolio Building"],
    targetAudience: "Beginner to Advanced",
    price: 12000,
    originalPrice: 15000,
    discount: 20,
    duration: "4 months",
    level: "Intermediate"
  },
  {
    id: "3",
    title: "Machine Learning Fundamentals",
    category: "AI/ML",
    instructors: ["Praveen"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800",
    language: "English",
    features: ["Hands-on Projects", "Industry Case Studies", "Certification"],
    targetAudience: "Working Professional",
    price: 15000,
    originalPrice: 18000,
    discount: 17,
    duration: "5 months",
    level: "Advanced"
  },
  {
    id: "4",
    title: "UI/UX Design Masterclass",
    category: "Design",
    instructors: ["Badri"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
    language: "English",
    features: ["Design Tools", "Portfolio Review", "Industry Projects"],
    targetAudience: "College Student & Working Professional",
    price: 9000,
    originalPrice: 12000,
    discount: 25,
    duration: "3 months",
    level: "Beginner"
  },
  {
    id: "5",
    title: "Digital Marketing Certification",
    category: "Marketing",
    instructors: ["Karthik"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    language: "English",
    features: ["Live Campaigns", "Certification", "Industry Tools"],
    targetAudience: "Working Professional",
    price: 7000,
    originalPrice: 9000,
    discount: 22,
    duration: "2 months",
    level: "Beginner"
  },
  {
    id: "6",
    title: "Cloud Computing & DevOps",
    category: "Cloud",
    instructors: ["Santhosh"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    language: "English",
    features: ["AWS Certification", "Hands-on Labs", "Real Projects"],
    targetAudience: "Working Professional",
    price: 18000,
    originalPrice: 22000,
    discount: 18,
    duration: "4 months",
    level: "Intermediate"
  },
  {
    id: "7",
    title: "Agentic AI: Autonomous Systems & Intelligent Agents",
    category: "AI/ML",
    instructors: ["Praveen"],
    image: "/agentic-ai-course.jpg",
    language: "English",
    features: ["Hands-on Projects", "Autonomous Agents", "LLM Integration", "Real-world Applications"],
    targetAudience: "Working Professional & Advanced Students",
    price: 25000,
    originalPrice: 30000,
    discount: 17,
    duration: "6 months",
    level: "Advanced"
  },
  {
    id: "8",
    title: "Java & Data Structures and Algorithms",
    category: "Programming",
    instructors: ["Karthik"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
    language: "English",
    features: ["Problem Solving", "DSA Concepts", "Java Programming", "Interview Preparation"],
    targetAudience: "College Student & Working Professional",
    price: 12000,
    originalPrice: 15000,
    discount: 20,
    duration: "4 months",
    level: "Intermediate"
  },
  {
    id: "9",
    title: "Generative AI: LLMs, GPTs & Creative AI",
    category: "AI/ML",
    instructors: ["Praveen"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    language: "English",
    features: ["LLM Training", "GPT Development", "Creative AI", "Real Projects"],
    targetAudience: "Working Professional & Advanced Students",
    price: 22000,
    originalPrice: 28000,
    discount: 21,
    duration: "5 months",
    level: "Advanced"
  },
  {
    id: "10",
    title: "Data Analytics & Business Intelligence",
    category: "Data Science",
    instructors: ["Praveen"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    language: "English",
    features: ["SQL Mastery", "Power BI", "Tableau", "Business Insights"],
    targetAudience: "College Student & Working Professional",
    price: 10000,
    originalPrice: 13000,
    discount: 23,
    duration: "3 months",
    level: "Intermediate"
  },
  {
    id: "11",
    title: "Backend Development with Node.js & Python",
    category: "Web Development",
    instructors: ["Karthik"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
    language: "English",
    features: ["API Development", "Database Design", "Server Architecture", "Deployment"],
    targetAudience: "College Student & Working Professional",
    price: 14000,
    originalPrice: 18000,
    discount: 22,
    duration: "4 months",
    level: "Intermediate"
  }
];

