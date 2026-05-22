let obj = {
  firstName: 'Akansha',
  lastName: 'Singh',
};

function getFullName(city, state) {
  console.log(this.firstName + ' ' + this.lastName, city + ', ' + state);
}


/**
 * Polyfill for Function.prototype.bind (custom implementation).
 * Usage: fn.mybindFunction(context, ...presetArgs)
 * - The first argument (args[0]) is the context to bind as `this`.
 * - Any following arguments are partially applied (preset) arguments.
 * - Returns a new function which, when called, invokes the original function
 *   with the bound `this` and the combined preset + call-time arguments.
 *
 * This implementation avoids leaking globals by using local constants.
 */
Function.prototype.mybindFunction = function (...args) {
  // 'this' is the original function that we want to bind
  const originalFn = this;
  // First element of args is the context; the rest are preset parameters
  const params = args.slice(1);

  // Return a new function that will call the original with the bound context
  return function (...callArgs) {
    return originalFn.apply(args[0], [...params, ...callArgs]);
  };
};

const fullName1 = getFullName.mybindFunction(obj, 'Kanpur', 'Uttar Pradesh');
fullName1();

// -------------------------
// Polyfill for Function.prototype.call
// -------------------------
// Demonstrate the built-in call first (works as-is)
getFullName.call(obj, 'kanpur', 'uttarpradesh');

/**
 * Polyfill for Function.prototype.call named `myCall`.
 * Usage: fn.myCall(context, ...args)
 * - Temporarily assigns the function as a property on the context and invokes it.
 * - Uses a Symbol as the temporary property key to prevent collisions with existing
 *   properties on the context object.
 * - Returns the result of the invoked function.
 */
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error('myCall must be called on a function');
  }
  context.fn = this;
  context.fn(...args);
};

// Example usage of the custom call
getFullName.myCall(obj, 'Kanpur', 'Uttarpradesh');
