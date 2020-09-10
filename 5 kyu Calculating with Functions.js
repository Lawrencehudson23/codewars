// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

const zero = (operation) => (!operation ? 0 : operation(0));

const one = (operation) => (!operation ? 1 : operation(1));

const two = (operation) => (!operation ? 2 : operation(2));

const three = (operation) => (!operation ? 3 : operation(3));

const four = (operation) => (!operation ? 4 : operation(4));

const five = (operation) => (!operation ? 5 : operation(5));

const six = (operation) => (!operation ? 6 : operation(6));

const seven = (operation) => (!operation ? 7 : operation(7));

const eight = (operation) => (!operation ? 8 : operation(8));

const nine = (operation) => (!operation ? 9 : operation(9));

const plus = (x) => (y) => y + x;

const minus = (x) => (y) => y - x;

const times = (x) => (y) => y * x;

const dividedBy = (x) => (y) => Math.floor(y / x);
