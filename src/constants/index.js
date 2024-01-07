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
    Unimelb,
    carrent,
    jobit,
    tripguide,
    threejs,
    HKUST,
    UCSD,
    Farmbot,
    Night,
    TCP,
    Camera,
    Helmet,
    Beer,
    Adobe,
    Angular,
    Bootstrap,
    Unity,
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
      title: "Graphics/UI/UX Designer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Game Designer",
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
      name: "Adobe XD",
      icon: Adobe,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Angular",
      icon: Angular,
    },
    {
      name: "Bootstrap",
      icon: Bootstrap,
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
      name: "Unity",
      icon: Unity,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Majored in Computing and Software System",
      company_name: "The University of Melbounre",
      icon: Unimelb,
      iconBg: "#fff",
      date: "Bachelor of Design",
      points: [
        "Learning technical skills such as Data structures and Alogrithms,Operating system and Computer Memory Management system.",
        "Collaborating with teams of students developing group projects that statisfy high quality standard.",
        "Solidfying programming lanaguage skills in Personal Projects and Group projects.",
        "Participating in extracurricular activities that develop real-life skills outside of the coursework.",
      ],
    },
    {
      title: "Data Structure Fundementals",
      company_name: "UC San Diego",
      icon: UCSD,
      iconBg: "#E6DEDD",
      date: "EDX Online Certificates",
      points: [
        "Accuqiring data structure and alogrithm knowledge such trees, graph, stacks, queues, priorities queue.",
        "Applying data structure knowledge in field such as data processing, content structuring etc.",
        "Practicing problem solving skills in analyzing the problems and apply data structure knowledge accordingly.",
      ],
    },
    {
      title: "Front End Web UI Frameworks And Tools: Bootstrap4",
      company_name: "Hong Kong University of Science and Technology",
      icon: HKUST,
      iconBg: "#383E56",
      date: "Coursera Online Certificates",
      points: [
        "Formatting Web componenets using Bootstrap opertations",
        "Applying Javascript expertise to elevate the interactive design.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Arranging UI componenets for the user interfaces to ensure good user experience.",
      ],
    },
    {
      title: "Server-side Development with NodeJS Express and MongoDB",
      company_name: "Hong Kong University of Science and Technology",
      icon: HKUST,
      iconBg: "#E6DEDD",
      date: "Coursera Online Certificates",
      points: [
        "Implementing server side Communication Using Node.js.",
        "Configuring Rest API structures using Express.js for streamined server-client interactions",
        "Learning server side communication and data authentication.",
        "Arranging setup of NoSQL database structures on MongoDB.",
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
      name: "Farmbot Web Application",
      description:
        "A 3D full-fledged Web application that allow users to plant and sow their own plants just like a 3d gardening game, The application is connected to MongoDB database which allow users to record the plant's data and monitering the plant's status. In addition, the app also runs data analysis for the users on their own plants. ",
      tags: [
        {
          name: "MongoDB",
          color: "blue-text-gradient",
        },
        {
          name: "Unity(C#)",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
      ],
      image: Farmbot,
      source_code_link: "https://github.com/mlmstem/new_garden_01",
      additional_link: "https://farmbot-simulator.onrender.com/", // Change to your additional link
      additional_line: "The Deployment website for this project is using free services thus it will take 1-2 minutes for the website to load. Try to refresh the website when needed.",
    },
    {
      name: "Night in the wood",
      description:
        "A online 3D survival game that you have to survive in the forest for 5 minutes to win.For the entire duration, you will be losing hps, and you might be attacked by the enemies(animals). You have to use the items properly, find food (berries) and potentially using shelters so that you might survive till the ends. ",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "blender",
          color: "pink-text-gradient",
        },
      ],
      image: Night,
      source_code_link: "https://github.com/COMP30019/project-2-cvts?tab=readme-ov-file",
      additional_link: "https://comp30019.github.io/project-2-cvts/", // Change to your additional link
    },
    {
      name: "Remote Procedural System Simulator",
      description:
        "This is a Remote Procedural System Mockup that Simulating the operations of the RPC that handling the requests from clients and the response from the servers. This systems allows simutanous connections from the clients, whenever there is an active request sent from the clients, the system will filter the request, and send the requests through the servers and eventually if the request is successfully, the system will process the response and send it back to the clients ",
      tags: [
        {
          name: "C Programming",
          color: "blue-text-gradient",
        },
        {
          name: "Web Architectures",
          color: "green-text-gradient",
        },
        {
          name: "Socket programming",
          color: "pink-text-gradient",
        },
      ],
      image: TCP,
      source_code_link: "https://github.com/mlmstem/comp30023-ass2",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };