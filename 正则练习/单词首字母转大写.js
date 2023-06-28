function titleize (str) {
  return str.toLowerCase().replace(/(?:^|\s)\w/g, function (e) {
    return e.toUpperCase();
  })
}

console.log(titleize('my name is yu'));