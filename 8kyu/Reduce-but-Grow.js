// Given a non-empty array of integers, return the result of multiplying the values together in order.

function grow(x){
  let product = 1
  for(i = 0; i < x.length; i++) {
    product *= x[i]
    }
  return product
  }