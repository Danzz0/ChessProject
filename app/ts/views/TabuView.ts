export class TabuView{
    private _elementos:Element;
    private _tabela:Element;

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
        for(let linha = 1; linha <= 8; linha++){
            if(linha>1){
                tr.splice(0, tr.length)
            }
            
            for(let coluna = 0; coluna<8; coluna++){
                if(linha == 1 ){
                    letras = 65;
                    thead.push(`<th>${String.fromCharCode(letras + coluna)}</th>`);
                }

                tr.push(td)
            }
            
            line.push(`<tr><th>${linha}</th>${tr.join(" ")}</tr>`)
    
        }
        console.log(tr.join(" "))
        modelo = `<thead><th></th>${thead.join(" ")} </thead>${line.join(" ")}`;
        
        return modelo;
    }

    // Método em construção
    public tableClasses(tabela:Element){
        const pretoBranco = tabela.getElementsByTagName("td");
        const headers = tabela.getElementsByTagName("th");
        var verificador = true;
        const regex = /^[1-8]$/


        
        for(let i = 0; i < headers.length; i++){

            
                
            

            // if(i%2 == 0){
                
            //     if(i >= (limite*8) && i <= ((2*i)*8)-(2*i)){
            //         verificador = false
            //         limite++
            //     }else {
            //         verificador = true
            //     }
            // }

            

            if(headers[i].textContent){
                if(regex.test(headers[i].textContent)){
                    if((parseInt(headers[i].textContent))%2 == 0){
                        verificador = true;
                    } else {
                        verificador = false;
                    }
                }
            }
            if(verificador){
                if((i%2 == 0) == verificador){
                    pretoBranco[i].setAttribute("class", "preto")
                } else {
                    pretoBranco[i].setAttribute("class", "branco")
                }
            } 


            

        }

        
    }


    public update(){
        console.log("testeHtml")
        this._elementos.innerHTML = `<table class="centro"> <tbody>${this.template()}</tbody> </table>`;
        this.tableClasses(this._elementos);
    }


}



