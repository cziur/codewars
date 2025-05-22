// Given a sequence of numbers, find the largest pair sum in the sequence

// Input sequence contains minimum two elements and every element is an integer

function largestPairSum(numbers) {
	const arr = numbers.sort((a, b) => a - b); // Sort the given array
	return arr[arr.length - 1] + arr[arr.length - 2]; // Return the 2 ending elements in the array and add them together
}
