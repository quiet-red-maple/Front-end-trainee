function camelize (str) {
  return str.replace(/[-_\s]+(.)?/g, function (match, e) {
    return e ? e.toUpperCase() : '';
  });
}

console.log(camelize('--moz-transform'));