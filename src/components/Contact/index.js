import Loader from 'react-loaders'
import './index.scss'
import { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
    
        return () => clearTimeout(timeoutId);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm (
                'service_di0u9b9',
                'template_c3qqn76',
                refForm.current,
                'RpHQucRtxZB_a5Vid'
            )
            .then (
                () => {
                    alert('Message sent!')
                    window.location.reload(false)
                }, 
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>  
                <div className='text-zone'>
                    <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} idx={15}/>
                    </h1>
                    <p>
                        Always looking to collaborate! Please fill out the contact form for any inquiries.
                    </p>
                    
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                            <li className="half">
                                <input placeholder="Name" type="text" name="name" required />
                            </li>
                            <li className="half">
                                <input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    required
                                />
                            </li>
                            <li>
                                <input
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    required
                                />
                            </li>
                            <li>
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    required
                                ></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                            </ul>
                        </form>
                    </div>   
                    
                </div>
               
            </div>
            <Loader type='line-scale-pulse-out' color="#16eec0"/>
        </>
    )
}

export default Contact