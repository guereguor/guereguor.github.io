function revealRules() {
	if (document.getElementById("ruleTxt").innerHTML === "" {
		document.getElementById("ruleTxt").innerHTML = "Mucho Texto";
		console.log(document.getElementById("ruleTxt").innerHTML)
	} else {
		document.getElementById("ruleTxt").innerHTML = "";
		console.log("Funciono");
	}
}