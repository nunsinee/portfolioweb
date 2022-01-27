import React from "react"
import { MdOutlineAlternateEmail } from "react-icons/md"
import { BsTelephoneFill } from "react-icons/bs"
import { MdLocationPin } from "react-icons/md"
import Heading from "../typography/Heading"

function ContactDetail() {
	return (
		<div className="col-lg-6 col-sm-12">
			<Heading content="Contact" />
			<div className="contact-container">
				<div className="contact-list">
					<MdLocationPin className="icon-address" />
					<h6>Huageveien 9B Bergen</h6>
				</div>
				<div className="contact-list">
					<BsTelephoneFill className="icon-address " />
					<h6>+47 484 60007</h6>
				</div>
				<div className="contact-list">
					<MdOutlineAlternateEmail className="icon-address " />
					<h6>nunsinee@gmail.com</h6>
				</div>
			</div>
		</div>
	)
}

export default ContactDetail
