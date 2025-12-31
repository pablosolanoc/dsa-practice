var maxSubArray = function (nums) {
  //Moving Windows Approach

  const newArray = [];
  newArray.push(nums[0]);

  const allOptions = [];

  for (let i = 1; i < nums.length; i++) {
    console.log({ hola: nums[i], hola2: newArray[i - 1] + nums[i] });
    const maximum = Math.max(nums[i], newArray[i - 1] + nums[i]);
    newArray.push(maximum);
  }
  console.log(newArray);
  return Math.max(...newArray);
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
