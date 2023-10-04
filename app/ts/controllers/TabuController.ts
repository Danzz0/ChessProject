import { Campo } from "../Campo"


export class TabuController{
    public _tabu:Campo[][] = new Array<Array<Campo>>(8).fill([]).map(() => new Array<Campo>(8));
    public bomdia:string = "bom dia"

    public pariTabu(){
        for(var linha = 0; linha<8; linha++){
            for(var coluna = 0; coluna<8; coluna++){
                if(coluna%2 == 0){
                    this._tabu[linha][coluna] = new Campo(" ", "Branco");
                } else {
                    this._tabu[linha][coluna] = new Campo(" ", "Preto");
                }
                // console.log(coluna)
            }
             // ->   Quando esse códgio está dentro desse escopo, o programa funciona
           
        } 

        return this._tabu
        
        
    }

    get tabu():Campo[][]{
        return this._tabu
    }

    main():void{
        this.pariTabu()
        
    }

    teste():string{
        return this.bomdia
    }

    



    
}