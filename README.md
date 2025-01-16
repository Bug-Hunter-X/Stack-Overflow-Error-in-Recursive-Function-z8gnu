# Stack Overflow Bug in JavaScript

This repository demonstrates a common error in JavaScript: stack overflow caused by uncontrolled recursion.  The `foo` function recursively calls itself without a sufficient base case to handle large input values.  This results in a stack overflow when the recursion depth exceeds the JavaScript engine's limits.

The `bug.js` file contains the erroneous code, and the `bugSolution.js` file provides a corrected version that avoids the stack overflow.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the code using a JavaScript environment (Node.js, browser console, etc.).
4. Observe the stack overflow error for large values passed as the first argument.

## Solution

The solution involves adding a check to prevent infinite recursion when the first argument exceeds a certain limit or modifies the recursion termination condition.