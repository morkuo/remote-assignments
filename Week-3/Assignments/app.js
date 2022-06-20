const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')

app.use(express.static("public"));
app.use(cookieParser())

function sumToCertainNum(num){
  let sum = 0;
  for(let i = num; i > 0; i--){
    sum += i
  }
  return sum
}

app.get("/", (req, res) => {
  res.send('Hello, My Server!')
});

app.get("/data", (req, res) => {
  const { number } = req.query;

  if(number === '') res.send('Wrong Parameter');
  if(!number) res.send('Lack of Parameter');
  if(!Number.isInteger(+number)) res.send('Wrong Parameter');

  res.send(`${sumToCertainNum(+number)}`);
});

app.get("/sum", (req, res)=>{
  res.render('sum')
})

app.get('/myName', (req, res)=>{
  const username = req.cookies.username;

  if(username) res.send(`${username}`);
  else{
    const form = `
    <form action="/trackName">
      <p>Please enter your name</p>
      <input type="text" name="name">
      <button>Submit</button>
    </form>`

    res.send(form);
  } 
})

app.get('/trackName', (req, res)=>{
  res.cookie('username', req.query.name);
  res.redirect('/myName');
})

app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
