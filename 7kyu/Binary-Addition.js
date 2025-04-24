// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

function addBinary(a, b) {
	const add = a + b; // Add two numbers together
	return add.toString(2); // Return the sum in binary
} // When .toString is used with a number, we can use a radix parameter to change the numeral system that is returned
// In this case, the radix would be 2, because binary numbers only use 2 numbers, that is 1 and 0

// Alternate solutions

function addBinary(a, b) {
	return (a + b).toString(2);
}

const addBinary = (a, b) => (a + b).toString(2);
