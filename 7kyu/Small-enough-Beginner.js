// You will be given an array and a limit value. 
// You must check that all values in the array are below or equal to the limit value. 
// If they are, return true. Else, return false.
// You can assume all values in the array are numbers.


function smallEnough(a, limit){
  const belowLimit = (x) => x <= limit // Create a variable to store our formula for checking each variable
  return a.every(belowLimit) // Use the every method paired with our formula to test each element in the array. The every method returns a boolean value
}