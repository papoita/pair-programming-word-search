/** @format */
const verticalArray = (letters) => {
	let newLetters = [];

	for (let i = 0; i < letters.length; i++) {
		newLetters.push([]);
		for (let j = 0; j < letters[i].length; j++) {
			newLetters[i][j] = letters[j][i];
		}
	}
	console.log(newLetters);
	return newLetters;
};

const wordSearch = (letters, word) => {
	const horizontalJoin = letters.map((ls) => ls.join(""));
	const verticalJoin = verticalArray(letters).map((ls) => ls.join(""));
	console.log(verticalJoin);

	if (horizontalJoin.includes(word)) {
		return true;
	} else {
		return false;
	}
};
// verticalJoin.includes(word)

const result = wordSearch(
	[
		["A", "W", "C", "F", "Q", "U", "A", "L"],
		["S", "E", "I", "N", "F", "E", "L", "D"],
		["Y", "F", "C", "F", "Q", "U", "A", "L"],
		["H", "M", "J", "T", "E", "V", "R", "G"],
		["W", "H", "C", "S", "Y", "E", "R", "L"],
		["B", "F", "R", "E", "N", "E", "Y", "B"],
		["U", "B", "T", "W", "A", "P", "A", "I"],
		["O", "D", "C", "A", "K", "U", "A", "S"],
		["E", "Z", "K", "F", "Q", "U", "A", "L"],
	],
	"FRANK"
);

//verticalArray();

//console.log(transpose(matrix));

// const printMatrix = (matrix) => {
// 	for (const row of matrix) {
// 		for (const el of row) {
// 			process.stdout.write(el + " ");
// 		}
// 		process.stdout.write("\n");
// 	}
// };

module.exports = wordSearch;
