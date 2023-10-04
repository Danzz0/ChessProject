System.register([], function (exports_1, context_1) {
    "use strict";
    var Livro;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Livro = /** @class */ (function () {
                function Livro(_titulo, _editora, _preco) {
                    this._titulo = _titulo;
                    this._editora = _editora;
                    this._preco = _preco;
                }
                Object.defineProperty(Livro.prototype, "titulo", {
                    get: function () {
                        return this._titulo;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Livro.prototype, "editora", {
                    get: function () {
                        return this._editora;
                    },
                    enumerable: false,
                    configurable: true
                });
                Object.defineProperty(Livro.prototype, "preco", {
                    get: function () {
                        return this._preco;
                    },
                    enumerable: false,
                    configurable: true
                });
                return Livro;
            }());
            exports_1("Livro", Livro);
        }
    };
});
