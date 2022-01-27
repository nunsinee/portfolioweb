import React from "react"
import Container from "react-bootstrap/Container"
import CardComponents from "../components/cards/CardCardComponents"
import Heading from "../components/typography/Heading"

function Projects() {
	return (
		<>
			<Container className="content">
				<div className="row">
					<Heading content="Projects" />
					<p>Here are all my projects from school.</p>
					<CardComponents />
				</div>
			</Container>
		</>
	)
}

export default Projects
