System.register(["./controllers/TabuController"], function (exports_1, context_1) {
    "use strict";
    var TabuController_1, tab;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (TabuController_1_1) {
                TabuController_1 = TabuController_1_1;
            }
        ],
        execute: function () {
            tab = new TabuController_1.TabuController();
            console.log(tab.teste());
            // tab.main()
            console.log(tab.pariTabu());
        }
    };
});
