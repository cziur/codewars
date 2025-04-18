// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)

// should become:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)

// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
// Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks.

function dataReverse(data) {
	if (data.length === 0) {
		// If no data given, return empty array
		return [];
	}

	let newArr = []; // Empty array to hold our answer
	let byte = data.length / 8; // Each bit segment has a length of 8
	for (let i = 0; i < byte; i++) {
		newArr.push(data.splice(0, 8)); // Splice into 4 arrays for each bit
	}

	return newArr // Return the new array, reverse the contents
		.reverse()
		.join()
		.split(",") // Joining and split, this will cause each number to become a string within the array
		.map(Number); // Convert back to number
}
