// Given an array of numbers, return a new array of length number containing the last even numbers
// from the original array (in the same order).
// The original array will be not empty and will contain at least "number" even numbers.

function evenNumbers(array, number) {
	let result = []; // Store result
	array.map((e) => {
		// Iterate through array
		if (e % 2 === 0) {
			// Find all even numbers
			result.push(e); // Push even numbers to result array
		}
	});
	return result.splice(result.length - number, number); // Return result, removing the unwanted even numbers
}
