import { AbstractProductA, AbstractProductB } from './abstract-product';

export class ConcreteProductA1 implements AbstractProductA {
  public usefulFunctionA(): string {
    return `The result of the product A1.`;
  }
}

export class ConcreteProductA2 implements AbstractProductA {
  public usefulFunctionA(): string {
    return `The result of the product A2.`;
  }
}

export class ConcreteProductB1 implements AbstractProductB {
  public useFulFunctionB(): string {
    return `The result of the product B1.`;
  }

  public anotherUsefulFunctionB(collabolator: AbstractProductA): string {
    const result = collabolator.usefulFunctionA();
    return `The result of the B1 collaborating with the ${result}`;
  }
}

export class ConcreteProductB2 implements AbstractProductB {
  public useFulFunctionB(): string {
    return `The result of the product B2.`;
  }

  public anotherUsefulFunctionB(collabolator: AbstractProductA): string {
    const result = collabolator.usefulFunctionA();
    return `The result of the B1 collaborating with the ${result}`;
  }
}
