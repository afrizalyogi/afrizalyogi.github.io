import { type SchemaTypeDefinition } from "sanity"

import post from "./schemas/post"

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [post],
}
