import "./AboutSection.css";

export default function AboutSection() {
    return(
        <div className="about">
            <h1>My Skills</h1>
            <ul className="skills">
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" /></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" /></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" /></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" /></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" /></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"/></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" /></li>
                <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" /></li>
            </ul>
            <br />
            <h1>Contact Me</h1>
            <ul className="contact">
                <li><a href="mailto:liamdraper83@gmail.com">liamdraper83@gmail.com</a></li>
                <li><a href="https://www.linkedin.com/in/liam-draper-/">Linkedin</a></li>
                <li><a href="https://github.com/liamdraper/dune-imperium">GitHub</a></li>
            </ul>
        </div>
    )
}