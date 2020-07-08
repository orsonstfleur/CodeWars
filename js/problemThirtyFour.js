// This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent.
//
// Your function should multiply the two numbers, and then subtract 1 from the exponent. Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.
// 
// For example: derive(7, 8) --> this should output "56x^7"
// derive(5, 9) --> this should output "45x^8"

function derive(coefficient,exponent) {
  return coefficient * exponent + "x^" + (1 - exponent)
}

console.log(derive(5,9))
