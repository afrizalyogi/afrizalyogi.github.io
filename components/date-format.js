export default function formatDate(dateString) {
	return new Date(dateString).toLocaleDateString("en-US", {
		day: "numeric",
		month: "short",
		year: "numeric",
	})
}
