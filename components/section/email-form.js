"use client"
import { useState, useEffect } from "react"
import axios from "axios"
import { Send } from "lucide-react"

export default function EmailForm() {
	const [formData, setFormData] = useState({
		from: "",
		name: "",
		subject: "",
		text: "",
		phone: "",
	})

	const [isSubmit, setIsSubmit] = useState(false)

	useEffect(() => {
		if (isSubmit) {
			setTimeout(() => {
				setIsSubmit(false)
			}, 3000)
		}
	}, [isSubmit])

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData({
			...formData,
			[name]: value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await axios.post("https://email-api-ay.vercel.app/", formData)
			setFormData({
				from: "",
				name: "",
				subject: "",
				text: "",
				phone: "",
			})
			setIsSubmit(true)
		} catch (error) {
			console.error("Error sending email:", error)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="grid lg:grid-cols-2 gap-x-6">
				<div className="flex flex-wrap gap-2 mb-6">
					<label
						className="text-sm lg:text-lg text-white-secondary"
						htmlFor="name">
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="e.g., Afrizal Yogi"
						className="border-2 bg-white-primary border-white-secondary text-black-primary rounded-lg px-4 h-10 w-full"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="flex flex-wrap gap-2 mb-6">
					<label
						className="text-sm lg:text-lg text-white-secondary"
						htmlFor="from">
						Email
					</label>
					<input
						type="email"
						id="from"
						name="from"
						placeholder="example@mail.com"
						className="border-2 bg-white-primary border-white-secondary text-black-primary rounded-lg px-4 h-10 w-full"
						value={formData.from}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="flex flex-wrap gap-2 mb-6">
					<label
						className="text-sm lg:text-lg text-white-secondary"
						htmlFor="phone">
						Phone
					</label>
					<input
						type="number"
						id="phone"
						name="phone"
						placeholder="+62 812 9876 1234"
						className="border-2 bg-white-primary border-white-secondary text-black-primary rounded-lg px-4 h-10 w-full"
						value={formData.phone}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="flex flex-wrap gap-2 mb-6">
					<label
						className="text-sm lg:text-lg text-white-secondary"
						htmlFor="subject">
						Subject
					</label>
					<input
						type="text"
						id="subject"
						name="subject"
						placeholder="e.g., UI Design Solutions for My Business"
						className="border-2 bg-white-primary border-white-secondary text-black-primary rounded-lg px-4 h-10 w-full"
						value={formData.subject}
						onChange={handleChange}
						required
					/>
				</div>
			</div>
			<div className="flex flex-wrap gap-2 mb-6">
				<label
					className="text-sm lg:text-lg text-white-secondary"
					htmlFor="text">
					Message
				</label>
				<textarea
					id="text"
					name="text"
					placeholder="How can i help you?"
					className="border-2 bg-white-primary border-white-secondary text-black-primary rounded-lg px-4 py-2 w-full"
					value={formData.text}
					onChange={handleChange}
					required
				/>
			</div>
			<button
				type="submit"
				className={`${
					isSubmit ? "bg-green" : "bg-blue-primary"
				} flex items-center gap-4 text-white-primary py-4 lg:py-2 px-6 rounded-xl`}>
				<Send/>
				{isSubmit ? "Sent Successfully" : "Send Message"}
			</button>
		</form>
	)
}
