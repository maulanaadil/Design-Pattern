import ConcreteBuilder from './concrete-builder';
import Director from './director';

function clientCode(director: Director): void {
  const builder = new ConcreteBuilder();
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

const director = new Director();

clientCode(director);
