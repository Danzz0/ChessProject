export class Mensagem{
    constructor(private _oi:string){}

    get fala():string{
        return this._oi;
    }
}