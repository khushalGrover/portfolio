import {
  web,
  javascript,
  html,
  css,
  reactjs,
  git,
  figma,
  education,
  suitcase,
  docker,
  liveDemo,
  threejs,
  unity,
  fanclash,
  blender,
  webProject,
  scr_1,
  scr_2,
  scr_3,
  bullet,
  bullet2,
  rk1,
  rk2,
  rk3,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "gallery",
    title: "Gallery",
  },
  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Unity Developer",
    icon: unity,
  },
  {
    title: "3D Generalist (Blender)",
    icon: blender,
  },
  {
    title: "Web Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "unity",
    icon: unity,
  },
  {
    name: "blender",
    icon: blender,
  },
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
    name: "React JS",
    icon: reactjs,
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
    title: "MCA Cloud Computing and DevOpps",
    company_name: "Chandigarh University",
    icon: education,
    iconBg: "#383E56",
    date: "2022 - Present",
    points: [
      "Cloud Infrastructure Management: Explored cloud computing platforms like AWS, Azure, and Google Cloud, focusing on provisioning, scaling, and securing cloud resources.",
      "DevOps Tools and Practices: Studied continuous integration/continuous deployment (CI/CD) pipelines, containerization with Docker, and automation using tools like Jenkins.",
      "Cloud Security and Compliance: Learned about security best practices, identity and access management, and compliance standards in cloud environments.",
      // "Advanced Cloud Services: Explored advanced cloud services such as serverless computing, container orchestration with Kubernetes, and big data analytics on cloud platforms.",
    ],
  },
  {
    title: "3D Generalist (Full Time)",
    company_name: "Fanclash11 private limited, Jabalpur, MP",
    icon: suitcase,
    iconBg: "#383E56",
    date: "July 2021 - July 2022 (1 year)",
    points: [
      "Developing and maintaining mobile games using Unity Engine and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality games.",
      "Implementing responsive design and ensuring cross-device compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Game Artist (Intern)",
    company_name: "Fanclash11 private limited, Jabalpur, MP",
    icon: suitcase,
    iconBg: "#383E56",
    date: "Jan 2021 - Jun 2021 (6 months)",
    points: [
      "Desgin and model 3D assets for mobile games using Blender.",
      "Bring new ideas for game art and design to the team.",
      "Build prototypes to explore new game ideas and directions.",
      "Collaborate with the team to develop and refine the game design.",
    ],
  },
  {
    title: "BCA",
    company_name: "K.L.P College, Indra Ghandi University, Rewari, HR",
    icon: education,
    iconBg: "#383E56",
    date: "2018 - 2021",
    points: [
      "Data Structures and Algorithms: Studied advanced data structures and algorithms to solve complex computational problems.",
      "Database Management Systems: Explored relational database concepts, SQL, and database design principles.",
      "Web Development: Developed proficiency in HTML, CSS, JavaScript, and web application development",
      "Learned software development methodologies, requirements analysis, and project management in software development.",
    ],
  },
  
];

const artItems = [
  {
    name: "Speed Car Run",
    image: scr_1,
  },
  {
    name: "Speed Car Run(2)",
    image: scr_2,
  },
  {
    name: "Speed Car Run(3)",
    image: scr_3,
  },
  {
    name: "Rk1",
    image: rk1,
  },
  {
    name: "Rk2",
    image: rk2,
  },
  {
    name: "Rk3",
    image: rk3,
  },
  {
    name: "Bullet",
    image: bullet,
  },
  {
    name: "Bullet(2)",
    image: bullet2,
  },
  
];


const projects = [
  {
    name: "Speed Car Run",
    description:
      "Speed car run is a casual game. In this game, we have blended all the adrenalin, fun and excitement a pair of tires can offer together for you. With the amazing racing experience and breathtaking graphics, you won’t be able to put your phone down.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "Blender",
        color: "green-text-gradient",
      },
      {
        name: "Android Game",
        color: "pink-text-gradient",
      },
      {
        name: "2023",
        color: "fff"
      }
    ],
    image: scr_3,
    source_code_link: "https://github.com/khushalGrover/Speed-Car-Run",
    live_demo_link: "https://khushalgrover.itch.io/speed-car-run",
  },
  // {
  //   name: "Tik Tac Toe",
  //   description:
  //     "3D Tic Tac Toe is an engaging web-based game developed using the Unity engine, offering a fresh and immersive twist on the classic tic-tac-toe concept. Set in a vibrant three-dimensional environment, this modern take on the beloved game challenges players to think strategically and strategically to outmaneuver their opponents.",
  //   tags: [
  //     {
  //       name: "Unity",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Blender",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Web Game",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   // image: jobit,
  //   source_code_link: "https://github.com/",
  //   live_demo_link: "https://coolors.co/",

  // },
  {
    name: "50 Days 50 Projects",
    description:
      "This is a 50 days 50 projects challenge. In this challenge, I will be making 50 projects in 50 days. I will be using HTML, CSS, and JavaScript to make these projects. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "2022",
        color: "fff"
      }
    ],
    image: webProject,
    source_code_link: "https://github.com/khushalGrover/Web_Base_Minor_Projects.github.io",
    live_demo_link: "https://khushalgrover.github.io/Web_Base_Minor_Projects.github.io/",
  },
];

export { services, technologies, experiences, artItems, projects };