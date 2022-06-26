import {
  NavMenuItemInterface,
  IntroductionInterface,
  SkillInterface,
  ProjectsInterface,
} from "../interfaces/interfaces";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import javascript from "../../assets/images/javascript.png";
import react from "../../assets/images/react.png";
import redux from "../../assets/images/redux.png";
import cpp from "../../assets/images/cpp.png";
import git from "../../assets/images/git.png";
import mu5 from "../../assets/images/mu5.png";
import node from "../../assets/images/node.png";
import sass from "../../assets/images/sass.png";
import typescript from "../../assets/images/typescript.png";
import sql from "../../assets/images/sql.png";
import bootstrap from "../../assets/images/bootstrap.png";
// import firebase from "../../assets/images/firebase.png";
import express from "../../assets/images/express.png";
import php from "../../assets/images/php.png";
import restapi from "../../assets/images/restapi.png";
import angular from "../../assets/images/angular.png";
import nextjs from "../../assets/images/nextjs.png";



//  Nav Menu Items
export const Nav_Menu: NavMenuItemInterface[] = [
  { text: "Home", path: "/" },
  { text: "Projects", path: "/projects" },
  { text: "APIs", path: "/apis" },
  { text: "Services", path: "/services" },
  { text: "Videos", path: "/videos" },
  { text: "About", path: "/about" },
  { text: "Log In", path: "/login" },
];




//  Introduction Container
export const introduction: IntroductionInterface = {
  name: "Name",
  designation: "Full-Stack Developer 👨🏻‍💻",
  description: `I'm a professional Full-Stack Web / App developer based in Pakistan.`,
};




//  Skills
export const skills: SkillInterface[] = [
  { image: html, text: "HTML", rating: 100 },
  { image: css, text: "CSS", rating: 90 },
  { image: javascript, text: "JavaScript", rating: 95 },
  { image: react, text: "React", rating: 95 },
  { image: redux, text: "Redux", rating: 80 },
  { image: nextjs, text: "Next JS", rating: 80 },
  { image: cpp, text: "C++", rating: 70 },
  { image: git, text: "Git & Github", rating: 70 },
  { image: mu5, text: "Material UI", rating: 80 },
  { image: node, text: "Node JS", rating: 50 },
  { image: sass, text: "Sass", rating: 90 },
  { image: typescript, text: "Typescript", rating: 80 },
  { image: react, text: "React Native", rating: 90 },
  { image: express, text: "Express JS", rating: 60 },
  { image: bootstrap, text: "Bootstrap", rating: 80 },
  { image: restapi, text: "Rest API", rating: 70 },
  { image: php, text: "PHP", rating: 80 },
  { image: sql, text: "SQL", rating: 50 },
];




// Crypto Api Table Header Data
export const cryptoApiHeader: string[] = [
  "Name",
  "Symbol",
  "Price",
  "Rank",
  "High",
  "Low",
  "Last Update",
  "Cir. Supply",
  "Total Supply",
  "Ath",
  "Atl",
];



