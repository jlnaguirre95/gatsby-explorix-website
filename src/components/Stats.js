import React from 'react'
import styled from 'styled-components'

import StatItem from './StatItem'

import { Container } from './GlobalStyle';
import { GiEarthAmerica } from 'react-icons/gi'
import { MdAirplanemodeActive, MdTimer } from 'react-icons/md'
import { FaMoneyCheck } from 'react-icons/fa'


const Stats = () => {
    return (
        <StatsSection>
            <StatsContainer>
                <StatsHeading>Why choose us?</StatsHeading>
                <StatsWrapper>
                    <StatItem 
                        heading="Over 100 Destinations" 
                        description="Travel to over 100 unique places"
                    >
                        <GiEarthAmerica css={`
                            color: #047bf1;
                        `} />
                    </StatItem>
                    <StatItem 
                        heading="1 Million Trips Made" 
                        description="Over 1 million trips completed last year"
                    >
                        <MdAirplanemodeActive css={`
                            color: #f3a82e;
                        `}/>
                    </StatItem>
                    <StatItem 
                        heading="Fastest Support" 
                        description="Access our support team 24/7"
                    >
                        <MdTimer css={`
                            color: #f34f2e;
                        `}/>
                    </StatItem>
                    <StatItem 
                        heading="Best Deals" 
                        description="We offer the best prices"
                    >
                        <FaMoneyCheck css={`
                            color: #3af576;
                        `}/>
                    </StatItem>
                </StatsWrapper>
            </StatsContainer>
        </StatsSection>
    )
}

export default Stats

const StatsSection = styled.section`
    width: 100vw;
    padding: 3rem 0;
    background-color: #dfdfdf;
    margin-bottom: 9rem;
`

const StatsContainer = styled(Container)`
    text-align: center;
`

const StatsHeading = styled.h1`
    font-size: clamp(2.5rem, 3vw, 4rem);
    margin-bottom: 3rem;
`

const StatsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`


