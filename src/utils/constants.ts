import type {
  ContactProps,
  JobProps,
  ProjectProps,
  SkillGroup,
  ForrestLayerProps,
} from "./types";

export const PATHS = {
  home: "/",
  projects: "/projects/",
  about: "/about/",
  mailto: "mailto:jaypancholi94@gmail.com",
  github: "https://github.com/jaypancholi94",
  linkedin: "https://www.linkedin.com/in/jay-pancholi/",
  phone: "tel:+61(0)450691794",
  instagram: "https://www.instagram.com/_jaypancholi_/",
  facebook: "https://www.facebook.com/Jay.D.Pancholi/",
};

export const COMPANY_PATHS = {
  tac: "https://howsafeisyourcar.com.au/",
  solstice: "https://www.solsticeenergy.com.au/",
  makeawish: "https://www.makeawish.org.au/",
  vicinity: "https://www.vicinity.com.au/",
  amplar: "https://virtualpsychology.amplarhealth.com.au/",
  nandos: "https://www.nandos.com.au/",
  inlight: "https://www.inlight.com.au/",
  "my-little-tag": "https://mylittletag.com/",
  whitefox: "https://www.whitefoxrealestate.com.au/",
  swinburne: "https://swinburne.edu.au",
};

export const DOCK_ICONS = [
  {
    path: PATHS.home,
    bgColor: "bg-purple",
    className: "hover:bg-purple animate-icon-load opacity-0",
    tooltip: "Home",
    icon: "House",
    type: "icon",
    isExternalLink: false,
    animationDelay: "300ms",
  },
  {
    path: PATHS.projects,
    bgColor: "bg-orange-400",
    className: "hover:bg-orange-400 animate-icon-load opacity-0",
    tooltip: "Project",
    icon: "BriefcaseBusiness",
    type: "icon",
    isExternalLink: false,
    animationDelay: "350ms",
  },
  {
    path: PATHS.about,
    bgColor: "bg-blue-700",
    className: "hover:bg-blue-700 animate-icon-load opacity-0",
    tooltip: "About",
    icon: "CircleUserRound",
    type: "icon",
    isExternalLink: false,
    animationDelay: "400ms",
  },
  {
    type: "divider",
    className: "hidden md:block h-6 w-[2px] animate-icon-load opacity-0",
  },
  {
    path: PATHS.mailto,
    bgColor: "bg-red-500",
    className: "hover:bg-red-500 hidden md:block animate-icon-load opacity-0",
    tooltip: "jaypancholi94@gmail.com",
    icon: "Mail",
    type: "icon",
    isExternalLink: true,
    animationDelay: "450ms",
  },
  {
    path: PATHS.linkedin,
    bgColor: "bg-linkedin",
    className: "hover:bg-linkedin hidden md:block animate-icon-load opacity-0",
    tooltip: "Linkedin",
    icon: "Linkedin",
    type: "icon",
    isExternalLink: true,
    animationDelay: "500ms",
  },
  {
    path: PATHS.github,
    bgColor: "bg-github",
    className: "hover:bg-github hidden md:block animate-icon-load opacity-0",
    tooltip: "Github",
    icon: "Github",
    type: "icon",
    isExternalLink: true,
    animationDelay: "550ms",
  },
];

