export class TabuView{
    private _elementos:Element;

    constructor(seletor:string){
        this._elementos = document.querySelector(seletor);
        console.log(seletor)
    }

    public template():string{
        var tr:Array<string> = [];
        var td = `<td><div class="campo"></div></td>`;                
        var line:Array<string> = [];
        var thead:Array<string> = [];
        var letras:number;
        var modelo:string;
        for(let linha = 0; linha < 8; linha++){
            if(linha>0){
                tr.splice(0, tr.length)
            }
            
            for(let coluna = 0; coluna<8; coluna++){
                if(linha == 0 ){
                    letras = 65;
                    thead.push(`<th>${String.fromCharCode(letras + coluna)}</th>`);
                }
                
                tr.push(td)
                
            }
            
            line.push(`<tr>${tr.join(" ")}</tr>`)

        }
        console.log(tr.join(" "))
        modelo = `<thead>${thead.join(" ")} </thead>${line.join(" ")}`;
        return modelo;
    }


    public update(){
        console.log("testeHtml")
        this._elementos.innerHTML = `<table class="centro"> <tbody>${this.template()}</tbody> </table>`;
    }


}



