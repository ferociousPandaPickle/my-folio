import "../component/project.css"
import Type1 from "../component/type/opensource.jsx"
import Type2 from "../component/type/closedsource.jsx"
import Type3 from "../component/type/personal.jsx"
import Type4 from "../component/type/school.jsx"

import Working from "../component/type/Working.jsx"

import ReactStack from "../component/tech-stack/React.jsx"
import CSStack from "../component/tech-stack/CSS.jsx"
import JavascriptStack from "../component/tech-stack/Javascript.jsx"
import ViteStack from "../component/tech-stack/Vite.jsx"
import Hugging from "../component/tech-stack/Hugging.jsx"
import Discord from "../component/tech-stack/Discord.jsx"
import Spotify from "../component/tech-stack/Spotify.jsx"
import Tailwind from "../component/tech-stack/Tailwind.jsx"
import Java from "../component/tech-stack/Java.jsx"
import JavaFX from "../component/tech-stack/JavaFx.jsx"
import GameMaker from "../component/tech-stack/Gamemaker.jsx"
import Python from "../component/tech-stack/Python.jsx"
import Flask from "../component/tech-stack/Flask.jsx"
import MongoDB from "../component/tech-stack/MongoDB.jsx"

import VRM from "../component/tech-stack/VRM.jsx"
import Tauri from "../component/tech-stack/Tauri.jsx"
import TypeScript from "../component/tech-stack/TypeScript.jsx"
import ThreeJS from "../component/tech-stack/ThreeJs.jsx"
import Express from "../component/tech-stack/Express.jsx"
import Groq from "../component/tech-stack/Groq.jsx"

const base = import.meta.env.BASE_URL;

