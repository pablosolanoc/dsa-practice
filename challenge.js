var solution = function (morsecode) {
  // write your solution here

  const res = [];
  if (morsecode.length === 1) {
    return [];
  }
  for (let i = 0; i < morsecode.length; i++) {
    // try {
    const first = morsecode[i];
    const second = morsecode[i + 1];
    if (first === '.' && second === '.') {
      const firstPart = morsecode.slice(0, i);
      const secondPart = morsecode.slice(i + 2);
      const newMessage = `${firstPart}--${secondPart}`;
      res.push(newMessage);
    }
    // } catch (err) {}
  }
  return res;
};

function printArray(arr) {
  console.log(JSON.stringify(arr).replace(/,\s*/g, ','));
}
const a = '.';
var output = solution(a);
output.sort();
printArray(output);
