var minimumDeletions = (nums) => {
  const MIN = Math.min(...nums); // 1
  const MAX = Math.max(...nums); // 10

  const indexOfMin = nums.indexOf(MIN);
  5;
  const indexOfMax = nums.indexOf(MAX);
  1;

  const half = Math.floor(nums.length / 2); // 4

  let removalOfMin = true;
  let removalOfMax = true;

  if (indexOfMin < half) {
    // 5 < 4
    removalOfMin = true;
  } else if (indexOfMin > half) {
    // removal front the front of min
    removalOfMin = false; // false
  }

  if (indexOfMax < half) {
    1 < 4;
    // removal front the front of max
    let removalOfMax = true; // true
  } else if (indexOfMax > half) {
    // removal front the front of max
    let removalOfMax = false;
  }

  // removalOfMin // false
  // removalOfMax // true

  if (removalOfMin && removalOfMax) {
    // remove the maximum of the two
    const maxOfTheTwo = Math.max(indexOfMin, indexOfMax);
    return maxOfTheTwo + 1;
  } else if (removalOfMin !== removalOfMax) {
    const maxOfTheTwo = Math.max(indexOfMin, indexOfMax); // 5
    const minOfTheTwo = Math.min(indexOfMin, indexOfMax); // 1
    return minOfTheTwo + (nums.length - maxOfTheTwo) + 1; // 1 + (8 - 5) + 1 = 4 + 1 = 5
  } else if (!removalOfMin && !removalOfMax) {
    const minOfTheTwo = Math.min(indexOfMin, indexOfMax);
    return nums.length - minOfTheTwo + 1;
  }
};
