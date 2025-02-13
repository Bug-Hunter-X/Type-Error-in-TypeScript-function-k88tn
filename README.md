# Type Error in TypeScript Function

This repository demonstrates a common type error in TypeScript functions. The `add` function is defined to accept two numbers as arguments and return their sum. However, in the example, it is called with a string and a number which is wrong, causing a type error.

## Bug

The bug is in the way that the `add` function is called. The function expects two numbers, but we are providing a string and a number. TypeScript's type system catches this error during compilation, preventing the code from running.

## Solution

The solution is to ensure that the arguments passed to the `add` function are of the correct type. This can be achieved by either changing the arguments to numbers or modifying the function signature to accept strings.