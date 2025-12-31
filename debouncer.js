/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let execute = false;
  return function (...args) {
    id = setTimeout(() => {
      execute = true;
      if (execute === false) {
        fn(...args);
      }
    }, t);
    execute = true;
  };
};

const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms
