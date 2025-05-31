import { client } from "./client"

export async function getData() {
	const query = `*[_type == "post"] | order(date desc)`
	const data = await client.fetch(query)

	return data
}
