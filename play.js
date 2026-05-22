// function reverseFunction(str) {
//   const value = str.split('');
//   const reverseArray = [];

//   for (let i = value.length - 1; i >= 0; i--) {
//     // reverseWord += value[i];
//     reverseArray.push(value[i]);
//   }

//   return reverseArray.join('');
// }

// console.log(reverseFunction('Hello')); //Hello ---> olleH

// const value = 'b' + 'a' + +'cteri' + 'a';
// console.log(value.toLowerCase());

//why it is giving  banana as output?
// because of the way JavaScript handles type coercion.

// In the expression 'b' + 'a' + +'cteri' + 'a', the part +'cteri' is evaluated first.
// The unary plus operator (+) attempts to convert the string 'cteri' into a number.
// Since 'cteri' cannot be converted to a valid number, it results in NaN (Not-a-Number).

// So the expression effectively becomes 'b' + 'a' + NaN + 'a'.

// When you concatenate a string with NaN, JavaScript converts NaN to the string "NaN".
// Therefore, the expression evaluates to 'b' + 'a' + 'NaN' + 'a', which results in 'baNaNa'.

// Finally, when you call toLowerCase() on 'baNaNa', it converts all characters to lowercase, resulting in 'banana'.

// more output question like this

// What will be the output of the following code snippet?

// console.log(0.1 + 0.2 === 0.3);

// The output will be false. This is because of the way floating-point numbers are represented in JavaScript (and in many programming languages).
// Due to precision issues, the result of 0.1 + 0.2 is not exactly 0.3, but rather a number that is very close to it, which leads to the comparison returning false.

// What will be the output of the following code snippet?

// console.log(typeof NaN);

// The output will be "number". In JavaScript, NaN (Not-a-Number) is a special value that represents an undefined or unrepresentable value, and it is of the type "number".

// What will be the output of the following code snippet?

// console.log([] + []);

// The output will be an empty string "". When you use the + operator with arrays, JavaScript converts them to strings.
// An empty array [] is converted to an empty string "", so the result of [] + [] is "".

// What will be the output of the following code snippet?

// console.log([] + {});
//how does it work means expalin what happeing in behind the scene when we run this code? so that i can userstand this concept in better way
// The output will be "[object Object]". When you use the + operator with an array and an object, JavaScript converts both to strings.
// An empty array [] is converted to an empty string "", and an empty object {} is converted to the string "[object Object]", so the result is "[object Object]".

// The output will be "[object Object]". When you use the + operator with an array and an object, JavaScript converts both to strings.
// An empty array [] is converted to an empty string "", and an empty object {} is converted to the string "[object Object]", so the result is "[object Object]".

// What will be the output of the following code snippet?

// console.log({} + []);

// The output will be 0. When you use the + operator with an object and an array, JavaScript first tries to convert the object to a primitive value.
// An empty object {} is converted to "[object Object]", and an empty array [] is converted to an empty string "".
// When you add these together, it results in "[object Object]", which is then coerced to 0 when used in a numeric context.

// function flatten(array) {
//   const result = [];
//   for (let item of array) {
//     if (Array.isArray(item)) {
//       result.push(...flatten(item));
//     } else {
//       result.push(item);
//     }
//   }
//   return result;
// }

// const nested = [1, [2, [3, 4], 5], 6, [[7]], 8];
// console.log(flatten(nested));
// → [1, 2, 3, 4, 5, 6, 7, 8]

function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count,
  };
}
const counter1 = createCounter();
const counter2 = createCounter();
counter1.increment();
counter1.increment();
console.log(counter1.getCount()); // ? 
console.log(counter2.getCount()); // ?
