System.register([], function (exports_1, context_1) {
    "use strict";
    var TabuView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            TabuView = class TabuView {
                constructor(seletor) {
                    this._elementos = document.querySelector(seletor);
                    console.log(seletor);
                }
                template() {
                    var tr = [];
                    var td = `<td><div class="campo"></div></td>`;
                    var line = [];
                    var thead = [];
                    var letras;
                    var modelo;
                    for (let linha = 0; linha < 8; linha++) {
                        if (linha > 0) {
                            tr.splice(0, tr.length);
                        }
                        for (let coluna = 0; coluna < 8; coluna++) {
                            if (linha == 0) {
                                letras = 65;
                                thead.push(`<th>${String.fromCharCode(letras + coluna)}</th>`);
                            }
                            tr.push(td);
                        }
                        line.push(`<tr>${tr.join(" ")}</tr>`);
                    }
                    console.log(tr.join(" "));
                    modelo = `<thead>${thead.join(" ")} </thead>${line.join(" ")}`;
                    return modelo;
                }
                update() {
                    console.log("testeHtml");
                    this._elementos.innerHTML = `<table class="centro"> <tbody>${this.template()}</tbody> </table>`;
                }
            };
            exports_1("TabuView", TabuView);
        }
    };
});
