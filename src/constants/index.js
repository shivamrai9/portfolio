import {
  react,
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
  lmv,
  meta,
  tesla,
  shopify,
  carrent,
  ecommerceapp,
  quizApp,
  cardlisting,
  dribble,
  blog,
  threejs,
  photoshop,
  todoapp,
  tailwindcss
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
    title: "MERN STACK",
    icon: web,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "FrontEnd Developer",
    icon: creator,
  },
  {
    title: "Tailwind Css",
    icon: tailwindcss,
  },
  {
    title: "PhotoShop Expert",
    icon: photoshop,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
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
    title: "React.js Developer",
    company_name: "LMV IT Solutions",
    icon: lmv,
    iconBg: "#FFFFFF",
    date: "August 2023 - October 2024",
    points: [
      "Developing dynamic and responsive UI components using React.js for modern web applications.",
      "Integrating APIs to ensure seamless data flow and efficient communication between the frontend and backend systems.",
      "Implementing state management solutions with Redux to handle complex application states.",
      "Building reusable components and forms using Bootstrap and Material UI for consistent and visually appealing designs.",
      "Collaborating closely with designers and backend developers to deliver feature-rich and user-friendly interfaces.",
      "Ensuring code quality through best practices, debugging, and maintaining a scalable codebase."
    ],
    project: {
      name: "Insurance Purchasing Platform",
      description:
        "A comprehensive platform that enables users to compare and purchase insurance policies from multiple companies such as HDFC, Go Digit, and Bajaj. The application streamlines the insurance selection process, allowing users to explore various plans, calculate premiums, and complete purchases seamlessly.",
      key_features: [
        "Implemented user-friendly interfaces for browsing and comparing insurance plans.",
        "Integrated REST APIs for fetching insurance data and handling policy transactions in real-time.",
        "Developed interactive forms and validation systems for capturing user inputs efficiently.",
        "Used Material UI and Bootstrap for creating responsive and visually consistent components.",
        "Facilitated secure payment gateways and policy confirmation workflows."
      ],
      technologies: ["React.js", "Redux", "Bootstrap", "Material UI", "REST APIs"]
    }
  }
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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

// const projects = [
//   {
//     name: "Car Rent",
//     description:
//       "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "mongodb",
//         color: "green-text-gradient",
//       },
//       {
//         name: "tailwind",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: carrent,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Job IT",
//     description:
//       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
//     tags: [
//       {
//         name: "react",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "restapi",
//         color: "green-text-gradient",
//       },
//       {
//         name: "scss",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: jobit,
//     source_code_link: "https://github.com/",
//   },
//   {
//     name: "Trip Guide",
//     description:
//       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
//     tags: [
//       {
//         name: "nextjs",
//         color: "blue-text-gradient",
//       },
//       {
//         name: "supabase",
//         color: "green-text-gradient",
//       },
//       {
//         name: "css",
//         color: "pink-text-gradient",
//       },
//     ],
//     image: tripguide,
//     source_code_link: "https://github.com/",
//   },
// ];

