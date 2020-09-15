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

const without = function(source, itemsToRemove) {
  
  for (let i = 0; i < source.length; i++) {

    if (source[i] === itemsToRemove[i]) {
      return console.log(source[i].slice(itemsToRemove));
    }

  }


}

//without([1, 2, 3], [1]) // => [2, 3]

without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// const without = function (source, removal) { 
//   let output = [];  
//   for (let i = 0; i < source.length; i++) { 
//     let toKeep = true;
//     for (let j = 0; j < removal.length; j++) {
//       if (source[i] === removal[j]) { 
//         toKeep = false; 
//         if (i === source.length - 1) {
//           return output;
//         }
//       } 
//       if (toKeep && removal.length - 1 === j) {
//         output.push(source[i]);
//       }
//     } 
//   } 
//   return output;
// } 