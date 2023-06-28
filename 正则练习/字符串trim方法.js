// 替换空格
// function trim(str) {
//   return str.replace(/^\s+|\s+$/g, "");
// }

// 替换非空字符(注意 .*? 会尽可能少地匹配字符，直到满足后续的表达式或模式。)
function trim(str) {
  return str.replace(/^\s*(.*?)\s*$/g, '$1');
}

console.log(trim("  foooder   "));
