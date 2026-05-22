// how to use use strict mode in JavaScript?
// To enable strict mode in JavaScript, you can add the following line at the beginning of your script or function:

// 'use strict';

const obj = {
  a: 1,
  b: 2,
  sum: function () {
    return this.a + this.b;
  },
};
const result = obj.sum;
console.log(result()); // NaN, because 'this' refers to the global object, which does not have properties 'a' and 'b'
// why?
// In JavaScript, the value of `this` is determined by how a function is called. When you assign `obj.sum` to `result`,
// you are creating a reference to the function, but you are not calling it as a method of `obj`. Therefore, when you call `result()`, `this` does not refer to `obj`,
//  but rather to the global object (or `undefined` in strict mode). Since the global object does not have properties `a` and `b`,
//   the expression `this.a + this.b` evaluates to `undefined + undefined`, which results in `NaN`.
// To fix this issue, you can call the function as a method of `obj`:
