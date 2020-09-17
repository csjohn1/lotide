const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`❤️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👽Assertion Failed: ${actual} !== ${expected}`);
  }
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
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false