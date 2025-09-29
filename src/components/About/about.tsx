import React from "react";
import { motion } from "framer-motion";
import "../../styles/About/about.scss";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import Footer from "../Footer/footer";

interface Experience {
  role: string;
  company: string;
  description: string;
}

const AboutSection: React.FC = () => {
  const stackItems: string[] = [
    "Responsive Design",
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Redux Toolkit",
    "UI/UX Design",
    "API Integration",
    "Performance Optimization",
    "Testing & Debugging",
  ];

  const experiences: Experience[] = [
    {
      role: "Front-End Developer",
      company: "1bi0 Technology LLP",
      description: [
        "Converted Figma designs into fully functional, pixel-perfect React applications.",
        "Utilized Sass for modular and maintainable styling.",
        "Leveraged Material-UI (MUI) for efficient component-based development.",
        "Created responsive, interactive, and user-friendly interfaces matching design specifications.",
        "Collaborated closely with designers to implement animations, layout intricacies, and UI components.",
        "Ensured seamless user experience across different devices and browsers."
      ],
    },
  ];


  const rowDirection = ["right", "left", "right"] as const;

  return (
    <section className="about-section">
      <div className="about-header">
        <h1>
          About me<span className="purple-dot">.</span>
        </h1>
        <p>
          “From Figma to flawless React: I build engaging, responsive, and interactive UI experiences using Sass and Material-UI.”
        </p>
      </div>

      <div className="content-wrapper">
        {/* Left Side: My Stack */}
        <div className="stack-container">
          <h2>My Stack.</h2>

          {[0, 1, 2].map((row) => {
            const start = row * 3;
            const end = start + 3;
            const rowItems = stackItems.slice(start, end);
            const direction = rowDirection[row];

            return (
              <motion.div
                key={row}
                className="stack-row"
                animate={{
                  x: direction === "right" ? ["0%", "-100%"] : ["-100%", "0%"],
                }}
                transition={{
                  duration: 6, // adjust speed
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Duplicate the items to make continuous relay */}
                {[...rowItems, ...rowItems].map((item, index) => (
                  <div key={index} className="skill-pill">
                    <StarBorderPurple500Icon />
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>
            );
          })}
        </div>

        {/* Right Side: My Experience */}
        <div className="experience-card-container">
          <h2>My Experience</h2>
          <div className="experience-list-compact">
            {experiences.map((exp, index) => (
              <div className="experience-item-compact" key={index}>
                <h4 className="experience-role-compact">{exp.role}</h4>
                <h3 className="experience-company-compact">{exp.company}</h3>
                <ul className="experience-description-compact">
                  {exp.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
      {/* <Footer/> */}
    </section>
  );
};

export default AboutSection;
