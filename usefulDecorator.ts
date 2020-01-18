
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function () {
        console.log(this);
    }
}
@printable
class Plant {
    name = "hello";
    constructor() {

    }
}

let plant = new Plant();
(<any>plant).print();