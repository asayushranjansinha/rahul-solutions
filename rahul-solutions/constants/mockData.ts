import { MenuSection, ProfileStat } from "@/types";
import { Feather } from "@expo/vector-icons";

// ✅ 1. TYPES
export interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaAction: () => void;
  gradientColors: string[];
}

export interface Course {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  status: "available" | "coming-soon" | "premium";
  duration: string;
  lessons: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

// ✅ 2. FEATURED CAROUSEL ITEMS
export const featuredItems: CarouselItem[] = [
  {
    id: 1,
    title: "New Course Alert!",
    subtitle: "Featured",
    description: "Master React Native with our comprehensive course",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop&crop=center",
    ctaText: "Enroll Now",
    ctaAction: () => console.log("Navigate to React Native course"),
    gradientColors: ["#0ea5e9", "#38bdf8", "#7dd3fc"],
  },
  {
    id: 2,
    title: "Limited Time Offer",
    subtitle: "Special Deal",
    description: "Get 50% off on all premium courses this month",
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop&crop=center",
    ctaText: "Claim Offer",
    ctaAction: () => console.log("Navigate to offers page"),
    gradientColors: ["#10B981", "#34D399", "#6EE7B7"],
  },
  {
    id: 3,
    title: "Join Our Community",
    subtitle: "Connect",
    description: "Network with fellow developers and mentors",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop&crop=center",
    ctaText: "Join Now",
    ctaAction: () => console.log("Navigate to community"),
    gradientColors: ["#8B5CF6", "#A78BFA", "#C4B5FD"],
  },
  {
    id: 4,
    title: "Track Your Progress",
    subtitle: "Analytics",
    description: "Monitor your learning journey with detailed insights",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&crop=center",
    ctaText: "View Stats",
    ctaAction: () => console.log("Navigate to analytics"),
    gradientColors: ["#F59E0B", "#FBBF24", "#FCD34D"],
  },
];

// ✅ 3. SAMPLE COURSES
export const sampleCourses: Course[] = [
  {
    id: 1,
    title: "React Native Mastery",
    description:
      "Master mobile app development with React Native. Learn to build cross-platform apps from scratch with modern best practices.",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop&crop=center",
    status: "coming-soon",
    duration: "8 weeks",
    lessons: 45,
    difficulty: "Intermediate",
  },
  {
    id: 2,
    title: "Full Stack JavaScript",
    description:
      "Complete web development course covering frontend and backend with Node.js, React, and modern databases.",
    imageUrl:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop&crop=center",
    status: "available",
    duration: "12 weeks",
    lessons: 78,
    difficulty: "Beginner",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    description:
      "Learn the principles of user interface and user experience design. Create stunning digital experiences.",
    imageUrl:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=200&fit=crop&crop=center",
    status: "premium",
    duration: "6 weeks",
    lessons: 32,
    difficulty: "Beginner",
  },
  {
    id: 4,
    title: "Advanced TypeScript",
    description:
      "Deep dive into TypeScript's advanced features. Learn generics, decorators, and complex type manipulations.",
    imageUrl:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=200&fit=crop&crop=center",
    status: "coming-soon",
    duration: "10 weeks",
    lessons: 58,
    difficulty: "Advanced",
  },
  {
    id: 5,
    title: "Data Structures & Algorithms",
    description:
      "Master computer science fundamentals with practical coding challenges and interview preparation.",
    imageUrl:
      "https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?w=400&h=200&fit=crop&crop=center",
    status: "available",
    duration: "14 weeks",
    lessons: 92,
    difficulty: "Advanced",
  },
];
export interface ActionItem {
  id: number;
  title: string;
  icon: keyof typeof Feather.glyphMap;
  gradientColors: string[];
  iconColor: string;
}

export const actions: ActionItem[] = [
  {
    id: 1,
    title: "Explore",
    icon: "compass",
    gradientColors: ["#667eea", "#764ba2"],
    iconColor: "#ffffff",
  },
  {
    id: 2,
    title: "Courses",
    icon: "book",
    gradientColors: ["#f093fb", "#f5576c"],
    iconColor: "#ffffff",
  },
  {
    id: 3,
    title: "Campus Ambassador",
    icon: "users",
    gradientColors: ["#4facfe", "#00f2fe"],
    iconColor: "#ffffff",
  },
  {
    id: 4,
    title: "Job Updates",
    icon: "briefcase",
    gradientColors: ["#43e97b", "#38f9d7"],
    iconColor: "#ffffff",
  },
];

// constants/mockCourses.ts

export interface CourseItem {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  students: number;
  rating: number;
  price: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  image: string;
  category: string;
}

export const courses: CourseItem[] = [
  {
    id: 1,
    title: "Digital Marketing Mastery",
    instructor: "Rahul Kumar",
    duration: "8 weeks",
    students: 1500,
    rating: 4.8,
    price: "₹4,999",
    level: "Beginner",
    image:
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Marketing",
  },
  {
    id: 2,
    title: "Web Design Excellence",
    instructor: "Priya Sharma",
    duration: "6 weeks",
    students: 1200,
    rating: 4.9,
    price: "₹3,999",
    level: "Intermediate",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Design",
  },
  {
    id: 3,
    title: "Social Media Strategy",
    instructor: "Amit Singh",
    duration: "4 weeks",
    students: 900,
    rating: 4.7,
    price: "₹2,999",
    level: "Beginner",
    image:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Marketing",
  },
  {
    id: 4,
    title: "SEO Optimization Pro",
    instructor: "Neha Gupta",
    duration: "5 weeks",
    students: 800,
    rating: 4.6,
    price: "₹3,499",
    level: "Advanced",
    image:
      "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400",
    category: "Marketing",
  },
  {
    id: 5,
    title: "E-commerce Development",
    instructor: "Vikash Patel",
    duration: "10 weeks",
    students: 650,
    rating: 4.8,
    price: "₹5,999",
    level: "Advanced",
    image:
      "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400",
    category: "Development",
  },
  {
    id: 6,
    title: "Content Marketing",
    instructor: "Sunita Roy",
    duration: "3 weeks",
    students: 1100,
    rating: 4.5,
    price: "₹1,999",
    level: "Beginner",
    image:
      "https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=400",
    category: "Marketing",
  },
];

export const categories = ["All", "Marketing", "Design", "Development"];

// adjust path as needed

export const menuSections: MenuSection[] = [
  {
    id: "account",
    title: "Account",
    icon:"user",
    items: [
      {
        id: "profile",
        title: "Profile Information",
        icon: "user",
        action: () => console.log("Go to Profile Info"),
      },
      {
        id: "security",
        title: "Security",
        icon: "shield",
        action: () => console.log("Go to Security"),
      },
    ],
  },
  {
    id: "preferences",
    title: "Preferences",
    icon:"help-circle",
    items: [
      {
        id: "notifications",
        title: "Notifications",
        icon: "bell",
        action: () => console.log("Go to Notifications"),
        badge: "3", // e.g., unread count
      },
      {
        id: "theme",
        title: "Appearance",
        icon: "sun",
        action: () => console.log("Go to Appearance"),
      },
    ],
  },
  {
    id: "support",
    title: "Support",
    icon:"sliders",
    items: [
      {
        id: "help",
        title: "Help & FAQ",
        icon: "help-circle",
        action: () => console.log("Go to Help"),
      },
      {
        id: "about",
        title: "About Us",
        icon: "info",
        action: () => console.log("Go to About"),
      },
    ],
  },
];


export const profileStats: ProfileStat[] = [
  {
    id: "completed",
    label: "Courses Completed",
    value: "12",
    icon: "award",
    color: "#10B981", // Emerald
    gradient: ["#34D399", "#10B981"], // Light → base emerald
  },
  {
    id: "progress",
    label: "In Progress",
    value: "3",
    icon: "book-open",
    color: "#3B82F6", // Blue
    gradient: ["#60A5FA", "#3B82F6"], // Light → base blue
  },
  {
    id: "hours",
    label: "Study Hours",
    value: "156",
    icon: "clock",
    color: "#F59E0B", // Amber
    gradient: ["#FBBF24", "#F59E0B"], // Light → base amber
  },
  {
    id: "rating",
    label: "Average Rating",
    value: "4.8",
    icon: "star",
    color: "#FACC15", // Yellow
    gradient: ["#FDE68A", "#FACC15"], // Light → gold yellow
  },
];
