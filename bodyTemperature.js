function getNetProfit(events) {
  // Write your code here

  const stocks = {};
  const queries = [];
  let soldValue = 0;

  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    const [eventKey, stock, num] = event.split(' ');

    if (eventKey === 'BUY') {
      if (stocks[stock]) {
        stocks[stock] = { value: 0, quantity: +stocks[stock].quantity + +num };
      } else {
        stocks[stock] = { value: 0, quantity: +num };
      }
    }
    if (eventKey === 'CHANGE') {
      stocks[stock]['value'] = +num;
    }

    if (eventKey === 'SELL') {
      stocks[stock]['quantity'] = stocks[stock]['quantity'] - +num;
    }

    if (eventKey === 'QUERY') {
      const valueQuery = Object.values(stocks).reduce(
        (acc, a) => +a.value * +a.quantity + acc,
        0
      );
      queries.push(valueQuery);
    }
  }

  return queries;
}

console.log(getNetProfit(['BUY kac 2', 'QUERY']));
