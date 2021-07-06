function pasapalabra() {
	let str = document.getElementById("input").value;
	string = str.replace(/a|e|o|u/gi,"i");
	string = string + " :("
	document.getElementById("input").value = string
}

function color() {
	let hex = document.getElementById("colorear").value;
	document.getElementById('fondo').style.background = hex; 
}