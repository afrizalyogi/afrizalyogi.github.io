import Contact from "@/components/contact"
import MainWrapper from "@/components/main-wrapper"
import Image from "next/image"

export default function Certificate() {
	return (
		<MainWrapper>
			<section id="certificate" className="py-20">
				<div className="section-title mb-6 lg:mb-12">
					<p
						className="text-5xl absolute left-0 right-0 text-center -mt-6 opacity-10
          	sm:text-7xl sm:-mt-12
						lg:right-auto lg:left-24 lg:text-8xl 
						xl:-mt-16
          ">
						<b>Certificate</b>
					</p>
					<div
						className="flex flex-wrap gap-6 justify-center items-center
					lg:flex-nowrap lg:justify-between">
						<div className="flex justify-center items-center gap-6">
							<h1
								className="text-3xl w-full lg:w-auto mx-auto font-bold drop-shadow-lg
							sm:text-5xl">
								Certificate
							</h1>
							<div className="line hidden lg:block mx-auto drop-shadow-lg bg-black-primary dark:bg-white-primary"></div>
						</div>
					</div>
				</div>
				<div className="section-content">
					<div className="grid grid-cols-1 xl:grid-cols-3 justify-center gap-6">
						<div className="flex flex-col gap-6">
							<Image
								src="/assets/certificates/Afrizal Yogi Pratama_Junior Web Developer_page-0001.jpg"
								alt=""
								width={640}
								height={640}
							/>
							<Image
								src="/assets/certificates/Network and Computer Systems Technicians_page-0001.jpg"
								alt=""
								width={640}
								height={640}
							/>
							<Image
								src="/assets/certificates/Afrizal YogiPratama-Jaringan Kompute-certificate_page-0001.jpg"
								alt=""
								width={640}
								height={640}
							/>
							<Image
								src="/assets/certificates/Afrizal Yogi Pratama_Database Design_course_certificate_page-0001.jpg"
								alt=""
								width={640}
								height={640}
							/>
							<Image
								src="/assets/certificates/Afrizal Yogi Pratama_Database Programming_course_certificate_page-0001.jpg"
								alt=""
								width={640}
								height={640}
							/>
						</div>

						<div className="flex flex-col gap-6">
							<Image
								src="/assets/certificates/Dicoding_SoftwareDeveloper_sertifikat_course_292_1519878_220323110903_page-0001.jpg"
								alt=""
								width={640}
								height={640}
							/>
							<Image
								src="/assets/certificates/Dicoding_WebProgramming_sertifikat_course_123_1519878_191022150633_page-0001.jpg"
								alt=""
								width={640}
								height={640}
							/>
							<Image
								src="/assets/certificates/Dicoding_FrontEnd_sertifikat_course_315_1519878_251022090630_page-0001.jpg"
								alt=""
								width={640}
								height={640}
							/>
							<Image
								src="/assets/certificates/Dicoding_JavaScript_sertifikat_course_256_1519878_141022233342_page-0001.jpg"
								alt=""
								width={640}
								height={640}
							/>
							<Image
								src="/assets/certificates/Dicoding_DevOps_sertifikat_course_382_1519878_191222090650_page-0001.jpg"
								alt=""
								width={640}
								height={640}
							/>
							<Image
								src="/assets/certificates/Pelatihan Junior Web Developer_page-0001.jpg"
								alt=""
								width={640}
								height={640}
							/>
							<Image
								src="/assets/certificates/ResponsiveWeb_AfrizalYogi_page-0001.jpg"
								alt=""
								width={640}
								height={640}
							/>
						</div>

						<div className="flex flex-col gap-6">
							<Image
								src="/assets/certificates/full-stack-web-developer-afrizal-yogi-pratama_page-0001.jpg"
								alt=""
								width={640}
								height={640}
							/>
							<Image
								src="/assets/certificates/Progate_CertWebDevelopment_AfrizalYogiPratama_page-0001.jpg"
								alt=""
								width={640}
								height={640}
							/>
							<Image
								src="/assets/certificates/Progate_CertReact_AfrizalYogiPratama_page-0001.jpg"
								alt=""
								width={640}
								height={640}
							/>
							<Image
								src="/assets/certificates/Progate_CertSass_AfrizalYogiPratama_page-0001.jpg"
								alt=""
								width={640}
								height={640}
							/>
							<Image
								src="/assets/certificates/CertUdemy-GitfromBasictoAdvanced-UC-6d514fae-578a-411c-a97d-14a50f269cb7_page-0001.jpg"
								alt=""
								width={640}
								height={640}
							/>
							<Image
								src="/assets/certificates/Afrizal Yogi_UIUX_certificate-189699UI_UX1042023_page-0001.jpg"
								alt=""
								width={640}
								height={640}
							/>
							<Image
								src="/assets/certificates/afrizal-yogi-certificate-completion-pmmc23_page-0001.jpg"
								alt=""
								width={640}
								height={640}
							/>
						</div>
					</div>
				</div>
			</section>
			<Contact></Contact>
		</MainWrapper>
	)
}
