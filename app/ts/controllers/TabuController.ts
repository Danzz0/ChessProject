import { Campo } from "../Campo"
import { TabuView } from "../views/TabuView"


export class TabuController{
    public _tabu:Campo[][] = new Array<Array<Campo>>(8).fill([]).map(() => new Array<Campo>(8));

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
        // board.forEach((value) =>{
            
        // })
        return board; // esse será o tabuleiro em que serão programadas as ações 
    }

    get tabu():Campo[][]{
        return this._tabu
    }

    main(event:Event):Campo[][]{
        event.preventDefault();

        let tabHtml = new TabuView("#tabuView");
        tabHtml.update();
        
        var b = this.pariTabu(this._tabu);
        
        console.log(b);
        return b;
    }

    
}