import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import image from '../../assets/images/picture.jpg';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['A', 'd', 'i', 't', 'y', 'a', ' ', 'R', 'a', 'm', 'a', 'k', 'r', 'i', 's', 'h', 'n', 'a', 'n']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
    
        return () => clearTimeout(timeoutId);
    }, []);
    

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>e</span>
                    <span className={`${letterClass} _13`}>l</span>
                    <span className={`${letterClass} _14`}>l</span>
                    <span className={`${letterClass} _15`}>o,</span>
                    <span className={`${letterClass} _16`}> </span>
                    <span className={`${letterClass} _17`}>I'</span>
                    <span className={`${letterClass} _18`}>m </span>
                    <br /> <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={16}/> 
                </h1>
                <h2>Computer Science Student at Michigan State University</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <img src={image}/>

        </div>
        <Loader type='line-scale-pulse-out' color="#16eec0"/>
        </>
        
    );
}

export default Home