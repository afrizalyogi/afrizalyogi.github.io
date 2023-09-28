import ImageUrlBuilder from "@sanity/image-url"
import { client } from "./client"

const builder = ImageUrlBuilder(client)

export default function urlFor(source: any) {
	return builder.image(source)
}
