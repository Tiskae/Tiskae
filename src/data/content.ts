import type { Skill, Experience, Project, SocialLink, NavTab } from "@/types";

// ─── Header carousel + Skills section (same list) ────────────────────────────
export const skills: Skill[] = [
  { name: "Next.js", iconId: "icon-nextjs" },
  { name: "React.js", iconId: "icon-react" },
  { name: "TypeScript", iconId: "icon-typescript" },
  { name: "JavaScript", iconId: "icon-javascript" },
  { name: "SASS/SCSS", iconId: "icon-sass" },
  { name: "TailwindCSS", iconId: "icon-tailwindcss" },
  { name: "React Native", iconId: "icon-react" },
  { name: "Node.js", iconId: "icon-node-dot-js" },
  { name: "Golang", iconId: "icon-golang" },
  { name: "PostgreSQL", iconId: "icon-postgresql" },
  { name: "MongoDB", iconId: "icon-mongodb" },
  { name: "HTML5", iconId: "icon-html5" },
  // { name: "CSS3", iconId: "icon-css3" },
  // { name: "Redux", iconId: "icon-redux" },
  // { name: "Git", iconId: "icon-git" },
];

// Alias — header carousel uses the same list
export const headerSkills = skills;

// ─── Social links ─────────────────────────────────────────────────────────────
export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/tiskae",
    iconId: "icon-github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tiskae",
    iconId: "icon-linkedin",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/Tiskae1",
    iconId: "icon-twitter",
  },
  {
    label: "Email",
    href: "mailto:adedokuntobiloba100@gmail.com",
    iconId: "icon-gmail",
  },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=2349120448767",
    iconId: "icon-whatsapp",
  },
];

// ─── Navigation tabs ──────────────────────────────────────────────────────────
export const navTabs: NavTab[] = [
  { label: "Intro", sectionId: "intro" },
  { label: "Skills", sectionId: "skills" },
  { label: "Experience", sectionId: "experience" },
  { label: "Projects", sectionId: "projects" },
  { label: "Footer", sectionId: "footer" },
];

