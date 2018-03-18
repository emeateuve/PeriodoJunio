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

var existe = false;

function insertarDropdown() {
    var contenedor = document.getElementById("dropdown");
    if (existe === false) {
        var dropdown = document.createElement("select");
        dropdown.setAttribute("id", "miDropdown")
        existe = true;
        contenedor.appendChild(dropdown)


    }
}

function insertarOpcion() {
    var midropdown = document.getElementById("miDropdown");
    midropdown.options.add(new Option(document.getElementById("textoOpcion").value));
}