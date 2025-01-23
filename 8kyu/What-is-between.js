// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.


function between(a, b) {
    let result = [] // Create array to store our answer
    for (let i = a; i <= b; i++) { // For loop to create our integers between the input parameters
      result.push(i) // Send the for loop to our result variable
    }
    return result // Return our array
  }