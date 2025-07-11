const withDups = [3, 1, 4, 3, 2, 1, 5];
// output: [3, 1, 4, 2, 5];

function removeDuplicate(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function removeDuplicate(array) {
 return array.filter((item, index) => {
    return array.indexOf(item) === index;
  });
}
//indexOf use to check if an element is preset on array or not matches the index

function removeDuplicate(array) {
  return [...new Set(array)];
}
// new Set(arr) runs in O(n).
// filter + indexOf is O(n²), so stick with the Set approach for large lists.
console.log(removeDuplicate(withDups));
