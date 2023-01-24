document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("load").style.animation =
		"wipe-out-left cubic-bezier(0.25, 1, 0.3, 1) 510ms";
	setTimeout(() => {
		document.getElementById("load").style.display = "none";
	}, 500);
});
