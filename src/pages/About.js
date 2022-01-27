import React from "react"
import AboutSkills from "../components/about/AboutSkills"
import AboutDetail from "../components/about/AboutDetail"
import Container from "react-bootstrap/Container"

function About() {
	return (
		<>
			<Container className="content">
				<div className="row">
					<AboutDetail />
					<AboutSkills />
				</div>
			</Container>
		</>
	)
}

export default About
