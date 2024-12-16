// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers

function evenOrOdd(number) {
  if (number % 2 === 0) {
    // Using the modulus operator, check for remainder
    return "Even"; // if 0 left over, returns the string "Even"
  } else {
    // If not, returns the string "Odd"
    return "Odd";
  }
}

// Alternative solution using the short-hand ternary operator
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
