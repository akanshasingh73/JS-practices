let arr = [1, 2, 4, 6, 15];

count = 20;

function findRemaingValues(arr, count) {
  let remainingValues = [];
  for (let i = 1; i <= count; i++) {
    let isPresent = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] == i) {
        isPresent = true;
        break;
      }
    }
    if (!isPresent) {
      remainingValues.push(i);
    }
  }
  return remainingValues;
}

console.log(findRemaingValues(arr, count));
