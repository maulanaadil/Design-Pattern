"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product1 {
    constructor() {
        this.parts = [];
    }
    listParts() {
        console.log(`Product parts: ${this.parts.join(', ')}\n`);
    }
}
exports.default = Product1;
