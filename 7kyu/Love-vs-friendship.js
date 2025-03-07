// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.


function wordsToMarks(string){
    let result = [] // Array to store total value of letters in string
    for (let i = 0; i < string.length; i++) { // Loop to iterate through string
      result.push(string.codePointAt(i) - 96) // Get the unicode value from the string. The lowercase alphabet starts at unicode point 97, so subtract 96, then push to our array from earlier
      }
    return result.reduce((a,b) => a + b) // Reduce method to add all numbers in the array together
  }