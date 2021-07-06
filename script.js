function pasapalabra() {
	let str = document.getElementById("input").value;
	string = str.replace(/a|e|o|u/g,"i");
	string = string + " :("
	document.getElementById("input").value = string
}

