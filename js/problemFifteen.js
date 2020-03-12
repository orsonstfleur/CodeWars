 // Complete the function that
 // calculates the area of the red square,
 // when the length of the circular arc A is given as the input.
 //  Return the result rounded to two decimals.
function squareArea(A){
  let c = 4*A;
  let r = c/(2*Math.PI)
  return Math.pow(r, 2).toFixed(2)
}
console.log(squareArea(2));
