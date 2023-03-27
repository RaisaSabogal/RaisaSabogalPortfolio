export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    descrip: string;

    constructor(nombre: string, apellido: string, descrip: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descrip = descrip;
    }
}