var Ola = /** @class */ (function () {
    function Ola(_oi) {
        this._oi = _oi;
    }
    Object.defineProperty(Ola.prototype, "fala", {
        get: function () {
            return this._oi;
        },
        enumerable: false,
        configurable: true
    });
    return Ola;
}());
var msg = new Ola("Hello World!!!");
console.log(msg.fala);