export const JOBS: JobProps[] = [
  {
    company: "inlight",
    website: COMPANY_PATHS.inlight,
    role: "Full Stack Developer",
    linkHoverColor: "hover:!bg-inlight",
    duration: "2021 - Current",
    description: {
      overview:
        "Worked closely with Inlight team using agile methodology to deliver high-quality solutions to clients. Proficient in front-end and back-end development, CMS management, UI/UX enhancements, and ensuring accessibility standards. Experienced in writing thorough documentation, conducting tests, and maintaining robust systems across various projects",
      responsibilities: [
        {
          title: "Transport Accident Commission (TAC) - How Safe Is Your Car",
          highlights: [
            "Built front-end search functionality, filters, and ANCAP page using TypeScript and Next.js",
            "Developed unit tests and Cypress tests to ensure reliability and robustness",
            "Ensured full accessibility of components and pages to meet AAA standards",
          ],
        },
        {
          title: "Solstice Energy",
          highlights: [
            " Designed and developed components in Vanilla Extract for Sanity CMS",
            "Connected form input fields to React Hook Form for efficient data handling",
            "Created a custom multi-file upload feature, integrating with Resend service to email files.",
            "Configured CMS and maintained the front-end using TypeScript.",
          ],
        },
        {
          title: "Make a Wish",
          highlights: [
            "Revamped UI components in Twig, giving a fresh look to the Make-A-Wish website",
            "Added new filter fields to Craft CMS to enhance content management capabilities.",
            "Assisted in managing, maintaining and deploying the donation form built in React as npm package, ensuring version and stability.",
          ],
        },
        {
          title: "Amplar Health",
          highlights: [
            "Managed and maintained systems for psychologists using a Next.js and TypeScript codebase, ensuring operational efficiency and prompt issue resolution.",
            "Provided client support, addressing needs and maintaining clear communication.",
            "Conducted regression testing after system updates to ensure continued functionality and stability.",
            "Handled regular deployments using Vercel, ensuring consistent and reliable application delivery.",
          ],
        },
        {
          title: "Vicinity",
          highlights: [
            "Enhanced UI/UX by implementing front-end tweaks using React and Storyblok CMS",
            "Developed a custom plugin in Vite.js for Storyblok to automate promotions based on date and time logic",
            "Wrote a Python script to bulk modify/remove unused fields in the mall database",
          ],
        },
        {
          title: "Nando’s AU & NZ",
          highlights: [
            "Led a comprehensive UI overhaul for Nando's Australia and New Zealand websites",
            "Implemented Framer Motion animations to enhance basting user experience Utilised LaunchDarkly feature toggles to efficiently manage test components",
            "Regularly updated and maintained promotional free delivery offers",
          ],
        },
      ],
    },
  },
  {
    company: "Zash Ventures",
    role: "Full Stack Developer",
    duration: "2021 - 2022",
    description: {
      responsibilities: [
        {
          highlights: [
            "Designed the system architecture for Veztr.",
            "Worked on the Veztr App to bridge the gap between investors and startups using agile methodology.",
            "Built APIs using Node.js and Express.js, with Sequelize for MySQL database management.",
          ],
        },
      ],
    },
  },
  {
    company: "C2 Capital",
    role: "WordPress Developer",
    duration: "2020 - 2021",
    description: {
      responsibilities: [
        {
          highlights: [
            "Developed an online LMS app using PHP, Node, React, and WordPress.",
            "Designed a Node (Express) API to handle requests and filters efficiently.",
            "Integrated Stripe as a payment gateway for seamless transactions.",
            "Implemented core logic using an OOP-based PHP approach.",
            "Designed and developed three websites, enhancing online presence and functionality.",
            "API is build in Node.js and applied auth0 for security",
            "Provided help in design, development and code maintenance.",
          ],
        },
      ],
    },
  },
];

export const FREELANCE_PROJECTS: JobProps[] = [
  {
    company: "Whitefox",
    website: COMPANY_PATHS.whitefox,
    role: "Full Stack Developer",
    duration: "2021 - 2021",
    linkHoverColor: "hover:!bg-white hover:!text-whitefox",
    description: {
      responsibilities: [
        {
          highlights: [
            "Developed a WordPress form for a real estate company to streamline the collection of client information",
            "Included payment options and quotation features within the form to enhance functionality",
            "Implemented PHPMailer to send SMTP emails to WhiteFox agents",
          ],
        },
      ],
    },
  },

  {
    company: "My Little Tag",
    website: COMPANY_PATHS["my-little-tag"],
    role: "Full Stack Developer",
    duration: "2019 - 2020",
    linkHoverColor: "hover:!bg-mylittletag",
    description: {
      responsibilities: [
        {
          highlights: [
            "Developed a lost and found website that generates unique QR codes for customers, AirTag was introduced",
            "Facilitated the connection between item finders and owners by allowing QR code scans to provide owner contact information",
            "Implemented a custom payment gateway for seamless transactions.",
            "Enhanced the lost and found process, ensuring easy and efficient item recovery for users",
          ],
        },
      ],
    },
  },
];

