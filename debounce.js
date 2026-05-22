function debounce(func, delay) {
  let context = this;
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
}

const handleKeyStrokes = debounce(function (value) {
  console.log('type', value);
}, 300);

const inputBox = document.getElementById('searchBox');

inputBox.addEventListener('input', function (e) {
  handleKeyStrokes(e.target.value);
});

// why this is not working with func() instead of func.apply(context, args) ???
// func() will not work because it will not have the correct context and arguments when it is called after the delay.
// func.apply(context, args) will call the func with the correct context and arguments after the delay.
