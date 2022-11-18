 import * as fs from 'fs'
 
 class Mascota { 
    private nombre: string;
    private especie : string;

    constructor (nombre: string, especie: string) { 
        this.nombre = nombre;
        this.especie = especie;
    }

    public getNombre() : string { 
        return this.nombre;
    }

    public getEspecie() : string { 
        return this.especie;
    }

 }


 class Cliente { 
    private id : number;
    private nombre : string;
    private telefono : number;
    private visitas : number;
    private listaMascota : Array <Mascota>;

    constructor ( id : number, nombre: string, telefono : number, visitas: number, listaMascota : Array<Mascota>) { 
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.visitas = visitas;
        this.listaMascota = listaMascota;

    }
    public getNombre() : string { 
        return this.nombre;
    }

    public getTelefono() : number { 
        return this.telefono;
    }

    public setTelefono(celular : number) : void { 
        this.telefono = celular;
    }

    public getVisitas() : number { 
        return this.visitas;
    }

    public getListaMascota() : Array<Mascota>{ 
        return this.listaMascota;
    }

    public clienteVip() : void { 
        if(this.visitas >= 5) { 
            console.log("Con su cantidad de visitas usted es cliente Vip");
        }
    }

    public mostrarMascotas() : void { 
        console.log(this.listaMascota);
    }

  }

  
  class GestorDeArchivos {

    private arregloString: string[];

    constructor(txtFileLocation: string) {

        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8'); 
        this.arregloString = archivoTxt.split(';');
    
    }

    public mostrarArreglo(): void {
        console.log(this.arregloString);
    }

    public getArregloString(): string[] {
        return this.arregloString;
    }

}

//Funcion para cargar arreglo mascota 

function cargarArreglo(elemento: string, arr: Array<Mascota>) : Array<Mascota> { 
    let datos: string[] = elemento.split(',');
    let nombre: string = datos[0];
    let especie: string = datos[1];

         
    let nuevaMascota : Mascota = new Mascota(nombre,especie); 

    arr.push(nuevaMascota);

    return arr;
}


let datosMascota : GestorDeArchivos = new GestorDeArchivos("mascotas.txt");

console.log(datosMascota);

let animal : Array<Mascota> = [];

for(let i = 0; i <datosMascota.getArregloString.length; i++) { 
    cargarArreglo(datosMascota.getArregloString()[i], animal);
 }
    console.log(animal); 


// funcion crear aleatorio
function crearAleatorio(max : number){ 
    return Math.floor(Math.random()* max)
}


// funcion cargar arreglo cliente


function cargarCliente(elemento: string, arr: Array<Cliente>, listaMascota : Array<Mascota>) : Array<Cliente> { 
    
    let datos: string[] = elemento.split(',');
    let id : number = crearAleatorio(10000)
    let nombre: string = datos[1];
    let telefono: number = Number(datos[2])
    let visitas : number = Number(datos[3]);
    
    let arrayMascota : Array<Mascota> = animal;
 

    let nuevoCliente : Cliente = new Cliente(id, nombre, telefono,visitas, listaMascota); 

    arr.push(nuevoCliente);

    return arr;
}


 let datosClientes : GestorDeArchivos = new GestorDeArchivos("cliente.txt");

 console.log(datosClientes);

 let arrayMascota : Array<Mascota> = animal
 let listaPersonas : Array<Cliente> = [];

 for(let i = 0; i < datosClientes.getArregloString().length; i++) { 
    cargarCliente(datosClientes.getArregloString()[i], listaPersonas,animal);
 }
 
