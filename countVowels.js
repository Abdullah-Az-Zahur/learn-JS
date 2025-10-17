function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;
  const vowelsCount = {};

  const strLow = str.toLowerCase();

  for (let char of strLow) {
    if (vowels.includes(char)) {
      count++;
      vowelsCount[char] = (vowelsCount[char] || 0) + 1;
    }
  }
  return { total: count, vowelsCount };
}

console.log(countVowels("hello"));
