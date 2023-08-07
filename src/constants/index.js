import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  salesqueen,
  dsys,
  CampHood,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "DSys inc.",
    icon: dsys,
    iconBg: "#383E56",
    date: "June 2023 - July 2023",
    points: [
      "Participated in comprehensive training sessions conducted by senior developers, gaining expertise in frontend technologies and tools",
      "Acquired hands-on experience in building web applications using ReactJS, Firebase, Redux, and Chakra UI",
      "Utilized Firebase to implement real-time database solutions, user authentication, and cloud functions",
      "Implemented Redux for efficient state management, ensuring centralized control of data flow across applications",
      "Demonstrated exceptional problem-solving skills and a strong commitment to continuous learning, proactively staying updated with the latest frontend trends, tools, and best practices to deliver cutting-edge solutions.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "SalesQueen Software Solution",
    icon: salesqueen,
    iconBg: "#383E56",
    date: "April 2023 - April 2023",
    points: [
      "Developing and maintaining web pages using javascript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "CampHood",
    description:
      "CampHood is a website for travellers. As we go somewhere their are many local places we are unable to locate. CampHood provides the details of such location.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDb",
        color: "pink-text-gradient",
      },
    ],
    image: CampHood,
    source_code_link: "https://github.com/Anindyaram/CampHood",
  },
];

export { services, technologies, experiences, testimonials, projects };
