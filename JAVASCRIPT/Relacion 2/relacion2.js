/* Ejercicios 3-4 */

class Agenda{
    constructor(){
        this.contactos = [];
        this.id = 0;
    };

    introducirContacto(nombre, direccion, telefono, email) {
        this.contactos.push({
            id: this.id,
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            email: email
        });
        this.id++
    }

    mostrarContacto(nombre){
        for (let i = 0; i < this.contactos.length; i++){
            if (this.contactos[i].nombre === nombre){
                return this.contactos[i];
            }
        }
    }

    mostrarTodos(){
        for (let i = 0; i < this.contactos.length; i++){

        }
    }

}

let miAgenda = new Agenda;
miAgenda.introducirContacto('Migue', 'Piso', '619619619', 'emeateuve@gmail.com')
miAgenda.introducirContacto('Antonio', 'Casa', '666666666', 'antonio@gmail.com')

console.log(miAgenda.mostrarContacto('Migue'));
console.log(miAgenda.mostrarTodos());