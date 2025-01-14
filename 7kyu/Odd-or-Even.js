// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).


function oddOrEven(array) {
    return array.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd' // Use reduce method to get sum of all elements in the array
    }                                                                  // Using the modulo operator, if 2 can go into the sum of all elements evenly with 0 left over, return 'even'
                                                                       // Otherwise, return 'odd'