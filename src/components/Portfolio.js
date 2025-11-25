import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import project1Image1 from '../images/project1Image1.png';
import project1Image2 from '../images/2.png';
import project1Image3 from '../images/3.png';
import project1Image4 from '../images/4.png';
import project1Image5 from '../images/5.png';
import project1Image6 from '../images/6.png';
import project1Image7 from '../images/7.png';
import project1Image8 from '../images/8.png';
import project1Image9 from '../images/9.png';
import project1Image10 from '../images/Screenshot_20251030-093126.Chrome.jpg';
import project1Image11 from '../images/img11.jpg';

const projects = [
  {
    title: "Crystal Builders",
    description: "This is a modern web application built with the MERN stack (React.js). It's designed to provide a polished, responsive front-end, and is an excellent showcase of current web-development best practices.",
    images: [project1Image11],
    liveDemo: "https://test-five-steel-23.vercel.app/",
    githubLink: "https://github.com/Abincleetus007/test",
  },
  {
    title: "HireLoop",
    description: "HireLoop is a modern vehicle management and booking application built using the MERN stack (React.js). It provides a seamless platform for users to explore available vehicles, compare options, and make reservations effortlessly",
    images: [project1Image10],
    liveDemo: "https://drive-gamma-ten.vercel.app/",
    githubLink: "https://github.com/Abincleetus007/drive",
  },
  {
    title: "BookABed",
    description: "A modern accommodation booking application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to browse available rooms, view details, and book accommodations seamlessly. Key features include:",
    images: [project1Image9],
    liveDemo: "https://frontend-eight-xi-77.vercel.app/",
    githubLink: "https://github.com/Abincleetus007/frontend",
  },
  {
    title: "Food_Delivery_Website",
    description: "A modern food delivery application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to browse food items, add them to a cart, and place orders seamlessly. Key features include user authentication and secure payment integration",
    images: [project1Image8],
    liveDemo: "https://foodie-hub-website.netlify.app/",
    githubLink: "https://github.com/Abincleetus007/Food_delivery_app",
  },
  {
    title: "Rolex Watches",
    description: "Rolex Watches project! This is a beautifully designed landing page for Rolex watches, crafted using HTML & CSS to showcase luxury, elegance, and sophistication.",
    images: [project1Image1],
    liveDemo: "https://abincleetus007.github.io/rolex_watches-html-css-/",
    githubLink: "https://github.com/Abincleetus007/rolex_watches-html-css-",
  },
  {
    title: "Calculator",
    description: "A Welcome to the Calculator project! This is a simple yet elegant calculator built using HTML, CSS, and JavaScript.",
    images: [project1Image2],
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
    description: "Welcome to PIZZA's Pizzeria, an online pizza ordering platform built with React and styled with CSS. This website allows users to browse different pizza options, customize their orders, and place orders online. It's designed to be a simple and efficient way to order pizza from PIZZA's Pizzeria.",
    images: [project1Image4],
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
  // Particle animation effect
  useEffect(() => {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000));
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    }

    resizeCanvas();
    initParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="portfolio">
      {/* Particle Background */}
      <div className="particles-container">
        <canvas id="particles-canvas"></canvas>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">PORTFOLIO</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <a href="/#about">About</a>
          <a href="/#skills">Skills</a>
          <Link to="/portfolio">Work</Link>
          <a href="/#contact">Contact</a>
        </div>
      </nav>

      {/* Projects Section */}
      <div className="portfolio-content">
        <h1 className="portfolio-title">My Projects</h1>
        <p className="portfolio-subtitle">Explore my latest work and creative solutions</p>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-container">
                {project.images.map((image, i) => (
                  <img key={i} src={image} alt={`${project.title} ${i + 1}`} className="project-image" />
                ))}
              </div>
              <div className="project-content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
