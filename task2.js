function reformat(text) {
  var no_vowels = text.toLowerCase().replace(/[aeiou]/gi, '')
  console.log(no_vowels.charAt(0).toUpperCase() + no_vowels.slice(1))
}

reformat("liMeSHArp DeveLoper TEST")