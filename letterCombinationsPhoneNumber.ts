// LeetCode Problem: Letter Combinations of a Phone Number
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

const mapper: { [key: number]: string[] } = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
};

function letterCombinations(digits: string): string[] {
  let words = new Set<string>();
  let newWord = '';

  const totalIterations = Math.pow(4, digits.length);

  let iteration = 0;
  while (iteration <= totalIterations) {
    let result = iteration;

    let index = digits.length - 1;
    let validWord = true;
    while (index >= 0) {
      const currentDigit = parseInt(digits[index]);
      const remainder = result % 4;
      result = Math.floor(result / 4);
      const character = mapper[currentDigit][remainder];
      if (character === undefined) {
        validWord = false;
        break;
      }
      newWord = character + newWord;

      index -= 1;
    }

    if (validWord === true) {
      words.add(newWord);
    }

    newWord = '';
    iteration += 1;
  }

  return Array.from(words);
}

console.log(letterCombinations('2'));
console.log(letterCombinations('23'));
console.log(letterCombinations('999'));
