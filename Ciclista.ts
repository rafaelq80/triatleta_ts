import { Atleta } from "./Atleta";

export class Ciclista extends Atleta {

    constructor (nome: string){
        super(nome);
    }

    public pedalar(): void{
        console.log("Pedalando...");
    }
}