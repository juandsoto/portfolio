import { ICourse, IExperience, IProject, ISkill, TCategory } from "types";

export const categories: TCategory[] = ["web", "frontend", "backend", "AI", "game"];

export const experiences: IExperience[] = [
  {
    id: 1,
    company: "ensolvers",
    company_link: "https://www.ensolvers.com/es/inicio/",
    image:
      "https://res.cloudinary.com/dcaythx6e/image/upload/v1672183730/portfolio/Logo_Ensolvers_265px_sin_frase_x9rdvz.png",
    role: "trainee engineer",
    description:
      "Ensolvers was my first experience in a real software development company. I worked in web development with Typescript as programming language and React as Frontend library. Initially I was asked to do small fixes in old features but quickly I started to develop new features so I took advantage of that and improved my skills.",
    tools: ["react", "typescript", "scrum"],
    startDate: "2022-09-19T13:06:16.059Z",
    endDate: "2022-10-15T13:06:16.059Z",
  },
  {
    id: 2,
    company: "Universidad del Valle",
    company_link: "https://www.univalle.edu.co/",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1672955329/portfolio/univalle_tt2gvo.png",
    role: "Software Engineer",
    description: "I am a Software Engineering student at Univalle. Currently on 8th semester of 10 total semesters.",
    tools: [],
    startDate: "2019-05-01T13:06:16.059Z",
    endDate: "2024-12-01T13:06:16.059Z",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    title: "war horses",
    description: "War horses is a multiplayer game where you play against an artificial intelligence machine.",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1672147779/portfolio/war_horses_ovqw2v.png",
    repository: "https://github.com/juandsoto/war-horses",
    deployment: "https://war-horses.vercel.app",
    tags: ["ai", "frontend", "game", "web"],
    tools: ["css", "html", "react", "tailwindcss", "typescript", "vercel", "vitejs", "zustand"],
  },
  {
    id: 2,
    title: "mario smart",
    description:
      "Mario Smart is a self solutioning game which implements five search algorithms for Mario to find the Princess.",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1673013283/portfolio/mario_eskllf.png",
    repository: "https://github.com/juandsoto/Mario_Smart_IA",
    deployment: "https://mario-smart-ia.vercel.app",
    tags: ["ai", "frontend", "game", "web"],
    tools: ["css", "html", "typescript", "vercel", "vitejs"],
  },
  {
    id: 3,
    title: "codersfap",
    description: "codersfap is a savings and loans fund where users can save and loan money between them.",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1672150213/portfolio/codersfap_vjgzcd.png",
    repository: "https://github.com/juandsoto/codersfap",
    deployment: "https://codersfap.vercel.app",
    tags: ["backend", "cms", "frontend", "web"],
    tools: [
      "expressjs",
      "javascript",
      "nodejs",
      "postgreSQL",
      "react",
      "tailwindcss",
      "typescript",
      "vercel",
      "zustand",
    ],
  },
  {
    id: 4,
    title: "dodge it",
    description:
      "Dodge It is a game that simulates driving a car which goal is to get to the goal dodging the randomly appearing  and moving obstacles.",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1672149976/portfolio/dodge_it_eudv7y.png",
    repository: "https://github.com/juandsoto/dodge-it",
    deployment: "https://dodge-it.vercel.app",
    tags: ["frontend", "game", "web"],
    tools: ["css", "html", "react", "tailwindcss", "typescript", "vercel", "vitejs", "zustand"],
  },
  {
    id: 5,
    title: "notek",
    description: "notek is a note taking app.",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1672149183/portfolio/notek_hyljqi.png",
    repository: "https://github.com/juandsoto/notes-app",
    deployment: "https://notes-app-juandsoto.vercel.app",
    tags: ["backend", "frontend", "web"],
    tools: [
      "css",
      "expressjs",
      "html",
      "nodejs",
      "postgreSQL",
      "react",
      "sequelize",
      "tailwindcss",
      "typescript",
      "vercel",
    ],
  },
  {
    id: 6,
    title: "el descanso",
    description:
      "Management web application where El Descanso hotel can manage clients, bookings, rooms among others. This app was developed as the final project of Software Development and Databases classes at Universidad del Valle, Software Engineer program",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1672149717/portfolio/el_descanso_pnwg0i.png",
    repository: "https://github.com/juandsoto/el-descanso",
    deployment: "https://el-descanso.vercel.app",
    tags: ["backend", "cms", "frontend", "web"],
    tools: [
      "css",
      "django",
      "framer motion",
      "html",
      "materialUI",
      "python",
      "react",
      "typescript",
      "vercel",
      "vitejs",
    ],
  },
];

