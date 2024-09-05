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
  nextjs,
  unified_mentor,
  TEN,
  trainity,
  P,
  elearning,
  covidapp,
  weatherapp,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Designer",
    icon: creator,
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
    name: "Next JS",
    icon: nextjs,
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
];

const experiences = [
  {
    title: "Fullstack Web Developer (Internship)",
    company_name: "Trainty",
    icon: trainity,
    iconBg: "#48bf85",
    date: "August 2021 - October 2021",
    points: [
      "Developed fullstack web application using MERN stack.",
      "Worked on APIs using Express framework.",
      "Built front-end and back-end from scratch and deployed on internet",
    ],
  },
  {
    title: "React Development-Associate (Internship)",
    company_name: "The Entrepreneurship Network",
    icon: TEN,
    iconBg: "#0d0d0d",
    date: "September 2021 - November 2021",
    points: [
      "Developed web application and components using React.",
      "Wrote structured, tested, readable and maintainable code.",
      "Remained up-to-date with industry-standard technologies.",
    ],
  },

  {
    title: "Data Processing",
    company_name: "Precision IT Services",
    icon: P,
    iconBg: "#ffffff",
    date: "March 2024 - May 2024",
    points: [
      "Processed and analysed the graph of crude oil mining.",
      "Worked on TGS Workshop software and Excel.",
    ],
  },
  {
    title: "Fullstack Web Development Intern",
    company_name: "Unified Mentor",
    icon: unified_mentor,
    iconBg: "#071731",
    date: "September 2024 - Present",
    points: [
      "Designing and Developing web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
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
    name: "e-Learning Web App",
    description:
      "Front-end is developed in React and back-end is developed in ExpressJs and MongoDB. User can watch online tutorial by buying subscription. Only admin can create the courses and view the stats.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "chakra ui",
        color: "pink-text-gradient",
      },
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
    ],
    image: elearning,
    source_code_link: "https://e-learning-by-shantanu.vercel.app/",
  },
  {
    name: "Covid tracker",
    description:
      "Built using ReactJs and Firebase. We can check the live update of covid cases of any country. It shows map of the world red circle indicates the covid cases. We can check cases of single country or the world.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: covidapp,
    source_code_link: "https://covid-tracker-ten-puce.vercel.app/",
  },
  {
    name: "Weather App",
    description:
      "This application built using reactjs. We can check the current weather status. It has a search bar to search the weather of city or location. It also shows the next 7 days weather prediction.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: weatherapp,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
