// Accountant time! For a given quantity and price (per mango), calculate the total cost of the mangoes.
// But! Every third mango is free!


function mango(quantity, price){
    let result = quantity - Math.floor(quantity / 3)
    return result * price
  }