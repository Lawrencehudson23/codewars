// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
multiplicationTable = function (size) {
	let arr = [];
	for (let i = 0; i < size; i++) {
		arr.push([]);
		for (let j = 0; j < size; j++) {
			arr[i].push((j + 1) * (i + 1));
		}
	}
	return arr;
};

multiplicationTable(3);
console.log("multiplicationTable(3): ", multiplicationTable(3));
