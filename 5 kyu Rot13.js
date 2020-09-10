// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
function rot13(message) {
	const obj = {};
	let str = "abcdefghijklmnopqrstuvwxyz";
	let cap = str.toUpperCase();
	let result = "";
	console.log("cap: ", cap);
	for (let i = 0; i < str.length; i++) {
		obj[str[i]] = str[(i + 13) % 26];
		obj[cap[i]] = cap[(i + 13) % 26];
	}
	console.log("obj: ", obj);
	for (let i of message) {
		obj[i] ? (result += obj[i]) : i;
	}
	return result;
}
rot13("Test");
console.log('rot13("Test"): ', rot13("Test"));
