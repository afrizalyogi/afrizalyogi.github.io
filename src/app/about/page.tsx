import MainWrapper from "@/components/main-wrapper"
import AboutMe from "@/components/about-me"
import Services from "@/components/service"
import Journey from "@/components/journey"
import Talent from "@/components/talent"
import Contact from "@/components/contact"

export default function About() {
	return (
		<MainWrapper>
			<AboutMe></AboutMe>
			<Services></Services>
			<Journey></Journey>
			<Talent></Talent>
			<Contact></Contact>
		</MainWrapper>
	)
}
