export const CARDS = [
  {
    image: "https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1150&q=80",
    text: "About Me",
    destination: "about",
  },
  {
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BhY2V8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",

    text: "Tech Stack",
    destination: "tech",
  },
  {
    image: "https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2V8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",

    text: "Projects",
    destination: "projects",
  },
  {
    image: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",

    text: "Experience",
    destination: "experience",
  },
  {
    image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",

    text: "Contact Me",
    destination: "contact",
  },
];

type AboutCategoriesType = {
  [key: string]: string[];
};

export const ABOUT_CATEGORIES: AboutCategoriesType = {
  "Hobbies & Interests": [],
  Education: [],
  Certificates: [],
  "Relevant Coursework": [],
};

type TechStackCategoriesType = {
  [key: string]: string[];
};

export const TECH_STACK_CATEGORIES: TechStackCategoriesType = {
  Languages: ["JavaScript", "TypeScript", "Python", "Java", "C++", "R", "HTML", "CSS"],
  "Frontend Frameworks": ["React", "Next.js", "Vue.js"],
  "UI/UX Libraries": ["jQuery", "TailwindCSS", "styled-components", "Bootstrap"],
  Database: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis", "Firebase", "Supabase", "PrismaDB", "PlanetScale"],
  DevTools: ["AWS", "Google Cloud Platform", "Vercel", "Netlify", "Docker"],
  "Version Control & Collaboration": ["GitHub", "GitLab"],
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
    technology: ["React", "TailwindCSS"],
    githubLink: "https://github.com/TheTuTran/portfolio",
    demoLink: "https://tran-portfolio.vercel.app/",
    image: "/portfolio.png",
    description: "A personal showcase of professional achievements, experiences, and technical projects, this portfolio offers a reflection of my both technical skills and design aesthetics.",
  },
];

export const OUTDATED_PROJECTS: Project[] = [
  {
    title: "Echo - Reddit Copy Cat",
    technology: ["React", "TailwindCSS", "PrismaDB", "PlanetScale", "MySQL"],
    githubLink: "https://github.com/TheTuTran/Echo",
    demoLink: "https://echo-tran.vercel.app/",
    image: "echo.png",
    description:
      "A community platform inspired by Reddit, Echo lets users post content, comment, and engage with others. Echo offers a simplified user experience focusing on content and community interactions.",
  },
  {
    title: "Gallery of Glosses",
    technology: ["React", "TypeScript", "Jest", "Cypress"],
    githubLink: "https://github.com/TheTuTran/Gallery-of-Glosses",
    demoLink: "https://gallery-of-glosses.vercel.app/",
    image: "gog.png",
    description:
      "A project created over the summer, Gallery of Glosses was one of my first web creation. Gallery of Glosses is a frontend site that showcases a variety of glosses fetched from an API.",
  },
  {
    title: "Spotify Clone",
    technology: ["React", "Stripe", "Supabase", "PostgreSQL"],
    githubLink: "https://github.com/TheTuTran/spotify-clone",
    demoLink: "https://tran-spotify-clone.vercel.app/",
    image: "spotify.png",
    description:
      "An audio streaming platform mimicking Spotify's core features. You can find a video demo on the github repo on how it works. The site might not be currently functioning because it requires me to actively interact with the Supabase backend. Users can explore, play, and upload their favorite tracks and playlists.",
  },
  {
    title: "Ecommerce Admin",
    technology: ["React", "JavaScript", "MongoDB", "TailwindCSS", "AWS"],
    githubLink: "https://github.com/TheTuTran/ecommerce-admin",
    demoLink: "",
    image: "ecommerce_admin.png",
    description:
      "A backend dashboard designed for e-commerce businesses. It facilitates product management and order tracking. The products are uploaded to a mongoDB database with the images being stored in an AWS bucket. A video demo should be posted on how it works. There isn't a live demo because it only works if the user signed in is using my account.",
  },
  {
    title: "Ecommerce Front",
    technology: ["React", "JavaScript", "Stripe", "styled-components"],
    githubLink: "https://github.com/TheTuTran/ecommerce-front",
    demoLink: "https://ecommerce-thetutran.vercel.app/",
    image: "ecommerce_front.png",
    description:
      "The frontend page for the e-commerce admin dashboard. It's a simple website where users can browse products and make purchases seamlessly. It is currently on testing mode for stripe, so payments will not go through.",
  },
  {
    title: "Python Seeking Alpha Webscraper",
    technology: ["Python"],
    githubLink: "https://github.com/TheTuTran/Simple-Python-Apps/tree/main/scrapers",
    demoLink: "",
    image: "scrapper.png",
    description:
      "A simple webscraper developed in Python, designed to extract news data from the Seeking Alpha platform. It takes the extracted data, and with the help of replit, this code creates a 24/7 discord bot that posts this data to channels. The live demo is a discord link that users where users can see the discord bot in action.",
  },
];

type Job = {
  title: string;
  startDate: string;
  endDate: string;
  description: string[];
  location: string;
};

export const EXPERIENCES: Job[] = [
  {
    title: "Wash Attendant",
    startDate: "August 2019",
    endDate: "May 2023",
    description: [
      "Managed operational procedures to ensure efficient service, similar to optimizing productivity in coding.",
      "Trained staff in best practices, akin to guiding a team and working in a team environment.",
      "Handled problematic situations independently, highlighting problem-solving skills often needed in software development.",
    ],
    location: "Saint Louis, MO",
  },
  {
    title: "OSS Student Worker",
    startDate: "May 2023",
    endDate: "August 2023",
    description: [
      "Contributed to an open-source project, demonstrating software development skills in frontend design.",
      "Resolved technical challenges to enhance code efficiency and performance.",
      "Added new features to improve software functionality and user experience.",
    ],
    location: "Saint Louis, MO",
  },
];
