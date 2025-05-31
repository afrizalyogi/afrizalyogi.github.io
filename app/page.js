"use client"
import MainWrapper from "../components/main-wrapper"
import Hero from "../components/section/hero"
import Services from "../components/section/service"
import Showcase from "../components/section/showcase"
import Testimonial from "../components/section/testimonial"
import Talent from "../components/section/talent"

export default function Home() {
	return (
		<MainWrapper>
			<Hero></Hero>
			<Services></Services>
			<Showcase></Showcase>
			<Testimonial></Testimonial>
			<Talent></Talent>
		</MainWrapper>
	)
}
