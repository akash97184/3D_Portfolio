import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    sass,
    express,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    starbucks,
    shopify,
    weatherApp,
    shoppingApp,
    devDetective,
    threejs,
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
      title: "Front End Developer",
      icon: mobile,
    },
    {
      title: "MERN Stack Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
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
      name: "Express",
      icon: express,
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Sass",
      icon: sass,
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
  ];
  
  const experiences = [
    {
      title: "SDE Intern",
      company_name: "DesiQna",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2023 - Mar 2023",
      points: [
        " Worked on Major Technical Challenge of tackling 1000s of Spam Registrations and Fake Bot Posts",
        " Included Recaptcha and Google Layer of Protection",
        " Worked on User Verifification, Detecting and removing the Bots.",
        " Tech Stack :- HTML, CSS, Bootstrap, JavaScript, PHP, MySQL. ",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "LetsGrowMore",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Apr 2022",
      points: [
        " Developing and maintaining web applications using React.js and other related technologies.",
        " Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        " Implementing responsive design and ensuring cross-browser compatibility.",
        " Tech Stack :- HTML, CSS, Tailwind Css, JavaScript.",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Baioam Pvt Ltd",
      icon: shopify,
      iconBg: "#383E56",
      date: "Mar 2023 - May 2023",
      points: [
        " Gained valuable experience working in an agile development environment and delivering projects on time collaborated with a cross-functional team and web developers to design user-friendly interfaces.",
        " Practiced in UI development technologies such as HTML, CSS, Redux, and API usage.",
        " Implementing responsive design and ensuring cross-browser compatibility.",
        " Tech Stack :- HTML, CSS, Tailwind CSS, JavaScript, React."
      ],
    },
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
  
  const projects = [
    {
      name: "Weather APP",
      description:
        " Developed a single-page application using React.js to track all types of weather data and display weather forecasts.recasts. Developed a responsive weather app with a user-friendly interface that provides real time weather information for both the users current location and searched cities",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: weatherApp,
      source_code_link: "https://project2-weather-app.netlify.app/",
    },
    {
      name: "Job IT",
      description:
        " Developed a comprehensive Shopping App that offers a user-friendly interface for seamless online shopping experiences. Developed a user-friendly shopping cart system that allows users to easily add and remove items, providing a smooth shopping experience",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: shoppingApp,
      source_code_link: "https://shopping-cart-react-app23.netlify.app/",
    },
    {
      name: "Dev Detective",
      description:
        " Developed a dynamic web application named Dev Detective that enables users to effort lessly retrieve details of any GitHub user by entering their username. Leveraged the GitHub API to fetch a wide range of user data, including repositories, followers, following, contributions.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Context API",
          color: "green-text-gradient",
        },
        {
          name: "Sass",
          color: "pink-text-gradient",
        },
      ],
      image: devDetective,
      source_code_link: "https://dev-detective-project14.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };