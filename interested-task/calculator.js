const calculator = (num) => (fn) => fn ? fn(num) : num;

const zero = calculator(0);
const one = calculator(1);
const two = calculator(2);
const three = calculator(3);
const four = calculator(4);
const five = calculator(5);
const six = calculator(6);
const seven = calculator(7);
const eight = calculator(8);
const nine = calculator(9);

const plus = (rightNum) => (leftNum) => Math.floor(leftNum + rightNum);
const minus = (rightNum) => (leftNum) => Math.floor(leftNum - rightNum);
const times = (rightNum) => (leftNum) => Math.floor(leftNum * rightNum);
const dividedBy = (rightNum) => (leftNum) => Math.floor(leftNum / rightNum);

one(plus(two())); // 3
eight(dividedBy(two())); // 4
eight(dividedBy(three())); // 2
five(times(five())); // 25
six(minus(three())); // 3
