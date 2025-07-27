import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJava, faJsSquare, faPython, faReact, faUnity, faDocker, faMicrosoft } from '@fortawesome/free-brands-svg-icons'
import { faCode, faFire, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => clearTimeout(timeoutId);
    }, []);
    
    
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
                    <p>Hi there! I'm a college freshman with a solid foundation in Python, Java, and analytical thinking. I'm always excited to become more knowledgeable and to learn new toolsets through internship experience.
                        During this upcoming summer (2025), I will be working as an Enterprise AI Intern at Humana and I'm very excited about this opportunity!
                    </p>
                    <p>Additionally, I'm always open to working on projects and ready to contribute my enthusiasm and hard work to any team I join! Feel free to <Link to="/contact">contact me</Link> for collaboration opportunites and more.</p>
                    
                    <div className='skills'>
                        <div className='skill-category'>
                            <h3>Languages</h3>
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
                        </div>
                        
                        <div className='skill-category'>
                            <h3>Developer Tools</h3>
                            <ul className='skills-icons'>
                                <li>
                                    <FontAwesomeIcon icon={faGitAlt} color='#f34f29' />
                                    <p>Git</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCode} color='#007ACC' />
                                    <p>VS Code</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faFire} color='#FFCA28' />
                                    <p>Google Firebase</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faDocker} color='#2496ED' />
                                    <p>Docker</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faMicrosoft} color='#00A4EF' />
                                    <p>Microsoft Azure Portal</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faUnity} color='#000000' />
                                    <p>Unity</p>
                                </li>
                            </ul>
                        </div>
                        
                        <div className='skill-category'>
                            <h3>Libraries/Frameworks</h3>
                            <ul className='skills-icons'>
                                <li>
                                    <FontAwesomeIcon icon={faPython} color='#009688' />
                                    <p>FastAPI</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faReact} color='#61DAFB' />
                                    <p>ReactJS</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChartLine} color='#10A37F' />
                                    <p>OpenAI API</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCss3} color='#06B6D4' />
                                    <p>TailwindCSS</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPython} color='#0D9D58' />
                                    <p>Pytest</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faChartLine} color='#115F9A' />
                                    <p>Matplotlib</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPython} color='#FF6B35' />
                                    <p>Pygame</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='stage-cube-cont'>
                    {/* Languages Cube - Top */}
                    <div className='cube-container languages-cube'>
                        <div className='cubespinner'>
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
                        </div>
                    </div>

                    {/* Bottom Row - Developer Tools and Libraries Cubes */}
                    <div className='bottom-cubes'>
                        {/* Developer Tools Cube */}
                        <div className='cube-container devtools-cube'>
                            <div className='cubespinner'>
                                <div className='face1'>
                                    <FontAwesomeIcon icon={faGitAlt} color='#f34f29' />
                                </div>
                                <div className='face2'>
                                    <FontAwesomeIcon icon={faCode} color='#007ACC' />
                                </div>
                                <div className='face3'>
                                    <FontAwesomeIcon icon={faFire} color='#FFCA28' />
                                </div>
                                <div className='face4'>
                                    <FontAwesomeIcon icon={faDocker} color='#2496ED' />
                                </div>
                                <div className='face5'>
                                    <FontAwesomeIcon icon={faMicrosoft} color='#00A4EF' />
                                </div>
                                <div className='face6'>
                                    <FontAwesomeIcon icon={faUnity} color='#000000' />
                                </div>
                            </div>
                        </div>

                        {/* Libraries/Frameworks Cube */}
                        <div className='cube-container libraries-cube'>
                            <div className='cubespinner'>
                                <div className='face1'>
                                    <FontAwesomeIcon icon={faPython} color='#009688' />
                                </div>
                                <div className='face2'>
                                    <FontAwesomeIcon icon={faReact} color='#61DAFB' />
                                </div>
                                <div className='face3'>
                                    <FontAwesomeIcon icon={faChartLine} color='#10A37F' />
                                </div>
                                <div className='face4'>
                                    <FontAwesomeIcon icon={faCss3} color='#06B6D4' />
                                </div>
                                <div className='face5'>
                                    <FontAwesomeIcon icon={faPython} color='#0D9D58' />
                                </div>
                                <div className='face6'>
                                    <FontAwesomeIcon icon={faChartLine} color='#115F9A' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='line-scale-pulse-out' color="#16eec0"/>
        </>
        
        
    )
}

export default About