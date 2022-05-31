"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const concrete_factory_1 = require("./concrete-factory");
function clientNode(factory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();
    console.log(productB.useFulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}
console.log(`Client: Testing client node with the first factory type....`);
clientNode(new concrete_factory_1.ConcreteFactory1());
console.log('');
console.log(`Client: Testing the same client node with the second factory type....`);
clientNode(new concrete_factory_1.ConcreteFactory2());
