
import { MdDesignServices, MdPhoneIphone, MdAndroid, MdPhoneAndroid, MdSmartphone, MdTabletAndroid } from "react-icons/md";
import { FiCodesandbox, FiSmartphone } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import Work2 from "./assets/work2.jpg";
import Work3 from "./assets/work3.jpg";
import Work4 from "./assets/work4.jpg";
import Work5 from "./assets/work5.jpg";

import Doovote from "./assets/doovote.png";
import Netflix from "./assets/netflix.png";
import Dashboard from "./assets/Dashboard.png";
import Pos from "./assets/Pos.png";
import CFC from "./assets/CFC.png";
import Blog from "./assets/Blog.png";
import Inventory from "./assets/Inventory.png";
import Ecommerce from "./assets/Ecommerce.png";
import Messaging from "./assets/Messaging.png";
// import IDPIC from './assets/profilepic.jpg';
import Image1 from "./assets/testimonial1.png"; 
import Image2 from "./assets/testimonial2.png";
import Image3 from "./assets/testimonial3.png";
import CV from "./assets/BrixDeluteCV.pdf";

// Steven Changes
import Image4 from './assets/ANDROIDSTUDIO.png'
import profileImage from './assets/profile.jpg'
import CV2 from './assets/MARK_STEVEN_ALBA.pdf'

//Dev
export const API_URL = "https://bugtech.online/v1";

//Local
// export const API_URL = "http://localhost:5500/v1";


export const Testimonial = [
  {
    id: 1,
    image: Image1,
    title:"Aja Hardware",
    description: "A really good job, a aspects of the project were followed step by step and with good results."
  },
  {
    id:2,
    image: Image2,
    title: "Harry Clinton",
    description:
    "A really good job, a aspects of the project were followed step by step and with good results.",

  },
  {
    id:3,
    image: Image3,
    title: "Sara Cill",
    description:
    "A really good job, a aspects of the project were followed step by step and with good results.",
  }
]

export const Services = [
  {
    id: 1,
    image: Image1,
    title:"System Design and Architecture Services",
    description: "Creating high-level designs of software systems that meet the requirements of stakeholders. This includes identifying components, interactions, and dependencies, and creating detailed technical specifications.",
    icon: MdDesignServices
  },
  {
    id:2,
    image: Image3,
    title: "Fullstack Development Services",
    description:
    "Writing code to create both the client-side and server-side components of web applications. This includes working with technologies such as React.js, Node.js, MySQL, MongoDB, or PostgreSQL to create responsive and interactive interfaces, APIs.",
    icon: FiCodesandbox
  },
  {
    id:3,
    image: Image2,
    title: "Database Design and Management",
    description:
    "Writing code to create the server-side components of web applications. This includes working with technologies such as NodeJS, Express, Typescript to create APIs, databases, AWS, Microservices and web servers.",
    icon: CgWebsite
  },
  {
    id:4,
    image: MdPhoneIphone,
    title: `MongoDB Realm SDK (Offline-first)`,
    description:
    "Our project aims to develop a mobile application using React Native SDK and MongoDB Realm, with a focus on implementing an offline-first architecture. The application will provide users with a seamless and responsive experience, even in scenarios where an internet connection is intermittent or unavailable.",
    icon: MdPhoneAndroid,
    // image: MdPhoneIphone
  },
 
]


