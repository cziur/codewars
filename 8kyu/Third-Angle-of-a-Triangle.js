// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

function otherAngle(a, b) { // All 3 angles of a triangle must equal 180 degrees
    return 180 - (a + b) // Simple math, subtract 180 from the sum of the given interior angles to get the third angle
  }