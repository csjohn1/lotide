const assertArraysEqual = function(array1, array2) {

  for (let i = 0; i < array1.length; i++) {
      if (array1.length !== array2.length || array1[i] !== array2[i]) {
        return console.log(false);
      }
    }    
  return console.log(true);
};

const eqArrays = function(array1, array2) {

  for (let i = 0; i < array1.length; i++) {
      console.log(array1);
      console.log(array2);


      if (array1.length !== array2.length || array1[i] !== array2[i]) {
        return false;
      }
    }    
  return true;
}

const middle = function (arr) {
  newArr = [];
  if (arr.length <= 2) {
  return newArr;
} else if (arr.length % 2 !== 0) {
  newArr.push(arr[Math.floor(arr.length / 2)]);
  return console.log(newArr);
} else {
  newArr.push(arr[((arr.length / 2) - 1)], arr[(arr.length / 2)]);
  return console.log(newArr);
}

};

middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]


