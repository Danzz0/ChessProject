System.register([], function (exports_1, context_1) {
    "use strict";
    var Campo;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Campo = class Campo {
                constructor(_simbolo, _cor) {
                    this._simbolo = _simbolo;
                    this._cor = _cor;
                    this.erro = "";
                    if (this._cor == "Branco") {
                        // cor da div do elemento vai ficar branca
                    }
                    else {
                        // cor da div do elemento vai ficar preta
                    }
                }
                get simbolo() {
                    return this._simbolo;
                }
                getErro() {
                    return this.erro;
                }
                setJogador(jogada) {
                    if (this._simbolo == " ") { // Verifica se o campo está vazio
                        this._simbolo = jogada;
                        return true;
                    }
                    else { // Se o campo já estiver sendo usado!
                        this.erro = "ERRO: Campo já usado!";
                        return false;
                    }
                }
            };
            exports_1("Campo", Campo);
        }
    };
});
