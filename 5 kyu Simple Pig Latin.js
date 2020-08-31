// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
	let arr = str.split(" ");
	let newArr = [];

	for (let i of arr) {
		if (i.length == 1 && i !== "." && i !== "," && i !== "?" && i !== "!") {
			newArr.push(i + "ay");
		} else if (i.length > 1) {
			let subArr = i.split("");
			let firstLetter = subArr.shift();
			subArr.push(firstLetter);
			subArr.push("a");
			subArr.push("y");
			newArr.push(subArr.join(""));
		} else {
			newArr.push(i);
		}
	}
	let result = newArr.join(" ");
	return result;
}

pigIt("Pig latin is a cool !"); // igPay atinlay siay oolcay
// pigIt("Hello world !"); // elloHay orldway !
