// Write a function that returns a string in which firstname is swapped with last name.

function nameShuffler(str){
    const name = str.split(' ') // Split the string to create an array of the first and last name
    return `${name[1]} ${name[0]}` // Return the last name, then the first name after
  }

