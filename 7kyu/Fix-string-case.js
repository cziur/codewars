// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

function solve(s) {
	const arr = s.split(""); // Split string into an array to check each character
	let lowerCase = 0; // Variables to count how many of each upper or lower case
	let upperCase = 0;
	arr.map((a) => {
		// Iterate through the array
		if (a !== a.toUpperCase()) {
			// If the character is not uppercase, add one number to the lowercase variable
			lowerCase++;
		} else {
			upperCase++; // Otherwise add a number to the uppercase variable
		}
	});
	return lowerCase >= upperCase ? s.toLowerCase() : s.toUpperCase(); // If there are more or equal lowercase letters to uppercase letters, return the string lowercase
} // Otherwise return the string uppercase
