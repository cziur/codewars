// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {
  const result = weight / (Math.pow(height, 2)) // Store our formula in a variable. This formula doesn't change, so we can use const

  if (result <= 18.5) { // Add our conditional statements. Depending on the input of the arguments, the result will return the desired string.
    return "Underweight"
  } else if (result <= 25) {
    return "Normal"
  } else if (result <= 30) {
    return "Overweight"
  } else if (result > 30) {
    return "Obese"
  }
}