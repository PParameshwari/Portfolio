import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../../styles/project/project.scss";
import img from '../../assets/Project/1bi0.png';
import img1 from '../../assets/Project/illampirai.png';

const projects = [
  {
    id: 1,
    title: "Company site",
    description: [
      "Developed a fully responsive company website to showcase services and solutions effectively.",

      "Implemented React, Redux, and SCSS for dynamic UI and efficient state management.",

      "Optimized performance and accessibility across devices for a smooth user experience."
    ],
    image: img,
    tech: ["React", "Redux", "SCSS","Mui"],
    link: "https://www.1bi0.com/"
  },
  {
    id: 2,
    title: "Healthcare Website",
    description: [
      "Developed and deployed a fully responsive website to enhance user engagement and improve accessibility for hearing solution services…",
      "Ensured seamless cross-device compatibility through efficient responsive design techniques…",
      "Collaborated with the team to implement new features and optimize website performance…"
    ],
    image: img1,
    tech: ["Html", "Css", "Php"],
    link: "https://ilampiraihearingsolutions.com/"
  }
];
interface ProjectDescriptionProps {
  description: string[];
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ description }) => {

  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < description.length) {
      const timer = setTimeout(() => setVisibleCount(visibleCount + 1), 600);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, description.length]);

  return (
    <ul className="project-description">
      {description.slice(0, visibleCount).map((point, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          {point}
        </motion.li>
      ))}
    </ul>
  );
};

const ProjectSection = () => {
  return (
    <section className="projects" id="projects">
      <div className="tittle">
        <h1 className="projects-title">My <span>Best</span> Creations</h1>
        <h2 className="sub-tittle">I love transforming ideas into interactive web applications. These projects highlight my expertise in building responsive interfaces, optimizing performance, and crafting designs that delight users across devices.</h2>
      </div>
      <div className="projects-flex">
        {projects.map((project) => (
          <motion.div
            className="project-card"
            key={project.id}
            whileHover={{ scale: 1.05, rotateX: 3, rotateY: -3 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="project-img-wrapper">
              <img src={project.image} alt={project.title} className="project-img" />
              <motion.div
                className="overlay"
                whileHover={{ opacity: 0.2 }}
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <ProjectDescription description={project.description} />
              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.2, backgroundColor: "#00bfa5" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" className="btn">
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      {/* <Footer/> */}
    </section>
  );
};

export default ProjectSection;
