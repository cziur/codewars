// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(s) {
  const cmps = 27.7778 / 1;
  return Math.floor(cmps * s);
}
