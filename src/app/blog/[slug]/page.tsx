import { client } from "@/../sanity/lib/client"
import { Post } from "@/../sanity/lib/query"
import { PortableText } from "@portabletext/react"
import MainWrapper from "@/components/main-wrapper"
import urlFor from "@/../sanity/lib/image"
import Image from "next/image"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import formatDate from "@/components/date-format"

async function getData(slug: string) {
	const query = `*[_type == "post" && slug.current == "${slug}"][0]`
	const data = await client.fetch(query)

	return data
}

export default async function BlogPage({
	params,
}: {
	params: { slug: string }
}) {
	const data = (await getData(params.slug)) as Post
	const PortableTextComponent = {
		types: {
			image: ({ value }: { value: any }) => (
				<Image src={urlFor(value).url()} alt="Image" width={640} height={460} />
			),
		},
	}

	return (
		<MainWrapper>
			<section id="blog-page" className="pt-12 pb-20 max-w-screen-md mx-auto">
				<Link
					href={"/blog"}
					className="flex gap-2 items-center mb-12 text-black-secondary dark:text-white-secondary">
					<FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
					Back
				</Link>
				<div className="section-title lg:mb-12">
					<h1
						className="text-3xl font-bold
							sm:text-5xl">
						{data.title}
					</h1>
				</div>
				<div className="flex gap-6 items-center my-12 py-4 border-y-2 border-white-secondary dark:border-black-secondary">
					<Image
						src={"/assets/blog/profile.png"}
						alt="Afrizal Yogi"
						width={40}
						height={40}
					/>
					<div className="grid grid-flow-row items-center">
						<p className="text-sm sm:text-lg lg:text-xl">
							Afrizal Yogi Pratama
						</p>
						<p className="text-xs sm:text-md lg:text-lg text-black-secondary dark:text-white-secondary">
							{formatDate(data.date)}
						</p>
					</div>
				</div>
				<div className="section-content">
					<div>
						<PortableText
							value={data.content}
							components={PortableTextComponent}
						/>
					</div>
				</div>
			</section>
		</MainWrapper>
	)
}
