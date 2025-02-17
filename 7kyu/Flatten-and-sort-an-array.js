// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order


function flattenAndSort(array) {
    const join = array.flat() // Combine all elements into one array
    return join.sort((a,b) => a - b) // Return and sort the array in ascending order
  }                                  // Using the default sort order will not work, we will change the comparison function to work with every number in the test