function projects(){
    return(
        <div className="project-container">
            <div className="project-box">
                <div className="top-title">
                    <div className="title"> My-Website</div>
                    <div className="types">
                       <Type3/>
                       <Type1/> 
                    </div>
                </div>
                <div className="mid-demo">
                    <img src={`${base}webpageimg.png`} style={{maxWidth: '100%', height: 'auto'}}></img>
                </div>
                <div className="project-sum">
                    <p>
                        A personal portfolio website built to showcase my projects, 
                        interests, and background in software engineering. Features 
                        a clean dark-themed UI with custom styling and responsive layout.
                    </p>
                </div>
                <div className="bot-tech-stack">
                    <div className="stack">
                        <ReactStack/>
                        <JavascriptStack/>
                        <CSStack/>
                        <ViteStack/>
                    </div>
                </div>
            </div>
            <div className="project-box">
                <div className="top-title">
                    <div className="title"> Discord-Bot</div>
                    <div className="types">
                       <Type3/>
                       <Type2/> 
                    </div>
                </div>
                <div className="mid-demo">
                    <img src={`${base}discobot.png`} style={{maxWidth: '100%', height: 'auto'}}></img>
                </div>
                <div className="project-sum">
                    <p>
                        A Discord bot that responds to user queries using AI. 
                        Connects to Hugging Face's Llama model to generate 
                        intelligent responses with adjustable message length. 
                        Listens in a designated channel and supports command-based 
                        interaction with a custom prefix. Built with memory 
                        tracking to maintain context across conversations.
                    </p>
                </div>
                <div className="bot-tech-stack">
                    <div className="stack">
                        <JavascriptStack/>
                        <Discord/>
                        <Hugging/>
                    </div>
                </div>
            </div>
            <div className="project-box">
                <div className="top-title">
                    <div className="title"> Audio-Singularity</div>
                    <div className="types">
                       <Type3/>
                       <Type2/> 
                    </div>
                </div>
                <div className="mid-demo">
                    <img src={`${base}spotify.png`} style={{maxWidth: '100%', height: 'auto'}}></img>
                </div>
                <div className="project-sum">
                    <p>
                        A Spotify-powered web app that displays your most-listened 
                        songs, top artists, and personalized listening data. Uses 
                        OAuth authentication to securely connect to your Spotify 
                        account and pull real-time music stats. Built with a 
                        responsive layout and reusable components for smooth 
                        cross-device usability.
                    </p>
                </div>
                <div className="bot-tech-stack">
                    <div className="stack">
                        <ReactStack/>
                        <JavascriptStack/>
                        <CSStack/>
                        <ViteStack/>
                        <Spotify/>
                        <Tailwind/>
                    </div>
                </div>
            </div>
            <div className="project-box">
                <div className="top-title">
                    <div className="title"> CSE-360-Class-Project</div>
                    <div className="types">
                       <Type4/>
                    </div>
                </div>
                <div className="mid-demo">
                    <img src={`${base}360.png`} style={{maxWidth: '100%', height: 'auto'}}></img>
                </div>
                <div className="project-sum">
                    <p>
                        Built a Java desktop application using JavaFX with role-based access control 
                        for Admin, Staff, and Student users. Admins manage users and invitation codes, 
                        Staff create assignments and grade submissions, and Students post in discussion 
                        threads and comment on peers. Features a secure login with invitation-based registration.
                    </p>
                </div>
                <div className="bot-tech-stack">
                    <div className="stack">
                        <Java/>
                        <JavaFX/>
                    </div>
                </div>
            </div>
            <div className="project-box">
                <div className="top-title">
                    <div className="title"> Slug-Hero</div>
                    <div className="types">
                        <Type3/>
                        <Type4/>
                    </div>
                </div>
                <div className="mid-demo">
                    <video src={`${base}slug.mp4`} autoPlay muted loop style={{maxWidth: '100%', height: 'auto'}}></video>
                </div>
                <div className="project-sum">
                    <p>
                        Developed a 2D side-scrolling arcade shooter inspired by Metal Slug using GameMaker. 
                        Implemented player movement, shooting mechanics, enemy AI, and level progression. 
                        Graphics and sprites were sourced externally.
                    </p>
                </div>
                <div className="bot-tech-stack">
                    <div className="stack">
                        <GameMaker/>
                    </div>
                </div>
            </div>
            <div className="project-box">
                <div className="top-title">
                    <div className="title" style={{fontSize:'15px'}}> Champion Recomender</div>
                    <div className="types">
                        <Type3/>
                        <Type2/>
                    </div>
                </div>
                <div className="mid-demo" style={{margin:'auto'}}>
                    <img src={`${base}league.png`} style={{maxWidth: '100%', height: 'auto'}}></img>
                </div>
                <div className="project-sum">
                    <p>
                        A full-stack web app that takes a player's username and tagline from League of Legends, 
                        pulls their match history and stats through the Riot API, analyzes their playstyle, 
                        and recommends champions based on their performance data.
                        Built with a React Vite frontend and Python Flask backend with MongoDB for data storage.
                    </p>
                </div>
                <div className="bot-tech-stack">
                    <div className="stack">
                        <Python/>
                        <Flask/>
                        <ReactStack/>
                        <ViteStack/>
                        <JavascriptStack/>
                        <MongoDB/>
                    </div>
                </div>
            </div>
            <div className="project-box">
                <div className="top-title">
                    <div className="title" style={{fontSize:'15px'}}> Vrm-Chat</div>
                    <div className="types">
                        <Type3/>
                        <Type2/>
                    </div>
                </div>
                <div className="mid-demo" style={{margin:'auto'}}>
                    <img src={`${base}vtube.png`} style={{maxWidth: '100%', height: 'auto'}}></img>
                </div>
                <div className="project-sum">
                    <p>
                        A desktop app that lets you chat with an animated 3D companion through text, 
                        complete with spoken replies and lip-synced responses. Built with a React + Tauri frontend, 
                        an Express backend connecting to the Groq API for conversational responses, 
                        and Three.js / VRM for rendering and animating the character.
                    </p>
                </div>
                <div className="bot-tech-stack">
                    <div className="stack">

                        <ReactStack/>
                        <ViteStack/>
                        <JavascriptStack/>
                        <VRM/>
                        <TypeScript/>
                        <Groq/>
                        <Express/>
                        <Tauri/>
                        <ThreeJS/>

                    </div>
                </div>
            </div>
        </div>
    )
}export default projects