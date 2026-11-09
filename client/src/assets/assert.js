import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiReactrouter,
  SiMongodb,
  SiMongoose,
  SiGit,
  SiPython,
  SiDjango,
  SiMysql,
  SiTypescript,
  SiPostman,
  SiGraphql,
  SiLeaflet,
  SiVite,
  SiMui,
  SiAxios,
  SiStripe,
  SiCloudinary,
  SiJsonwebtokens
} from "react-icons/si";
import { IoFlowerOutline } from "react-icons/io5";
import {
  TbBrandNodejs,
  TbApi,
  TbWebhook,
  TbBolt,
  TbCalendarTime,
  TbDatabase,
  TbShieldLock
} from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";
import spritleLogo from "./spritle_software_logo.jpg";

export const skills = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    icon: SiReact,
    iconColor: "text-cyan-400",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: SiTypescript,
    iconColor: "text-blue-500",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: SiJavascript,
    iconColor: "text-yellow-400",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: SiTailwindcss,
    iconColor: "text-sky-400",
  },
  {
    name: "Vite",
    category: "frontend",
    icon: SiVite,
    iconColor: "text-purple-500",
  },
  {
    name: "Material UI (MUI)",
    category: "frontend",
    icon: SiMui,
    iconColor: "text-blue-400",
  },
  {
    name: "React Router",
    category: "frontend",
    icon: SiReactrouter,
    iconColor: "text-red-500",
  },
  {
    name: "Leaflet.js",
    category: "frontend",
    icon: SiLeaflet,
    iconColor: "text-green-500",
  },
  {
    name: "GSAP",
    category: "frontend",
    icon: IoFlowerOutline,
    iconColor: "text-emerald-400",
  },
  {
    name: "HTML5",
    category: "frontend",
    icon: SiHtml5,
    iconColor: "text-orange-500",
  },
  {
    name: "CSS3",
    category: "frontend",
    icon: SiCss3,
    iconColor: "text-blue-600",
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    icon: TbBrandNodejs,
    iconColor: "text-green-600",
  },
  {
    name: "Express.js",
    category: "backend",
    icon: TbBrandNodejs,
    iconColor: "text-gray-400",
  },
  {
    name: "REST APIs & Webhooks",
    category: "backend",
    icon: TbWebhook,
    iconColor: "text-orange-400",
  },
  {
    name: "GraphQL Integration",
    category: "backend",
    icon: SiGraphql,
    iconColor: "text-pink-500",
  },
  {
    name: "Serverless Handlers",
    category: "backend",
    icon: TbBolt,
    iconColor: "text-yellow-400",
  },
  {
    name: "Agenda.js / Scheduling",
    category: "backend",
    icon: TbCalendarTime,
    iconColor: "text-indigo-400",
  },
  {
    name: "Python",
    category: "backend",
    icon: SiPython,
    iconColor: "text-yellow-400",
  },
  {
    name: "Django / DRF",
    category: "backend",
    icon: SiDjango,
    iconColor: "text-green-600",
  },

  // Platforms
  {
    name: "Freshworks FDK",
    category: "platforms",
    icon: TbBolt,
    iconColor: "text-amber-400",
  },
  {
    name: "Freshdesk",
    category: "platforms",
    icon: TbApi,
    iconColor: "text-teal-400",
  },
  {
    name: "Freshservice",
    category: "platforms",
    icon: TbApi,
    iconColor: "text-emerald-400",
  },
  {
    name: "Freshsales",
    category: "platforms",
    icon: TbApi,
    iconColor: "text-orange-400",
  },
  {
    name: "Freshchat",
    category: "platforms",
    icon: TbApi,
    iconColor: "text-cyan-400",
  },

  // Databases
  {
    name: "MongoDB",
    category: "database",
    icon: SiMongodb,
    iconColor: "text-green-500",
  },
  {
    name: "Mongoose ODM",
    category: "database",
    icon: SiMongoose,
    iconColor: "text-red-500",
  },
  {
    name: "MySQL",
    category: "database",
    icon: SiMysql,
    iconColor: "text-blue-500",
  },
  {
    name: "Key-Value Storage",
    category: "database",
    icon: TbDatabase,
    iconColor: "text-violet-400",
  },

  // Tools & Security
  {
    name: "JWT & Bcrypt",
    category: "tools",
    icon: SiJsonwebtokens,
    iconColor: "text-pink-400",
  },
  {
    name: "AES-256 Encryption & RBAC",
    category: "tools",
    icon: TbShieldLock,
    iconColor: "text-emerald-400",
  },
  {
    name: "Git & GitHub",
    category: "tools",
    icon: SiGit,
    iconColor: "text-orange-500",
  },
  {
    name: "Postman",
    category: "tools",
    icon: SiPostman,
    iconColor: "text-amber-500",
  },
  {
    name: "VS Code",
    category: "tools",
    icon: VscVscode,
    iconColor: "text-blue-400",
  },
  {
    name: "Axios",
    category: "tools",
    icon: SiAxios,
    iconColor: "text-indigo-400",
  },
  {
    name: "Stripe",
    category: "tools",
    icon: SiStripe,
    iconColor: "text-indigo-500",
  },
  {
    name: "Cloudinary",
    category: "tools",
    icon: SiCloudinary,
    iconColor: "text-sky-500",
  },
  {
    name: "Figma",
    category: "tools",
    icon: FaFigma,
    iconColor: "text-pink-400",
  },
];

