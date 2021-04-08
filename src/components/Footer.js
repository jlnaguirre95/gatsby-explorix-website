import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Container } from './GlobalStyle'

const Footer = () => {
    return (
        <StyledFooter>
            <FooterContainer>
                <FooterDesc>
                    <h1>Explorix</h1>
                    <strong>We strive to create the best experiences for our customers</strong>
                    <div className="legal"><small>Powered with React</small></div>
                </FooterDesc>
                <FooterLinks>
                    <LinksColumn>
                        <TitleColumn>Contact Us</TitleColumn>
                        <FooterLink to="#">Contact</FooterLink>
                        <FooterLink to="#">Support</FooterLink>
                        <FooterLink to="#">Destinations</FooterLink>
                        <FooterLink to="#">SponsorShips</FooterLink>
                    </LinksColumn>
                    <LinksColumn>
                        <TitleColumn>Videos</TitleColumn>
                        <FooterLink to="#">Submit Video</FooterLink>
                        <FooterLink to="#">Ambassadors</FooterLink>
                        <FooterLink to="#">Agency</FooterLink>
                        <FooterLink to="#">Influencer</FooterLink>
                    </LinksColumn>
                    <LinksColumn>
                        <TitleColumn>Social Media</TitleColumn>
                        <FooterLink to="#">Instagram</FooterLink>
                        <FooterLink to="#">Facebook</FooterLink>
                        <FooterLink to="#">Youtube</FooterLink>
                        <FooterLink to="#">Twitter</FooterLink>
                    </LinksColumn>
                </FooterLinks>
            </FooterContainer>
        </StyledFooter>
    )
}

export default Footer

const StyledFooter = styled.footer`
    padding: 5rem 0
`

const FooterContainer = styled(Container)`
    display: flex;
`

const FooterDesc = styled.div`
    max-width: 250px;
    max-height: 100%;

    strong {
        margin-bottom: 3rem;
    }
`

const FooterLinks = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

const LinksColumn = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
        margin-bottom: 3rem
    }

`

const TitleColumn = styled.h2`
    font-size: clamp(1.6rem, 2vw, 2rem);
    margin-bottom: 1.5rem;
`

const FooterLink = styled(Link)`
    margin-bottom: 0.5rem;
    color: gray;

    @media screen and (max-width: 500px) {
        font-size: 1.4rem;
    }
`