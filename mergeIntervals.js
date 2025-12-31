/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function (intervals) {
//   const numbers = {};

//   for (let i = 0; i < intervals.length; i++) {
//     const interval = intervals[i];
//     const start = interval[0];
//     const end = interval[1];

//     for (let j = start; j <= end; j++) {
//       numbers[j] = true;
//     }
//   }

//   const keysOrdered = Object.keys(numbers).sort((a, b) => a - b);

//   console.log(keysOrdered);

//   let start = keysOrdered[0];
//   let one = null;
//   let two = null;
//   let answers = [];

//   for (let i = 1; i < keysOrdered.length + 1; i++) {
//     one = keysOrdered[i - 1];
//     two = keysOrdered[i];

//     if (one - two !== -1) {
//       answers.push([start, one]);
//       start = keysOrdered[i];
//     }
//   }

//   return answers;
// };

let merge = function (intervals) {
  let sortedIntervals = [...[...intervals].sort((a, b) => a[0] - b[0])];
  // console.log(sortedIntervals.slice(-1));
  const newOne = sortedIntervals.slice(-1)[0][1] + 1;
  const newTwo = sortedIntervals.slice(-1)[0][1] + 1;
  sortedIntervals.push([newOne, newTwo]);

  // console.log(sortedIntervals);

  let lastInterval = [sortedIntervals[0][0], sortedIntervals[0][1]];
  let answers = [];

  for (let i = 1; i < sortedIntervals.length; i++) {
    const interval = sortedIntervals[i];

    if (interval[0] > lastInterval[1]) {
      answers.push(lastInterval);
      lastInterval = interval;
    } else if (interval) {
      lastInterval = [lastInterval[0], interval[1]];
    }
  }
  return answers;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);
