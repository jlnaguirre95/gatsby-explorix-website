import styled, { createGlobalStyle, css } from 'styled-components'
import { Link } from 'gatsby';

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        box-sizing: border-box;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        outline: none;
        cursor: pointer;
    }

    li {
        list-style: none;
    }

    button,
    input[type="text"] {
        border: none;
        outline: none 
    }

    h1,
    h2,
    h3 {
        font-weight: 700;
    }

    h4,
    h5,
    h6 {
        font-weight: 400;
    }
`

export const Container = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
`

export const Button = styled(Link)`
    min-width: 100px;
    padding: 1rem 3.2rem;
    background-color: ${({ primary }) => primary ? '#f26a2e' : '#077bf1'};
    color: #fff;
    border-radius: ${({ rounded }) => rounded ? '5rem' : 'none'};
    cursor: pointer;
    display: inline-block;
    transition: 300ms !important;

    ${({ big }) => big && css`
        font-size: 2rem;
        padding: 1.6rem 4rem;
    `}

    &:hover {
        background-color: ${({ primary }) => primary ? '#077bf1' : '#f26a2e'};
        transform: translateY(-2px);
    }
`
   
