// Some new cashiers started to work at your restaurant.

// They are good at taking orders, but they don't know how to capitalize words, or use a space bar!

// All the orders they create look something like this:

// "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"

// The kitchen staff are threatening to quit, because of how difficult it is to read the orders.

// Their preference is to get the orders as a nice clean string with spaces and capitals like so:

// "Burger Fries Chicken Pizza Pizza Pizza Sandwich Milkshake Milkshake Coke"

// The kitchen staff expect the items to be in the same order as they appear in the menu.

// The menu items are fairly simple, there is no overlap in the names of the items:

// 1. Burger
// 2. Fries
// 3. Chicken
// 4. Pizza
// 5. Sandwich
// 6. Onionrings
// 7. Milkshake
// 8. Coke

function getOrder(input) {
	let arr1 = [];
	let obj = {};
	let word = "";
	for (let j of input) {
		word += j;
		for (let w of arr) {
			if (word === w.toLowerCase()) {
				if (obj[word]) {
					obj[word]++;
				} else {
					obj[word] = 1;
				}
				word = "";
			}
		}
	}

	for (let i of arr) {
		if (i.toLowerCase() in obj) {
			for (let x = 0; x < obj[i.toLowerCase()]; x++) {
				arr1.push(i);
			}
		}
	}
	let result = arr1.join(" ");
	return result;
}

let arr = [
	"Burger",
	"Fries",
	"Chicken",
	"Pizza",
	"Sandwich",
	"Onionrings",
	"Milkshake",
	"Coke",
];

console.log(
	getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza")
);
