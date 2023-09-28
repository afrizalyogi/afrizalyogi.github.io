import { client } from "./client"

export interface Post {
	_id: string
	title: string
	overview: string
	content: any
	date: string
	slug: {
		current: string
	}
	_createdAt: string
}

export async function getData() {
	const query = `*[_type == "post"]`
	const data = await client.fetch(query)

	return data
}
