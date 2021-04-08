import React, { useState } from 'react'
import styled from 'styled-components';

import { Button } from './GlobalStyle'
import imageBg from '../assets/images/bg-contact-2.jpg'

const Contact = () => {
    const [ email, setEmail ] = useState('')
    console.log(email)

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = email.includes('@');
        if(isValid) {
            alert(`${email} registered`)
        } else {
            alert('Type a valid email')
        } 
    }

    return (
        <ContactSection>
            <ContactContent>
                <h1>Get Access to Exclusive Offers</h1>
                <h4>Sign up for your newsletter below to get <strong>$100</strong> off your first trip!</h4>
                <ContactForm onSubmit={handleSubmit}>
                    <label htmlFor="email">
                        <input 
                            type="text" 
                            placeholder="Enter your email" 
                            id="email" 
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                        />
                    </label>
                    <Button 
                        as="button" 
                        type="submit" 
                        primary 
                        rounded
                    >
                        Sign Up
                    </Button>
                </ContactForm>
            </ContactContent>
        </ContactSection>
    )
}

export default Contact

const ContactSection = styled.section`
    height: 450px;
    padding: 2rem;
    color: #fff;
    background: linear-gradient(
        180deg, 
        rgba(0,0,0,0.7) 0%, 
        rgba(0,0,0,0.7) 35%, 
        rgba(0,0,0,0.3) 100%), 
        url(${imageBg});
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContactContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

        h1 {
            font-size: clamp(4rem, 5vw, 5.5rem);
            margin-bottom: 1rem;
        }

        h4 {
            font-size: clamp(2rem, 3vw, 2.5rem);
            margin-bottom: 2rem;
        }
`
const ContactForm = styled.form`
    display: flex;

    label {
        width: 400px;
        padding: 1rem 1.5rem;
        background-color: #fff;
        border-radius: 50px;
        margin-right: 1rem;
        margin-bottom: 2rem;

        input {
            width: 100%;
        }
    }

    button {
        height: 100%;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;

        label {
            width: 100%;
        }
        
    }
`

