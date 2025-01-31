// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row


function sumOfMinimums(arr) {
    let result = 0 // Variable to store our answer
    for (let i = 0; i < arr.length; i++) { // For loop to iterate through the given array
      const sortArr = arr[i].sort((a,b) => a - b) // Sort the nested arrays
      result += sortArr[0] // Add the elements in the 0 index of each nested array
    }
    return result // Return our result
  }


  const sumOfMinimums = arr => arr.reduce((a, b) => a + Math.min(...b), 0) // Alternate solution using an arrow function
                                                                           // Instead of running a for loop, we use the reduce method
                                                                           // Our function will add each of the lowest values in each nested array
                                                                           // No need to sort, use the Math.min method to grab the lowest value from each nested array