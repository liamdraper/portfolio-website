import './ProjectsSection.css';
import dunepic from "../../screenshots/duneimperium.png";
import concertspots from "../../screenshots/concertspots.png";
import bjjnotestracker from "../../screenshots/bjjnotestracker.png";

export default function ProjectsSection() {
    return (
        <>
            <h1>Selected Projects</h1>
                <div className="project-card">
                    <section>
                        <h2>DUNE IMPERIUM</h2>
                        <h3>React | Express.js | MongoDB | Node.js</h3>
                        <p>Table-top simulator of the board game Dune Imeperium - a card game/work replacement hybrid</p>
                        <h4 className={"link"} onClick={() => window.open('https://dune-imperium-tts.herokuapp.com/')}>View Project</h4>
                        <h4 className={"link"} onClick={() => window.open('https://github.com/liamdraper/dune-imperium')}>View GitHub</h4>
                    </section>
                    <img src={dunepic} alt="" />
                </div>
                <div className="project-card">
                    <section>
                        <h2>CONCERTSPOTS</h2>
                        <h3>Django | Python | postgresQL | SeatGeek API </h3>
                        <p>Web application for searching and buying tickets through an API</p>
                        <h4 className={"link"} onClick={() => window.open('https://concertspots.herokuapp.com/accounts/login/?next=/')}>View Project</h4>
                        <h4 className={"link"} onClick={() => window.open('https://github.com/liamdraper/concertspots')}>View GitHub</h4>
                    </section>
                    <img src={concertspots} alt="" />
                </div>
                <div className="project-card">
                    <section>
                        <h2>BJJ NOTES TRACKER</h2>
                        <h3>Express.js | JavaScript</h3>
                        <p>Note-taking web application for taking notes, including a calendar scheudler and a flow-chart creator</p>
                        <h4 className={"link"} onClick={() => window.open('https://bjj-notes-tracker.herokuapp.com/')}>View Project</h4>
                        <h4 className={"link"} onClick={() => window.open('https://github.com/liamdraper/BJJ-Notes-Tracker')}>View GitHub</h4>
                    </section>
                    <img src={bjjnotestracker} alt="" />
                </div>
        </>
    )
}