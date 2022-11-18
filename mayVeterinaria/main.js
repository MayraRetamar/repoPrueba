"use strict";
exports.__esModule = true;
var fs = require("fs");
var Mascota = /** @class */ (function () {
    function Mascota(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }
    Mascota.prototype.getNombre = function () {
        return this.nombre;
    };
    Mascota.prototype.getEspecie = function () {
        return this.especie;
    };
    return Mascota;
}());
var Cliente = /** @class */ (function () {
    function Cliente(id, nombre, telefono, visitas, listaMascota) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.visitas = visitas;
        this.listaMascota = listaMascota;
    }
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    Cliente.prototype.getTelefono = function () {
        return this.telefono;
    };
    Cliente.prototype.setTelefono = function (celular) {
        this.telefono = celular;
    };
    Cliente.prototype.getVisitas = function () {
        return this.visitas;
    };
    Cliente.prototype.getListaMascota = function () {
        return this.listaMascota;
    };
    Cliente.prototype.clienteVip = function () {
        if (this.visitas >= 5) {
            console.log("Con su cantidad de visitas usted es cliente Vip");
        }
    };
    Cliente.prototype.mostrarMascotas = function () {
        console.log(this.listaMascota);
    };
    return Cliente;
}());
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(txtFileLocation) {
        var archivoTxt = fs.readFileSync(txtFileLocation, 'utf-8');
        this.arregloString = archivoTxt.split(';');
    }
    GestorDeArchivos.prototype.mostrarArreglo = function () {
        console.log(this.arregloString);
    };
    GestorDeArchivos.prototype.getArregloString = function () {
        return this.arregloString;
    };
    return GestorDeArchivos;
}());
//Funcion para cargar arreglo mascota 
function cargarArreglo(elemento, arr) {
    var datos = elemento.split(',');
    var nombre = datos[0];
    var especie = datos[1];
    var nuevaMascota = new Mascota(nombre, especie);
    arr.push(nuevaMascota);
    return arr;
}
var datosMascota = new GestorDeArchivos("mascotas.txt");
console.log(datosMascota);
var animal = [];
for (var i = 0; i < datosMascota.getArregloString.length; i++) {
    cargarArreglo(datosMascota.getArregloString()[i], animal);
}
console.log(animal);
// funcion crear aleatorio
function crearAleatorio(max) {
    return Math.floor(Math.random() * max);
}
// funcion cargar arreglo cliente
function cargarCliente(elemento, arr, listaMascota) {
    var datos = elemento.split(',');
    var id = crearAleatorio(10000);
    var nombre = datos[1];
    var telefono = Number(datos[2]);
    var visitas = Number(datos[3]);
    var arrayMascota = listaMascota;
    var nuevoCliente = new Cliente(id, nombre, telefono, visitas, listaMascota);
    arr.push(nuevoCliente);
    return arr;
}
var datosClientes = new GestorDeArchivos("cliente.txt");
console.log(datosClientes);
var listaMascota = animal;
var listaPersonas = [];
for (var i = 0; i < datosClientes.getArregloString().length; i++) {
    cargarCliente(datosClientes.getArregloString()[i], listaPersonas, animal);
}
