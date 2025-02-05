// In mathematics, the factorial of a non-negative integer n, is the product of all positive integers less than or equal to n


function factorial(n){ // Essentially, they're asking us to to multiply every number that is less than or equal to n
    let result = 1 // Create variable to store our answer
    for (let i = 1; i <= n; i++) { // For loop to find every number from 1 to n
      result = i * result // Multiply i to our result will be the product of all numbers that come before and including n
    }
      return result // Return answer
  }


