// n > 0
// Not use let, const
function hola(n) {
  var hey = 0;
  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      var newNumber = parseInt(`${i}`);
      console.log(hey);
      hey++;
    }, i * 1000);
  }
}

hola(10);
