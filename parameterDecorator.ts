

function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log("target111", target);
    console.log("methodName", methodName);
    console.log("paramIndex", paramIndex);
    console.log("target111", target);
}

class Person2 {
    constructor() {

    }
    calcBudget() {
        console.log("1000");
    }
    setValue(@printInfo val: string) {
        console.log("hello", val);
    }
}


let person2 = new Person2();
person2.calcBudget();

person2.calcBudget = function () {
    console.log(2000);
}

person2.calcBudget();
person2.setValue("Dasdasdasd");
