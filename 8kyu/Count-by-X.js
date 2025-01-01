// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).


function countBy(x, n) {
let z = [] // Create empty array to return later
for (let i = 1; i <= n; i++) { // Loop through the 2nd argument. Both arguments are positive numbers greater than 0, so i should be = 1
 z.push(i * x) // Multiply x by each number in our loop, which will give us our multiples. Then push to our empty array from earlier.
}
  return z
  }

