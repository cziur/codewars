// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(x){
 const arr = x.map(y => (parseInt(y))) // Convert all elements in array to integers
return arr.reduce((a, b) => a + b) // Return the sum of all the numbers in the array using the reduce method
}