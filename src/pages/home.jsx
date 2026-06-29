import SpeakiArt from "../component/art.txt?raw"
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { ImStatsBars2 } from "react-icons/im";


import "../component/home.css"

function home(){
    return (
        <div className="home-container">
            <div style={{display:'flex', gap: '20px'}}>
                <div className="pfp">
                    <pre>{SpeakiArt}</pre>
                </div>
                <div className="you-summary">
                    <div className="summary-edit">
                        <h1>Pranav Kadiyam</h1>
                        <h2>Software Engineer | Robotics & ML</h2>
                        <p>
                            I'm a developer passionate about robotics, machine learning, 
                            and computer vision.
                        </p>
                        <p>
                            I love building systems that can see, 
                            think, and interact with the real world.
                        </p>
                        <p>Interested in ML, robotics, or computer vision? Let's connect.</p>
                    </div>
                </div>
            </div>
            <div className="bottom-contacts">
                <a href="https://github.com/ferociousPandaPickle" target="blank" style={{textDecoration: 'none', color: 'inherit'}}>
                    <div className="button-1">
                        Check out My Github Page <FaGithubSquare size={30}/>
                    </div>
                </a>
                <a href="mailto:pranavkadiyam777@gmail.com" target="blank" style={{textDecoration: 'none', color: 'inherit'}}>
                    <div className="button-1">
                        Here is my Gmail <SiGmail  size={30}/>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/pkadiyam/" target="blank" style={{textDecoration: 'none', color: 'inherit'}}>
                    <div className="button-1">
                        Check out My Linkedin <FaLinkedin   size={30}/>
                    </div>
                </a>
            </div>
        </div>
        
    )
} export default home