export const categories = ["all", "frontend", "backend", "platforms", "database", "tools"];

export const experiences = [
  {
    role: "Freshworks App Developer Intern",
    company: "Spritle Software",
    location: "Chennai, Tamil Nadu",
    period: "Aug 2026 – Nov 2026",
    logo: spritleLogo,
    highlights: [
      "Developed 5 Freshworks apps for Freshdesk, Freshservice, Freshchat, and Freshsales using React 18, Node.js, Express.js, MongoDB, and the Freshworks Developer Kit (FDK).",
      "Wrote serverless event handlers (onTicketCreate, onTicketUpdate) and request templates to automate ticket workflows and integrate REST & GraphQL APIs.",
      "Built Express.js and MongoDB middleware for multi-tenant data with AES-256 encrypted credential storage and scheduled jobs.",
      "Designed admin configuration screens with React and Freshworks Crayons, including live credential verification and field validation.",
      "Optimized apps within platform limits (50 API calls/min, 8 KB per stored record) using KV caching, request locking, and an external MongoDB backend.",
      "Eliminated duplicate records from near-simultaneous onTicketCreate/onTicketUpdate events with partial unique indexes and idempotent writes.",
      "Resolved 500px iframe clipping in Freshservice by dynamically resizing the frame with ResizeObserver."
    ]
  },
  {
    role: "React Frontend Developer Intern",
    company: "Haaris InfoTech",
    location: "Chennai, Tamil Nadu",
    period: "Jan 2026 – Mar 2026",
    highlights: [
      "Developed the admin panel for a quiz management application for client Afaf Way using React and Tailwind CSS, reducing manual upload time by 40%.",
      "Implemented queue-based batch processing on the frontend to handle bulk quiz uploads, reducing upload failures by 30%.",
      "Built an analytics dashboard with Recharts that consumes REST APIs to display real-time daily, weekly, and monthly statistics across 500+ quiz interactions.",
      "Delivered the complete application to the client and collaborated across the software deployment workflow."
    ]
  }
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "MEASI Institute of Information Technology, Chennai",
    period: "Aug 2025 – Apr 2027 (Expected)",
    details: "Focusing on advanced software engineering, distributed systems, and full-stack cloud computing."
  },
  {
    degree: "Bachelor of Science (BSc) in Computer Science",
    institution: "The New College, Chennai",
    period: "Aug 2022 – May 2025",
    details: "Core computer science fundamentals, data structures, algorithms, and web application design."
  }
];

