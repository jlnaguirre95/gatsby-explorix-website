import React from "react"
import styled from "styled-components"

import { Button } from "./GlobalStyle"
import HeroVideo from "../assets/videos/bg-hero-video-2.mp4"

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <video
                src={HeroVideo}
                type="video/mp4"
                autoPlay
                loop
                muted
                playsInline
                />
            </HeroBg>
            <HeroContent>
                <h1>Unreal Destinations</h1>
                <h4>Out of this world</h4>
                <Button primary rounded big to="/trips">
                    Travel Now
                </Button>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
    width: 100vw;
    height: 100vh;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: 
            linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
            linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: -90;
    }
`
const HeroBg = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: -100;

    video {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
    }
`

const HeroContent = styled.div`
    text-align: center;

    h1 {
        font-size: clamp(4rem, 5vw, 5.5rem);
        letter-spacing: 0.3rem;
        margin-bottom: 1rem;

        @media screen and (max-width: 500px) {
            letter-spacing: 0.1rem;
        }
    }

    h4 {
        font-size: clamp(3rem, 4vw, 4rem);
        margin-bottom: 2rem;
    }
`
