// 要求：密码长度 6-12 位，由数字、小写字符和大写字母组成，但必须至少包括 2 种字符
// 两两匹配
// var reg =
//   /((?=.*[0-9])(?=.*[a-z])|(?=.*[0-9])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z]))^[0-9A-Za-z]{6,12}$/;
// console.log(reg.test("124"));
// console.log(reg.test("124555"));
// console.log(reg.test("aaabbbccc"));
// console.log(reg.test("AAABBBCCC"));
// console.log(reg.test("124BBBCCC"));
// console.log(reg.test("124aaabb"));
// console.log(reg.test("124aaabbdffewf"));
// 不全是
var reg = /((?![0-9]{6,12})(?![a-z]{6,12})(?![A-Z]{6,12}))^[0-9A-Za-z]{6,12}$/;
console.log(reg.test("124"));
console.log(reg.test("124555"));
console.log(reg.test("aaabbbccc"));
console.log(reg.test("AAABBBCCC"));
console.log(reg.test("124BBBCCC"));
console.log(reg.test("124aaabb"));
console.log(reg.test("124aaabbdffewf"));
