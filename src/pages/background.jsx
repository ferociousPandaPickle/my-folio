import "../component/background.css"
import StackJava from "../component/tech-stack/Java.jsx"
import MongoDB from "../component/tech-stack/MongoDB.jsx"
import SpringBoot from "../component/tech-stack/SpringBoot.jsx"
import Gatling from "../component/tech-stack/Gatling.jsx"

const base = import.meta.env.BASE_URL;

function background() {
    return(
        <div className="background-container">
            <div className="education">
                <div className="university">
                    <img src={`${base}asu.png`} style={{maxWidth: '50%', height: 'auto'}}></img>
                    <div className="order-fix">
                        <h3 style={{fontWeight:'700'}}>
                            Undergraduate at Arizona State University (ASU)
                        </h3>
                        <p style={{fontWeight:'400'}}>
                            Majoring in Computer Science (BS)
                        </p>
                        <p style={{color: '#aaaaaa'}}>
                            2023-2027
                        </p>
                    </div>
                </div>
                <div className="high-school">
                    <img src={`${base}high.jpg`} style={{maxWidth: '50%', height: 'auto'}}></img>
                    <div className="order-fix">
                        <h3 style={{fontWeight:'700'}}>
                            Studied at Ruamrudee International School (High School)
                        </h3>
                            <p style={{fontWeight:'400'}}>
                            International Baccalaureate (IB) Diploma
                        </p>
                        <p style={{color: '#aaaaaa'}}>
                            2019-2023
                        </p>
                    </div>
                </div>
            </div>
            <div className="work-experience">
                <div className="work">
                    <div className="go-down">
                        <img src={`${base}meron.jpg`} style={{maxWidth: '100%', height: 'auto'}}></img>
                        <p>May 2025 - Aug 2025 · 4 mos</p>
                    </div>
                    <div className="order-fix">
                        <h3>Backend Summer Intern</h3>
                        <p>MERON · Internship</p>
                        <ul>
                            <li>Worked primarily with Java, utilizing the Stream and Collection APIs for efficient data processing and manipulation.</li>
                            <li>Contributed to backend development using Spring Boot, focusing on creating robust and scalable RESTful APIs.</li>
                            <li>Worked with MongoDB for data persistence and was involved in writing unit tests to ensure code quality and reliability.</li>
                            <li>Conducted stress testing using the Gatling API as part of performance optimization efforts.</li>
                        </ul>
                        <div className="skills">
                            <StackJava/>
                            <MongoDB/>
                            <SpringBoot/>
                            <Gatling/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} export default background