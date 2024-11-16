// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


function findShort(s){
  let shortestLength = 0;
  
  s.split(" ").forEach((e, i) => {
    if (i === 0) return shortestLength = e.length;
    if (e.length < shortestLength) {
      shortestLength = e.length;
    }
  });
  
  return shortestLength;
}