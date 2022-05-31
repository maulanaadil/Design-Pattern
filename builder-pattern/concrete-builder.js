"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("./product"));
class ConcreteBuilder {
    constructor() {
        this.reset();
    }
    reset() {
        this.product = new product_1.default();
    }
    producePartA() {
        this.product.parts.push('PartA1');
    }
    producePartB() {
        this.product.parts.push('PartB1');
    }
    producePartC() {
        this.product.parts.push('PartC1');
    }
    getProduct() {
        const result = this.product;
        this.reset();
        return result;
    }
}
exports.default = ConcreteBuilder;
