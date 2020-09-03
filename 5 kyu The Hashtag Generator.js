// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false
function generateHashtag(str) {
	let arr = str.split(" ").filter((cha) => cha !== "");
	let newArr = ["#"];
	let result = "";
	// console.log("arr.length: ", arr.length);
	if (arr.length === 0) {
		return false;
	}
	for (let i of arr) {
		let subArr = i.split("");
		subArr[0] = subArr[0].toUpperCase();
		// console.log("subArr[0]: ", subArr[0]);
		newArr.push(subArr.join(""));
		// console.log("newArr: ", newArr);
	}
	result = newArr.join("");
	if (result.length > 140) {
		return false;
	}
	return result;
}

generateHashtag("  ");
// console.log('generateHashtag(""): ', generateHashtag(""));
generateHashtag("Codewars is  nice");
// console.log(
// 	'generateHashtag("Codewars is nice"): ',
// 	generateHashtag("Codewars is nice")
// );
