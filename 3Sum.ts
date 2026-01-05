// LeetCode Problem: 3Sum
// https://leetcode.com/problems/3sum/description/?source=submission-noac

function threeSum(nums: number[]): number[][] {
  const resultMap: { [key: string]: number[] } = {};
  const result: number[][] = [];

  const orderedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < orderedNums.length; i++) {
    let j = i + 1;
    let k = orderedNums.length - 1;

    while (j < k) {
      const sum = orderedNums[i] + orderedNums[j] + orderedNums[k];

      if (sum === 0) {
        const orderedTriplet = [orderedNums[i], orderedNums[j], orderedNums[k]];

        const tripletKey = orderedTriplet.join('');

        if (!resultMap[tripletKey]) {
          resultMap[tripletKey] = orderedTriplet;
          result.push(orderedTriplet);
        }
        k -= 1;
        j += 1;
      } else if (sum > 0) {
        k -= 1;
      } else if (sum < 0) {
        j += 1;
      }
    }
  }

  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([0, 1, 1]));
