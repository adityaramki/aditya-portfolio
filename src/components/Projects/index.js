import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'




const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <div className='container projects-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass} 
                            strArray = {['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx = {10}
                        />
                    </h1>
                    <h2>Coming Soon...</h2>
                    <div className='github'>
                        <ul>
                            <li>
                                <a target="_blank" rel='noreferrer' href='https://github.com/adityaramki'>
                                    <FontAwesomeIcon icon={faGithub} color="#000000" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                        
                </div>
            </div>
            <Loader type='line-scale-pulse-out' color="#16eec0"/>
        </>
        
        
    )


}
    
export default Projects