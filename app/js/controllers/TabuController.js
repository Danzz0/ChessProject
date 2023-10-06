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
                pariTabu(board) {
                    for (var linha = 0; linha < 8; linha++) {
                        for (var coluna = 0; coluna < 8; coluna++) {
                            if (coluna % 2 == 0) {
                                board[linha][coluna] = new Campo_1.Campo(" ", "Branco");
                            }
                            else {
                                board[linha][coluna] = new Campo_1.Campo(" ", "Preto");
                            }
                        }
                    }
                    return board;
                }
                get tabu() {
                    return this._tabu;
                }
                main(event) {
                    event.preventDefault();
                    var b = this.pariTabu(this._tabu);
                    console.log(b);
                    return b;
                }
                teste() {
                    return this.bomdia;
                }
            };
            exports_1("TabuController", TabuController);
        }
    };
});
