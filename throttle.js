function throttle(func, delay) {
  let context = this;
  let flag = true;

  return function (...args) {
    if (flag) {
      flag = false;

      // 👉 Immediately run the function (first call allowed)
      func.apply(context, [...args]);

      // ⏳ Start the timer to reset the flag after the delay
      // This ensures that the next call is only allowed after 'delay' milliseconds
      setTimeout(function () {
        flag = true; // ✅ Allow future calls again after delay
      }, delay);
    }
  };
}

// function throttle(fn, delay) {
//   let flag = true;
//   return function (...args) {
//     if (!flag) return;

//     flag = false;
//     fn.apply(this, args);
//     setTimeout(function () {
//       flag = true;
//     }, delay);
//   };
// }

window.addEventListener(
  'scroll',
  throttle(() => {
    console.log('scrolling');
  }, 300)
);