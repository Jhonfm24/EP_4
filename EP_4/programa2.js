function generarListaAleatoria(min, max, cantidad) {
    var lista = [];
    for (var i = 0; i < cantidad; i++) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        lista.push(num);
    }
    return lista;
}

function mostrarNumeros() {
    var min = parseInt(document.getElementById('min').value);
    var max = parseInt(document.getElementById('max').value);
    var lista = generarListaAleatoria(min, max, 20);
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = "";
    lista.forEach((num, x) => {
        resultadoDiv.innerHTML += `${x + 1} - ${num}<br>`;
    });
}