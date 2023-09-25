"use client"
import { FormEvent, useState } from "react"
import axios from "axios"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function EmailForm() {
	const [formData, setFormData] = useState({
		from: "",
		name: "",
		subject: "",
		text: "",
		phone: "",
	})

	const handleChange = (e: { target: { name: any; value: any } }) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			await axios.post("https://email.api.afrizalyogi.studio", formData)
			setFormData({
				from: "",
				name: "",
				subject: "",
				text: "",
				phone: "",
			})
		} catch (error) {
			console.error("Error sending email:", error)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="grid lg:grid-cols-2 gap-x-6">
				<div className="flex flex-wrap gap-2 mb-6">
					<label
						className="text-sm lg:text-lg text-black-secondary dark:text-white-secondary"
						htmlFor="name">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="e.g., Afrizal Yogi"
						className="border-2 bg-white-primary border-white-secondary rounded-lg px-4 h-10 w-full"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="flex flex-wrap gap-2 mb-6">
					<label
						className="text-sm lg:text-lg text-black-secondary dark:text-white-secondary"
						htmlFor="from">
						Email
					</label>
					<input
						type="email"
						id="from"
						name="from"
						placeholder="example@mail.com"
						className="border-2 bg-white-primary border-white-secondary rounded-lg px-4 h-10 w-full"
						value={formData.from}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="flex flex-wrap gap-2 mb-6">
					<label
						className="text-sm lg:text-lg text-black-secondary dark:text-white-secondary"
						htmlFor="phone">
						Phone
					</label>
					<input
						type="number"
						id="phone"
						name="phone"
						placeholder="+62 812 9876 1234"
						className="border-2 bg-white-primary border-white-secondary rounded-lg px-4 h-10 w-full"
						value={formData.phone}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="flex flex-wrap gap-2 mb-6">
					<label
						className="text-sm lg:text-lg text-black-secondary dark:text-white-secondary"
						htmlFor="subject">
						Subject
					</label>
					<input
						type="text"
						id="subject"
						name="subject"
						placeholder="e.g., UI Design Solutions for My Business"
						className="border-2 bg-white-primary border-white-secondary rounded-lg px-4 h-10 w-full"
						value={formData.subject}
						onChange={handleChange}
						required
					/>
				</div>
			</div>
			<div className="flex flex-wrap gap-2 mb-6">
				<label
					className="text-sm lg:text-lg text-black-secondary dark:text-white-secondary"
					htmlFor="text">
					Message
				</label>
				<textarea
					id="text"
					name="text"
					placeholder="How can i help you?"
					className="border-2 bg-white-primary border-white-secondary rounded-lg px-4 py-2 w-full"
					value={formData.text}
					onChange={handleChange}
					required
				/>
			</div>
			<button
				type="submit"
				className="text-sm lg:text-lg bg-blue-primary text-white-primary py-4 lg:py-2 px-6 rounded-xl">
				<FontAwesomeIcon icon={faPaperPlane} className="mx-2" />
				Send Message
			</button>
		</form>
	)
}
