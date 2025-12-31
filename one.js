var calPoints = (ops) => {
  const cola = [];
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    if (op === 'C') {
      cola.pop();
    } else if (op === 'D') {
      const newScore = cola.slice(-1)[0] * 2;
      cola.push(newScore);
    } else if (op === '+') {
      const numbers = cola.slice(-2);
      const newScore = numbers[0] + numbers[1];
      cola.push(newScore);
    } else {
      const newScore = +op;
      cola.push(newScore);
    }
  }
  return cola.reduce((x, acc) => acc + x, 0);
};
var ops = '5 2 C D +'.split(' ');
console.log(calPoints(ops));
