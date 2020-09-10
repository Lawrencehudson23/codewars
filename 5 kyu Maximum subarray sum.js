// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function (arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sum = 0;
	let subSum;
	let count;
	for (let i = 0; i < arr.length; i++) {
		console.log("subSum:", subSum);
		subSum = 0;
		count = 0;
		for (let j = i; j < arr.length; j++) {
			subSum += arr[j];
			if (subSum > sum) {
				sum = subSum;
			}
		}
		if (arr[j] < 0) {
			count++;
		}
		if (count === arr.length - 1) {
			return 0;
		}
	}
	if (sum < 0) return 0;
	return sum;
};
maxSequence([]);
console.log("maxSequence([]): ", maxSequence([]));
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(
	"  maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]): ",
	maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
);
