import AbstractFactory from './abstract-factory';
import {
  ConcreteProductA1,
  ConcreteProductA2,
  ConcreteProductB1,
  ConcreteProductB2,
} from './concrete-product';
import { AbstractProductA, AbstractProductB } from './abstract-product';

export class ConcreteFactory1 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}

export class ConcreteFactory2 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}
