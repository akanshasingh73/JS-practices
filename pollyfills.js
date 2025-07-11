const array = [1, 2, 3];

const output = array.map((x) => x * 5);
console.log(output);

Array.prototype.myMap = function (cb) {
  let output = [];
  //this ===> refers to array
  for (let index = 0; index < this.length; index++) {
    output.push(cb(this[index], index, this));
  }
  return output;
};

const output1 = array.myMap((x) => x * 5);
console.log(output1);





const arrayOfAll = [1, 2, 3, 4, 5, 6];
const output3 = arrayOfAll.filter((x) => x % 2 === 0);
console.log(output3);


Array.prototype.myFilter = function (cb) {
  let output = [];
  for (let index = 0; index < this.length; index++) {
    if (cb(this[index], index, this)) output.push(this[index]);
  }
  return output;
};
const output4 = arrayOfAll.myFilter((x) => x % 2 === 0);
console.log(output4);





const output5 = array.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(output5);
  
Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;

  for (let index = 0; index < this.length; index++) {
    acc = acc ? cb(acc, this[index], this) : this[index];
  }
  return acc;
};

const output6 = array.myReduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(output6);
