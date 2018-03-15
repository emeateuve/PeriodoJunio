/* Ejercicios 5,6 */


function eliminaElemento(elemento) {
    var padre = document.getElementById('padre');
    var hijo = document.getElementById(elemento)
    padre.removeChild(hijo);
};



function crearTabla(array) {

    $('#tabla').append('<table></table>');

    for (let i = 0; i < array.length; i++){
        $('#tabla').append('<th>' + array[i] + '</th>');
        if(array[i] === '/'){
            i++
            $('#tabla').append('<tr>');
            $('#tabla').append('<td>' + array[i] + '</td>');
        }

    }
    
}

crearTabla(['primero','segundo','tercero','/','despues','de','la barra'])