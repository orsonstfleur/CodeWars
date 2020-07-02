// I'm new to coding and now I want to get the sum of two arrays
//   ...actually the sum of all their elements.
//   I'll appreciate for your help.

function arrayPlusArray(arr1, arr2) {

  const arrSum = arr1 => arr1.reduce((a,b) => a + b, 0)
  const arrSum2 = arr2 => arr2.reduce((a,b) => a + b, 0)


   return arrSum + arrSum2; //something went wrong

}



// arrayPlusArray([1,2,3],[1,2,3])
