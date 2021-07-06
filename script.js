function pasapalabra() {
	let str = document.getElementById("input").value;
	string = str.replace(/a|e|o|u/g,"i");
	strong = str.replace(/A|E|O|U/g,"I");
	strong = strong + " :("
	document.getElementById("input").value = strong
}

function color() {
	let hex = document.getElementById("colorear").value;
	document.getElementById('fondo').style.background = hex; 
}