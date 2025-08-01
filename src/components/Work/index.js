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
            company: "Humana",
            position: "Software Engineering Intern",
            location: "Remote",
            duration: "Summer 2025",
            description: "• Built backend for a GenAI stand-up reporting tool at the Humana IT Intern Hackathon using <strong>FastAPI</strong>, <strong>Python</strong>, and <strong>LLMs</strong>, extracting blockers and key topics from <strong>8+</strong> meetings and reducing reporting time by <strong>80%</strong>\n\n• Developed a GenAI <strong>REST API</strong> service using <strong>FastAPI</strong> and <strong>Python</strong> to generate custom summaries of healthcare documents via Humana's <strong>Large Language Model (LLM) Gateway</strong>, streamlining analysis for <strong>10+</strong> teams\n\n• Tested a GenAI summarization service using <strong>Pytest</strong> (<strong>85%</strong> code coverage), containerized the application with <strong>Docker</strong>, and supported deployment to <strong>Azure Kubernetes Service (AKS)</strong> for reliable and scalable delivery\n\n• Moderated a fireside chat with <strong>100+</strong> attendees, developing strategic questions and leading a live discussion with Humana's SVP of Enterprise AI to explore the role of human-centered AI in transforming healthcare operations",
            technologies: ["Python", "FastAPI", "REST APIs", "LLMs", "Docker", "Pytest"]
        },
        {
            id: 2,
            company: "180 Degrees Consulting",
            position: "Consultant",
            location: "Michigan State University",
            duration: "2024 - Present",
            description: "• Conceptualized and created a functional POC for a university-exclusive reselling platform for MSU students using <strong>ReactJS</strong>, visualizing the market opportunity and projecting revenue of up to <strong>$98,000/yr</strong> to prospective investors\n\n• Designed and developed a <strong>ReactJS</strong> website for a local trucking company, deployed on <strong>Vercel</strong>, increasing quote request submissions by <strong>25%</strong> through improved UX and optimized CTAs\n\n• Advised an overseas ed-tech client on industry strategy by developing <strong>8</strong> key performance metrics and benchmarking them against industry standards to strengthen client's market positioning\n\n• Collaborated with <strong>7</strong> business analysts to advise a local baking business, providing website optimization advice and training the owner on data collection methods to enhance customer insights and accelerate growth",
            technologies: ["Digital Transformations", "Client Work", "Professional Development", "Data Analytics"]
        },
        {
            id: 3,
            company: "Imagine Software",
            position: "Project Lead",
            location: "Michigan State University",
            duration: "Fall 2024",
            description: "• Led a team of <strong>4</strong> to create a sales forecasting model using <strong>Python</strong> and the <strong>sktime</strong> library to increase Imagine Software's project variety and expand its service offerings in predictive analytics\n\n• Engineered a full-stack mobile application in a team of <strong>6</strong> by utilizing <strong>React Native</strong> and <strong>Firebase</strong> in order to improve the nutritional awareness of users\n\n• Engaged with a community of <strong>500+</strong> computer science students by collaborating on mobile and web application development, synthesizing a supportive environment for idea-sharing and innovation",
            technologies: ["React Native", "Google Firebase", "Sktime Forecasting", "Project Management", "Networking"]
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
                    <p>Here's a summary of my professional experience and internships. From enhancing my API development toolkit at Humana, to expanding my business acumen at 180 Degrees Consulting, I've had a diverse set of experiences that have helped me grow as a software engineer and professional.</p>
                    
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