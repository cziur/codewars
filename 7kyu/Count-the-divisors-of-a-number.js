// Count the number of divisors of a positive integer n


function getDivisorsCnt(n) {
    let numberOfDivisors = 0
    for (let i = 1; i <= Math.sqrt(n); i++)
      if (n % i == 0) {
        if (n / i == i){
          numberOfDivisors++
        } else {
          numberOfDivisors = numberOfDivisors + 2
        }
      }
    return numberOfDivisors
  }