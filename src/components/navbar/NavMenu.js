import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Logo from "../../assets/nv_logo.svg"
import { NavLink } from "react-router-dom"

function NavMenu() {
	return (
		<Navbar bg="dark" expand="lg" className=" navbar-dark menu">
			<Container className="nav-container">
				<Navbar.Brand href="/">
					<img
						className="d-block w-30 d-inline-block align-top"
						src={Logo}
						alt="Logo"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<NavLink exact to="/" className="nav-link">
							Home
						</NavLink>
						<NavLink to="/about" className="nav-link">
							About
						</NavLink>
						<NavLink to="/projects" className="nav-link">
							Projects
						</NavLink>
						<NavLink to="/contact" className="nav-link">
							Contact
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavMenu
