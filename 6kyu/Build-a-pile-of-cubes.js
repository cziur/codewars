// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// Examples:
// findNb(1071225) --> 45
// findNb(91716553919377) --> -1


function findNb(m) {
    let n = 0 
    while (m > 0) { 
      n++;
      const cubes = Math.pow(n, 3)
      m = m - cubes
    }
    return Math.sign(m) === -1 ? -1 : n
  }

