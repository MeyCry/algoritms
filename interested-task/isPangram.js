function isPangram(string){
  const aCode = 97;
  const zCode = 122;
  
  const lettersInStr = string
  .toLowerCase()
  .split('')
  .reduce((result, letter) => {
    const letterCode = letter.charCodeAt(0);
    if (letterCode > aCode - 1 && letterCode < zCode + 1) {
      result[letterCode] = letter;
    }
    return result;
  }, {});
  
  return Object.keys(lettersInStr).length === 26;
}

var string = "The quick brown fox jumps over the lazy dog."
isPangram(string); // true
var string = "This is not a pangram."
isPangram(string); // false

function isPangram2(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}
