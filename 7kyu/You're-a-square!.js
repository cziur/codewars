// Task:
// Given an integral number, determine if it's a square number


const isSquare = function(n){
    return Number.isInteger(Math.sqrt(n)) // isInteger will tell us if the number from Math.sqrt is a whole number
                                          // isInteger returns boolean values, so no need for conditional statements to return our True/False
  }