/**
 * @param {string} s
 * @return {string[]}
 */

function biggerThan(n, nB) {
  if (n > nB) {
    return true;
  }
  return false;
}

function trailingZero(s) {
  const indexOfZero = s.split('').indexOf('0');
  const indexOfNonZero = s.split('').findIndex((a) => a !== '0');

  return (
    indexOfZero > -1 && indexOfNonZero > -1 && indexOfZero < indexOfNonZero
  );
}

var restoreIpAddresses = function (s, level) {
  let arrayWithParts = [];
  const longitud = s.length;

  if (longitud > 12) {
    return false;
  }

  for (i = 1; i < 4; i++) {
    const possibleNumber = s.slice(longitud - i);

    console.log({ possibleNumber, arrayWithParts });

    const leftString = s.slice(0, longitud - i);

    if (
      biggerThan(parseInt(possibleNumber), 255) ||
      trailingZero(possibleNumber) ||
      (level > 4 && biggerThan(parseInt(leftString), 255)) ||
      trailingZero(leftString)
    ) {
      return false;
    }

    const parts =
      leftString.length > 0 ? restoreIpAddresses(leftString, level + 1) : '';
    if (!parts && level > 1) {
      return false;
    } else if (parts) {
      arrayWithParts = [...arrayWithParts, ...parts];
      return arrayWithParts;
    }
  }
};

console.log(restoreIpAddresses('25525511135', 1));