export const skills: ISkill[] = [
  {
    name: "ReactJS",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1673016644/portfolio/skills/react_bw8atm.svg",
  },
  {
    name: "PostgreSQL",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1673016644/portfolio/skills/postgresql_dztbty.svg",
  },
  {
    name: "NextJS",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1673016644/portfolio/skills/next_jelyo6.svg",
  },
  {
    name: "NodeJS",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1673016644/portfolio/skills/nodejs_ty2tix.svg",
  },
  {
    name: "MySQL",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1673016643/portfolio/skills/mysql_khs3s8.svg",
  },
  {
    name: "MaterialUI",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1673016643/portfolio/skills/mui_wv3mrj.svg",
  },
  {
    name: "Javascript",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1673016642/portfolio/skills/javascript_te45ox.svg",
  },
  {
    name: "MongoDB",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1673016642/portfolio/skills/mongodb_fw9mpb.svg",
  },
  {
    name: "GraphQL",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1673016642/portfolio/skills/graphQL_wjneok.svg",
  },
  {
    name: "Framer Motion",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1673016642/portfolio/skills/framer-motion_zrvzja.svg",
  },
  {
    name: "ExpressJS",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1673016641/portfolio/skills/expressjs_lulge0.svg",
  },
  {
    name: "Css",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1673016641/portfolio/skills/css_nkwcyc.svg",
  },
  {
    name: "Tailwindcss",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1673016640/portfolio/skills/tailwindcss_zwu09i.svg",
  },
  {
    name: "ViteJS",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1673016641/portfolio/skills/vitejs_g9wikr.svg",
  },
  {
    name: "Vercel",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1673016640/portfolio/skills/vercel_fnmgin.svg",
  },
  {
    name: "Typescript",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1673016640/portfolio/skills/typescript_vezgyu.svg",
  },
  {
    name: "Html",
    image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1673016344/portfolio/skills/html_mj4zcr.svg",
  },
];

export const courses: ICourse[] = [
  {
    id: 1,
    name: "React PRO: Lleva tus bases al siguiente nivel",
    image: "https://img-c.udemycdn.com/course/480x270/4301065_2e02.jpg",
    platform: "https://cdn.worldvectorlogo.com/logos/udemy-3.svg",
    course_link: "https://www.udemy.com/course/react-pro/",
    certificate_link: "",
  },
  {
    id: 2,
    name: "Talento JuvenTIC",
    image: "https://talento.juventic.co/images/logo-talento.png",
    platform: "https://talento.juventic.co/images/favicon.ico",
    course_link: "https://talento.juventic.co/",
    certificate_link: "",
  },
  {
    id: 3,
    name: "Angular: De cero a experto",
    image: "https://img-c.udemycdn.com/course/480x270/3662358_4d6e.jpg",
    platform: "https://cdn.worldvectorlogo.com/logos/udemy-3.svg",
    course_link: "https://www.udemy.com/course/angular-fernando-herrera/",
    certificate_link: "https://www.udemy.com/certificate/UC-46e79e7d-a1a5-40cf-af3a-2ba8bd5062bb/",
  },
  {
    id: 4,
    name: "Node: De cero a experto",
    image: "https://img-c.udemycdn.com/course/480x270/1562070_d426_3.jpg",
    platform: "https://cdn.worldvectorlogo.com/logos/udemy-3.svg",
    course_link: "https://www.udemy.com/course/node-de-cero-a-experto/",
    certificate_link: "https://www.udemy.com/certificate/UC-176b084b-cb1b-4f29-ae28-dc5f05e5a7bc/",
  },
  {
    id: 5,
    name: "Spring Framework 5 & Spring Boot 2 desde cero a experto 2022",
    image: "https://img-c.udemycdn.com/course/480x270/1388250_e9ac_6.jpg",
    platform: "https://cdn.worldvectorlogo.com/logos/udemy-3.svg",
    course_link: "https://www.udemy.com/course/spring-framework-5/",
    certificate_link: "https://www.udemy.com/certificate/UC-7b65f8fe-88bc-4ecc-8c08-1c9b7ccfccdf/",
  },
  {
    id: 6,
    name: "Aprende Javascript ES9, HTML, CSS3 y NodeJS desde cero",
    image: "https://img-c.udemycdn.com/course/480x270/2516170_d229_2.jpg",
    platform: "https://cdn.worldvectorlogo.com/logos/udemy-3.svg",
    course_link: "https://www.udemy.com/course/aprende-javascript-es9-html-css3-y-nodejs-desde-cero/",
    certificate_link: "https://www.udemy.com/certificate/UC-78318b3e-96ae-43dc-b2ec-8004edea7d14/",
  },
  {
    id: 7,
    name: "Combinatorics and Probability",
    image:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/98/8fb81076a011e79d073ba265e37f90/logo_comb_800x800.png",
    platform: "https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/favicon-v2-194x194.png",
    course_link: "https://www.coursera.org/learn/combinatorics",
    certificate_link: "https://www.coursera.org/account/accomplishments/verify/Q2KTSGRX7ZYK",
  },
  {
    id: 8,
    name: "Introduction to Graph Theory",
    image:
      "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/ee/7e3b00762f11e789d3c9a04c0e14ee/logo_graphs_800x800-1.png",
    platform: "https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/favicon-v2-194x194.png",
    course_link: "https://www.coursera.org/learn/graphs",
    certificate_link: "https://www.coursera.org/account/accomplishments/verify/3ZN5JGMBCQTG",
  },
  {
    id: 9,
    name: "Java Programming for Complete Beginners",
    image: "https://img-c.udemycdn.com/course/480x270/1535678_0ce9_7.jpg",
    platform: "https://cdn.worldvectorlogo.com/logos/udemy-3.svg",
    course_link: "https://www.udemy.com/course/java-programming-tutorial-for-beginners/",
    certificate_link: "https://www.udemy.com/certificate/UC-da0e7ad2-1d58-40a3-927b-93615cccb0a8/",
  },
];
