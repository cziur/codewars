// Find the sum of all multiples of n below m

function sumMul(n, m) {
	if (m <= 0) {
		return "INVALID";
	}
	let result = 0;
	for (let i = n; i < m; i += n) {
		result += i;
	}

	return result;
}
