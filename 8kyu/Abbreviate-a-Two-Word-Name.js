// Write a function to convert a name into initials. 
// This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:

// Sam Harris => S.H
// patrick feeney => P.F


function abbrevName(name){
    let sep = name.split(' ') // Separate the 2 names in the given string into an array
    let first = sep[0] // Select the names individually with 2 variables
    let last = sep[1]
    return `${first.charAt(0)}.${last.charAt(0)}`.toUpperCase() // Return these variables with the charAt method to select the first letter of each name. 
     }                                                          // Finish with the toUpperCase method for inputs that are lowercase
   


     
function abbrevName(name){
    return name.split(' ').map(a => a[0].toUpperCase()).join('.') // You can also solve this way without declaring variables
}                                                                 // Split the string and then use the map array method to target the first letter of each element in the array
                                                                  // toUpperCase and join with a period