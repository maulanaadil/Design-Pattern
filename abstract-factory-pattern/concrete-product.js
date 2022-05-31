"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteProductB2 = exports.ConcreteProductB1 = exports.ConcreteProductA2 = exports.ConcreteProductA1 = void 0;
class ConcreteProductA1 {
    usefulFunctionA() {
        return `The result of the product A1.`;
    }
}
exports.ConcreteProductA1 = ConcreteProductA1;
class ConcreteProductA2 {
    usefulFunctionA() {
        return `The result of the product A2.`;
    }
}
exports.ConcreteProductA2 = ConcreteProductA2;
class ConcreteProductB1 {
    useFulFunctionB() {
        return `The result of the product B1.`;
    }
    anotherUsefulFunctionB(collabolator) {
        const result = collabolator.usefulFunctionA();
        return `The result of the B1 collaborating with the ${result}`;
    }
}
exports.ConcreteProductB1 = ConcreteProductB1;
class ConcreteProductB2 {
    useFulFunctionB() {
        return `The result of the product B2.`;
    }
    anotherUsefulFunctionB(collabolator) {
        const result = collabolator.usefulFunctionA();
        return `The result of the B1 collaborating with the ${result}`;
    }
}
exports.ConcreteProductB2 = ConcreteProductB2;
