import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import HeroSection from "../HeroSection/HeroSection";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import AboutSection from "../../sections/AboutSection/AboutSection";
import Footer from "../../components/Footer/Footer";
import { useRef } from "react";

function App() {

  return (
    <>
      <NavBar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <Footer />
    </>
  );
}

export default App;
