// Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
// Task
// Given an array of positive integers (the weights of the people), return a new array / tuple of two integers (depending on your language), whereby the first one is the total weight of team 1, and the second one is the total weight of team 2. Note that the array will never be empty.

function rowWeights(array) {
	let teamOne = 0;
	let teamTwo = 0;
	for (let i = 0; i < array.length; i++) {
		if (i % 2 === 0) {
			teamOne += array[i];
		} else {
			teamTwo += array[i];
		}
	}
	return [teamOne, teamTwo];
}
