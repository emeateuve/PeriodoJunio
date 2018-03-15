/* Ejercicios 3-8 */

let numeros = [5, 3, 2, 4, 7, 10, 20];
let palabras = [
    'Blow',
    'Kiss',
    'Firegun',
    'abcde'
];

function max(array) {
    return Math.max.apply(null, array);
}



function filtraPalabrasMayores(array, valor) {
    let devueltas = [];
    for (let i = 0; i < array.length; i++ ) {
        if (array[i].length >= valor){
            devueltas.push(array[i]);
        }
    }
    return devueltas;
}



console.log(max(numeros)); // Llamada ejercicio 3
console.log(filtraPalabrasMayores(palabras, 5)) // Llamada ejercicio 8