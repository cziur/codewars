// Given a set of numbers, return the additive inverse of each
// Each positive becomes negatives, and the negatives become positives
// You can assume that all values are integers. Do not mutate the input array


function invert(array) {
    return array.map((a) => a * -1) // Use the map method because it returns a new array instead of changing the original array
  }                                 // Multiply each element by -1 to get the inverse value


const invert = array => array.map(a => a * -1) // Alternate solution using only one line of code
                                               // Same method, just using an arrow function
                                               // No brackets needed, automatically returns the result  