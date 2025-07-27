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
            location: "Louisville, KY",
            duration: "Summer 2025",
            description: "Worked in Enterprise AI developing an Enterprise GenAI self-service for prompt-based insight extraction of long healthcare documents. Collaborated with cross-functional teams to implement AI solutions that improved document processing efficiency and accuracy.",
            technologies: ["Python", "AI/ML", "Healthcare", "Enterprise Software", "GenAI"]
        },
        {
            id: 2,
            company: "Imagine Software",
            position: "Project Lead",
            location: "Michigan State University",
            duration: "Fall 2024",
            description: "Led a team in developing a sales forecasting model using time series analysis and machine learning techniques. Managed project timelines, coordinated team efforts, and delivered a working prototype for business applications.",
            technologies: ["Python", "Machine Learning", "Time Series Analysis", "Leadership", "Project Management"]
        },
        {
            id: 3,
            company: "180 Degrees Consulting",
            position: "Consultant",
            location: "Michigan State University",
            duration: "2024 - Present",
            description: "Working with various clients to provide business consulting services, expanding business acumen and developing strategic solutions for real-world problems.",
            technologies: ["Business Strategy", "Client Relations", "Problem Solving", "Analytics"]
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
                    <p>Here's a summary of my professional experience and internships. Each role has helped me develop different skills and gain valuable insights into the tech industry.</p>
                    
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
                                        <div className='expand-indicator'>
                                            <span className={`arrow ${expandedCard === experience.id ? 'expanded' : ''}`}>▼</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`work-content ${expandedCard === experience.id ? 'expanded' : ''}`}>
                                    <div className='work-description'>
                                        <p>{experience.description}</p>
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