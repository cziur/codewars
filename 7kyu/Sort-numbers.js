// Finish the solution so that it sorts the passed in array of numbers. 
// If the function passes in an empty array or null/nil value then it should return an empty array.


function solution(nums){
    return nums !== null ? nums.sort((a,b) => a - b) : [] // If the given argument isn't nullish, we will return the argument with the sort method. If nums === null, return an empty array
    }