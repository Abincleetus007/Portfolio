import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, I'm <strong>Abin Cleetus</strong>,<br /> a passionate <strong>MERN Stack Developer</strong>.
        I love building modern web applications with clean and scalable code.
      </p>

      {/* Portfolio Button */}
      <Link to="/portfolio" className="portfolio-button">
        View Projects
      </Link>

      {/* About Me Section */}
      <div className="about">
        <h2>About Me</h2>
        <p>
          "I am a passionate MERN Stack Developer who loves creating dynamic and scalable web applications. With a problem-solving mindset and a focus on clean, efficient code, I continuously explore new technologies to build better and smarter solutions."
        </p>
      </div>

      {/* Skills Section */}
      <div className="skills">
        <h2>My Skills</h2>
        <div className="skill-logos">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="skill-logo" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="skill-logo" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="skill-logo" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="skill-logo" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="skill-logo" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="skill-logo" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="skill-logo" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="skill-logo" />
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <h2>Contact Me</h2>
        <p>Let's connect! Feel free to reach out to me.</p>
        <div className="social-links">
          <a href="https://github.com/Abincleetus007" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/abin-cleetus-1b9143277/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:abincletus007@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
