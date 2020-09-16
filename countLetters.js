const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`❤️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👽Assertion Failed: ${actual} !== ${expected}`);
  }

};



const countLetters = function(sentence) {
  const result = {};
  for (const letter of sentence) {
  
    if (!result[letter]) {
      result[letter] = 1; //giving a key and value
     
    } else {
      result[letter] += 1;
    }
  }


  return result;
}

console.log(countLetters('yaaasdfefaaa'));