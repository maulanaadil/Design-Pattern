import AbstractFactory from './abstract-factory';
import { ConcreteFactory1, ConcreteFactory2 } from './concrete-factory';

function clientNode(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productB.useFulFunctionB());
  console.log(productB.anotherUsefulFunctionB(productA));
}

console.log(`Client: Testing client node with the first factory type....`);
clientNode(new ConcreteFactory1());

console.log('');

console.log(
  `Client: Testing the same client node with the second factory type....`
);
clientNode(new ConcreteFactory2());
