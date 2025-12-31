/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  const hola = `${num}`.split('');
  console.log(hola);
  const holaOrdered = [...hola].sort((a, b) => b - a);
  console.log(holaOrdered);
  let indexToSwap = -1;
  let indexToSwapLast = -1;
  let numberToSwap = 0;

  for (let i = 0; i < holaOrdered.length; i++) {
    if (hola[i] !== holaOrdered[i]) {
      indexToSwap = i;
      numberToSwap = holaOrdered[i];
      break;
    }
  }

  for (let i = 0; i < hola.length; i++) {
    if (hola[i] === numberToSwap) {
      indexToSwapLast = i;
    }
  }

  const uno = `${hola.slice(0, indexToSwap).join('')}`;
  const dos = `${hola[indexToSwapLast]}`;
  const tres = `${hola.slice(indexToSwap + 1, indexToSwapLast).join('')}`;
  const cuatro = `${hola[indexToSwap]}`;
  const cinco = `${hola.slice(indexToSwapLast + 1).join('')}`;

  if (indexToSwap === -1 && indexToSwapLast === -1) {
    return num;
  } else {
    return parseInt(`${uno}${dos}${tres}${cuatro}${cinco}`);
  }
};

console.log(maximumSwap(48219));
console.log(maximumSwap(17542));
console.log(maximumSwap(3127));
console.log(maximumSwap(87654));
console.log(maximumSwap(12345));
