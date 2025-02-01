// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)


function stray(numbers) {
    const arr = numbers.sort() // Sort array 
    return arr[0] != arr[1] ? arr[0] : arr[arr.length - 1] // If the first element in the array is not equal to to the second, return the first element
  }                                                        // If the first element is equal to the second, return the last element
