function fun(numbers) {
  // order the array

  const ordered = numbers.sort((a, b) => a - b); // 1, 2, 4, 8 // n

  let one = null;
  let two = null;

  let start = ordered[0]; // 1

  let answer = null; // null

  let maxDistance = 0;

  for (let i = 1; i < ordered.length; i++) {
    // n

    one = ordered[i - 1]; // 4
    two = ordered[i]; // 8

    if (one - two === -1) {
      // 4 - 8 // -4
      end = two; // 2
    } else {
      let distance = two - start; // 8 - 4 // 4

      if (distance > maxDistance) {
        // 4 > 2 // true
        answer = [start, one]; // 4, 8
        maxDistance = distance;
        4;
      }
      start = two; // 4
      i++;
    }
  }

  return answer;
}

console.log(fun([1, 4, 2, 100, 23, 8]));
