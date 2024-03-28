import { Pessoa } from "./Pessoa";

export class Atleta extends Pessoa {

    constructor (nome: string){
        super(nome);
    }

    public aquecer(): void{
        console.log("Aquecendo...");
    }

}