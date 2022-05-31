import { AbstractProductA, AbstractProductB } from './abstract-product';

interface AbstractFactory {
  createProductA(): AbstractProductA;

  createProductB(): AbstractProductB;
}

export default AbstractFactory;
