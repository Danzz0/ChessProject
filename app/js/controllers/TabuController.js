System.register(["../Campo"], function (exports_1, context_1) {
    "use strict";
    var Campo_1, TabuController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Campo_1_1) {
                Campo_1 = Campo_1_1;
            }
        ],
        execute: function () {
            TabuController = class TabuController {
                constructor() {
                    this._tabu = new Array(8).fill([]).map(() => new Array(8));
                    this.bomdia = "bom dia";
                }
                pariTabu() {
                    for (var linha = 0; linha < 8; linha++) {
                        for (var coluna = 0; coluna < 8; coluna++) {
                            if (coluna % 2 == 0) {
                                this._tabu[linha][coluna] = new Campo_1.Campo(" ", "Branco");
                            }
                            else {
                                this._tabu[linha][coluna] = new Campo_1.Campo(" ", "Preto");
                            }
                            // console.log(coluna)
                        }
                        // ->   Quando esse códgio está dentro desse escopo, o programa funciona
                    }
                    return this._tabu;
                }
                get tabu() {
                    return this._tabu;
                }
                main() {
                    this.pariTabu();
                }
                teste() {
                    return this.bomdia;
                }
            };
            exports_1("TabuController", TabuController);
        }
    };
});
