export class Proyectos{
    id?: number;
    nombreP: string;
    descrip: string;

    constructor(nombreP: string, descrip: string){
        this.nombreP = nombreP;
        this.descrip = descrip;
    }
}