const eqObjects = function(object1, object2) {
  let array1 = Object.keys(object1);
  let array2 = Object.keys(object2);
  
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    const firstArray = array1[i];
    if (Array.isArray(object1[firstArray]) && Array.isArray(object2[firstArray])) {
      if (!eqArrays(object1[firstArray], object2[firstArray])) {
        return false;

      }
    } else {
      if (object1[firstArray] !== object2[firstArray]) {
        return false;
      }
    }
  }
  return true;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    return (console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
  } else {
    return (console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`));
  }
};

assertObjectsEqual(true, true);