import * as React from "react"
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import { Container } from './GlobalStyle'
import TripCard from "./TripCard"

const Trips = () => {
    const data = useStaticQuery(
        graphql`
            query MyQuery {
                allTripsJson(limit: 4) {
                    edges {
                        node {
                            img {
                                childImageSharp {
                                    gatsbyImageData
                                }
                            }
                            id
                            name
                        }
                    }
                }
            }
        `
    )

    console.log(data)

    const { allTripsJson: { edges }} = data

    const mapTrips = edges.map(trip => (
        <TripCard key={trip.node.id} trip={trip} />
    ))

    return (
        <TripsSection>
            <TripsContainer>
                <TextWrapper>
                    <TripsHeading>Our Favorite Destinations</TripsHeading>
                    <TripSpeach>In our amazing planet, there are thousands of kinds of places that we cant imagine. If we look closer and we get to know our planet we will surely fall in love with it.</TripSpeach>
                </TextWrapper>
                <TripsWrapper>{mapTrips}</TripsWrapper>
            </TripsContainer>
        </TripsSection>
    )
}

export default Trips

const TripsSection = styled.section`
    min-height: 100vh;
    padding: 5rem 0
`

const TripsContainer = styled(Container)`
    
`

const TextWrapper = styled.div`
    max-width: 650px;
    margin: 0 auto;
    margin-bottom: 3rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const TripsHeading = styled.h1`
    display: inline-block;
    font-size: clamp(2.5rem, 4vw, 4rem);
    margin-bottom: 2rem;
`

const TripSpeach = styled.p`
    color: gray;
    line-height: 2.4rem;

    @media screen and (max-width: 650px) {
        font-size: 1.4rem;
    }
`

const TripsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    justify-items: center;

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 2rem;
    }

    @media screen and (max-width: 650px) {
        grid-template-columns: 300px;
        justify-content: center;
        row-gap: 2rem;
    }
`