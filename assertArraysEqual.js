const assertArraysEqual = function(array1, array2) {

  for (let i = 0; i < array1.length; i++) {
      if (array1.length !== array2.length || array1[i] !== array2[i]) {
        return console.log(false);
      }
    }    
  return console.log(true);
}

module.exports = assertArraysEqual;
