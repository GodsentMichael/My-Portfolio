
import {
    mobile,
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
    meta,
    starbucks,
    tesla,
    shopify,
    yelocode,
    carrent,
    jobit,
    foodBot,
    blog,
    tripguide,
    fpl,
    threejs,
    graphQL,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Developer Advocate",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Technical Writer",
      icon: creator,
    },
    {
      title: "Tech Podcaster",
      icon: creator,
    },
    {
      title: "Community Lead",
      icon: creator,
    },
    {
      title: "Open Source Contributor @Outreachy",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
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
      company_name: "Yelocode Systems",
      icon: yelocode,
      iconBg: "#383E56",
      date: "February 2023 - Present",
      points: [
        "I picked interest in React.js as a frontend framework, and building with it.",
        "Collaborating with other react enthusiasts to develop ecommerce project.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "NodeJs Developer",
      company_name: "YeloCode Systems",
      icon: yelocode,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining backend systems using Node.js and graphQL",
        "Building RESTful APIs and integrating with various databases and external APIs, which explains why and how I built a BLOG API.",
        "Use of relational and non-relational Database (MongoDB, PostgreSQL, MySQL, etc).",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Yelocode Systems",
      icon: yelocode,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using HTML, Bootstrap and Javascript and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create websites.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing as well as getting constructive feedback to/from other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Yelocode Systems",
      icon: yelocode,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "By choice, I'm a backend developer, but as time past and I needed to be able to handle the client-side and server-side of my web apps, it became more pertinent and imperative to learn a frontend framework. So I chose React.js.",
        "Create APIs with Node.js and Express.js, that are efficient and easy to consume by the Client-side.",
        "Implementing responsive design for clients.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Godsent proved me wrong.",
      name: "Edwin Eke",
      designation: "CEO",
      company: "Yelecode Systems",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Godsent does.",
      name: "Akagha Daniel",
      designation: "COO",
      company: "Soft Tech",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      testimonial:
        "After  Godsent optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Chinaza Nwankwo",
      designation: "Business Development Manager",
      company: "Port Harcourt Paints",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "GraphQL API",
      description:
        "In my bid to improve and effectively provide data via APIs, that can be easily consumed by frontend Engineers I built a graphQL API, this taught me a lot.",
      tags: [
        {
          name: "Nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
      ],
      image: graphQL,
      source_code_link: "https://github.com/GodsentMichael/GraphQL-App",
    },
    {
      name: "foodBot",
      description:
        "As part of the prerequisite to graduate from ALtschool Africa, we were asked to build a chatbot that helps users find restaurants and food recipes as our capstone project",
      tags: [
        {
          name: "Socket.io",
          color: "blue-text-gradient",
        },
        {
          name: "RESTapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: foodBot,
      source_code_link: "https://github.com/GodsentMichael/Restaurant-chatbot",
    },
    {
      name: "Fantasy Football App",
      description:
        "As a football lover, I and my friend created a Fantasy football web app for University students who loved football. So they can compete amongst each department/faculty .",
      tags: [
        {
          name: "Nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Vuejs",
          color: "pink-text-gradient",
        },
      ],
      image: fpl,
      source_code_link: "https://github.com/GodsentMichael/FPL_App",
    },
    {
      name: "Blog API",
      description:
        "A Blog API Project, with supercool😎 standard features like that of hashnode and medium💪. The owner of a blog is gotten from the user.id and the author is generated from the signup details provided by the user.And the features and more features that I could share in the interview...😉",
      tags: [
        {
          name: "Nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
      ],
      image: blog,
      source_code_link: "https://github.com/GodsentMichael/BloggingAPI",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };