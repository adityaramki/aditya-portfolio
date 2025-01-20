import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGit, faGitAlt, faHtml5, faJava, faJsSquare, faPython, faReact, faUnity, faUntappd } from '@fortawesome/free-brands-svg-icons'
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
                        During this upcoming summer (2025), I will be working as an Informational Technology Intern at Humana and I'm very excited about this opportunity!
                    </p>
                    <p>Additionally, I'm always open to working on projects and ready to contribute my enthusiasm and hard work to any team I join. Feel free to <Link to="/contact">contact me</Link> for collaboration opportunites and more.</p>
                    <h2>Skills</h2>
                    <div className='skills'>
                        <ul className='skills-icons'>
                            <li>
                                <FontAwesomeIcon icon={faPython} color='#ffde57' />
                                <p>Python</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faJava} color='#FFA518' />
                                <p>Java</p>
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
                            <li>
                                <FontAwesomeIcon icon={faReact} color='#61DAFB' />
                                <p>React</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faGitAlt} color='#f34f29' />
                                <p>Git</p>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faUnity} color='#000000' />
                                <p>Unity</p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faPython} color='#4584B6' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJava} color='#FFA518' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faUnity} color='#000000' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='line-scale-pulse-out' color="#16eec0"/>
        </>
        
        
    )
}

export default About