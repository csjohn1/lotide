const assertArraysEqual = function(array1, array2) {

  for (let i = 0; i < array1.length; i++) {
      if (array1.length !== array2.length || array1[i] !== array2[i]) {
        return console.log(false);
      }
    }    
  return console.log(true);
}




const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  return results;
}
}

const results1 = map(words, word => word[0]);
console.log(results1);

