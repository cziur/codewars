// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum(a, b) {
	let result = 0;
	if (a == b) {
		return a;
	}
	if (a < b) {
		for (; a <= b; a++) {
			result += a;
		}
	} else if (b < a) {
		for (; b <= a; b++) {
			result += b;
		}
	}
	return result;
}
