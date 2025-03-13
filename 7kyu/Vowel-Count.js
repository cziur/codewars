// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
    let result = 0  
    const arr = str.split('')

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes('a') || arr[i].includes('e') || arr[i].includes('i') || arr[i].includes('o') || arr[i].includes('u')) {
          result++
          }
      }
    return result
  }