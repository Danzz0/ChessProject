import { Campo } from "../Campo"


export class TabuController{
    public _tabu:Campo[][] = new Array<Array<Campo>>(8).fill([]).map(() => new Array<Campo>(8));
    public bomdia:string = "bom dia"

    public pariTabu(board:Campo[][]):Campo[][]{
        for(var linha = 0; linha<8; linha++){
            for(var coluna = 0; coluna<8; coluna++){
                if(coluna%2 == 0){
                    board[linha][coluna] = new Campo(" ", "Branco");
                } else {
                    board[linha][coluna] = new Campo(" ", "Preto");
                }
                
            }
        
        } 
        return board;
    }

    get tabu():Campo[][]{
        return this._tabu
    }

    main(event:Event):Campo[][]{
        event.preventDefault();
        
        var b = this.pariTabu(this._tabu);
        console.log(b);
        return b;
    }

    teste():string{
        return this.bomdia
    }

    



    
}