import { Atleta } from "./Atleta";

export class Nadador extends Atleta {

    constructor (nome: string){
        super(nome);
    }

    public nadar(): void{
        console.log("Nadando...");
    }
}