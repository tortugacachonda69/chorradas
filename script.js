const inicioFrase = ["porque","acho","cuando","contra","pero","y"]

const articulo = ["la","el","un","una"]

const sujeto = ["elle","Amparo","pollo","bebé","fascista","canario","horchata","gasolina","condon","horno","alcohol","porro","director","gazpacho","madre",
"Kurti","colectivo","tecito","csgo","empresa","dinosaurio","espermatozoides","fuego","Sandra","pulpito"];

const verbo = ["está","es","tiene","bebe","fuma","hace","quiere","dice","mea","siente"];

const predicado = ["caca","porros","ganchillo","gilipolleces","cosas","que","si","boca","entender el género","drogarse","cerveza"] 
let sintaxis = 0;

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
 posicionInicioFrase = Math.floor(Math.random() * inicioFrase.length);
 posicionArticulo = Math.floor(Math.random() * articulo.length);
 posicionSujeto = Math.floor(Math.random() * sujeto.length);
 posicionVerbo = Math.floor(Math.random() * verbo.length);
 posicionPredicado = Math.floor(Math.random() * predicado.length);

if (sintaxis == 0) {
document.getElementById("frase").innerHTML = document.getElementById("frase").innerHTML + " " + inicioFrase[posicionInicioFrase];
sintaxis = 1;
}
else if (sintaxis == 1) {
document.getElementById("frase").innerHTML = document.getElementById("frase").innerHTML + " " + articulo[posicionArticulo];
sintaxis = 2;
}
else if (sintaxis == 2) {
document.getElementById("frase").innerHTML = document.getElementById("frase").innerHTML + " " + sujeto[posicionSujeto];
sintaxis = 3;
}
else if (sintaxis == 3) {
document.getElementById("frase").innerHTML = document.getElementById("frase").innerHTML + " " + verbo[posicionVerbo];
sintaxis = 4;
}
else if (sintaxis == 4) {
document.getElementById("frase").innerHTML = document.getElementById("frase").innerHTML + " " + predicado[posicionPredicado];
sintaxis = Math.floor(Math.random() * 2);
}

 }
  
 function influencia() {
 let influacion = document.getElementById("vocabulario").value;
 sujeto.push(influacion);
 document.getElementById("vocabulario").value = "";
 }