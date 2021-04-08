import React from "react"
import { Link } from 'gatsby'
import styled from "styled-components"

import { Container, Button } from './GlobalStyle';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
	return (
		<Nav>
			<NavContainer>
				<Logo><h1>Explorix</h1></Logo>
				<Navigation>
					<NavItem><Link to="#">About us</Link></NavItem>
					<NavItem><Link to="#">Trips</Link></NavItem>
					<NavItem><Link to="#">Careers</Link></NavItem>
					<NavItem><Link to="#">Contact</Link></NavItem>
				</Navigation>
				<MenuBars />
				<NavButton 
					primary
					rounded 
					big
					to="#"
				>
					Book a Flight
				</NavButton>
			</NavContainer>
		</Nav>
	)
}

//styled
const Nav = styled.nav`
	width: 100vw;
	padding: 2rem 0;
	color: #fff;
	background-color: transparent;
	position: absolute;
	top: 0;
	left: 0;
`

const NavContainer = styled(Container)`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Logo = styled.div``

const Navigation = styled.ul`
	width: 300px;
	position: absolute;
	top: 50%;
	left: 50%;
	display: flex;
	justify-content: space-between;
	transform: translate(-50%, -50%);

	@media screen and (max-width: 768px) {
		display: none;
	}
`

const NavItem = styled.li`
	a {
		color: #fff;
	}
`

const MenuBars = styled(FaBars)`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		font-size: 2rem;
		cursor: pointer;
	}
`

const NavButton = styled(Button)`
	
	@media screen and (max-width: 768px) {
		display: none
	}
`

export default Navbar
