"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Director {
    setBuilder(builder) {
        this.builder = builder;
    }
    buildMinimalViableProduct() {
        this.builder.producePartA();
    }
    buildFullFeaturedProduct() {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}
exports.default = Director;
