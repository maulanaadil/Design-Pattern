export interface AbstractProductA {
  usefulFunctionA(): string;
}

export interface AbstractProductB {
  useFulFunctionB(): string;

  anotherUsefulFunctionB(collabolator: AbstractProductA): string;
}
