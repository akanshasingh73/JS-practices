// const users = [
//   { firstName: 'akshay', lastName: 'saini', age: 26 },
//   { firstName: 'donald', lastName: 'trump', age: 75 },
//   { firstName: 'elon', lastName: 'musk', age: 50 },
//   { firstName: 'deepika', lastName: 'padukone', age: 26 },
// ];

// // ['akshay', 'deepika']

// const output = users.reduce((acc, curr) => {
//   if (curr.age < 30) {
//     acc.push(curr.firstName);
//   }
//   return acc;
// }, []);
// console.log(output);

// Input
const users = [
  { firstName: 'John', lastName: 'Doe', age: 65 },
  { firstName: 'Jane', lastName: 'Smith', age: 45 },
  { firstName: 'Albert', lastName: 'Einstein', age: 76 },
];

// Output: ["John Doe", "Albert Einstein"]
// Filter users who are above 60 and return their full names

const output = users
  .filter((x) => x.age > 60)
  .map((y) => y.firstName + ' ' + y.lastName);
console.log(output);

// 2. Count how many users have age > 50 (use reduce)

// Output: 2

const output1 = users.reduce((acc, curr) => {
  if (curr.age > 50) {
    acc = ++acc;
  }
  return acc;
}, 0);
console.log(output1);
