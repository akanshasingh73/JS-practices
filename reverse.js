function reverseFunction(str) {
  const value = str.split('');
  const reverseArray = [];

  for (let i = value.length - 1; i >= 0; i--) {
    reverseArray.push(value[i]);
  }

  return reverseArray.join('');
}

console.log(reverseFunction('Hello')); //Hello ---> olleH

// function reverseFunction(str) {
//   return str.split('').reverse().join('');
// }

// console.log(reverseFunction('Hello')); //Hello ---> olleH
