import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { FaMapMarkerAlt } from 'react-icons/fa'
import { Button } from './GlobalStyle'

const TripCard = ({ trip }) => {
    const { name, img } = trip.node
    const img_path = getImage(img)

    console.log(img_path)

    return (
        <Card>
            <TripImage image={img_path} alt={name} />
            <TripInfo>
                <TextWrapper>
                    <MarkIcon />
                    <h4>{name}</h4>
                </TextWrapper>
                <CardButton primary rounded>Explore</CardButton>
            </TripInfo>
        </Card>
    )
}

export default TripCard

const Card = styled.article`
    height: 50rem;
    background-color: rgba(0,0,0,0.3);
    position: relative;
    border-radius: 10px;
    overflow: hidden;
`

const TripImage = styled(GatsbyImage)`
    height: 100%;
    max-width: 100%;
`

const TripInfo = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    padding: 2rem 1rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: 400ms ease;

    &:hover {
        background-color: rgba(0,0,0,0);
    }
`

const TextWrapper = styled.div`
    width: 60%;
    display: flex;

    h4 {
        font-weight: 700;
        color: #fff;
        margin-left: 0.5rem;
    }
`

const MarkIcon = styled(FaMapMarkerAlt)`
    font-size: 2rem;
    color: #f26a2e;
`

const CardButton = styled(Button)`
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%)
`
