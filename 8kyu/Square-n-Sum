// Complete the square sum function so that it squares each number passed into it and then sums the results together

// For example, for [1, 2, 2] should return 9



function squareSum(numbers){
  if (numbers === undefined) { // Account for undefined arguments

    return 0

  } else {
  
    const square = numbers.map(a => Math.pow(a,2)) // Square each number in array

    return square.reduce((a,b) => a + b, 0) // Add each number in the array together.
    }
}