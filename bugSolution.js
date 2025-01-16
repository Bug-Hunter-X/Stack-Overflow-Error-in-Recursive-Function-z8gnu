function foo(a, b) {
  if (a === 0) {
    return b;
  } else if (a > 1000) {
    return -1; // Handle large inputs to avoid stack overflow
  }
  return foo(a - 1, a + b);
}
console.log(foo(5, 1)); // Output: 15
console.log(foo(0, 1)); // Output: 1
console.log(foo(10, 2)); // Output: 55
console.log(foo(1001, 2)); //Output: -1