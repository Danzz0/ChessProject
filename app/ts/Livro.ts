export class Livro{
    constructor(
        private _titulo:string,
        private _editora:string,
        private _preco:number,
    ){}

    
    public get titulo() : string {
        return this._titulo
    }
    public get editora() : string {
        return this._editora
    }
    public get preco() : number {
        return this._preco
    }
    
}