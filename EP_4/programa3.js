
var index;
var text = "<ul>";
var frutas = ["Platano", "Naranja", "Manzana", "Mango","Fresa","Uva","Granadilla"];
function ver() {
    for (index = 0; index < frutas.length; index++) {
        text += "<li>" + frutas[index] + "</li>";
    }
    text += "</ul>";
    document.getElementById("demo").innerHTML = text;
}
function ordenar() {
    frutas.sort();
    document.getElementById("demo1").innerHTML = frutas;
}
function invertir() {
    frutas.reverse();
    document.getElementById("demo2").innerHTML = frutas;
}
function longitud() {
    var numero=frutas.length;
    document.getElementById("demo3").innerHTML =
    "El numero de elementos del arrays es:"+numero;
}
function insertar() {
    frutas.push("Fresa");
    document.getElementById("demo4").innerHTML = frutas;
}
function eliminar() {
    frutas.splice(0, 1);
    document.getElementById("demo5").innerHTML = frutas;
}
