// Arrays

const equipShelfA = ["basketball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
//or
console.log(clothesShelfB[0]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log([0][1]);
console.log(clothesDept[1][0]);

const sportsStore = [equipDept, clothesDept];
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);