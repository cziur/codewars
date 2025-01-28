// Task
// Write a function that returns both the minimum and maximum number of the given list/array.


function minMax(arr){
    let arrSort = arr.sort((a, b) => a - b) // Sort array, smallest to greatest
    return [arrSort[0], arrSort[arrSort.length - 1]] // Return the first and last index of the array
  }