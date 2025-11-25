import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const roles = useMemo(() => [
    'MERN Stack Developer',
    'Full Stack Developer',
    'Web Developer',
    'React Developer'
  ], []);

  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      const currentFullRole = roles[roleIndex];

      if (!isDeleting && charIndex < currentFullRole.length) {
        setCurrentRole(currentFullRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentRole(currentFullRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentFullRole.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

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
    <div className="home">
      {/* Particle Background */}
      <div className="particles-container">
        <canvas id="particles-canvas"></canvas>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">PORTFOLIO</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <Link to="/portfolio">Work</Link>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-name">ABIN CLEETUS</h1>
        <div className="typing-container">
          <span className="typing-text">{currentRole}</span>
          <span className="cursor">|</span>
        </div>
        <Link to="/portfolio" className="cta-button">View My Work</Link>
      </div>

      {/* About Me Section */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate MERN Stack Developer who loves creating dynamic and scalable web applications.
          With a problem-solving mindset and a focus on clean, efficient code, I continuously explore new
          technologies to build better and smarter solutions.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2>My Skills</h2>
        <div className="skill-logos">
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="skill-logo" />
            <span>HTML5</span>
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="skill-logo" />
            <span>CSS3</span>
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="skill-logo" />
            <span>JavaScript</span>
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="skill-logo" />
            <span>MongoDB</span>
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="skill-logo" />
            <span>Express.js</span>
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="skill-logo" />
            <span>React</span>
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="skill-logo" />
            <span>Node.js</span>
          </div>
          <div className="skill-item">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="skill-logo" />
            <span>GitHub</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <h2>Contact Me</h2>
        <p>Let's connect! Feel free to reach out to me.</p>
        <div className="social-links">
          <a href="https://github.com/Abincleetus007" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/abin-cleetus-1b9143277/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="mailto:abincletus007@gmail.com">
            <i className="fas fa-envelope"></i> Email
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
