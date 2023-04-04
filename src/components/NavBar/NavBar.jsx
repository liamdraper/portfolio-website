import "./NavBar.css";
import { useRef } from "react";

export default function NavBar({handleClick}) {


    return (
        <nav>
            <ul className="nav-list">
                <li className="nav-item-logo"><span>Liam Draper</span> Portfolio</li>
                <li className="nav-item">Home</li>
                <li onClick={handleClick} className="nav-item">Projects</li>
                <li className="nav-item">About Me</li>
            </ul>
        </nav>
    )
}