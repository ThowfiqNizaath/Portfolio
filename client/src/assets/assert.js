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
    title: "Project Title 1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae accusantium non modi error voluptate voluptatibus libero repellat vel, laudantium iusto.",
    image: "/projects/image.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "https://book-my-show-delta-one.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Project Title 2",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae accusantium non modi error voluptate voluptatibus libero repellat vel, laudantium iusto.",
    image: "/projects/image.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "https://book-my-show-delta-one.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Project Title 3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae accusantium non modi error voluptate voluptatibus libero repellat vel, laudantium iusto.",
    image: "/projects/image.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "https://book-my-show-delta-one.vercel.app/",
    githubUrl: "#",
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