export const PROJECTS = [
    {
      id: 1,
      cover: Pos,
      title: "Inventory/POS",
      description: "Web",
      link: "https://pos.bugtech.online"
    },
    {
      id: 2,
      cover: CFC,
      title: "CFC 2023",
      description: "App",
      link: "https://cfc.bugtech.online"
    },
    {
      id: 3,
      cover: Doovote,
      title: "Doovote",
      description: "App",
      link: "https://doovote.com"
    },
    {
      id: 4,
      cover: Netflix,
      title: "NorthFlix",
      description: "App",
      link: "/netflix"
    },
    {
      id: 6,
      cover: Work3,
      title: "File Manager",
      description: "Web",
      link: "https://files.bugtech.online"
    },
    // {
    //   id: 6,
    //   cover: Inventory,
    //   title: "Bubu - Lending App",
    //   description: "App",
    //   link: "https://bubu.bugtech.online"
    // },
    // {
    //   id: 7,
    //   cover: Inventory,
    //   title: "Deep - Multi-level Marketing",
    //   description: "App",
    //   link: "https://deep.bugtech.online"
    // },
    // {
    //   id: 7,
    //   cover: Blog,
    //   title: "Blog Web Site",
    //   description: "Web",
    //   link: "/blog"
    // },
    // {
    //   id: 8,
    //   cover: Ecommerce,
    //   title: "Ecommerce Web",
    //   description: "Design",
    //   link: "/ecommerce"
    // },
    // {
    //   id: 9,
    //   cover: Messaging,
    //   title: "Messaging Web App",
    //   description: "App",
    //   link: "/messaging"
    // },
];

export const SKILLS = [
  {
    id: 1,
    title: "Backend Developer",
    description: "backend",
    contents: [
      {
        title: "Node JS",
        subtitle: "Advance",
        icon: "bx bxl-nodejs"
      },
      {
        title: "MySQL",
        subtitle: "Advance",
        icon: "bx bxl-mysql"
      },
      {
        title: "MongoDB",
        subtitle: "Advance",
        icon: "bx bxl-mongodb"
      },
      {
        title: "Firebase",
        subtitle: "Advance",
        icon: "bx bxl-firebase"
      },
      {
        title: "Postgresql",
        subtitle: "Advance",
        icon: "bx bxl-postgresql"
      },
      {
        title: "AWS",
        subtitle: "Advance",
        icon: "bx bxl-aws"
      }
    ]
  },
  {
    id: 2,
    cover: Work2,
    title: "Frontend Developer",
    description: "frontend",
    contents: [
      {
        title: "HTML5",
        subtitle: "Advance",
        icon: "bx bxl-hmtl5"
      },
      {
        title: "CSS3",
        subtitle: "Advance",
        icon: "bx bxl-css3"
      },
      {
        title: "Javascript",
        subtitle: "Advance",
        icon: "bx bxl-javascript"
      },
      {
        title: "Bootstrap",
        subtitle: "Advance",
        icon: "bx bxl-bootstrap"
      },
      {
        title: "Git",
        subtitle: "Advance",
        icon: "bx bxl-git"
      },
      {
        title: "React",
        subtitle: "Advance",
        icon: "bx bxl-react"
      }
    ]
  }
  // {
  //   id: 3,
  //   cover: Work3,
  //   title: "Brand Design",
  //   description: "Design",
  //   link: "/netflix"
  // },
  // {
  //   id: 4,
  //   cover: Work4,
  //   title: "App Movies",
  //   description: "App",
  //   link: "/blog"
  // },
  // {
  //   id: 5,
  //   cover: Work5,
  //   title: "Web Design",
  //   description: "Web",
  //   link: "/inventory"
  // },
];

