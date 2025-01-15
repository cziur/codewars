// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.


function isPalindrome(x) {
    const backwards = x.split('').reverse().join('') // Create a variable to reverse the given string. Split the string into an array, reverse that array, then join it back
    return x.toUpperCase() === backwards.toUpperCase() ? true : false // Compare our variable with x. if it is equal, return true. If not, return false
  }

  function isPalindrome(x) { // This can also be solved by skipping the variable and implementing the reversed string into the ternary operator
    return x.split('').reverse().join('').toLowerCase() === x.toLowerCase() ? true : false 
  }