// Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin) {
	return parseInt(bin, 2); // parseInt reads the string 'bin' and returns an integer based on the radix, which is the second number
} // The radix in this case is 2, because binary numbers only use the numbers 0 and 1
