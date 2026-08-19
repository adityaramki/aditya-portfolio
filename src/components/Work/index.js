import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const Work = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [expandedCard, setExpandedCard] = useState(null)
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => clearTimeout(timeoutId);
    }, []);
    
    const toggleCard = (cardId) => {
        setExpandedCard(expandedCard === cardId ? null : cardId);
    };

    const workExperiences = [
        {
            id: 1,
            company: "Capital One",
            position: "Software Engineer Intern - Business Risk Operations",
            location: "Plano, Texas",
            duration: "June 2026 - Aug 2026",
            description: "• Built an end-to-end <strong>RAG</strong> pipeline indexing <strong>3,700+</strong> regulatory requirements in <strong>Chroma</strong>, using semantic retrieval and <strong>GPT-OSS-120B</strong> to generate compliance questions, reducing requirement applicability mapping time by <strong>85%</strong>\n\n• Engineered an adapter pipeline to ingest business process data from <strong>Snowflake</strong> into the compliance questionnaire platform, enabling automated population of questionnaire answers and saving <strong>2,200+</strong> hours annually\n\n• Designed a <strong>FastAPI</strong> validation service for AI-generated compliance questions, using a human-in-the-loop framework to flag low-quality questions and escalate them for review, improving question generation reliability by <strong>70%</strong>",
            technologies: ["RAG", "Chroma", "FastAPI", "Snowflake", "Python", "LLMs"]
        },
        {
            id: 2,
            company: "Humana",
            position: "Software Engineer Intern - Enterprise AI",
            location: "Remote",
            duration: "May 2025 - Dec 2025",
            description: "• Developed a GenAI <strong>REST API</strong> service using <strong>FastAPI</strong> and <strong>Python</strong> to generate custom summaries of healthcare documents via Humana's <strong>Large Language Model (LLM) Gateway</strong>, streamlining analysis for <strong>10+</strong> teams\n\n• Implemented a <strong>Pytest</strong> framework to validate a GenAI summarization API (<strong>85%</strong> code coverage), containerized the service with <strong>Docker</strong>, and supported deployment to <strong>Azure Kubernetes Service (AKS)</strong> for scalable delivery\n\n• Created a <strong>FastAPI</strong> service leveraging Microsoft <strong>Azure's Text-to-Speech</strong> to convert SVP meeting transcripts into synthetic-voice podcasts, improving accessibility to executive communication for <strong>10,000+</strong> employees\n\n• Built backend for <strong>ScrumMate</strong>, a GenAI stand-up reporting tool at Humana's IT Intern Hackathon, using <strong>FastAPI</strong>, <strong>Python</strong>, and <strong>LLMs</strong>, extracting blockers and key topics from <strong>8+</strong> meetings and reducing reporting time by <strong>80%</strong>",
            technologies: ["Python", "FastAPI", "REST APIs", "LLMs", "Docker", "Pytest", "Azure"]
        },
        {
            id: 3,
            company: "180 Degrees Consulting MSU",
            position: "Project Manager / Technology Chair",
            location: "East Lansing, MI",
            duration: "Feb 2025 - Present",
            description: "• Conceptualized and created a proof-of-concept university-exclusive reselling platform for MSU students using <strong>ReactJS</strong> and <strong>Firebase</strong>, visualizing the market opportunity and projecting revenue of up to <strong>$98,000/yr</strong>\n\n• Led the development of a <strong>ReactJS</strong> website for a local trucking company in a team of <strong>4</strong>, deployed on <strong>Vercel</strong>, increasing quote request submissions by <strong>25%</strong> through improved UX design and optimized CTAs",
            technologies: ["ReactJS", "Firebase", "Vercel", "Project Management", "UX Design"]
        }
    ];

    return (
        <>
            <div className='container work-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass} 
                            strArray={['W', 'o', 'r', 'k', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                            idx={10}
                        />
                    </h1>
                    <p>Here's a summary of my professional experience and internships. From building AI-driven compliance tooling at Capital One, to developing GenAI services at Humana, to leading technology strategy at 180 Degrees Consulting, I've had a diverse set of experiences that have helped me grow as a software engineer and professional.</p>
                    
                    <div className='work-experiences'>
                        {workExperiences.map((experience) => (
                            <div 
                                key={experience.id} 
                                className={`work-card ${expandedCard === experience.id ? 'expanded' : ''}`}
                                onClick={() => toggleCard(experience.id)}
                            >
                                <div className='work-header'>
                                    <div className='work-title'>
                                        <h3>{experience.position}</h3>
                                        <div className='company-info'>
                                            <FontAwesomeIcon icon={faBuilding} color="#ffffff" />
                                            <span>{experience.company}</span>
                                        </div>
                                    </div>
                                    <div className='work-meta'>
                                        <div className='work-duration'>
                                            <FontAwesomeIcon icon={faCalendarAlt} color="#ffffff" />
                                            <span>{experience.duration}</span>
                                        </div>
                                        <div className='work-location'>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} color="#ffffff" />
                                            <span>{experience.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`work-content ${expandedCard === experience.id ? 'expanded' : ''}`}>
                                    <div className='work-description'>
                                        <p dangerouslySetInnerHTML={{ __html: experience.description }}></p>
                                    </div>
                                    <div className='work-technologies'>
                                        {experience.technologies.map((tech, index) => (
                                            <span key={index} className='tech-tag'>{tech}</span>
                                        ))}
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

export default Work 