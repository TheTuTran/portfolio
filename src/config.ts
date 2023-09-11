export const CARDS = [
  {
    image:
      "https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1150&q=80",
    text: "About Me",
    destination: "about",
  },
  {
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BhY2V8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",

    text: "Tech Stack",
    destination: "tech",
  },
  {
    image:
      "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2V8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",

    text: "Projects",
    destination: "projects",
  },
  {
    image:
      "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",

    text: "Experience",
    destination: "experience",
  },
  {
    image:
      "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",

    text: "Contact Me",
    destination: "contact",
  },
];

type TechStackCategoriesType = {
  [key: string]: string[];
};

export const TECH_STACK_CATEGORIES: TechStackCategoriesType = {
  Languages: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "R",
    "HTML",
    "CSS",
  ],
  "Frontend Frameworks": ["React", "Vue.js"],
  "Backend Frameworks": ["Node.js"],
  "Frontend Libraries": ["jQuery", "TailwindCSS", "styled-components"],
  Database: [
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "MongoDB",
    "Redis",
    "Firebase",
    "Supabase",
    "PrismaDB",
  ],
  DevTools: ["AWS", "Google Cloud Platform"],
  Testing: ["Jest", "Mocha", "JUnit", "Cypress"],
};

type Project = {
  title: string;
  technology: string[];
  githubLink: string;
  demoLink: string;
  image: string;
  description: string;
};

export const PROJECTS: Project[] = [
  {
    title: "This Portfolio",
    technology: ["tech A1", "tech A2"],
    githubLink: "https://github.com/TheTuTran/portfolio",
    demoLink: "https://tran-portfolio.vercel.app/",
    image: "/portfolio.png",
    description: "some description",
  },
  {
    title: "Echo - Reddit Copy Cat",
    technology: ["tech B1", "tech B2"],
    githubLink: "https://github.com/TheTuTran/Echo",
    demoLink: "https://echo-tran.vercel.app/",
    image: "echo.png",
    description: "some description",
  },
  {
    title: "Gallery of Glosses",
    technology: ["tech B1", "tech B2"],
    githubLink: "https://github.com/TheTuTran/Gallery-of-Glosses",
    demoLink: "https://gallery-of-glosses.vercel.app/",
    image: "gog.png",
    description: "some description",
  },
  {
    title: "Spotify Clone",
    technology: ["tech B1", "tech B2"],
    githubLink: "https://github.com/TheTuTran/spotify-clone",
    demoLink: "https://tran-spotify-clone.vercel.app/",
    image: "spotify.png",
    description: "some description",
  },
  {
    title: "Ecommerce Admin",
    technology: ["tech B1", "tech B2"],
    githubLink: "https://github.com/TheTuTran/ecommerce-admin",
    demoLink: "https://demo.projectB.com",
    image: "/path/to/imageB.jpg",
    description: "some description",
  },
  {
    title: "Eccomerce Front",
    technology: ["tech B1", "tech B2"],
    githubLink: "https://github.com/TheTuTran/ecommerce-front",
    demoLink: "https://ecommerce-thetutran.vercel.app/",
    image: "/path/to/imageB.jpg",
    description: "some description",
  },
  {
    title: "Python Seeking Alpha Webscraper",
    technology: ["tech B1", "tech B2"],
    githubLink: "https://github.com/yourusername/projectB",
    demoLink: "https://demo.projectB.com",
    image: "/path/to/imageB.jpg",
    description: "some description",
  },
];

type ExperienceType = {
  [key: string]: string[];
};

export const EXPERIENCES: ExperienceType = {
  "Job A": [" Description A"],
  "Job B": ["Description B"],
};