// ─── Work experience ──────────────────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    company: "iHealth and Wellness Foundation",
    companyWebsite: "https://www.ihealthwellness.org",
    role: "Volunteer Frontend Engineer",
    duration: "OCT. 2025 - DEC. 2025",
    logoSrc: "/img/iHealth-logo.png",
    logoAlt: "iHealth and Wellness Foundation logo",
    details: [
      "Revamped and refactored 10 pages and 54 React components to use a new and improved UI design system and CSS Modules, improving code quality and scalability.",
      "Built 6 new mobile-responsive React pages from Figma designs and wireframes to support the company's humanitarian mission.",
    ],
  },
  {
    company: "FitSit",
    companyWebsite: "https://fitsit.io",
    role: "Founding Frontend Engineer",
    duration: "DEC. 2021 - AUG 2024",
    logoSrc: "/img/fitsit-logo.svg",
    logoAlt: "FitSit logo",
    details: [
      "Led frontend development using React and SASS, implementing authentication, security, translation, socket connection and state management with Redux. Improved user experience by overhauling >90% of the UI/UX codebase for reliability and cross-browser consistency.",
      "Coordinated effectively with backend, cloud, and design teams within an AGILE methodology while working fully remote.",
      "Spearheaded enhancements to the frontend codebase at FitSit, tuning every other aspect of frontend development to improve the speed and overall functionality of the website.",
    ],
  },
  {
    company: "Entre",
    companyWebsite: "https://joinentre.com/learning/blog",
    role: "Frontend Engineer",
    duration: "JUL. 2022 - NOV. 2022",
    logoSrc: "/img/entre-logo.avif",
    logoAlt: "Entre logo",
    details: [
      "Developed a high-performing blog using Next.js framework, leveraging SEO best practices to achieve top Google search ranking and increase organic reach.",
      "Collaborated closely with cross-functional teams (product managers, designers, software engineers) to enhance platform functionality and user experience while performing code review and pair programming.",
      "Troubleshot UI and technical issues and implemented new designs resulting in seamless platform performance.",
    ],
  },
  {
    company: "HNG Internships",
    companyWebsite: "https://internship.zuri.team/",
    role: "React Engineer Intern",
    duration: "AUG. 2021 - SEPT. 2021",
    logoSrc: "/img/hng-logo.jpeg",
    logoAlt: "HNG Internships logo",
    details: [
      "Teamed up with other interns to develop a communication app just like Slack. I made technical decisions of design structure, user stories, workflows and developed components using React and CSS modules.",
      "Improved my teamwork ability and accomplished working with developers from other tracks - UI/UX, Backend and DevOps.",
    ],
  },
  {
    company: "Digital Dada",
    companyWebsite: "https://digital-dada.com/",
    role: "Frontend Engineer Intern",
    duration: "JAN. 2021 - SEPT. 2021",
    logoSrc: "/img/digital-dada-logo.jpeg",
    logoAlt: "Digital Dada logo",
    details: [
      "Developed various websites for company's clients.",
      "Fixed design and application bugs from the Q and A teams to improve design and performance and satisfy the client's need.",
      "Accomplished better code quality under the supervision and mentoring of senior developers.",
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects_old: Project[] = [
  {
    title: "Car Games",
    description:
      "A fullstack car games mobile application built with React Native. The app features authentication, stack and tab navigations and players leaderboard.",
    note: "Still in development...",
    imageSrc: "/img/car-games.png",
    imageAlt: "Car games",
    imageContain: true,
    githubUrl: "https://github.com/Tiskae/car-games",
    tags: ["React Native", "React Navigation", "MobX", "Node.js"],
  },
  {
    title: "Sudocool",
    description:
      "Sudocool is a web application that gives random difficulty-based Sudoku puzzles for you to solve. It implements all rules of Sudoku. Additionally, it can solve any valid Sudoku puzzle instantly using the backtracking algorithm.",
    imageSrc: "/img/sudocool.png",
    imageAlt: "Sudocool project preview",
    githubUrl: "https://github.com/Tiskae/sudocool",
    liveUrl: "https://sudocool.netlify.app",
    tags: ["React", "Redux", "Routing", "CSS"],
  },
  {
    title: "Quizzaly",
    description:
      "Quizzaly is a quiz app built using React.js and Firebase as the Realtime Database. The app features quite a lot of tracks and allows for difficulty, mode of options and number of questions preferences.",
    imageSrc: "/img/quizzaly.png",
    imageAlt: "Quizzaly project preview",
    githubUrl: "https://github.com/Tiskae/quizzaly",
    liveUrl: "https://quizzaly.netlify.app",
    tags: ["React", "Routing", "Firebase", "CSS"],
  },
  {
    title: "CGPA Calculator",
    description:
      "A CGPA calculator that helps students calculate their CGPA easily in a simple and user-friendly experience. Built using the MVC JavaScript architecture and styled using SCSS.",
    imageSrc: "/img/cgpa-dark.png",
    imageAlt: "CGPA Calculator project preview",
    githubUrl: "https://github.com/Tiskae/cgpa-calculator",
    liveUrl: "https://calc-cgpa.netlify.app",
    tags: ["HTML", "SASS", "JavaScript", "MVC"],
  },
  {
    title: "Infinix Zero 8",
    description:
      "A landing page for the mid-range phone from InfinixMobility, the Zero 8. It's a single-paged website showing all the features of the mobile phone in a cool and nice user experience. Subtle animations are noticeable.",
    imageSrc: "/img/zero8.jpg",
    imageAlt: "Infinix Zero 8 project preview",
    githubUrl: "https://github.com/Tiskae/zero8",
    liveUrl: "https://zero8.netlify.app",
    tags: ["HTML", "CSS", "SASS", "JavaScript"],
  },
  {
    title: "Sunnyside Landing Page",
    description:
      "A challenge by Frontend Mentor to code up a simple fully responsive landing page. The design was neat and pixel perfect.",
    imageSrc: "/img/sunny-side.netlify.app_.png",
    imageAlt: "Sunnyside landing page project preview",
    githubUrl: "https://github.com/Tiskae/Sunnyside",
    liveUrl: "https://sunny-side.netlify.app",
    tags: ["HTML", "CSS", "SASS", "JavaScript"],
  },
];

export const projects: Project[] = [
  {
    title: "Meridian Motors",
    description:
      "Meridian Motors is a small Lagos showroom curating new and foreign-used luxury cars including Mercedes-Benz, Toyota Land Cruiser, Lexus, BMW. Inspected, documented, and presented properly.",
    note: "Still in development...",
    imageSrc: "/img/meridian/coming-soon.png",
    // images: [],
    imageAlt: "Meridian Motors project preview",
    imageContain: true,
    liveUrl: undefined,
    githubUrl: undefined,
    tags: ["Next.js", "Zustand", "Sanity CMS", "SASS"],
  },
  {
    title: "FitSit",
    description:
      "FitSit is a web application that helps you create a habit of a healthy posture. FitSit offers short practices when your upper body is monitored by your webcam (as if you’re on a video call).",
    imageSrc: "/img/fitsit/pricing.png",
    images: [
      "/img/fitsit/pricing.png",
      "/img/fitsit/hero.png",
      "/img/fitsit/discover.png",
      "/img/fitsit/our-product.png",
      "/img/fitsit/faqs.png",
      "/img/fitsit/business.png",
    ],
    imageAlt: "FitSit project preview",
    githubUrl: undefined,
    liveUrl: "https://sudocool.netlify.app",
    tags: ["React", "Redux", "Node.js", "CSS"],
  },
  {
    title: "Entre Blog",
    description:
      "Entre Blog is a high-performing blog built using Next.js framework, leveraging SEO best practices to achieve top Google search ranking and increase organic reach.",
    imageSrc: "/img/entre/blog.png",
    images: [
      "/img/entre/blog.png",
      "/img/entre/blog-details.png",
      "/img/entre/blog-body.png",
      "/img/entre/blog-details-mobile.png",
    ],
    imageAlt: "Entre Blog project preview",
    githubUrl: undefined,
    liveUrl: "https://quizzaly.netlify.app",
    tags: ["Next.js", "TypeScript", "Contentful CMS", "SASS"],
  },
  {
    title: "iHealth and Wellness Foundation",
    description:
      "iHealth and Wellness Foundation is non-profit organization dedicated to improving the quality of life for individuals living with complex and rare diseases.",
    imageSrc: "/img/ihealth/nf-hub.png",
    images: [
      "/img/ihealth/nf-hub.png",
      "/img/ihealth/resource-center.png",
      "/img/ihealth/resource-center-mobile.png",
      "/img/ihealth/hero.png",
      "/img/ihealth/research.png",
    ],
    imageAlt: "iHealth and Wellness Foundation project preview",
    githubUrl: undefined,
    liveUrl: "https://zero8.netlify.app",
    tags: ["React.js", "CSS", "Redux", "Git Submodules"],
  },
  {
    title: "Unimind Kidz",
    description:
      "Unimind Kidz is an educational platform designed to provide children with engaging and interactive learning experiences. The platform offers a wide range of content.",
    imageSrc: "/img/unimindkidz/hero.png",
    images: [
      "/img/unimindkidz/hero.png",
      "/img/unimindkidz/activity.png",
      "/img/unimindkidz/kindness.png",
      "/img/unimindkidz/monster-chef.png",
      "/img/unimindkidz/for-parents.png",
    ],
    imageAlt: "Unimind Kidz project preview",
    githubUrl: undefined,
    liveUrl: "https://calc-cgpa.netlify.app",
    tags: ["Next.js", "SASS", "PostgreSQL", "Redis"],
  },
  {
    title: "Quizzaly",
    description:
      "Quizzaly is a quiz application designed to give users a fun, customizable challenge with multiple tracks, difficulty levels, and question modes. The goal was to make quizzes feel dynamic, interactive, and easy to personalize.",
    imageSrc: "/img/quizzaly/plethora.png",
    images: [
      "/img/quizzaly/plethora.png",
      "/img/quizzaly/welcome.png",
      "/img/quizzaly/preferences.png",
      "/img/quizzaly/leaderboard.png",
      "/img/quizzaly/preference-mobile.png",
    ],
    imageAlt: "Quizzaly project preview",
    githubUrl: "https://github.com/Tiskae/quizzaly",
    liveUrl: "https://quizzaly.netlify.app",
    tags: ["React", "React-Router", "Firebase", "CSS"],
  },
];
