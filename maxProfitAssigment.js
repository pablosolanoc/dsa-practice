/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  const dAndPRelation = [];
  for (let i = 0; i < difficulty.length; i++) {
    dAndPRelation.push({ difficulty: difficulty[i], profit: profit[i] });
  }

  const workerOrderedAscending = [...worker].sort((a, b) => a - b);
  const dAndPRelationOrderedAscending = [...dAndPRelation].sort(
    (a, b) => a.difficulty - b.difficulty
  );

  let gain = 0;

  for (let i = 0; i < workerOrderedAscending.length; i++) {
    const workerAbility = workerOrderedAscending[i];

    let maxProfit = 0;

    for (let j = 0; j < dAndPRelationOrderedAscending.length; j++) {
      if (workerAbility >= dAndPRelationOrderedAscending[j].difficulty) {
        if (dAndPRelationOrderedAscending[j].profit > maxProfit) {
          maxProfit = dAndPRelationOrderedAscending[j].profit;
        }
      }
    }

    gain += maxProfit;
  }

  return gain;
};

console.log(
  maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7])
);
console.log(maxProfitAssignment([85, 47, 57], [24, 66, 99], [40, 25, 25]));
