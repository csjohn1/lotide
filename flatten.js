const flatten = function (array) {
  let flat = [];
  for (const i of array) {
    if (Array.isArray(i)) {
      for (const j of i) {
      flat.push(j)
      }
    } else {
      flat.push(i)
    }
  }
  return flat;
}

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]