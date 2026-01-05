// LeetCode Problem: 3Sum
// https://leetcode.com/problems/3sum/description/?source=submission-noac

const addToResultMap = (
  orderedNums: number[],
  i: number,
  j: number,
  resultMap: { [key: string]: number[] },
  numberIndex: { [key: number]: number[] },
  result: number[][]
) => {
  const complement = (orderedNums[i] + orderedNums[j]) * -1;

  if (numberIndex[complement] !== undefined) {
    for (let p = 0; p < numberIndex[complement].length; p++) {
      const indexForZeroSum = numberIndex[complement][p];
      if (i !== j && i !== indexForZeroSum && indexForZeroSum !== j) {
        const triplet = [
          orderedNums[indexForZeroSum],
          orderedNums[i],
          orderedNums[j],
        ];

        const sortedTriplet = triplet.sort((a, b) => a - b);

        const sortedTripletKey = sortedTriplet.join('');
        if (!resultMap[sortedTripletKey]) {
          result.push(sortedTriplet);
          resultMap[sortedTripletKey] = sortedTriplet;
        }
      }
    }
  }
};

function threeSum(nums: number[]): number[][] {
  const numberIndex: { [key: number]: number[] } = {};

  const resultMap: { [key: string]: number[] } = {};
  const result: number[][] = [];

  let indexOne = 0;
  let indexTwo = Math.floor(nums.length / 2);

  nums.forEach((_, index: number) => {
    if (numberIndex[nums[index]] !== undefined) {
      numberIndex[nums[index]].push(index);
    } else {
      numberIndex[nums[index]] = [index];
    }
  });

  while (indexOne <= Math.floor(nums.length / 2)) {
    let runningIndexOne = indexOne + 1;
    let runningIndexTwo = indexTwo + 1;

    while (runningIndexOne <= Math.floor(nums.length / 2)) {
      addToResultMap(
        nums,
        indexOne,
        runningIndexOne,
        resultMap,
        numberIndex,
        result
      );
      addToResultMap(
        nums,
        indexOne,
        runningIndexTwo,
        resultMap,
        numberIndex,
        result
      );
      addToResultMap(
        nums,
        indexTwo,
        runningIndexTwo,
        resultMap,
        numberIndex,
        result
      );

      runningIndexOne += 1;
      runningIndexTwo += 1;
    }

    indexOne += 1;
    indexTwo += 1;
  }

  return result;
}

console.log(threeSum([-2, 0, -5, -2, 0, -3, 1, -4, 0, -2, 4]));
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 0, 0]));
// console.log(threeSum([0, 1, 1]));

const testResult = [
  [-15, 1, 14],
  [-15, 2, 13],
  [-15, 3, 12],
  [-15, 4, 11],
  [-15, 5, 10],
  [-15, 6, 9],
  [-15, 7, 8],
  [-14, 0, 14],
  [-14, 1, 13],
  [-14, 2, 12],
  [-14, 3, 11],
  [-14, 4, 10],
  [-14, 5, 9],
  [-14, 6, 8],
  [-14, 7, 7],
  [-13, -1, 14],
  [-13, 0, 13],
  [-13, 1, 12],
  [-13, 2, 11],
  [-13, 3, 10],
  [-13, 4, 9],
  [-13, 5, 8],
  [-13, 6, 7],
  [-12, -2, 14],
  [-12, -1, 13],
  [-12, 0, 12],
  [-12, 1, 11],
  [-12, 2, 10],
  [-12, 3, 9],
  [-12, 4, 8],
  [-12, 5, 7],
  [-11, -3, 14],
  [-11, -2, 13],
  [-11, -1, 12],
  [-11, 0, 11],
  [-11, 1, 10],
  [-11, 2, 9],
  [-11, 3, 8],
  [-11, 4, 7],
  [-11, 5, 6],
  [-10, -4, 14],
  [-10, -3, 13],
  [-10, -2, 12],
  [-10, -1, 11],
  [-10, 0, 10],
  [-10, 1, 9],
  [-10, 2, 8],
  [-10, 3, 7],
  [-10, 4, 6],
  [-10, 5, 5],
  [-9, -5, 14],
  [-9, -4, 13],
  [-9, -3, 12],
  [-9, -2, 11],
  [-9, -1, 10],
  [-9, 0, 9],
  [-9, 1, 8],
  [-9, 2, 7],
  [-9, 3, 6],
  [-9, 4, 5],
  [-8, -6, 14],
  [-8, -5, 13],
  [-8, -4, 12],
  [-8, -3, 11],
  [-8, -2, 10],
  [-8, -1, 9],
  [-8, 0, 8],
  [-8, 1, 7],
  [-8, 2, 6],
  [-8, 3, 5],
  [-8, 4, 4],
  [-7, -7, 14],
  [-7, -6, 13],
  [-7, -5, 12],
  [-7, -4, 11],
  [-7, -3, 10],
  [-7, -2, 9],
  [-7, -1, 8],
  [-7, 0, 7],
  [-7, 1, 6],
  [-7, 2, 5],
  [-7, 3, 4],
  [-6, -6, 12],
  [-6, -5, 11],
  [-6, -4, 10],
  [-6, -3, 9],
  [-6, -2, 8],
  [-6, -1, 7],
  [-6, 0, 6],
  [-6, 1, 5],
  [-6, 2, 4],
  [-6, 3, 3],
  [-5, -5, 10],
  [-5, -4, 9],
  [-5, -3, 8],
  [-5, -2, 7],
  [-5, -1, 6],
  [-5, 0, 5],
  [-5, 1, 4],
  [-5, 2, 3],
  [-4, -4, 8],
  [-4, -3, 7],
  [-4, -2, 6],
  [-4, -1, 5],
  [-4, 0, 4],
  [-4, 1, 3],
  [-4, 2, 2],
  [-3, -3, 6],
  [-3, -2, 5],
  [-3, -1, 4],
  [-3, 0, 3],
  [-3, 1, 2],
  [-2, -2, 4],
  [-2, -1, 3],
  [-2, 0, 2],
  [-2, 1, 1],
  [-1, -1, 2],
  [-1, 0, 1],
];

const result = threeSum([
  -13, 5, 13, 12, -2, -11, -1, 12, -3, 0, -3, -7, -7, -5, -3, -15, -2, 14, 14,
  13, 6, -11, -11, 5, -15, -14, 5, -5, -2, 0, 3, -8, -10, -7, 11, -5, -10, -5,
  -7, -6, 2, 5, 3, 2, 7, 7, 3, -10, -2, 2, -12, -11, -1, 14, 10, -9, -15, -8,
  -7, -9, 7, 3, -2, 5, 11, -13, -15, 8, -3, -7, -12, 7, 5, -2, -6, -3, -10, 4,
  2, -5, 14, -3, -1, -10, -3, -14, -4, -3, -7, -4, 3, 8, 14, 9, -2, 10, 11, -10,
  -4, -15, -9, -1, -1, 3, 4, 1, 8, 1,
]);

result.map((res) => {
  const found = testResult.find((tRes) => {
    return tRes[0] === res[0] && tRes[1] === res[1] && tRes[2] === res[2];
  });
  if (!found) {
    console.log(res);
  }
});

testResult.map((res) => {
  const found = result.find((tRes) => {
    return tRes[0] === res[0] && tRes[1] === res[1] && tRes[2] === res[2];
  });
  if (!found) {
    console.log(res);
  }
});
