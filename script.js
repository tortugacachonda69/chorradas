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

function teQuiero() {
	let nombreTq = document.getElementById("nombreTq").value;
	salidaTq = "te quiero" + " " + nombreTq;
	document.getElementById("salidaTq").innerHTML = salidaTq
}

function frase() {
  let palabra = ["pene","amparo","cerveza","vasito","de","agua","chernobil","concentración","mearse","en","la","boca","un","pollo","semen","meter","bebe","fascista","los","canario","y","horchata"];
  posicion = Math.floor(Math.random() * (palabra.lenght + 1));
  document.getElementById("frase").innerHTML = document.getElementById("frase").innerHTML + " " + palabra[posicion];
  }
  