const projects = [
  {
    name: "E-commerce Application",
    description:
      "A full-featured MERN stack e-commerce platform with an admin panel, secure payments, and cloud deployment.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "redux-toolkit", color: "green-text-gradient" },
      { name: "tailwind-css", color: "pink-text-gradient" },
      { name: "node js", color: "yellow-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
    ],
    image: ecommerceapp,
    live_url: "https://e-commerce-server-oivh.onrender.com",
    source_code_link: "https://github.com/shivamrai9/Ecommerce_frontend",
    features: [
      "Product listing, details, cart, and checkout.",
      "Admin panel for managing orders and products.",
      "Sorting, filtering, and pagination with Mongoose.",
      "Secure card payments with Stripe and cash payments.",
      "Email notifications for orders and password resets.",
    ],
    tech_stack: [
      "React 18",
      "Redux Toolkit",
      "Express",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Stripe",
      "Nodemailer",
    ],
  },
  {
    name: "Todo Application",
    description:
      "A feature-rich Todo application built with Next.js, offering authentication-based functionality and a dynamic user experience.",
    tags: [
      { name: "next.js", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "tailwind-css", color: "pink-text-gradient" },
      { name: "kinde-auth", color: "purple-text-gradient" },
      { name: "reusable-components", color: "yellow-text-gradient" },
    ],
    image: todoapp, 
    live_url: "https://todo-app-next-js-beta.vercel.app/",
    source_code_link: "https://github.com/shivamrai9/todo_app_next_js",
    features: [
      "Add todo items with a limit of 3 for unauthenticated users.",
      "Sign-in authentication via Kinde Auth for enhanced features.",
      "Dynamically render todos based on user authentication state.",
      "Reusable and modular components for scalability.",
      "Robust type safety and maintainability with TypeScript.",
    ],
    tech_stack: [
      "rect.js",
      "TypeScript",
      "Tailwind CSS",
      "Kinde Auth",
      "React Context API",
      "Reusable Components",
    ],
  },
  {
    name: "Developer Blog Application",
    description:
      "A developer-centric MERN stack blog application featuring Google authentication,admin panel,CRUD operations, profile management,comments,like etc.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node js", color: "yellow-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "firebase", color: "orange-text-gradient" },
      { name: "google-auth", color: "red-text-gradient" },
    ],
    image: blog,
    live_url: "https://developerblog-site.onrender.com",
    source_code_link: "https://github.com/shivamrai9/developerblog-site",
    features: [
      "Google authentication using Firebase for secure login.",
      "Admin panel with full CRUD functionality for blogs.",
      "User profile creation and updates.",
      "Commenting system for user engagement on posts.",
      "Responsive UI tailored for developers.",
    ],
    tech_stack: [
      "React 18",
      "Express",
      "MongoDB",
      "Firebase",
      "Node.js",
      "Mongoose",
      "Google Authentication",
      "Tailwind CSS",
    ],
  },
  {
    name: "Quiz App",
    description:
      "An interactive quiz application with dynamic question sets and MongoDB-powered backend.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "nodejs", color: "yellow-text-gradient" },
    ],
    image: quizApp,
    live_url: "https://quiz-app-client-tau.vercel.app/",
    source_code_link: "https://github.com/shivamrai9/Quiz-app-client",
    features: [
      "Dynamic quizzes with multiple categories.",
      "Secure and scalable backend using MongoDB.",
      "Real-time data processing and user management.",
    ],
    tech_stack: ["React", "CSS", "MongoDB", "Node.js"],
  },
  {
    name: "Dynamic Card App",
    description:
      "A simple UI project for practicing Redux Toolkit, featuring card list display with pagination in React.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "redux-toolkit", color: "green-text-gradient" },
      { name: "tailwind css", color: "pink-text-gradient" },
    ],
    image: cardlisting, // Replace with the appropriate image variable
    live_url: "https://dynamic-card-app.vercel.app/",
    source_code_link: "https://github.com/shivamrai9/dynamic-card-app",
    features: [
      "Dynamic card rendering in a list format.",
      "Pagination for managing large data sets.",
      "State management handled with Redux Toolkit.",
    ],
    tech_stack: ["React", "Redux Toolkit", "CSS"],
  },
  {
    name: "Dribble Clone",
    description:
      "A Dribble-inspired clone with profile creation, image uploads, and JWT-based authentication.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "yellow-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "cloudinary", color: "pink-text-gradient" },
    ],
    image: dribble, // Replace with the appropriate image variable
    live_url: "https://dribbleapp.vercel.app/",
    source_code_link: "https://github.com/shivamrai9/dribbleapp",
    features: [
      "User authentication using JWT.",
      "Profile creation and management upon login.",
      "Image uploads powered by Cloudinary.",
      "Forms handled with React Hook Form.",
      "REST API built with Node.js and Express.",
    ],
    tech_stack: ["React", "Node.js", "MongoDB", "Cloudinary", "React Hook Form", "Express"],
  },
];


export { services, technologies, experiences, testimonials, projects };