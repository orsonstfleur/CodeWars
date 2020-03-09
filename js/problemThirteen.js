// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(array){
  return array.sort(function(a,b) {return a-b}).slice(array.length-2);
}
