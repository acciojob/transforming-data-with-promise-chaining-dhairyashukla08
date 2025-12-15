# Transforming Data with Promise Chaining

In this assignment, you'll be using JavaScript promises to transform data in a series of steps, each of which involves an asynchronous operation. Starting with a number which will be taken as input from the user, you'll use promise chaining to multiply, subtract, divide, and add to the number, in that order, to produce a final result. Along the way, you'll learn how to chain promises using the then method, handle errors and rejections using catch, and wait for asynchronous operations to complete using setTimeout. By the end of this assignment, you'll have a solid understanding of how to use promise chaining to perform complex data transformations with asynchronous operations in JavaScript.

## Acceptance Criteria

1. An input with the id `ip` and a button with the id of `btn` is already created in the html. Just add an onClick event listener on the button in JS.
2. Create a promise that resolves after 2 seconds with the number in the input and print in the div with the id of `output` as `Result: <number>`
3. Creates a promise that resolves after 2 seconds with the number returned from the previous promise and print in the div with the id of `output` as `Result: <number>`.
4. Uses then to chain a second promise that multiplies the number by 2 and resolves after 1 second and print in the div with the id of `output` as `Result: <number>`.
5. Uses then to chain a third promise that subtracts 3 from the number and resolves after 1 second and print in the div with the id of `output` as `Result: <number>`.
6. Uses then to chain a fourth promise that divides the number by 2 and resolves after 1 second and print in the div with the id of `output` as `Result: <number>`.
7. Uses then to chain a fifth promise that adds 10 to the number and resolves after 1 second and print in the div with the id of `output` as `Result: <number>`.
8. Uses then to update the text content of the output div with the final result as `Final Result: <number>`.
