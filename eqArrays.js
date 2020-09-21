

// const eqArrays = function(array1, array2) {

//   for (let i = 0; i < array1.length; i++) {
//     for (let j = 0; j < array2.length; j++) {
//       console.log(array1);
//       console.log(array2);
//       if (array1[i] !== array2[j]) {
//         return false;
//       }
//     }    
//   }
//   return true;
// }



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


module.exports = eqArrays;