

function editable(value: boolean) {

    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

class Person1 {
    constructor() {

    }
    @editable(false)
    calcBudget() {
        console.log("1000");
    }
}


let person = new Person1();
person.calcBudget();

person.calcBudget = function () {
    console.log(2000);
}

person.calcBudget();