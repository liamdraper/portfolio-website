import "./NavBar.css";
import { useRef } from "react";

export default function NavBar() {

    function handleHomeClick() {
        window.scrollTo(0, 0);
    }

    function handleProjectsClick() {
        window.scrollTo(0, 650);
    } 

    function handleAboutClick() {
        window.scrollTo(0, 3000);
    }


    return (
        <nav>
            <ul className="nav-list">
                <li className="nav-item-logo"><span>Liam Draper</span> Portfolio</li>
                <li onClick={handleHomeClick} className="nav-item">Home</li>
                <li onClick={handleProjectsClick} className="nav-item">Projects</li>
                <li onClick={handleAboutClick} className="nav-item">About Me</li>
            </ul>
        </nav>
    )
}