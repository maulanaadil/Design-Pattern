"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteFactory2 = exports.ConcreteFactory1 = void 0;
const concrete_product_1 = require("./concrete-product");
class ConcreteFactory1 {
    createProductA() {
        return new concrete_product_1.ConcreteProductA1();
    }
    createProductB() {
        return new concrete_product_1.ConcreteProductB1();
    }
}
exports.ConcreteFactory1 = ConcreteFactory1;
class ConcreteFactory2 {
    createProductA() {
        return new concrete_product_1.ConcreteProductA2();
    }
    createProductB() {
        return new concrete_product_1.ConcreteProductB2();
    }
}
exports.ConcreteFactory2 = ConcreteFactory2;
