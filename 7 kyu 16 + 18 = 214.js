// For this Kata you will have to forget how to add two numbers together.
function add(num1, num2) {
	let arr = [];
	while (num1 && num2) {
		arr.unshift((num1 % 10) + (num2 % 10));
		num1 = Math.floor(num1 / 10);
		num2 = Math.floor(num2 / 10);
	}
	arr.unshift(num1 || num2);
	return +arr.join("");
}
