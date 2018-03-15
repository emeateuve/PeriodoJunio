/* Ejercicio 1 */

let arrayColores = [
    'blue',
    'red',
    'yellow',
    'pink',
    'orange'];


function cargarPaleta() {
    for (let i = 0; i < arrayColores.length; i++){
        $('#paleta').append('<div id="'+i+'" style="height: 50px; width: 50px; border: 1px solid black;background-color: '+ arrayColores[i]+'; display: inline-block"></div>');
        $('#'+i).on('mouseenter', function () {
            $('body').css('background-color', arrayColores[i]);
        });
        $('#'+i).on('mouseleave', function () {
            $('body').css('background-color', 'white');
        })
    }

}