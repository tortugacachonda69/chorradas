const palabra = ["a","un","y","de","la","los","el","en","las","es","está","soy","eres","follar","tener","beber","fumar"];

const palabra2 = ["pene","Amparo","cerveza","vasito","agua","concentración","boca","pollo","semen"
,"bebé","fascista","canario","horchata","gasolina","condon",
,"horno","alcohol","porro","director","gazpacho","madre","anticapitalista"
,"anarquista","Kurti","colectivo","lgbt","que","algun","hacer"
,"tecito","csgo","empresa","dinosaurio","espermatozoides","fuego","Sandra"];
let primera = false;

function pasapalabra() {
let str = document.getElementById("input").value;
string = str.replace(/a|e|o|u/g,"i");
strong = string.replace(/A|E|O|U/g,"I");
strong = strong + " :(";
document.getElementById("salida").innerHTML = strong;
}

function color() {
let hex = document.getElementById("colorear").value;
document.getElementById('fondo').style.background = hex; 
}

function teQuiero() {
let nombreTq = document.getElementById("nombreTq").value;
salidaTq = "te quiero" + " " + nombreTq;
document.getElementById("salidaTq").innerHTML = salidaTq;
}

function frase() {
 posicion = Math.floor(Math.random() * palabra.length);
 posicion2 = Math.floor(Math.random() * palabra2.length);

if (primera == false) {
document.getElementById("frase").innerHTML = document.getElementById("frase").innerHTML + " " + palabra[posicion];
primera = true;
}
else if (primera == true) {
document.getElementById("frase").innerHTML = document.getElementById("frase").innerHTML + " " + palabra2[posicion2];
primera = false;
}

 }
  
 function influencia() {
 let influacion = document.getElementById("vocabulario").value;
 palabra2.push(influacion);
 document.getElementById("vocabulario").value = "";
 }