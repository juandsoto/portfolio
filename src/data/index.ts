import { ICourse, IExperience, IProject, ISkill, TCategory } from "types";

export const categories: TCategory[] = ["web", "AI", "mobile", "game", "cms"];

export const experiences: IExperience[] = [
	{
		id: 3,
		company: "Holcim ADC",
		company_link: "https://adc.holcim.com/",
		image:
			"https://res.cloudinary.com/dcaythx6e/image/upload/v1705083633/portfolio/bk55kuufc8nbs93swuwk.svg",
		roles: [
			{ name: "Trainee Engineer", startDate: "2024-01-09T00:00:00.000Z", endDate: "" },
			{ name: "Intern", startDate: "2023-07-10T00:00:00.000Z", endDate: "2024-01-09T00:00:00.000Z" }
		],
		description:
			"I have the opportunity to work in projects that teach me not just technical skills but general knowlegde about different processes such as billing, product delivery and much more. Currently I am working in a billing system for the clients to pay for the products Holcim sale.",
		tools: ["Java", "Spring Boot", "AWS", "GitLab", "Nodejs", "Typescript", "Scrum"],
		startDate: "2023-07-10T00:00:00.000Z",
		endDate: "",
	},
	{
		id: 1,
		company: "Ensolvers",
		company_link: "https://www.ensolvers.com/es/inicio/",
		image:
			"https://res.cloudinary.com/dcaythx6e/image/upload/v1705083540/portfolio/y6gaazp7sidxsmu2rjcb.png",
		roles: [
			{ name: "Trainee Engineer", startDate: "2022-09-19T00:00:00.000Z", endDate: "2022-10-15T00:00:00.000Z" },
		],
		description:
			`Development of web application for Ensolvers' employee management.\n\n ● Focused on developing a dedicated component within the application for tracking and managing off. ● Designed and implemented features to allow employees to request and managers to approve or deny leave requests.`,
		tools: ["react", "typescript", "scrum"],
		startDate: "2022-09-19T00:00:00.000Z",
		endDate: "2022-10-15T00:00:00.000Z",
	},
	{
		id: 2,
		company: "Universidad del Valle",
		company_link: "https://www.univalle.edu.co/",
		image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1672955329/portfolio/univalle_tt2gvo.png",
		roles: [
			{ name: "Software Engineering", startDate: "2019-05-01T00:00:00.000Z", endDate: "" },
		],
		description: "I am a software engineer with a five-year education from Universidad del Valle. This esteemed institution provided me with a comprehensive understanding of software development, covering diverse programming languages and cutting-edge technologies. The hands-on approach to problem-solving and collaborative projects during my time at the university has fueled my passion for coding.",
		tools: [],
		startDate: "2019-05-01T00:00:00.000Z",
		endDate: "2024-12-01T00:00:00.000Z",
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
		tags: ["ai", "game", "web"],
		tools: ["css", "html", "react", "tailwindcss", "typescript", "vercel", "vitejs", "zustand"],
	},
	{
		id: 2,
		title: "el descanso",
		description:
			"Management web application where El Descanso hotel can manage clients, bookings, rooms among others. This app was developed as the final project of Software Development and Databases classes at Universidad del Valle, Software Engineer program",
		image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1672149717/portfolio/el_descanso_pnwg0i.png",
		repository: "https://github.com/juandsoto/el-descanso",
		deployment: "https://el-descanso.vercel.app",
		tags: ["cms", "web"],
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
	{
		id: 3,
		title: "codersfap",
		description: "codersfap is a savings and loans fund where users can save and loan money between them.",
		image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1672150213/portfolio/codersfap_vjgzcd.png",
		repository: "https://github.com/juandsoto/codersfap",
		deployment: "https://codersfap.vercel.app",
		tags: ["cms", "web"],
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
		title: "mario smart",
		description:
			"Mario Smart is a self solutioning game which implements five search algorithms for Mario to find the Princess.",
		image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1673013283/portfolio/mario_eskllf.png",
		repository: "https://github.com/juandsoto/Mario_Smart_IA",
		deployment: "https://mario-smart-ia.vercel.app",
		tags: ["ai", "game", "web"],
		tools: ["css", "html", "typescript", "vercel", "vitejs"],
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
		title: "dodge it",
		description:
			"Dodge It is a game that simulates driving a car which goal is to get to the goal dodging the randomly appearing  and moving obstacles.",
		image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1672149976/portfolio/dodge_it_eudv7y.png",
		repository: "https://github.com/juandsoto/dodge-it",
		deployment: "https://dodge-it.vercel.app",
		tags: ["game", "web"],
		tools: ["css", "html", "react", "tailwindcss", "typescript", "vercel", "vitejs", "zustand"],
	},
];

export const skills: ISkill[] = [
	{
		name: "Dart",
		image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1705081165/portfolio/skills/uccmsyoxfhi61is3jlf7.svg",
	},
	{
		name: "Flutter",
		image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1705081165/portfolio/skills/uueo7ez3qdzwsxqdrjd1.svg",
	},
	{
		name: "AWS",
		image: "https://res.cloudinary.com/dcaythx6e/image/upload/v1705081165/portfolio/skills/vmpdg3stvh9ae0cfcugh.svg",
	},
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
		id: 10,
		name: "Flutter Móvil: De cero a experto",
		image: "https://import.cdn.thinkific.com/cdn-cgi/image/width=380,onerror=redirect/643563/courses/2177248/nBJfYecrQWmUQyxveZRo_FLUTTER-NEW-COVER.jpg",
		platform: "https://res.cloudinary.com/dcaythx6e/image/upload/v1716995082/portfolio/DMpsgyZ4_400x400_sf5550.jpg",
		course_link: "https://cursos.devtalles.com/courses/flutter-movil-cero-a-experto",
		certificate_link: "https://cursos.devtalles.com/certificates/jzih4vuxks",
	},
	{
		id: 9,
		name: "React PRO: Lleva tus bases al siguiente nivel",
		image: "https://img-c.udemycdn.com/course/480x270/4301065_2e02.jpg",
		platform: "https://cdn.worldvectorlogo.com/logos/udemy-3.svg",
		course_link: "https://www.udemy.com/course/react-pro/",
		certificate_link: "https://www.udemy.com/certificate/UC-a9d86812-012d-4fa5-b6ef-787382ba81f2/",
	},
	{
		id: 8,
		name: "Talento JuvenTIC",
		image: "https://talento.juventic.co/images/logo-talento.png",
		platform: "https://res.cloudinary.com/dcaythx6e/image/upload/v1705092207/portfolio/rhlbrry4saye0ljnearg.png",
		course_link: "https://talento.juventic.co/",
		certificate_link: "",
	},
	{
		id: 7,
		name: "Angular: De cero a experto",
		image: "https://img-c.udemycdn.com/course/480x270/3662358_4d6e.jpg",
		platform: "https://cdn.worldvectorlogo.com/logos/udemy-3.svg",
		course_link: "https://www.udemy.com/course/angular-fernando-herrera/",
		certificate_link: "https://www.udemy.com/certificate/UC-46e79e7d-a1a5-40cf-af3a-2ba8bd5062bb/",
	},
	{
		id: 6,
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
		id: 4,
		name: "Aprende Javascript ES9, HTML, CSS3 y NodeJS desde cero",
		image: "https://img-c.udemycdn.com/course/480x270/2516170_d229_2.jpg",
		platform: "https://cdn.worldvectorlogo.com/logos/udemy-3.svg",
		course_link: "https://www.udemy.com/course/aprende-javascript-es9-html-css3-y-nodejs-desde-cero/",
		certificate_link: "https://www.udemy.com/certificate/UC-78318b3e-96ae-43dc-b2ec-8004edea7d14/",
	},
	{
		id: 3,
		name: "Combinatorics and Probability",
		image:
			"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/98/8fb81076a011e79d073ba265e37f90/logo_comb_800x800.png",
		platform: "https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/favicon-v2-194x194.png",
		course_link: "https://www.coursera.org/learn/combinatorics",
		certificate_link: "https://www.coursera.org/account/accomplishments/verify/Q2KTSGRX7ZYK",
	},
	{
		id: 2,
		name: "Introduction to Graph Theory",
		image:
			"https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/ee/7e3b00762f11e789d3c9a04c0e14ee/logo_graphs_800x800-1.png",
		platform: "https://d3njjcbhbojbot.cloudfront.net/web/images/favicons/favicon-v2-194x194.png",
		course_link: "https://www.coursera.org/learn/graphs",
		certificate_link: "https://www.coursera.org/account/accomplishments/verify/3ZN5JGMBCQTG",
	},
	{
		id: 1,
		name: "Java Programming for Complete Beginners",
		image: "https://img-c.udemycdn.com/course/480x270/1535678_0ce9_7.jpg",
		platform: "https://cdn.worldvectorlogo.com/logos/udemy-3.svg",
		course_link: "https://www.udemy.com/course/java-programming-tutorial-for-beginners/",
		certificate_link: "https://www.udemy.com/certificate/UC-da0e7ad2-1d58-40a3-927b-93615cccb0a8/",
	},
];