export const projects = [
  {
    id: 1,
    title: "CheckList: Task Checklist & Closure Guard",
    subtitle: "Freshworks App for Freshdesk & Freshservice",
    description:
      "Enterprise sidebar checklist app with reusable templates and a rule engine that attaches checklists by ticket type, priority, and group. Features a closure guard blocking premature ticket closure, one-click task conversion across 6 external PM tools (Jira, Linear, Asana, HubSpot, ClickUp, monday.com), and an Express/MongoDB backend to bypass platform constraints.",
    tags: [
      "React 18",
      "Freshworks Crayons",
      "Freshworks FDK",
      "Node.js",
      "Express 5",
      "MongoDB",
      "Mongoose",
      "Jira API",
      "HubSpot API",
      "Asana API",
      "AES-256",
      "RBAC"
    ],
    isEnterprise: true,
  },
  {
    id: 2,
    title: "Auto Ticket Merger: Duplicate Automation",
    subtitle: "Automation App for Freshdesk",
    description:
      "Serverless automation system using onTicketCreate and onTicketUpdate event handlers to merge duplicate tickets from the same requester across email, portal, chat, and phone. Includes an admin merge window, regex include/exclude rules, API credential verification, and key-value storage tracking to strictly respect the 50 API calls/minute limit.",
    tags: [
      "Node.js",
      "React 18",
      "Tailwind CSS",
      "Freshworks FDK 3.0",
      "Serverless",
      "KV Store",
      "Freshdesk REST API",
      "Regex Rules"
    ],
    youtubeUrl: "https://youtu.be/0kdB2t3hpwg",
  },
  {
    id: 3,
    title: "Remind Later: Ticket Reminder App",
    subtitle: "Productivity App for Freshdesk & Freshservice",
    description:
      "Sidebar application for one-click ticket reminders and a full-page dashboard with search and pagination. Powered by an Agenda.js scheduler that posts private notes and emails agents at designated times with automatic retries. Features AES-256-GCM encryption, in-flight request locks, 60-second caching, and MongoDB partial unique indexes.",
    tags: [
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Agenda.js",
      "React 18",
      "Freshworks Crayons",
      "Freshworks FDK",
      "AES-256-GCM"
    ],
    isEnterprise: true,
  },
  {
    id: 4,
    title: "Weather & Route Planner: 4-Product Freshworks App",
    subtitle: "Freshdesk, Freshservice, Freshchat, Freshsales",
    description:
      "Multi-product Freshworks app providing 7-day weather forecasts and an interactive multi-stop route view (up to 8 stops) flagging 60%+ precipitation risks. Normalizes 5 weather APIs (OpenWeatherMap, Open-Meteo, MET Norway, WeatherAPI, Tomorrow.io) with automatic failover, one-click ticket reply insertion, and 5-hour KV caching.",
    tags: [
      "React 18",
      "Node.js",
      "Leaflet.js",
      "Freshworks Crayons",
      "Freshworks FDK",
      "OpenWeatherMap",
      "Open-Meteo",
      "WeatherAPI",
      "Tomorrow.io"
    ],
    youtubeUrl: "https://youtu.be/72ITw9sGWyo",
  },
  {
    id: 5,
    title: "QuickShow: Show & Event Booking Platform",
    subtitle: "Full-Stack MERN Booking Application",
    description:
      "Full-stack ticket booking platform built with React 19, Express, and MongoDB. Features Clerk user authentication, Stripe checkout integration, Nodemailer notifications, Inngest background event workflows, and optimized Mongoose data modeling for real-time ticket reservations.",
    image: "/projects/image.png",
    tags: [
      "React 19",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Clerk",
      "Stripe",
      "Inngest",
      "Nodemailer"
    ],
    demoUrl: "https://book-my-show-delta-one.vercel.app/",
    githubUrl: "https://github.com/ThowfiqNizaath/Book_My_Show",
  },
  {
    id: 6,
    title: "Strivio: Habit & Routine Tracking",
    subtitle: "Full-Stack Routine & Analytics Platform",
    description:
      "Full-stack routine and habit tracking web application built with React, Django REST Framework, and PostgreSQL. Features JWT cookie authentication, Recharts progress analytics dashboards, scheduled routines, PWA support, and TipTap rich-text notes for comprehensive productivity management.",
    image: "/projects/Dashboard.png",
    tags: [
      "React",
      "Vite",
      "TailwindCss",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "JWT Auth",
      "Recharts",
      "PWA"
    ],
    demoUrl: "https://strivio-frontend-app.vercel.app",
    githubUrl: "https://github.com/ThowfiqNizaath/StrivioApp",
  },
  {
    id: 7,
    title: "Food Delivery Platform",
    subtitle: "Full-Stack Ordering & Delivery System",
    description:
      "Full-stack food delivery platform built with React 18, Node.js, Express, and MongoDB. Features a secure JWT authentication system, Stripe payment gateway, and a responsive interface with Material UI and Tailwind CSS.",
    image: "/projects/Tomato.png",
    tags: [
      "React 18",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "JWT",
      "Bcrypt"
    ],
    demoUrl: "https://food-delivery-client-2oz5.onrender.com/",
    githubUrl: "https://github.com/ThowfiqNizaath/Food_Delivery_App",
  },
];

