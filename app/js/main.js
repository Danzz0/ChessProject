System.register(["./Mensagem", "./Livro"], function (exports_1, context_1) {
    "use strict";
    var Mensagem_1, Livro_1, msg, liv1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Mensagem_1_1) {
                Mensagem_1 = Mensagem_1_1;
            },
            function (Livro_1_1) {
                Livro_1 = Livro_1_1;
            }
        ],
        execute: function () {
            msg = new Mensagem_1.Mensagem("Hello World!!!");
            liv1 = new Livro_1.Livro("Operação Manhatam", "Globo", 45);
            console.log(liv1);
        }
    };
});
