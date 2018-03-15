/* Ejercicios 5,6 */

function eliminaElemento(elemento) {
    var padre = document.getElementById('padre');
    var hijo = document.getElementById(elemento)
    padre.removeChild(hijo);
};

function crearTabla(array) {
    let esFila = false;
    $('#tabla').append('<table></table>');

    for (let i = 0; i < array.length; i++){
        if(array[i] === '/'){
            esFila = true;
            i++
            $('#tabla').append('<tr>');
        }

        if(esFila === true){
            $('#tabla').append('<td>' + array[i] + '</td>');
        }

        if(esFila === false){
            $('#tabla').append('<th>' + array[i] + '</th>');
        }
    }
}

crearTabla(['primero','segundo','tercero','/','despues','de','la barra','/','despues','de','la barra','/','despues','de','la barra','/','de','la barra'])