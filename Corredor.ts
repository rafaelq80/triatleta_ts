import { Atleta } from "./Atleta";

export class Corredor extends Atleta {

    constructor (nome: string){
        super(nome);
    }

    public correr(): void{
        console.log("Correndo...");
    }
}