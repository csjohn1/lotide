const middle = function (arr) {
  newArr = [];
  if (arr.length <= 2) {
  return newArr;
} else if (arr.length % 2 !== 0) {
  newArr.push(arr[Math.floor(arr.length / 2)]);
  return newArr;
} else {
  newArr.push(arr[((arr.length / 2) - 1)], arr[(arr.length / 2)]);
  return newArr;
}

};

module.exports = middle;


