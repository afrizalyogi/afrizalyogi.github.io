import { defineField, defineType } from "sanity"

export default defineType({
	name: "post",
	type: "document",
	title: "Post",
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Title",
		}),
		defineField({
			name: "overview",
			type: "string",
			title: "Overview",
		}),
		defineField({
			name: "date",
			type: "date",
			title: "Date",
		}),
		defineField({
			name: "slug",
			type: "slug",
			title: "Slug",
			options: {
				source: "title",
			},
		}),
		defineField({
			name: "content",
			type: "array",
			title: "Content",
			of: [
				{
					type: "block",
				},
				{
					type: "image",
					fields: [
						{
							type: "text",
							name: "alt",
							title: "Alternative Text",
						},
					],
				},
			],
		}),
	],
})
