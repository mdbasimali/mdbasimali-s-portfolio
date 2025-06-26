// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
// import materialuiLogo from './assets/tech_logo/materialui.png';
// import bootstrapLogo from './assets/tech_logo/bootstrap.png';
// import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
// import mysqlLogo from './assets/tech_logo/mysql.png';
// import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
// import javaLogo from './assets/tech_logo/java.png';
// import pythonLogo from './assets/tech_logo/python.png';
// import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
// import postmanLogo from './assets/tech_logo/postman.png';
// import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
// import postgreLogo from './assets/tech_logo/postgre.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import oasis from './assets/company_logo/oasis_infobyte_logo.jpeg';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's

import SnuLogo from './assets/educationlogo/image.png';
import JhsLogo from './assets/educationlogo/jamalpurhighschool.png'; // if folder name is different
import MlsLogo from './assets/educationlogo/mallarpurhighschool.png';

// Project Section Logo's
import MyLeetCode from './assets/work_logo/myLeetcode.png'; //leetcode
import MyWeather from './assets/work_logo/myWeather.png'; //weather
import myNotes from './assets/work_logo/myNotes.png';     //notes app


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      // { name: 'Express JS', logo: expressjsLogo },
      // { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },   
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: oasis,
      role: "Web Developer",
      company: "Oasis Infobyte",
      date: "June 2025 - Present",
      desc: "Developed dynamic and scalable web applications using HTML, CSS And JAVASCRIPT.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        // "React JS",
        // "TypeScript",
        // "Node JS",
        // "Tailwind CSS",
        // "MongoDb",
        // "Redux",
        // " Next Js",
      ],
    },
    // {
    //   id: 1,
    //   img: agcLogo,
    //   role: "Fullstack Engineer",
    //   company: "Agumentik Group of Companies",
    //   date: "July 2023 - March 2024",
    //   desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    //   skills: [
    //     "ReactJS",
    //     "Redux",
    //     "JavaScript",
    //     "Tailwind CSS",
    //     "HTML",
    //     "CSS",
    //     "SQL",
    //   ],
    // },
    // {
    //   id: 2,
    //   img: newtonschoolLogo,
    //   role: "Frontend Intern",
    //   company: "Newton School",
    //   date: "September 2021 - August 2022",
    //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    //   skills: [
    //     "HTML",
    //     "CSS",
    //     "Javascript",
    //     "Bootstrap",
    //     "Figma",
    //     "Material UI",
    //   ],
    // },
  ];
  
  export const education = [

    {
      id: 0,
      img: SnuLogo,
      school: "Sister Nivedita University, WEST BENGAL",
      date: "Sept 2022 - Aug 2026",
      grade: "7.42 CGPA",
      desc: "I am currently pursuing a Bachelor of Technologgy (B.Tech.) in Computer Science and Engineering at Sister Nivedita University, West Bengal. Throughout my studies, I have been immersed in a wide range of subjects that have deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I have gained valuable, hands-on insights into the world of software development. My academic journey has also involved working on projects that apply theoretical knowledge to real-world problems, enhancing both my technical and problem-solving skills.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 1,
      img: MlsLogo,
      school: "Mallarpur High School, Birbhum",
      date: "Apr 2019 - March 2020",
      grade: "75.80%",
      desc: "I completed my class 12 education from Mallarpur High School, West Bengal, under the WBCHSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "WBCHSE(XII) - PCM",
    },
    {
      id: 3,
      img: JhsLogo,
      school: "Jamalpur High School, Birbhum",
      date: "Apr 2017 - March 2018",
      grade: "87.5%",
      desc: "I completed my class 10 education from Jamalpur High School, Birbhum, under the WBBSE board, where I studied Science.",
      degree: "WBBSE(X), Science",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "LeetCode Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed LeetCode profile information. Simply enter a LeetCode username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: MyLeetCode,
      tags: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/mdbasimali/myLeetcodeProfile_Detective", //Change karunga 
      webapp: "https://leetcode-profile-detective.vercel.app/",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "Developed a responsive weather web application that provides real-time weather updates using OpenWeatherMap API.",
      image: MyWeather  ,
      tags: ["API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/mdbasimali/MyWeather",
      webapp: "https://my-weather-chi-kohl.vercel.app/",
    },
    {
      id: 3,
      title: "Notes App",
      description:
        "A responsive note-taking application built with React and Tailwind CSS. Users can create, edit, and delete notes in a clean and user-friendly interface. The app leverages local storage to persist notes across browser sessions, ensuring data is saved even after the page is refreshed. Built with efficient React state management and styled using Tailwind CSS for a modern.",
      image: myNotes,
      tags: ["React JS", "Node.js", "NPM", "Tailwind CSS"],
      github: "https://github.com/mdbasimali/NotesApp",
      webapp: "https://notes-app-wheat-psi.vercel.app/",
    },
    // {
    //   id: 4,
    //   title: "Task Reminder Chrome Extension Tool",
    //   description:
    //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    //   image: taskremLogo,
    //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
    //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    // },
    // {
    //   id: 5,
    //   title: "Webverse Digital",
    //   description:
    //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    //   image: webverLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    //   github: "https://github.com/codingmastr/Webverse-Digital",
    //   webapp: "https://webversedigital.com/",
    // },
    // {
    //   id: 6,
    //   title: "Coding Master",
    //   description:
    //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    //   image: cmLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //   github: "https://codingmasterweb.in/",
    //   webapp: "https://codingmasterweb.in/",
    // },
    // {
    //   id: 7,
    //   title: "Image Search App",
    //   description:
    //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    //   image: imagesearchLogo,
    //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Search-App",
    //   webapp: "https://imagsearch.netlify.app/",
    // },
    // {
    //   id: 8,
    //   title: "Image Background Remover",
    //   description:
    //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    //   image: removebgLogo,
    //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    //   github: "https://github.com/codingmastr/Image-Background-Remover",
    //   webapp: "https://removeyourbg.netlify.app/",
    // },
  ];  