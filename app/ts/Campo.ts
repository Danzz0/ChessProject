
export class Campo{
    public erro:string = "";
    constructor(private _simbolo:string, private _cor:string){
        if(this._cor == "Branco"){
            // cor da div do elemento vai ficar branca
        } else {
            // cor da div do elemento vai ficar preta
        }
    }

    

    get simbolo():string{ 
        return this._simbolo;
    }
    getErro():string{ 
        return this.erro;
    }
    

    setJogador(jogada:string):boolean{ // atualiza o campo do tabuleiro informado pela jogada do usuário
        if(this._simbolo == " "){ // Verifica se o campo está vazio
            this._simbolo = jogada;
            return true;
        } else { // Se o campo já estiver sendo usado!
            this.erro = "ERRO: Campo já usado!";
            return false
        }
    }
}