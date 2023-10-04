System.register([], function (exports_1, context_1) {
    "use strict";
    var Mensagem;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Mensagem = /** @class */ (function () {
                function Mensagem(_oi) {
                    this._oi = _oi;
                }
                Object.defineProperty(Mensagem.prototype, "fala", {
                    get: function () {
                        return this._oi;
                    },
                    enumerable: false,
                    configurable: true
                });
                return Mensagem;
            }());
            exports_1("Mensagem", Mensagem);
        }
    };
});