export const PROJECTS: ProjectProps[] = [
  {
    name: "Nobel Prize Search",
    preview: "https://nobel-prize-search.vercel.app/",
    github: "https://github.com/jaypancholi94/nobel-prize-search",
    highlights: [
      "Developed an application that updates data in real-time upon text field changes, ensuring the most current information is displayed. Implemented quality search ranking to display the most relevant results at the top",
      "Utilized useEffect for debouncing input in text fields, reducing unnecessary API calls and enhancing performance. Implemented pagination for efficient data management, allowing users to navigate large data sets easily",
      "Integrated Fuse.js for fuzzy search functionality with customizable parameters. Ensured a fully responsive design using Tailwind CSS, and utilized Shadcn.ui for accessible UI components. Implemented shareable URLs for easy query sharing and fetched up-to-date Nobel Prize data from the Nobel Prize API",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Fuse.js",
      "Shadcn.ui",
    ],
  },
  {
    name: "Robot Simmulation",
    preview: "https://robot-simulator-bellroy.vercel.app/",
    github: "https://github.com/jaypancholi94/robot-simulator",
    highlights: [
      "A web application for simulating a robot on a 5x5 grid, built with React, TypeScript, and Tailwind CSS. The application features intuitive controls for moving and rotating the robot, with a clean, minimalistic design inspired by Bellroy.",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    name: "Overlapping Rectangles",
    preview: "https://overlapping-rectangle.vercel.app/",
    github: "https://github.com/jaypancholi94/overlapping-rectangle",
    highlights: [
      "Developed a function in TypeScript to determine if two rectangles overlap based on their top, bottom, left, and right coordinates, enhancing problem-solving skills and algorithmic thinking.",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    name: "SkipTheSearch",
    preview: "https://skip-the-search.vercel.app/",
    github: "https://github.com/jaypancholi94/SkipTheSearch",
    highlights: [
      "Created a comprehensive repository to consolidate all my learnings from various tools and packages",
      "Designed to solve the problem of recalling past internet resources quickly and efficiently for developers",
      "Built using VitePress.js and Obsidian, and hosted on Vercel for easy access",
    ],
    techStack: ["TypeScript", "VitePress", "Vercel"],
  },
  {
    name: "Ticket Management System API",
    github: "https://github.com/jaypancholi94/Ticket-Management-System-API",
    highlights: [
      "Developed as a beginner to understand authentication and API mechanisms",
      "Built the API using Node.js and Express, with Sequelize for database management",
      "Implemented JSON Web Token (JWT) for authentication and middleware setup",
      "Enabled basic functionalities such as user creation, ticket creation, updating, and deletion",
    ],
    techStack: [
      "JavaScript",
      "Node.js",
      "Express",
      "Sequelize",
      "JWT",
      "bcrypt",
      "mysql2",
    ],
  },
  {
    name: "2048",
    preview: "https://2048-the-game.vercel.app/",
    github: "https://github.com/jaypancholi94/2048",
    highlights: [
      "Developed a replica of the 2048 game using React and Redux to learn and understand efficient state management",
      "Implemented matrix transpose methods to build the core logic of the game, making the development process engaging and educational",
      "Explored the Material-UI design library to enhance the user interface",
      "Enabled functionality allowing players to select game layouts ranging from 2x2 to 8x8 matrices.",
    ],
    techStack: ["React", "Redux", "Material-UI", "Vercel"],
  },
];

export const CONTACTS: ContactProps[] = [
  {
    iconName: "Mail",
    title: "jaypancholi94@gmail.com",
    hoverColor: "hover:!bg-red-500",
    href: PATHS.mailto,
  },
  {
    iconName: "Smartphone",
    title: "+61 (0) 450 691 794",
    hoverColor: "hover:!bg-smartphone",
    href: PATHS.phone,
  },
  {
    iconName: "Linkedin",
    title: "@jay-pancholi",
    hoverColor: "hover:!bg-linkedin",
    href: PATHS.linkedin,
  },
  {
    iconName: "Github",
    title: "@jaypancholi94",
    hoverColor: "hover:!bg-github",
    href: PATHS.github,
  },
  {
    iconName: "Instagram",
    title: "@_jaypancholi_",
    hoverColor: "hover:!bg-instagram",
    href: PATHS.instagram,
  },
  {
    iconName: "Facebook",
    title: "@Jay.D.Pancholi",
    hoverColor: "hover:!bg-facebook",
    href: PATHS.facebook,
  },
];

export const SKILLS: SkillGroup[] = [
  {
    name: "Front End",
    categories: [
      {
        tooltip: "JavaScript Frameworks",
        skills: ["TypeScript", "React", "Next.js", "Astro", "React Native"],
      },
      {
        tooltip: "UI",
        skills: ["StoryBook"],
      },
      {
        tooltip: "Testing",
        skills: ["Unit Testing", "Jest", "Vitest", "Cypress"],
      },
      {
        tooltip: "Style",
        skills: ["Tailwind", "Vanilla Extract", "MUI", "Styled System", "CSS"],
      },
      {
        tooltip: "State Management",
        skills: ["Mobx", "Redux", "React Context"],
      },
    ],
  },
  {
    name: "Back End",
    categories: [
      {
        tooltip: "Node Framework",
        skills: ["Express.js"],
      },
      { tooltip: "Languages", skills: ["PHP", "JAVA"] },
      {
        tooltip: "CMS",
        skills: ["Sanity", "WordPress", "Craft"],
      },
      {
        tooltip: "Databases",
        skills: ["SQL", "MongoDB"],
      },
    ],
  },
  {
    name: "DevOps",
    categories: [
      {
        tooltip: "CI/CD",
        skills: ["Vercel", "GitHub Actions"],
      },
      {
        tooltip: "Version Control",
        skills: ["Git"],
      },
    ],
  },
  {
    name: "Tools",
    categories: [
      {
        tooltip: "Design",
        skills: ["Figma"],
      },
      {
        tooltip: "Project Management",
        skills: ["Jira", "ClickUp", "Trello"],
      },
      {
        tooltip: "IDE",
        skills: ["nvim", "VS Code", "Submlime"],
      },
    ],
  },
];

export const SOFTWARE_OF_CHOICE = "";

export const FOREST_LAYERS: ForrestLayerProps[] = [
  { bgForestLayer: "bg-forest-layer-0", delay: "0ms" },
  { bgForestLayer: "bg-forest-layer-1", delay: "100ms" },
  { bgForestLayer: "bg-forest-layer-2", delay: "200ms" },
  { bgForestLayer: "bg-forest-layer-3", delay: "300ms" },
  { bgForestLayer: "bg-forest-layer-4", delay: "400ms" },
  { bgForestLayer: "bg-forest-layer-5", delay: "500ms" },
  { bgForestLayer: "bg-forest-layer-6", delay: "600ms" },
  { bgForestLayer: "bg-forest-layer-7", delay: "700kms" },
  { bgForestLayer: "bg-forest-layer-8", delay: "800ms" },
];
