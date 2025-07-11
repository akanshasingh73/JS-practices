function debounce(func, delay) {
  let context = this;
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(context, [...args]);
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
