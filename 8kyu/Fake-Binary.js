// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
    const arr = x.split('') // Split the given string into an array
    let result = [] // Variable to hold our answer. We will convery this array into a string later
    for (let i = 0; i < arr.length; i++) { // For loop to check each number, one by one
      if (arr[i] >= 5) { // If the number is greater than or equal to 5
        result.push(1) // Push 1 into our array we created earlier.
      } else {
        result.push(0) // If not, push 0
      }
    }
    return result.join('') // Return the array, joined into a string
    }


    const fakeBin = x => x.split('').map(a => a < 5 ? '0' : '1').join('') // This can also be solved with one line
                                                                          // Using an arrow function, split the given string into an array
                                                                          // Use the array method map to create a new array, adding numbers that pass a specific test
                                                                          // In this case, if a < 5, we will add 0 to the array. If not, add 1. This is ran for each number in the array
                                                                          // Finish with the join method to convert back to string