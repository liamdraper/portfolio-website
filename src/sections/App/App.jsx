import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import HeroSection from "../HeroSection/HeroSection";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import AboutSection from "../../sections/AboutSection/AboutSection";
import Footer from "../../components/Footer/Footer";
import { useRef } from "react";

function App() {

  const projectsRef = useRef(null);

  function handleClick() {
    // projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    window.scrollTo(0, 650);
} 

  return (
    <>
      <NavBar handleClick={handleClick}/>
      <HeroSection />
      <ProjectsSection ref={projectsRef}/>
      <AboutSection />
      <Footer />
    </>
  );
}

export default App;
