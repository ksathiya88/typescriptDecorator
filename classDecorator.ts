function logged(constructorFn: Function) {
    console.log("Function", constructorFn);
}


@logged
class Person {
    constructor() {
    }
    calcBudget() {
        console.log("1000");
    }
}

function logging(value: any) {
    return value ? logged : null;
}

// Factory
@logging(true)
class Car {

}