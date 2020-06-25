function derive(coefficient,exponent) {
  return coefficient * exponent + "x^" + (1 - exponent)
}

console.log(derive(5,9))
