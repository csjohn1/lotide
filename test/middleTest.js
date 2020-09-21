const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});





// eqArrays(middle([1, 2, 3]), [2]); //true
// eqArrays(middle([1, 2, 3]), [3]); //false

// eqArrays(middle([9, 63, 3]), [63]); //true
// eqArrays(middle([9, 63, 3, 2]), [63, 3]); //true

// assertArraysEqual(middle([1, 2, 3]), [2]); //true
// assertArraysEqual(middle([1, 2, 3]), [3]); //false

// assertArraysEqual(middle([9, 63, 3, 2]), [63, 4]); //false
// assertArraysEqual(middle([9, 63, 3, 2]), [63, 4, 3]); //false