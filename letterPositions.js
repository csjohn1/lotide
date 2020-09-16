const assertArraysEqual = function(array1, array2) {

  for (let i = 0; i < array1.length; i++) {
      if (array1.length !== array2.length || array1[i] !== array2[i]) {
        return console.log(false);
      }
    }    
  return console.log(true);
}

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



const letterPositions = function(sentence) {
  const results = {};
  let i = 0;
  for (const letter of sentence) {

    if (!results[letter]) {
      results[letter] = [i]; //giving a key and value
     
    } else {
      results[letter].push(i);
    }
    i++
  }


  return results;
};

console.log(letterPositions("lighthouse in the house"));
