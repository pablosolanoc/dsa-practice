/**
 * @param {number} c
 * @return {boolean}
 */

var checkIfSquare = (one) => {
  if (one ** (1 / 2) === parseInt(one ** (1 / 2))) {
    return true;
  }
  return false;
};

var judgeSquareSum = function (c) {
  if (c === 0) {
    return true;
  }

  if (checkIfSquare(c)) {
    return true;
  }

  const cRoot = c ** (1 / 2);

  for (let i = 1; i < cRoot; i++) {
    let aSquared = i * i;
    let bSquared = c - aSquared;

    if (checkIfSquare(bSquared)) {
      return true;
    }
  }
  return false;
};

console.log(judgeSquareSum(3));
console.log(judgeSquareSum(33));
console.log(judgeSquareSum(17));
console.log(judgeSquareSum(13));
console.log(judgeSquareSum(20));
