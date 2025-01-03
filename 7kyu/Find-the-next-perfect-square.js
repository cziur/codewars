// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. 
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. 
// You may assume the argument is non-negative.


function findNextSquare(sq) {
  const square = (Math.sqrt(sq) + 1)**2 // Create variable to store our formula for checking square
  return Number.isInteger(square) ? square : -1 // If the number we get from our variable is an integer, we can assume it is a perfect square. And if not, we will return -1
}