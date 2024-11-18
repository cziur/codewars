// There was a test in your class and you passed it. Congratulations!

// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return true if you're better, else false!

// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

function betterThanAverage(classPoints, yourPoints) {

  let classPointsTotal = classPoints.reduce((acc, n) => n + acc, 0) //total points of class
  let avg = (classPointsTotal + yourPoints) / classPoints.length - 2 //average of entire class including your points
  if (avg < yourPoints) { // if the class average is less than your points, return true. otherwise it will return false
    return true
  }else{
    return false
  }
}