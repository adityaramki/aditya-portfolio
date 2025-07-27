import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJava, faJsSquare, faPython, faReact, faUnity, faDocker } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import firebaseLogo from '../../assets/images/firebase_logo-removebg-preview.png'
import azureDevOpsLogo from '../../assets/images/azure-devops-logo-png_seeklogo-434055-removebg-preview.png'
import vscodeLogo from '../../assets/images/vscodelogo-removebg-preview.png'
import fastapiLogo from '../../assets/images/fastapilogo-removebg-preview.png'
import openaiLogo from '../../assets/images/openailogo-removebg-preview.png'
import tailwindLogo from '../../assets/images/tailwindlogo-removebg-preview.png'
import pytestLogo from '../../assets/images/pytestlogo-removebg-preview.png'
import pygameLogo from '../../assets/images/pygamelogo-removebg-preview.png'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [activeSection, setActiveSection] = useState('languages') // Default to languages being open
    const [cubePosition, setCubePosition] = useState({ x: 0, y: 0 })
    const [setIsHovering] = useState(false)
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => clearTimeout(timeoutId);
    }, []);
    
    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };
    
    const handleCubeHover = (event) => {
        setIsHovering(true);
        
        // Get mouse position relative to the cube
        const rect = event.currentTarget.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        
        // Calculate direction away from mouse (opposite direction)
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate the direction vector from mouse to center
        const dirX = centerX - mouseX;
        const dirY = centerY - mouseY;
        
        // Normalize and scale the direction
        const length = Math.sqrt(dirX * dirX + dirY * dirY);
        const normalizedX = (dirX / length) * 50; // Move 50px in that direction
        const normalizedY = (dirY / length) * 50;
        
        setCubePosition({ x: normalizedX, y: normalizedY });
    };
    
    const handleCubeLeave = () => {
        setIsHovering(false);
        // Don't reset position - let cube stay where it glided to
    };
    
    
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass} 
                            strArray = {['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            idx = {10}
                        />
                    </h1>
                    <p>Hi there! I'm a college sophomore with a solid foundation in Python, Java, and analytical thinking. During Summer 2025, I interned at Humana as a Software Engineering Intern working in Enterprise AI. I got some amazing GenAI experience building an internal self-service for prompt based insight extraction of long healthcare documents. 
                    </p>
                    <p>Additionally, I'm always open to working on projects and looking to recruit for Software Engineering Internships for Summer 2026! Feel free to <Link to="/contact">contact me</Link> for collaboration opportunites, queries, and more!</p>
                    
                    <div className='skills'>
                        <div className='skill-category'>
                            <button 
                                className={`skill-header ${activeSection === 'languages' ? 'active' : ''}`}
                                onClick={() => toggleSection('languages')}
                            >
                                <h3>Languages</h3>
                                <span className="toggle-icon">{activeSection === 'languages' ? '−' : '+'}</span>
                            </button>
                            {activeSection === 'languages' && (
                                <ul className='skills-icons'>
                                    <li>
                                        <FontAwesomeIcon icon={faJava} color='#FFA518' />
                                        <p>Java</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faPython} color='#ffde57' />
                                        <p>Python</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                                        <p>HTML</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                                        <p>CSS</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                                        <p>JavaScript</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        
                        <div className='skill-category'>
                            <button 
                                className={`skill-header ${activeSection === 'devtools' ? 'active' : ''}`}
                                onClick={() => toggleSection('devtools')}
                            >
                                <h3>Developer Tools</h3>
                                <span className="toggle-icon">{activeSection === 'devtools' ? '−' : '+'}</span>
                            </button>
                            {activeSection === 'devtools' && (
                                <ul className='skills-icons'>
                                    <li>
                                        <FontAwesomeIcon icon={faGitAlt} color='#f34f29' />
                                        <p>Git</p>
                                    </li>
                                    <li>
                                        <img src={vscodeLogo} alt="VS Code" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                                        <p>VS Code</p>
                                    </li>
                                    <li>
                                        <img src={firebaseLogo} alt="Firebase" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                                        <p>Google Firebase</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faDocker} color='#2496ED' />
                                        <p>Docker</p>
                                    </li>
                                    <li>
                                        <img src={azureDevOpsLogo} alt="Azure DevOps" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                                        <p>Azure DevOps</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faUnity} color='#000000' />
                                        <p>Unity</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                        
                        <div className='skill-category'>
                            <button 
                                className={`skill-header ${activeSection === 'libraries' ? 'active' : ''}`}
                                onClick={() => toggleSection('libraries')}
                            >
                                <h3>Libraries/Frameworks</h3>
                                <span className="toggle-icon">{activeSection === 'libraries' ? '−' : '+'}</span>
                            </button>
                            {activeSection === 'libraries' && (
                                <ul className='skills-icons'>
                                    <li>
                                        <img src={fastapiLogo} alt="FastAPI" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                                        <p>FastAPI</p>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faReact} color='#61DAFB' />
                                        <p>ReactJS</p>
                                    </li>
                                    <li>
                                        <img src={openaiLogo} alt="OpenAI" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                                        <p>OpenAI API</p>
                                    </li>
                                    <li>
                                        <img src={tailwindLogo} alt="TailwindCSS" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                                        <p>TailwindCSS</p>
                                    </li>
                                    <li>
                                        <img src={pytestLogo} alt="Pytest" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                                        <p>Pytest</p>
                                    </li>
                                    <li>
                                        <img src={pygameLogo} alt="Pygame" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                                        <p>Pygame</p>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                <div className='stage-cube-cont'>
                    {/* Floating particles */}
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    
                    {/* Dynamic Cube - Changes based on active section */}
                    <div 
                        className='cube-container'
                        onMouseEnter={handleCubeHover}
                        onMouseLeave={handleCubeLeave}
                        style={{
                            transform: `translate(${cubePosition.x}px, ${cubePosition.y}px)`
                        }}
                    >
                        <div className='cubespinner'>
                            {/* Languages Cube Faces */}
                            {activeSection === 'languages' && (
                                <>
                                    <div className='face1'>
                                        <FontAwesomeIcon icon={faJava} color='#FFA518' />
                                    </div>
                                    <div className='face2'>
                                        <FontAwesomeIcon icon={faPython} color='#ffde57' />
                                    </div>
                                    <div className='face3'>
                                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                                    </div>
                                    <div className='face4'>
                                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                                    </div>
                                    <div className='face5'>
                                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                                    </div>
                                    <div className='face6'>
                                        <FontAwesomeIcon icon={faPython} color='#ffde57' />
                                    </div>
                                </>
                            )}
                            
                            {/* Developer Tools Cube Faces */}
                            {activeSection === 'devtools' && (
                                <>
                                    <div className='face1'>
                                        <FontAwesomeIcon icon={faGitAlt} color='#f34f29' />
                                    </div>
                                    <div className='face2'>
                                        <img src={vscodeLogo} alt="VS Code" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                                    </div>
                                    <div className='face3'>
                                        <img src={firebaseLogo} alt="Firebase" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                                    </div>
                                    <div className='face4'>
                                        <FontAwesomeIcon icon={faDocker} color='#2496ED' />
                                    </div>
                                    <div className='face5'>
                                        <img src={azureDevOpsLogo} alt="Azure DevOps" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                                    </div>
                                    <div className='face6'>
                                        <FontAwesomeIcon icon={faUnity} color='#000000' />
                                    </div>
                                </>
                            )}
                            
                            {/* Libraries/Frameworks Cube Faces */}
                            {activeSection === 'libraries' && (
                                <>
                                    <div className='face1'>
                                        <img src={fastapiLogo} alt="FastAPI" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                                    </div>
                                    <div className='face2'>
                                        <FontAwesomeIcon icon={faReact} color='#61DAFB' />
                                    </div>
                                    <div className='face3'>
                                        <img src={openaiLogo} alt="OpenAI" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                                    </div>
                                    <div className='face4'>
                                        <img src={tailwindLogo} alt="TailwindCSS" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                                    </div>
                                    <div className='face5'>
                                        <img src={pytestLogo} alt="Pytest" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                                    </div>
                                    <div className='face6'>
                                        <img src={pygameLogo} alt="Pygame" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='line-scale-pulse-out' color="#16eec0"/>
        </>
        
        
    )
}

export default About