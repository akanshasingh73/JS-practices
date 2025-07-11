function flatten(array) {
  const result = [];
  for (let item of array) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

const nested = [1, [2, [3, 4], 5], 6, [[7]], 8];
console.log(flatten(nested));
// → [1, 2, 3, 4, 5, 6, 7, 8]
