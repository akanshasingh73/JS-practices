function x() {
  for (var i = 1; i <= 5; i++) {
    function y(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    y(i);
  }
}

x();

function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, x * 1000);
  }
}

x();