// Projects Tab Data
export const projectsTab: ProjectsInterface[] = [
  {
    tabImage: javascript,
    label: "Javascript",
    projects: [
      {
        image: javascript,
        title: "Fortnite Api Project",
        description: "This project is build with html css and javascript and many more technologies.",
        technologies: ["HTML, CSS, Javascript, Bootstrap"],
      },
      {
        image: javascript,
        title: "Banking Web App",
        description: "This project is build with html css and javascript and many more technologies.",
        technologies: ["HTML, CSS, Javascript, Bootstrap"],
      },
      {
        image: javascript,
        title: "Dice Roll Game",
        description: "This project is build with html css and javascript and many more technologies.",
        technologies: ["HTML, CSS, Javascript, Bootstrap"],
      },
      {
        image: javascript,
        title: "Workout with Geo Location Api",
        description: "This project is build with html css and javascript and many more technologies.",
        technologies: ["HTML, CSS, Javascript, Bootstrap"],
      },
      {
        image: javascript,
        title: "Drums",
        description: "This project is build with html css and javascript and many more technologies.",
        technologies: ["HTML, CSS, Javascript, Bootstrap"],
      },
      {
        image: javascript,
        title: "Google Clone",
        description: "This project is build with html css and javascript and many more technologies.",
        technologies: ["HTML, CSS, Javascript, Bootstrap"],
      },
      {
        image: javascript,
        title: "Guessing Game",
        description: "This project is build with html css and javascript and many more technologies.",
        technologies: ["HTML, CSS, Javascript, Bootstrap"],
      },
      {
        image: javascript,
        title: "Pig Game",
        description: "This project is build with html css and javascript and many more technologies.",
        technologies: ["HTML, CSS, Javascript, Bootstrap"],
      },
      {
        image: javascript,
        title: "Simon Game",
        description: "This project is build with html css and javascript and many more technologies.",
        technologies: ["HTML, CSS, Javascript, Bootstrap"],
      },
      {
        image: javascript,
        title: "User Authentication Page",
        description: "This project is build with html css and javascript and many more technologies.",
        technologies: ["HTML, CSS, Javascript, Bootstrap"],
      },
    ],
  },
  {
    tabImage: react,
    label: "React",
    projects: [
      {
        image: "",
        title: "Full-Stack E-commerce Website",
        description: "This project is build with html css and javascript and many more technologies.",
        technologies: ["HTML, CSS, Javascript, Bootstrap"],
      },
      {
        image: "",
        title: "Event Organizer Web App",
        description: "This project is build with html css and javascript and many more technologies.",
        technologies: ["HTML, CSS, Javascript, Bootstrap"],
      },
      {
        image: "",
        title: "Food Recipe Search Api",
        description: "This project is build with html css and javascript and many more technologies.",
        technologies: ["HTML, CSS, Javascript, Bootstrap"],
      },
      {
        image: "",
        title: "Portfolio Website",
        description: "This project is build with html css and javascript and many more technologies.",
        technologies: ["HTML, CSS, Javascript, Bootstrap"],
      },
      {
        image: "",
        title: "Task Tracker",
        description: "This project is build with html css and javascript and many more technologies.",
        technologies: ["HTML, CSS, Javascript, Bootstrap"],
      },
      {
        image: "",
        title: "Weather App",
        description: "This project is build with html css and javascript and many more technologies.",
        technologies: ["HTML, CSS, Javascript, Bootstrap"],
      },
    ],
  },
  {
    tabImage: angular,
    label: "Angular",
    projects: [
      {
        image: "",
        title: "Bootstrap Tindog Web Design",
        description: "",
        technologies: ["HTML, CSS, Javascript, Bootstrap"],
      },
    ],
  },
  {
    tabImage: react,
    label: "React Native",
    projects: [
        {
            image: "",
            title: "Covid-19 Tracker",
            description: "This project is build with html css and javascript and many more technologies.",
            technologies: ["HTML, CSS, Javascript, Bootstrap"],
          },
          {
            image: "",
            title: "Expense Manager",
            description: "This project is build with html css and javascript and many more technologies.",
            technologies: ["HTML, CSS, Javascript, Bootstrap"],
          },
          {
            image: "",
            title: "Recipe Search App",
            description: "This project is build with html css and javascript and many more technologies.",
            technologies: ["HTML, CSS, Javascript, Bootstrap"],
          },
          {
            image: "",
            title: "Login Authentication with Firebase",
            description: "This project is build with html css and javascript and many more technologies.",
            technologies: ["HTML, CSS, Javascript, Bootstrap"],
          },
          {
            image: "",
            title: "Instagram UI Clone",
            description: "This project is build with html css and javascript and many more technologies.",
            technologies: ["HTML, CSS, Javascript, Bootstrap"],
          },
          {
            image: "",
            title: "Full-Stack Notes App",
            description: "This project is build with html css and javascript and many more technologies.",
            technologies: ["HTML, CSS, Javascript, Bootstrap"],
          },
          {
            image: "",
            title: "Twitter UI Clone",
            description: "This project is build with html css and javascript and many more technologies.",
            technologies: ["HTML, CSS, Javascript, Bootstrap"],
          },
    ],
  },
  {
    tabImage: nextjs,
    label: "Next JS",
    projects: [
      {
        image: "",
        title: "Bootstrap Tindog Web Design",
        description: "",
        technologies: ["HTML, CSS, Javascript, Bootstrap"],
      },
    ],
  },
  {
    tabImage: php,
    label: "PHP",
    projects: [
      {
        image: "",
        title: "Bootstrap Tindog Web Design",
        description: "",
        technologies: ["HTML, CSS, Javascript, Bootstrap"],
      },
    ],
  },
  {
    tabImage: cpp,
    label: "C++",
    projects: [
      {
        image: "",
        title: "Bootstrap Tindog Web Design",
        description: "",
        technologies: ["HTML, CSS, Javascript, Bootstrap"],
      },
    ],
  },
];
