import { useState, type JSX } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/nav";
import Home from "./components/Home/home";
import Project from "./components/Project/project";
import AboutMe from "./components/About/about";
import "./App.css";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
// import Footer from "./components/Footer/footer";
function App(): JSX.Element {
  // Example state (if you don’t need it, you can remove it)
  const [] = useState<number>(0);

  return (
    <Router>
      {/* Navbar is always visible */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
