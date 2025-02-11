// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2


function angle(n) {
    return (n - 2) * 180 // There is a formula to calculate the interior angle of any polygon
  }                      // Subtract the number of sides (n) by 2, then multiply by 180


  const angle = n => (n - 2) * 180 // Same solution, this time with arrow function
                         