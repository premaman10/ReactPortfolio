// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logoport.png";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import aws from"./assets/techstack/aws.png";
import mysql from"./assets/techstack/mysql.png";
import android from"./assets/techstack/android.png";
import php from"./assets/techstack/php.png";
import kotlin from"./assets/techstack/kotlin.png";
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Lalit Verma ",
  tagline: "Passionate Educator,Enthusiastic Mentor, Empowering Futures:A Journey of Learning and Discovery!",
  img: profile,
  about: `I am an Assistant Professor at Lovely Professional University (LPU), where I am dedicated to fostering an engaging and innovative learning environment for my students. I hold a Bachelor of Technology (B.Tech) degree from IMS Engineering College, Ghaziabad, and a Master of Technology (M.Tech) from Amity University. My academic journey has equipped me with a strong foundation in engineering principles and a passion for teaching and research. I strive to inspire my students to explore their potential, think critically, and embrace the challenges of the ever-evolving technological landscape. With a commitment to academic excellence, I actively engage in research and development projects, aiming to contribute to the advancement of knowledge in my field.`,
};
// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/lalit-verma-127835202",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Assistant Professor",
    Company: `Lovely Professional University`,
    Location: "Phagwara,Punjab",
    Type: "Full Time",
    Duration: "Jul 2024 - Present",
  },
  {
    Position: "Network Support Specialist",
    Company: `OpsTree Solutions`,
    Location: "Noida, Uttar Pradesh",
    Type: "Full Time",
    Duration: "Jul 2022 - Jan 2024",
  },
  {
    Position: "AWS Engineer",
    Company: `Umbrella Infocare`,
    Location: "Noida, Uttar Pradesh",
    Type: "Full Time",
    Duration: "Jul 2021 - Jul 2022",
  },
  {
    Position: "Cloud Engineer",
    Company: `Progressive Infotech Pvt. Ltd.`,
    Location: "Noida, Uttar Pradesh",
    Type: "Full Time",
    Duration: "Jun 2019 - Aug 2020",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Master in Computer Science Engineering(MTech)",
    Company: "AMITY UNIVERSITY",
    Location: "Noida",
    Type: "A",
    Duration: "Sep 2022 - Jun 2024",
  },
  {
    Position: "Bachelor in Computer Science Engineering(BTech)",
    Company: `IMS ENGINEERING COLLEGE`,
    Location: "GHAZIABAD",
    Type: "A+",
    Duration: "Aug 2015 - Aug 2019",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  android:android,
  react: react,
  redux: redux,
  sass: sass,
  aws:aws,
  tailwind: tailwind,
  mysql:mysql,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  kotlin: kotlin,
  php: php,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "TIC-Tak-TOE-Game",
    image: projectImage1,
    description: `A simple two-player Tic-Tac-Toe game implemented using HTML, CSS, and JavaScript. Players aiming to align three of their marks horizontally, vertically, or diagonally.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://premaman10.github.io/Tic-Tac-Toe-Web-Game-Project-/",
    githubLink: "https://github.com/premaman10/Tic-Tac-Toe-Web-Game-Project-",
  },
  {
    title: "Project title 2",
    image: projectImage2,
    description: `A smart city website project using HTML, CSS, and JavaScript aims to create an interactive platform that provides essential information and services to residents and newcomers. The website can feature city guides, real-time data on city services, and user-friendly navigation`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://premaman10.github.io/Smart-City-Website/",
    githubLink: "https://github.com/premaman10/Smart-City-Website",
  },
  {
    title: "WALLPAPER SETER",
    image: projectImage3,
    description: `This repository contains an image slider component built using HTML, CSS, and JavaScript. The image slider is designed to showcase a series of images in a slideshow format, allowing users to navigate through the images manually or automatically.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://premaman10.github.io/Image-Slider/",
    githubLink: "https://github.com/premaman10/Image-Slider",
  },
  {
    title: "WebSolutions",
    image: projectImage4,
    description: `WEB TECH Solutions is a web development company offering a wide range of services including website development, software solutions, and hardware optimization. This repository contains the source code for our website, showcasing our expertise, services, and portfolio.`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://premaman10.github.io/WebSolutions/",
    githubLink: "https://github.com/premaman10/WebSolutions",
  },
  {
    title: "Cjpa-Calculator",
    image: projectImage5,
    description: `CGPA Calculator in Kotlin A simple and easy-to-use CGPA calculator built in Kotlin.Features Calculate CGPA based on grades and credits Supports multiple semesters Easy to use and intuitive interface Show previous semesters S.G.P.A`,
    techstack: "Kotlin",
    previewLink: "https://github.com/premaman10/C.G.P.A-Calculator",
    githubLink: "https://github.com/premaman10/C.G.P.A-Calculator",
  },
  {
    title: "To-Do-List App",
    image: projectImage6,
    description: `This is a simple To-Do List app built using Kotlin and XML. The app allows users to add, update, and delete tasks, and displays them in a RecyclerView. Add new tasks Update existing tasks Delete tasks Display tasks in a RecyclerView`,
    techstack: "Kotlin",
    previewLink: "https://github.com/premaman10/TO-DO-LIST-APP",
    githubLink: "https://github.com/premaman10/TO-DO-LIST-APP",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "lalit.verma270196@outlook.com",
  phone: "+91 12345 67890",
};
