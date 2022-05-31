"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const concrete_builder_1 = __importDefault(require("./concrete-builder"));
const director_1 = __importDefault(require("./director"));
function clientCode(director) {
    const builder = new concrete_builder_1.default();
    director.setBuilder(builder);
    console.log(`standard basic product:`);
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();
    console.log(`standart full product:`);
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();
    console.log(`Custom product:`);
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
}
const director = new director_1.default();
clientCode(director);
