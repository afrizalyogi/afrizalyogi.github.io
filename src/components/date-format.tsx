export default function formatDate(dateString: string) {
	return new Date(dateString).toLocaleDateString("en-US", {
		day: "numeric",
		month: "short",
		year: "2-digit",
	})
}
