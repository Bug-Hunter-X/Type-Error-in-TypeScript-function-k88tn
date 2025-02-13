function add(a: number, b: number): number {
  return a + b;
}

const result = add("hello", 5); // Type Error. It should be a number
console.log(result); // This line will not be executed due to the previous error.