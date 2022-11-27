
 
import * as fs from 'fs';
 
class Mascotas { 
   protected nombre : string;
   protected especie : string;
   
   
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
   
   public setEspecie(nuevaEspecie: string) : void { 
       this.especie = nuevaEspecie;
   }
       
   public asignarEspecie() {

           if (this.especie === "perro" || this.especie === "gato"){
               console.log (this.especie)
           } else  { 
               this.setEspecie("exótica");
           }
       }
     }


    class Cliente { 
       private id : string;
       private nombre : string;
       private telefono : number;
       private visitas : number;
       private listaMascota : Array <Mascotas>;
   
       constructor ( nombre: string, telefono : number, visitas: number, id : string, listaMascota : Array<Mascotas>) { 
           this.nombre = nombre;
           this.telefono = telefono;
           this.visitas = visitas;
           this.listaMascota = listaMascota;
           this.id = id;
            
        }

        public getId() : string { 
           return this.id;
        }
      
   
       public getVisitas() : number { 
           return this.visitas;
       }
   
       public getListaMascota() : Array<Mascotas>{ 
           return this.listaMascota;
       }
   
       public setVisitas(nuevaVisitas) : void {
           this.visitas= nuevaVisitas;
       }
          
       public asignarCliente() {     
           if (this.visitas >= 0 && this.visitas <=5){
               this.setVisitas(`Con 5 visitas usted será cliente VIP. Lleva ${this.visitas} Visitas. Lo esperamos pronto`);
           }else{ 
               this.setVisitas(`Ha alcanzado las 5 visitas. Felicidades usted es un cliente VIP`);
           }
       
       }
   
   
       public mostrarMascotas() : void { 
           console.log(this.listaMascota);
       }
   
       public setTelefono(celular : number) : void { 
           this.telefono = celular;
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

function cargarArreglo(elemento: string, arr: Array<Mascotas>) : Array<Mascotas> { 
   let datos: string[] = elemento.split(',');
   let nombre: string = datos[0];
   let especie: string = datos[1];

        
   let nuevaMascota : Mascotas = new Mascotas(nombre,especie); 

   arr.push(nuevaMascota);
   nuevaMascota.asignarEspecie();
  

   return arr;
}





let datosMascota : GestorDeArchivos = new GestorDeArchivos("mascotas.txt");


console.log(datosMascota);

let animal : Array<Mascotas> = [];



for(let i = 0; i <datosMascota.getArregloString().length; i++) { 
   cargarArreglo(datosMascota.getArregloString()[i], animal);
   

}

 
console.log(animal);




// funcion cargar arreglo cliente


function cargarCliente(elemento: string, arr: Array<Cliente>, animal : Array<Mascotas>) : Array<Cliente> { 
   
   let datos: string[] = elemento.split(',');
   let nombre: string = datos[0];
   let telefono: number = Number(datos[1]);
   let visitas : number = Number(datos[2]);

   
    let nuevoCliente : Cliente = new Cliente (nombre, telefono,visitas,crearId(arr), animal);
   

   arr.push(nuevoCliente);
    nuevoCliente.asignarCliente();
  

   return arr;
}


let crearId = ( lista) => {
   let id :string = " ";
   for (let i :number = 0; i < 3; i++){
       let random :number = Math.floor(Math.random() * 10);
       id += random;
    } 
    
   for (let i :number = 0; i < lista.length; i++){
       if (id === lista[i].getId()){
           crearId(lista);
       }
    }

   return id; 
};



let datosClientes : GestorDeArchivos = new GestorDeArchivos("cliente.txt");

console.log(datosClientes);


let listaPersonas : Array<Cliente> = [];

for(let i = 0; i < datosClientes.getArregloString().length; i++) { 
   cargarCliente(datosClientes.getArregloString()[i], listaPersonas ,animal);
   crearId(listaPersonas);
   
}
console.log(listaPersonas);