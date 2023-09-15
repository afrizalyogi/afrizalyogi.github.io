"use client"
import { useState, useEffect } from "react"

function Offset(e: MouseEvent, x: number, y: number) {
	const { clientX, clientY } = e
	const offsetX = (clientX - window.innerWidth / 2) / x
	const offsetY = (clientY - window.innerHeight / 2) / y
	return { x: offsetX, y: offsetY }
}

export function ProfileTriangle() {
	const [offset, setOffset] = useState({ x: 0, y: 0 })
	const scaleX = 15
	const scaleY = 15

	useEffect(() => {
		const onMouseMove = (e: MouseEvent) => {
			const { x, y } = Offset(e, scaleX, scaleY)
			setOffset({ x, y })
		}

		window.addEventListener("mousemove", onMouseMove)

		return () => {
			window.removeEventListener("mousemove", onMouseMove)
		}
	}, [scaleX, scaleY])
	return (
		<img
			id="profile-triangle"
			className="absolute blur-sm drop-shadow-xl"
			src="assets/profile/triangle.png"
			alt=""
			style={{
				transform: `translate(0, -172px) translate(${offset.x}px, ${offset.y}px)`,
			}}
		/>
	)
}

export function ProfileBase() {
	const [offset, setOffset] = useState({ x: 0, y: 0 })
	const scaleX = 70
	const scaleY = 60

	useEffect(() => {
		const onMouseMove = (e: MouseEvent) => {
			const { x, y } = Offset(e, scaleX, scaleY)
			setOffset({ x, y })
		}

		window.addEventListener("mousemove", onMouseMove)

		return () => {
			window.removeEventListener("mousemove", onMouseMove)
		}
	}, [scaleX, scaleY])
	return (
		<img
			id="profile-base"
			className="drop-shadow-xl"
			src="assets/profile/profile-with-bg.png"
			alt=""
			style={{
				transform: `translate(0, -36px) translate(${offset.x}px, ${offset.y}px)`,
			}}
		/>
	)
}

export function ProfileCircle() {
	const [offset, setOffset] = useState({ x: 0, y: 0 })
	const scaleX = -40
	const scaleY = -40

	useEffect(() => {
		const onMouseMove = (e: MouseEvent) => {
			const { x, y } = Offset(e, scaleX, scaleY)
			setOffset({ x, y })
		}

		window.addEventListener("mousemove", onMouseMove)

		return () => {
			window.removeEventListener("mousemove", onMouseMove)
		}
	}, [scaleX, scaleY])
	return (
		<img
			id="profile-circle"
			className="absolute drop-shadow-xl"
			src="assets/profile/circle.png"
			alt=""
			style={{
				transform: `translate(224px, 0) translate(${offset.x}px, ${offset.y}px)`,
			}}
		/>
	)
}