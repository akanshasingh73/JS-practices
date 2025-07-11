function reverseFunction(str) {
  const value = str.split('');
  const reverseArray = [];
  let reverseWord = '';

  for (let i = value.length - 1; i >= 0; i--) {
    reverseWord += value[i];
  }
  reverseArray.push(reverseWord);
  return reverseArray.join(' ');
}

function reverseFunction(str) {
  return str.split('').reverse().join('');
}

console.log(reverseFunction('Hello')); //Hello ---> olleH
