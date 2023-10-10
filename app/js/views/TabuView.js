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
                    for (let linha = 0; linha < 8; linha++) {
                        for (let coluna = 0; coluna < 8; coluna++) {
                            `<tr></tr>`;
                            tr.push(td);
                        }
                        line.push(`<tr>${tr.join(" ")}</tr>`);
                    }
                    return line.join(" ");
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
