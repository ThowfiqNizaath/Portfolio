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
} from "react-icons/si";
import { IoFlowerOutline } from "react-icons/io5";
import { TbBrandNodejs } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";
import { MdMobileFriendly } from "react-icons/md";

export const skills = [
  {
    name: "HTML",
    level: 80,
    category: "frontend",
    icon: SiHtml5,
    iconColor: "text-orange-600", // HTML5 orange
  },
  {
    name: "CSS",
    level: 80,
    category: "frontend",
    icon: SiCss3,
    iconColor: "text-blue-600", // CSS3 blue
  },
  {
    name: "JavaScript",
    level: 80,
    category: "frontend",
    icon: SiJavascript,
    iconColor: "text-yellow-400", // JS yellow
  },
  {
    name: "ReactJS",
    level: 80,
    category: "frontend",
    icon: SiReact,
    iconColor: "text-cyan-400", // React cyan/teal
  },
  {
    name: "TailwindCSS",
    level: 80,
    category: "frontend",
    icon: SiTailwindcss,
    iconColor: "text-sky-400", // Tailwind sky blue
  },
  {
    name: "GSAP",
    level: 80,
    category: "frontend",
    icon: IoFlowerOutline,
    iconColor: "text-green-500", // GSAP green
  },
  {
    name: "React Router",
    level: 80,
    category: "frontend",
    icon: SiReactrouter,
    iconColor: "text-red-500", // React Router red
  },

  {
    name: "Node.js",
    level: 80,
    category: "backend",
    icon: TbBrandNodejs,
    iconColor: "text-green-600", // Node green
  },
  {
    name: "Express",
    level: 80,
    category: "backend",
    icon: TbBrandNodejs,
    iconColor: "text-gray-800", // Express is usually black/gray
  },
  {
    name: "MongoDB",
    level: 80,
    category: "backend",
    icon: SiMongodb,
    iconColor: "text-green-700", // MongoDB dark green
  },
  {
    name: "Mongoose",
    level: 80,
    category: "backend",
    icon: SiMongoose,
    iconColor: "text-red-600", // Mongoose red
  },

  {
    name: "Git/GitHub",
    level: 80,
    category: "tools",
    icon: SiGit,
    iconColor: "text-orange-500", // Git orange
  },
  {
    name: "VS Code",
    level: 80,
    category: "tools",
    icon: VscVscode,
    iconColor: "text-blue-500", // VS Code blue
  },
  {
    name: "Figma",
    level: 90,
    category: "tools",
    icon: FaFigma,
    iconColor: "text-pink-500", // Figma uses gradient, pick pink/magenta
  },
  {
    name: "CRUD Functionalities",
    level: 90,
    category: "tools",
    icon: MdMobileFriendly,
    iconColor: "text-emerald-500", // Just a nice green (not a brand)
  },
];


export const categories = [
    "all",
    "frontend",
    "backend",
    "tools"
]

export const projects = [
  {
    id: 1,
    title: "Food Delivery App",
    description:
      "Developed a full-stack food delivery platform with React 18, Node.js, Express, and MongoDB, featuring a secure JWT authentication system, Stripe payment integration, and a responsive UI with Material UI for smooth cross-device performance.",
    image: "/projects/Tomato.png",
    tags: [
      "TailwindCss",
      "Notistack",
      "Axios",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Stripe",
      "JWT",
      "Bcrypt",
      "Multer",
    ],
    demoUrl: "https://food-delivery-client-2oz5.onrender.com/",
    githubUrl: "https://github.com/ThowfiqNizaath/Food_Delivery_App",
  },
  {
    id: 2,
    title: "QuickShow - Show Booking Application",
    description:
      "Developed a full-stack ticket booking platform with React, TailwindCSS, Express, and MongoDB, featuring Clerk authentication, Stripe payments, and Nodemailer notifications, with Inngest workflows and Mongoose data modeling for secure and seamless user experiences.",
    image: "/projects/image.png",
    tags: [
      "React 19",
      "TailwindCSS",
      "Clerk",
      "Express",
      "MongoDB",
      "Stripe",
      "Inngest",
      "Cloudinary",
      "WebHooks",
    ],
    demoUrl: "https://book-my-show-delta-one.vercel.app/",
    githubUrl: "#https://github.com/ThowfiqNizaath/Book_My_Show",
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
      "Completed a frontend development internship focused on building and deploying dynamic web applications with React.js and JavaScript (ES6+). Designed and implemented responsive UI components using React Hooks, and integrated RESTful APIs for real-time data handling, improving performance and efficiency.",
    link: "https://drive.google.com/file/d/1gYIB7IncErdqMmOUFAeU3Aewc98lLmrv/view?usp=sharing",
  },
  {
    id: 2,
    title: "Programming with JavaScript",
    platform: "Coursera",
    type: "course",
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
    type: "course",
    by: "Meta",
    image: "/projects/FrontEndIntroductionCertificate.png",
    description:
      "Completed the 'Introduction to Front-End Development' course on Coursera by Meta, gaining a strong foundation in JavaScript fundamentals and applying key concepts to build dynamic web applications.",
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
      "Secured 2nd place in the Web Wave event, showcasing expertise in Frontend Development with HTML and CSS. Designed and developed a dynamic web project, focusing on responsive and visually engaging user interfaces",
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



// [
//   {
//     name: "HTML",
//     level: 80,
//     category: "frontend",
//     icon: SiHtml5,
//     iconColor: "text-blue-500",
//   },
//   { name: "CSS", level: 80, category: "frontend", icon: SiCss3, iconColor: "text-orange-600"},
//   { name: "JavaScript", level: 80, category: "frontend", icon: SiJavascript, iconColor: "text-yellow-300" },
//   {
//     name: "ReactJS",
//     level: 80,
//     category: "frontend",
//     icon: SiReact,
//     iconColor: "text-blue-400",
//   },
//   { name: "TailwindCSS", level: 80, category: "frontend", icon: SiTailwindcss, iconColor: "text-blue-600"},
//   { name: "GSAP", level: 80, category: "frontend", icon: IoFlowerOutline, iconColor: "text-green-500"},
//   {
//     name: "React Router",
//     level: 80,
//     category: "frontend",
//     icon: SiReactrouter, iconColor: "text-blue-400"
//   },

//   { name: "Node.js", level: 80, category: "backend", icon: TbBrandNodejs, iconColor: "text-lime-700"},
//   { name: "Express", level: 80, category: "backend", icon: TbBrandNodejs, iconColor: "text-yellow-300"},
//   { name: "MongoDB", level: 80, category: "backend", icon: SiMongodb, iconColor:  },
//   { name: "Mongoose", level: 80, category: "backend", icon: SiMongoose, iconColor:  },

//   { name: "Git/GitHub", level: 80, category: "tools", icon: SiGit, iconColor:  },
//   { name: "Vs Code", level: 80, category: "tools", icon: VscVscode, iconColor:  },
//   { name: "Figma", level: 90, category: "tools", icon: FaFigma, iconColor:  },
//   {
//     name: "CRUD Functionalities",
//     level: 90,
//     category: "tools",
//     icon: MdMobileFriendly,
//   },
// ];