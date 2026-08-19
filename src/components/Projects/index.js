import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt as faExternalLink } from '@fortawesome/free-solid-svg-icons'
import minskoffImage from '../../assets/images/minskoff.jpg'
import salesForecastingImage from '../../assets/images/salesforecasting.jpeg'
import scrumMateLogo from '../../assets/images/scrummatelogo.png'
import candorImage from '../../assets/images/candorimage.jpeg'
import careerRiseImage from '../../assets/images/careerrise.JPG'

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => clearTimeout(timeoutId);
    }, []);

        const projects = [
        {
            id: 1,
            title: "Candor",
            description: "An edge-native mobile app built at the Qualcomm x Google Developer Hackathon that uses LiteRT to run on-device LLMs, letting recovering addicts track substance abuse patterns with 100% data privacy. Offloads LLM inference to the NPU and uses a Gemma 4 E2B model to analyze historical recovery logs, generating behavioral insights in under 3 seconds.",
            githubUrl: "https://github.com/adityaramki/Candor",
            technologies: ["LiteRT", "Gemma 4 E2B", "Kotlin", "On-Device AI"],
            image: candorImage
        },
        {
            id: 2,
            title: "CareerRise Advance",
            description: "A full-stack web app built at JPMorgan Chase's Code for Good Hackathon to visualize county-level economic mobility with a React Leaflet heatmap. Uses a FastAPI backend and SQLite database to analyze unemployment, education, rent burden, and income data across 29+ counties for nonprofit stakeholders.",
            githubUrl: "https://github.com/cfgcolumbus25/Team-2",
            technologies: ["ReactJS", "FastAPI", "SQLite", "GeoJSON"],
            image: careerRiseImage
        },
        {
            id: 3,
            title: "ScrumMate: An AI Project Manager",
            description: "My team and I developed ScrumMate at the Humana 2025 IT Intern Hackathon. It's a GenAI stand-up reporting tool that displays a dashboard of insights ranging from blockers to key topics from stand-up team meetings along with metrics like individual participation.",
            githubUrl: "#",
            technologies: ["FastAPI", "Next.js", "LLMs", "TailwindCSS", "Supabase", "Transcription"],
            image: scrumMateLogo,
            logoClass: "scrummate-logo"
        },
        {
            id: 4,
            title: "MSU Broad RAG Chatbot",
            description: "A Retrieval-Augmented Generation chatbot designed to answer questions about the Michigan State University Broad Building using LangChain, ChromaDB, and OpenAI GPT.",
            githubUrl: "https://github.com/adityaramki/msu-broad-rag",
            technologies: ["Python", "LangChain", "ChromaDB", "OpenAI", "RAG"],
            image: minskoffImage
        },
        {
            id: 5,
            title: "Sales Forecaster",
            description: "A simple predictive model using sktime forecasting to predict future sales/outputs given time series data from CSV files.",
            githubUrl: "https://github.com/adityaramki/sktime-forecaster",
            technologies: ["Python", "sktime", "Time Series", "Forecasting"],
            image: salesForecastingImage
        }
    ];

    return (
        <>
            <div className='container projects-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass} 
                            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx={10}
                        />
                    </h1>
                    <p>Here are some of my recent projects. Click on any project to view the source code on GitHub.</p>
                    
                    <div className='projects-gallery'>
                        {projects.map((project) => (
                            <div key={project.id} className='project-card'>
                                <div className='project-image'>
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className={`project-image ${project.logoClass || ''}`}
                                        />
                                    ) : (
                                        <div className='placeholder-image'>
                                            <FontAwesomeIcon icon={faGithub} color="#ffffff" size="2x" />
                                        </div>
                                    )}
                                </div>
                                <div className='project-content'>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className='project-technologies'>
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className='tech-tag'>{tech}</span>
                                        ))}
                                    </div>
                                    <div className='project-links'>
                                        {project.githubUrl !== "#" && (
                                            <a 
                                                href={project.githubUrl} 
                                                target="_blank" 
                                                rel="noreferrer" 
                                                className='project-link'
                                            >
                                                <FontAwesomeIcon icon={faGithub} color="#000000" />
                                                <span>View on GitHub</span>
                                                <FontAwesomeIcon icon={faExternalLink} color="#000000" />
                                            </a>
                                        )}
                                        {project.video && (
                                            <a 
                                                href={project.video} 
                                                target="_blank" 
                                                rel="noreferrer" 
                                                className='project-link video-link'
                                            >
                                                <FontAwesomeIcon icon={faExternalLink} color="#000000" />
                                                <span>Watch Demo</span>
                                                <FontAwesomeIcon icon={faExternalLink} color="#000000" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Loader type='line-scale-pulse-out' color="#16eec0"/>
        </>
    )
}

export default Projects