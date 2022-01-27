import React from "react"
import { useRef } from "react"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"

function ContactForm() {
	const form = useRef()

	//
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		trigger,
	} = useForm()

	const onSubmit = (data) => {
		console.log(data)
		reset()
	}

	//new function
	const sendEmail = (e) => {
		e.preventDefault()

		emailjs
			.sendForm(
				"service_6noogkt",
				"template_xf6zs66",
				form.current,
				"user_aWHytTFfrwu1LGrf2zQBz"
			)
			.then((result) => {
				console.log(result.text)
				alert("SUCCESS")
			})
			.catch((error) => {
				console.log(error.text)
				alert("Failed...", error)
			})
	}

	//end of function
	return (
		<div className="col-lg-6 col-sm-12">
			<form
				ref={form}
				className="contact-form"
				onSubmit={(handleSubmit(onSubmit), sendEmail)}
			>
				<div className="mb-3">
					<input
						type="text"
						className={`form-control ${errors.name && "invalid"}`}
						{...register("name", { required: "Name is Required" })}
						onKeyUp={() => {
							trigger("name")
						}}
						placeholder="Name:"
					/>
					{errors.name && (
						<div className="form-error">{errors.name.message}</div>
					)}
				</div>

				<div className="mb-3">
					<input
						type="email"
						className={`form-control ${errors.email && "invalid"}`}
						placeholder="Email:"
						{...register("email", {
							required: "Email is required",
							pattern: {
								value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
								message: "Invalid email address",
							},
						})}
						onKeyUp={() => {
							trigger("email")
						}}
					/>
					{errors.email && (
						<div className="form-error">{errors.email.message}</div>
					)}
				</div>

				<div className="mb-3">
					<textarea
						className={`form-control ${
							errors.message && "invalid"
						}`}
						{...register("message", {
							required: "Message is Required",
							minLength: {
								value: 10,
								message: "Minimum Required length is 10",
							},
							maxLength: {
								value: 50,
								message: "Maximum allowed length is 50 ",
							},
						})}
						onKeyUp={() => {
							trigger("message")
						}}
						placeholder="Please write your message here:"
					></textarea>
					{errors.message && (
						<div className="form-error">
							{errors.message.message}
						</div>
					)}
				</div>

				<button type="submit" className="btn btn-dark">
					Send
				</button>
			</form>
		</div>
	)
}

export default ContactForm
