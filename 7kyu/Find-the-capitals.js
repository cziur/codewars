// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, 
// and returns an ordered list containing the indices of all capital (uppercase) letters in the string.


var capitals = function (word) {
    let result = [] // Store answer
    for (let i = 0; i < word.length; i++) { // For loop to iterate through the given word
      if (word[i] === word[i].toUpperCase()) { // Run a test for each letter
        result.push(i)                         // If the letter is uppercase, that index will get pushed to the array
      }
    }
    return result
  };