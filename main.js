var yesCount = 0;
var noCount = 0;

function revealRules() {
	if (document.getElementById("ruleTxt").innerHTML === "") {
		document.getElementById("ruleTxt").innerHTML = "Mucho Texto";
	} else {
		document.getElementById("ruleTxt").innerHTML = "";
	}
}

function yes() {
	yesCount++;
	document.getElementById("yesCount").innerHTML = yesCount;
}

function no() {
	noCount++;
	document.getElementById("noCount").innerHTML = noCount;
}
