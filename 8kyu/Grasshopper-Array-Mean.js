// Find the mean (average) of a list of numbers in an array


function findAverage(nums) {
    const sum = nums.reduce((a,b) => a + b) // Reduce method to add all elements in the array
    return sum / nums.length // Divide by number of elements in array
  }


const findAverage = nums => nums.reduce((a,b) => a + b) / nums.length // Alternate solution using arrow function
