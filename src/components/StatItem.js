import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StatItem = ({ children, heading, description }) => {
    return (
        <Item>
            <Icon>{children}</Icon>
            <h1>{heading}</h1>
            <p>{description}</p>
        </Item>
    )
}

export default StatItem

StatItem.propTypes = {
    children: PropTypes.node.isRequired,
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

//styled
const Item = styled.article`
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: clamp(2rem, 2vw, 2.5rem);
        margin-bottom: 0.5rem;
    }

    p {
        color: gray;
    }
`

const Icon = styled.div`
    font-size: 5rem;
`
