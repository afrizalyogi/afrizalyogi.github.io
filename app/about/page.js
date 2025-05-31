import MainWrapper from "../../components/main-wrapper"
import AboutMe from "../../components/section/about-me"
import Services from "../../components/section/service"
import Journey from "../../components/section/journey"
import Talent from "../../components/section/talent"

export default function About() {
	return (
		<MainWrapper>
			<AboutMe></AboutMe>
			<Journey></Journey>
			<Talent></Talent>
		</MainWrapper>
	)
}
