// LeetCode Problem: 3Sum
// https://leetcode.com/problems/3sum/description/?source=submission-noac

function threeSum(nums: number[]): number[][] {
  const numberIndex: { [key: number]: number } = {};
  const neededComplement: { [key: number]: number[][] } = {};

  const resultMap: { [key: string]: number[] } = {};
  const result: number[][] = [];

  const orderedNums = nums;
  // .sort((a, b) => a - b);

  for (let i = 0; i < orderedNums.length; i++) {
    for (let j = i + 1; j < orderedNums.length; j++) {
      const complement = (orderedNums[i] + orderedNums[j]) * -1;

      if (numberIndex[complement] !== undefined) {
        const numForZeroSum = numberIndex[complement];

        // for (let p = 0; p < indexesForZeroSum.length; p++) {
        //   const indexForZeroSum = indexesForZeroSum[p];
        const triplet = [
          orderedNums[numForZeroSum],
          orderedNums[i],
          orderedNums[j],
        ];

        const sortedTripletKey = triplet.sort((a, b) => a - b).join('');
        if (!resultMap[sortedTripletKey]) {
          result.push(triplet);
          resultMap[sortedTripletKey] = triplet;
        }
        // }
      } else {
        if (neededComplement[complement] !== undefined) {
          neededComplement[complement].push([i, j]);
        } else {
          neededComplement[complement] = [[i, j]];
        }
      }
    }

    if (neededComplement[orderedNums[i]]) {
      const hola = neededComplement[orderedNums[i]];
      hola.forEach((indexes) => {
        const list = Array.from(new Set([...indexes, i]));
        if (list.length === 3) {
          const numbers = [
            orderedNums[list[0]],
            orderedNums[list[1]],
            orderedNums[list[2]],
          ];
          const orderedList = numbers.sort((a, b) => a - b);
          const sortedTripletKey = orderedList.join('');
          if (!resultMap[sortedTripletKey]) {
            result.push(orderedList);
            resultMap[sortedTripletKey] = orderedList;
          }
        }
      });
      neededComplement[orderedNums[i]] = [];
    }

    if (numberIndex[orderedNums[i]] !== undefined) {
      numberIndex[orderedNums[i]] = i;
    } else {
      numberIndex[orderedNums[i]] = i;
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// -4, -1, -1, 0, 1, 2
console.log(threeSum([0, 0, 0]));
console.log(threeSum([0, 1, 1]));
