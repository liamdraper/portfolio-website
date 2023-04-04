import "./Footer.css";
import linkedInLogo from "../../logos/LI-Logo.png";
import gitHubLogo from "../../logos/GitHub_Logo_White.png";

export default function Footer() {
    return (
        <footer className="footer">
            <button onClick={() => window.open('https://www.linkedin.com/in/liam-draper-/')}><img src={linkedInLogo} alt=""/></button>
            <button onClick={() => window.open('https://github.com/liamdraper')}><img src={gitHubLogo} alt=""/></button>
        </footer>
    )
}