class Ola{
    constructor(private _oi:string){}

    get fala():string{
        return this._oi;
    }
}

let msg = new Ola("Hello World!!!");
console.log(msg.fala);