export const certificates = [
  {
    id: 1,
    title: "Internship Completion Certificate",
    platform: "Offline",
    type: "Internship",
    image: "/projects/InternshipCertificate.png",
    by: "Haaris InfoTech",
    description:
      "Completed a frontend development internship focused on building dynamic web applications with React.js and JavaScript (ES6+). Designed responsive UI components using React Hooks, and integrated RESTful APIs for real-time data handling.",
    link: "https://drive.google.com/file/d/1K8yMQXKUWe5SGzIMqV4W_phRC9Ll973P/view?usp=sharing",
  },
  {
    id: 2,
    title: "Programming with JavaScript",
    platform: "Coursera",
    type: "Course",
    image: "/projects/JavaScriptCertificate.png",
    by: "Meta",
    description:
      "Completed the 'Programming with JavaScript' course on Coursera by Meta, gaining a strong foundation in JavaScript fundamentals and applying key concepts to build dynamic web applications.",
    link: "https://www.coursera.org/account/accomplishments/verify/NQOY4A3U9F0O?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
  },
  {
    id: 3,
    title: "Introduction to Front-End Development",
    platform: "Coursera",
    type: "Course",
    by: "Meta",
    image: "/projects/FrontEndIntroductionCertificate.png",
    description:
      "Completed the 'Introduction to Front-End Development' course on Coursera by Meta, establishing core foundations in HTML5, CSS3, responsive UI design, web accessibility, and modern front-end workflows.",
    link: "https://www.coursera.org/account/accomplishments/verify/C10C8YUWPJOG?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse ",
  },
  {
    id: 4,
    title: "Tecnova Competition - Web Wave Event",
    platform: "Offline",
    type: "Event",
    by: "MEASI Institute of Information Technology",
    image: "/projects/WebWaveCertificate.jpg",
    description:
      "Secured 2nd place in the Web Wave event, showcasing expertise in Frontend Development with HTML and CSS. Designed and developed a dynamic web project, focusing on responsive and visually engaging user interfaces.",
    link: "https://drive.google.com/file/d/1Z1haANZPv4dzDlqmoUtxojAuibh2BynI/view?usp=sharing",
  },
  {
    id: 5,
    title: "Code A Thon",
    platform: "Offline",
    type: "Event",
    by: "The New College",
    image: "/projects/CodeAThonCertificate.jpg",
    description:
      "Secured 2nd place in the Code A Thon event by showcasing strong debugging skills in C, identifying and resolving errors efficiently under time constraints.",
    link: "https://drive.google.com/file/d/1ZDQcnJ-48V4pqWv12niJvIgw1WDAiZoC/view?usp=sharing",
  },
];
