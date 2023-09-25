"use client"
import { useState } from "react"
import axios from "axios"

export default function EmailForm() {
	const [formData, setFormData] = useState({
		from: "",
		to: "afrizalyogi.id@gmail.com",
		subject: "",
		text: "",
	})

	const handleChange = (e: { target: { name: any; value: any } }) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const handleSubmit = async (e: { preventDefault: () => void }) => {
		e.preventDefault()
		try {
			await axios.post("https://api-private.vercel.app/", formData) // Sending the data to your Express.js API
			alert("Email sent successfully!")
		} catch (error) {
			console.error("Error sending email:", error)
			alert("An error occurred while sending the email.")
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="from">From:</label>
				<input
					type="email"
					id="from"
					name="from"
					value={formData.from}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor="subject">Subject:</label>
				<input
					type="text"
					id="subject"
					name="subject"
					value={formData.subject}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label htmlFor="text">Message:</label>
				<textarea
					id="text"
					name="text"
					value={formData.text}
					onChange={handleChange}
					required
				/>
			</div>
			<button type="submit">Send Email</button>
		</form>
	)
}
