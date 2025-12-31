/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let lastMovingIndex = nums.length - 1;

  let firstIndex = -1;
  let lastIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target && firstIndex === -1) {
      firstIndex = i;
    } else if (nums[i] === target) {
    }

    if (nums[lastMovingIndex] === target && lastIndex === -1) {
      lastIndex = lastMovingIndex;
    }

    // if (i >= lastMovingIndex) {
    //   break;
    // }

    lastMovingIndex -= 1;
  }

  if (firstIndex !== -1 && lastIndex !== -1) {
    return [firstIndex, lastIndex];
  } else if (firstIndex !== -1 && lastIndex === -1) {
    return [firstIndex, firstIndex];
  } else if (firstIndex === -1 && lastIndex !== -1) {
    return [lastIndex, lastIndex];
  } else {
    return [-1, -1];
  }
};
