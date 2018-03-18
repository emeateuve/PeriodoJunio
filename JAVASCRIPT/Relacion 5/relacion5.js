/* Ejercicios 2-3-4-5 */



function insertarFila() {
    var posicion = document.getElementById("inputFila").value;
    var latabla = document.getElementById("mitabla");
    latabla.insertRow(posicion).innerHTML = "TABLA INSERTADA"
}

function actualizarCelda() {
    var fila = document.getElementById("posicionFila").value;
    var columna = document.getElementById("posicionColumna").value;
    var texto = document.getElementById("posicionTexto").value;
    document.getElementById("mitabla").rows[fila].cells[columna].innerHTML = texto

}
