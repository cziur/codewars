// Your function should multiply the two numbers, and then subtract 1 from the exponent. 
// Then, it has to return an expression (like 28x^7). "^1" should not be truncated when exponent = 2


function derive(coefficient,exponent) {
    return `${coefficient * exponent}x^${exponent - 1}`
  }