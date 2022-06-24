const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.static('public'));
app.use(cookieParser());

//Assignment 1
app.get('/', (req, res) => {
  res.send('Hello, My Server!');
});

//Assignment 2
/*
function sumToCertainNumLinearTime(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
*/

function sumToCertainNumConstantTime(num) {
  return ((num + 1) * num) / 2;
}

app.get('/data', (req, res) => {
  let { number } = req.query;

  if (!number) return res.send('Lack of Parameter');

  number = +number;

  if (!Number.isInteger(number) || Math.abs(number) != number) return res.send('Wrong Parameter');

  res.send(`${sumToCertainNumConstantTime(number)}`);
});

//Assignment 4
app.get('/myName', (req, res) => {
  const username = req.cookies.username;

  if (username) res.send(`${username}`);
  else {
    const form = `
    <form action="/trackName">
      <p>Please enter your name</p>
      <input type="text" name="name">
      <button>Submit</button>
    </form>`;

    res.send(form);
  }
});

app.get('/trackName', (req, res) => {
  res.cookie('username', req.query.name);
  res.redirect('/myName');
});

app.listen(3000, (req, res) => {
  console.log('Server is running on port 3000');
});
