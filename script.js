function pasapalabra() {
	let str = document.getElementById("input").value;
	string = str.replace(/a|e|o|u/g,"i");
	strong = string.replace(/A|E|O|U/g,"I");
	strong = strong + " :("
	document.getElementById("salida").innerHTML = strong
}

function color() {
	let hex = document.getElementById("colorear").value;
	document.getElementById('fondo').style.background = hex; 
}