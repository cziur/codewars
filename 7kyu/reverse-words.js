//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  let words = str.split(' ') // Separate each word in the string into an array
  let reversed = words.map(el => el.split('').reverse().join('')) // Take each letter in each word of the new array and reverse the letters within
  return reversed.join(' ') // Convert back to string, and return
}