export const PROFILES = [
    {
        username: "stevenAlba",
        email: "marksteven.alba@gmail.com",
        profile: {
            cover: profileImage,
            nickname: "Steven",
            firstName: "Mark Steven",
            lastName: "Alba",
            position: [
              "Software Engineer",
              "Backend Developer",
              "Front End Developer",
              "Full Stack Developer",
              "React Js Developer",
              "Mobile Developer (Android && IOS)"
            ],
            bio: "I'm a creative software developer based in Tacloban City, Philippines, with a passion for creating innovative tools and systems. I have a background in accounting and a solid foundation in Full Stack Development, including expertise in HTML, CSS, JavaScript, React, Node.js, AWS, Microservices, RestAPI, and Databases.",
        },    
         contents: [
            {
                type: "socials",
                title: "",
                subtitle: "",
                contents: [
                    {
                      title: "",
                      subtitle: "",
                      description: "",
                      link: "https://github.com/bugtech-systems",
                      icon: "uil uil-github-alt",
                    },
                    {
                        title: "",
                        subtitle: "",
                        description: "",
                        link: "https://www.linkedin.com/in/mark-steven-alba-9b55a9274/",
                        icon: "uil uil-linkedin",
                      },
                      {
                          title: "",
                          subtitle: "",
                          description: "",
                          link: "https://www.facebook.com/throwNewError404/",
                          icon: "uil uil-facebook",
                        }
                ]
            },
            {
                type: "contact",
                title: "Get in touch",
                subtitle: "Contact Me",
                contents: [
                    {
                      title: "Email",
                      subtitle: "marksteven.alba@gmail.com",
                      description: "",
                      link: "mailto:marksteven.alba@gmail.com",
                      icon: "bx bx-mail-send",
                    },
                    {
                        title: "Whatsapp",
                        subtitle: "+639659868434",
                        description: "",
                        link: "",
                        icon: "bx bxl-whatsapp",
                      },{
                        title: "Skype",
                        subtitle: "marksteven.alba@gmail.com",
                        description: "",
                        link: "https://join.skype.com/u2WqPfBW8fRw",
                        icon: "bx bxl-skype",
                      },
                      // {
                      //     title: "Messenger",
                      //     subtitle: "jaybeegeli",
                      //     description: "",
                      //     link: "https://www.facebook.com/jaybeepido/",
                      //     icon: "bx bxl-messenger",
                      //   }
                ]
            },
            {
                type: "about",
                title: "About Me",
                subtitle: "My Introduction",
                description: "I believe that my unique combination of accounting knowledge and Full Stack Development skills allows me to bring added value to any project. My goal is to use my expertise to create cutting-edge accounting tools and systems that streamline financial processes and improve the user experience.",
                link: CV2,
                cover: profileImage,
                contents: [
                    {
                        title: "Experience",
                        subtitle: "5+ Years Working",
                        description: "",
                        link: "",
                        icon: "bx bx-award",
                      },
                      {
                        title: "Completed",
                        subtitle: "10+ projects",
                        description: "",
                        link: "",
                        icon: "bx bx-briefcase-alt",
                      },
                      {
                        title: "Support",
                        subtitle: "Online 24/7",
                        description: "",
                        link: "",
                        icon: "bx bx-support",
                      },
                      {
                        title: "Freelancing",
                        subtitle: "Web Development Projects",
                        description: "Collaborations with multiple private companies",
                        link: "",
                        icon: "bx bx-book",
                      }
                ]
            },
            {
                type: "works",
                title: "Portfolio",
                subtitle: "Most recent works",
                description: "",
                link: "",
                cover: "",
                contents: PROJECTS
            },
            {
              type: "skills",
              title: "Skills",
              subtitle: "My Technical Level",
              description: "",
              link: "",
              cover: "",
              contents: SKILLS
          },{
            type: "services",
            title: "Services",
            subtitle: "What I Offer 🙄",
            description: "",
            link: "",
            cover: "",
            contents: Services
        },{
          type: "qualification",
          title: "Qualification",
          subtitle: "My personal journey",
          description: "",
          link: "",
          cover: "",
          contents: [
            {
              type: "education",
              title: "ASIAN DEVELOPMENT FOUNDATION COLLEGE",
              subtitle: "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION",
              description: "2015-2020",
              link: "",
              cover: "",
              contents: []
            },
            {
              type: "education",
              title: "Leyte National High School",
              subtitle: "Diploma - Secondary",
              description: "2008-2012",
              link: "",
              cover: "",
              contents: []
            },
            {
              type: "experience",
              title: "Highly Succeed",
              subtitle: "Full Stack Developer",
              description: "June 2022 - April 2023",
              link: "https://www.mwell.com.ph/",
              cover: "",
              contents: []
            },
            {
              type: "experience",
              title: "IT MATTERS",
              subtitle: "Web Developer",
              description: "April 2018 - January 2022",
              link: "",
              cover: "",
              contents: []
            }
          ]
      }
    ]
  }
]




