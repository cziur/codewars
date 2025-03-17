// Given an array of integers, remove the smallest value. Do not mutate the original array/list.

//  If there are multiple elements with the same value, remove the one with the lowest index. 

// If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.


function removeSmallest(numbers) {
    const min = Math.min(...numbers) // Get minimum number from array
    const index = numbers.indexOf(min) // Get index of minimum number
    return [...numbers.slice(0, index), ...numbers.slice(index + 1)] // Return the original array starting from index 0, removing the minimum number, then add the rest of the numbers
  }