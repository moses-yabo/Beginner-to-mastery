const url = require('url');
const querystring = require('querystring');
const { log } = require('console');

//url.parse()
const myUrl = url.parse('https://example.com/listing?id=1000&premium=true');

console.log(myUrl);
//url.format()
const myUrl2 = url.format({
  protocol: 'https',
  host: 'www.example.com',
  pathname: 'listing',
  query: {
    id: 1000,
    premium: true,
  },
});
console.log('2', myUrl2);

//queryString.parse()
const myQs = 'year=2023&month=january&day=20';
const q = querystring.parse(myQs);
log(q.month);

//querystring.stringify()

const myQs2 = querystring.stringify({
  year: 2023,
  month: 'january',
  day: 20,
});

log(myQs2);
