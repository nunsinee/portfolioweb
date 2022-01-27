import React from "react"
import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"
import emailjs from "@emailjs/browser"

function ContactForm() {
	//new function
	function sendEmail(e) {
		e.preventDefault()
		emailjs
			.sendForm(
				"service_6noogkt",
				"template_xf6zs66",
				e.target,
				"user_aWHytTFfrwu1LGrf2zQBz"
			)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => console.log(err))
	}

	//end of function
	return (
		<div className="col-lg-6 col-sm-12">
			<Form onSubmit={sendEmail}>
				<Form.Group className="mb-3">
					<Form.Label>Name</Form.Label>
					<Form.Control type="name" name="name" placeholder="Name:" />
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						name="user_email"
						placeholder="Email:"
					/>
				</Form.Group>

				{/* 
				<Form.Group className="mb-3">
					<Form.Label>Subject</Form.Label>
					<Form.Control type="subject" name="subject" />
				</Form.Group> */}

				<Form.Group className="mb-3">
					<Form.Label>Message</Form.Label>
					<Form.Control
						as="textarea"
						rows={5}
						name="message"
						placeholder="Write your message here:"
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	)
}

export default ContactForm
