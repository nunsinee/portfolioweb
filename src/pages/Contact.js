import React from "react"
import ContactDetail from "../components/contact/ContactDetail"
import ContactForm from "../components/contact/ContactForm"
import Container from "react-bootstrap/Container"

function Contact() {
	return (
		<>
			<Container className="content">
				<div className="row">
					<ContactDetail />
					<ContactForm />
				</div>
			</Container>
		</>
	)
}

export default Contact
