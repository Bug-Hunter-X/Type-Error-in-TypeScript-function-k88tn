function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, 5); // Correct usage
console.log(result); // Output: 10

//Alternative solution: Handle string arguments
function addString(a: string | number, b: string | number): number | string {
  if (typeof a === 'string' || typeof b === 'string') {
    return String(a) + String(b);
  } else {
    return a + b;
  }
}

const result2 = addString("hello", 5); // Correct usage
console.log(result2); // Output: hello5
const result3 = addString(5,5); // Correct usage
console.log(result3); // Output: 10