

function overwritable(value: boolean) {

    return function (target: any, propName: string): any {
        console.log("propName", propName);
        const descriptor: PropertyDescriptor = {
            writable: value
        }
        return descriptor;
    }
}

class Person3 {
    @overwritable(true)
    personName: string;
    constructor(val: string) {
        this.personName = val;
    }

    calcBudget() {
        console.log("1000");
    }
}


let person3 = new Person3("Dsdsd");
person3.calcBudget();

person3.calcBudget = function () {
    console.log(2000);
}

person3.calcBudget();

console.log(person3);