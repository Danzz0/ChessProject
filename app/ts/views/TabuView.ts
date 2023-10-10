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

        for(let linha = 0; linha < 8; linha++){
            
            for(let coluna = 0; coluna<8; coluna++){
                `<tr></tr>`
                tr.push(td)
                
            }
            line.push(`<tr>${tr.join(" ")}</tr>`)

        }
        
        return line.join(" ");
    }


    public update(){
        console.log("testeHtml")
        this._elementos.innerHTML = `<table class="centro"> <tbody>${this.template()}</tbody> </table>`;
    }


}



