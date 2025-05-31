"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

function Offset(e, x, y) {
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
		const onMouseMove = (e) => {
			const { x, y } = Offset(e, scaleX, scaleY)
			setOffset({ x, y })
		}

		window.addEventListener("mousemove", onMouseMove)

		return () => {
			window.removeEventListener("mousemove", onMouseMove)
		}
	}, [scaleX, scaleY])
	return (
		<Image
			id="profile-triangle"
			className="absolute blur-sm drop-shadow-xl w-20
			xl:w-auto"
			src="/assets/profile/triangle.png"
			alt=""
			width={460}
			height={618}
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
		const onMouseMove = (e) => {
			const { x, y } = Offset(e, scaleX, scaleY)
			setOffset({ x, y })
		}

		window.addEventListener("mousemove", onMouseMove)

		return () => {
			window.removeEventListener("mousemove", onMouseMove)
		}
	}, [scaleX, scaleY])
	return (
		<Image
			id="profile-base"
			className="drop-shadow-xl w-64
			xl:w-full"
			src="/assets/profile/profile-with-bg.png"
			alt=""
			width={640}
			height={360}
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
		const onMouseMove = (e) => {
			const { x, y } = Offset(e, scaleX, scaleY)
			setOffset({ x, y })
		}

		window.addEventListener("mousemove", onMouseMove)

		return () => {
			window.removeEventListener("mousemove", onMouseMove)
		}
	}, [scaleX, scaleY])
	return (
		<Image
			id="profile-circle"
			className="absolute drop-shadow-xl w-28 -ml-12
			xl:w-auto xl:ml-0"
			src="/assets/profile/circle.png"
			alt=""
			width={100}
			height={100}
			style={{
				transform: `translate(192px, 12px) translate(${offset.x}px, ${offset.y}px)`,
			}}
		/>
	)
}
