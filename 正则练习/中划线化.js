function dasherize (str) {
  return str.replace(/[A-Z]/g, function (e) {
    return `-` + e.toLowerCase();
  })
}

console.log(dasherize('MozTransform'));