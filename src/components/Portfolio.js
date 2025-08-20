import React from 'react';
import './Portfolio.css'; // Ensure CSS file is linked
import project1Image1 from '../images/project1Image1.png';
import project1Image2 from '../images/2.png';
import project1Image3 from '../images/3.png';
import project1Image4 from '../images/4.png';
import project1Image5 from '../images/5.png';
import project1Image6 from '../images/6.png';
import project1Image7 from '../images/7.png';
import project1Image8 from '../images/8.png';
import project1Image8 from '../images/9.png';
const projects = [

  {
  title: "Food_Delivery_Website ",
    description: "A modern accommodation booking application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to browse available rooms, view details, and book accommodations seamlessly. Key features include:",
    images: [project1Image9],
    liveDemo: "https://frontend-eight-xi-77.vercel.app/",
    githubLink: "https://github.com/Abincleetus007/frontend",
  
  },
  {
    title: "Food_Delivery_Website ",
    description: " A modern food delivery application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to browse food items, add them to a cart, and place orders seamlessly. Key features include user authentication and secure payment integration",
    images: [project1Image8],
    liveDemo: "https://foodie-hub-website.netlify.app/",
    githubLink: "https://github.com/Abincleetus007/Food_delivery_app",
  },
  {
    title: "Rolex Watches  ",
    description: "Rolex Watches project! This is a beautifully designed landing page for Rolex watches, crafted using HTML & CSS to showcase luxury, elegance, and sophistication.",
    images: [project1Image1],
    liveDemo: "https://abincleetus007.github.io/rolex_watches-html-css-/",
    githubLink: "https://github.com/Abincleetus007/rolex_watches-html-css-",
  },
  {
    title: "Calculator",
    description: "A Welcome to the Calculator project! This is a simple yet elegant calculator built using HTML, CSS, and JavaScript.",
    images: 
      [project1Image2],
    liveDemo: "https://abincleetus007.github.io/Calculator-using-html-css-js-/",
    githubLink: "https://github.com/Abincleetus007/Calculator-using-html-css-js-",
  },
  {
    title: "Fishy",
    description: "Welcome to the Fishy Product Page! This project showcases a beautifully designed product landing page for an aquatic-themed store, built using HTML, CSS, and JavaScript.",
    images: [project1Image3],
    liveDemo: "https://abincleetus007.github.io/fishy/",
    githubLink: "https://github.com/Abincleetus007/fishy",
  },
  {
    title: "PIZZA's Pizzeria",
    description: "Welcome to PIZZA's Pizzeria, an online pizza ordering platform built with React and styled with CSS. This website allows users to browse different pizza options, customize their orders, and place orders online. It’s designed to be a simple and efficient way to order pizza from PIZZA's Pizzeria.",
    images: [project1Image4
    ],
    liveDemo: "https://capable-scone-1c7587.netlify.app/",
    githubLink: "https://github.com/Abincleetus007/React-project",
  },
  {
    title: "Netflix Clone",
    description: "This is a Netflix clone web application built with React, CSS, and integrated with The Movie DB (TMDb) API. It provides a user-friendly interface where users can browse, search, and explore movies and TV shows.",
    images: [project1Image5],
    liveDemo: "https://net-flix-743829.netlify.app/",
    githubLink: "https://github.com/Abincleetus007/Netflix-Clone",
  },
  {
    title: "Blog Application",
    description: "The Blog App is a full-stack web application that allows users to create, read, update, and delete blog posts. It provides a seamless and interactive experience for users to share their thoughts, opinions, and knowledge through a user-friendly interface.",
    images: [project1Image6],
    liveDemo: "https://incomparable-panda-e6d6cc.netlify.app/",
    githubLink: "https://github.com/Abincleetus007/blog_app",
  },
  {
    title: "My Portfolio",
    description: "Welcome to my portfolio website, a showcase of my skills and projects as a MERN stack developer. Here, you'll find my latest work, including web applications, full-stack projects, and technical solutions. With expertise in MongoDB, Express.js, React.js, and Node.js, I specialize in building scalable, efficient, and user-friendly applications. Explore my portfolio to see how I bring ideas to life through clean code, modern design, and innovative technology.",
    images: [project1Image7],
    liveDemo: "https://portfolio-xt52.vercel.app/",
    githubLink: "https://github.com/Abincleetus007/Portfolio",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-images">
              {project.images.map((image, i) => (
                <img key={i} src={image} alt={`${project.title} ${i + 1}`} />
              ))}
            </div>
            <div className="project-links">
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
