function longestWord(sen) {
  return sen.replace(/[^A-Za-z0-9 ]/g, '')
    .split(' ')
    .reduce((result, item) => {
      if (item.length > result.length) {
        return item;
      }
      return result;
    }, '');
}

// console.log(longestWord("'I love dogs'"));
// console.log(longestWord("123456789 98765432"));
//
// console.log([4, 3, 1, 8].sort((a, b) => a - b));


