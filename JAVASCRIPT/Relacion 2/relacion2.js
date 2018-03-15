/* Ejercicios 3-4 */

class Agenda {
    constructor() {
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

        $('#nombreHTML').val('');
        $('#direccionHTML').val('');
        $('#telefonoHTML').val('');
        $('#emailHTML').val('');

        // this.mostrarTodos()

    }

    mostrarContacto(nombre) {
        for (let i = 0; i < this.contactos.length; i++) {
            if (this.contactos[i].nombre === nombre) {
                return this.contactos[i];
            }
        }
    }

    mostrarTodos() {
        let nombres = [];
        for (let i = 0; i < this.contactos.length; i++) {
            nombres.push(this.contactos[i].nombre);
        }
        document.getElementById('contactos').innerHTML = nombres;
    }

    borrarContacto(nombre) {
        let contactoBorrado = false;
        for (let i = 0; i < this.contactos.length; i++) {
            if (this.contactos[i].nombre === nombre) {
                document.getElementById('borrado').innerHTML = 'Se ha borrado ' + nombre + ' satisfactoriamente'
                this.contactos.splice(i, 1)
                contactoBorrado = true;
            }
        }
        if(contactoBorrado == false){
            document.getElementById('borrado').innerHTML = 'No se ha encontrado nadie con ese nombre.'
        }
    }
}

let miAgenda = new Agenda;

miAgenda.introducirContacto('Migue', 'Piso', '619619619', 'emeateuve@gmail.com');
miAgenda.introducirContacto('Antonio', 'Casa', '666666666', 'antonio@gmail.com');
miAgenda.introducirContacto('Jose', 'PISO', '123123123', 'jose@gmail.com');
miAgenda.introducirContacto('Pepe', 'Casa', '456456456', 'pepe@gmail.com');
//
// console.log(miAgenda.mostrarContacto('Migue'));
// console.log(miAgenda.mostrarTodos());
// console.log(miAgenda.borrarContacto('Migue'));
