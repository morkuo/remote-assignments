const express = require('express');
const app = express();
const sqlQueryHandler = require('./database');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const { tryCatchHandler, validateUserDataFormat } = require('./utils/helper');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// set locals to avoid EJS error
app.use((req, res, next) => {
  res.locals.error = { signup: [], signin: [] };
  res.locals.message = '';
  next();
});

//route handler
app.get('/', (req, res) => {
  res.render('home');
});

app.post(
  '/signup',
  tryCatchHandler(async (req, res) => {
    const { email, password, comfirmPassword } = req.body;

    const checkEmailSql = `SELECT email FROM user WHERE email = "${email}";`;
    const emailArray = await sqlQueryHandler(checkEmailSql);
    const isMatch = password === comfirmPassword;
    const isValid = validateUserDataFormat(req, res);

    if (emailArray.length !== 0) res.locals.error.signup.push('Email has already been used.');
    if (!isMatch) res.locals.error.signup.push('Passwords should match.');
    if (emailArray.length !== 0 || !isValid || !isMatch) return res.render('home');

    const hashedPassword = bcrypt.hashSync(password, 10);

    const addUserSql = `INSERT INTO user (email, password) VALUES ("${email}", "${hashedPassword}");`;
    const result = await sqlQueryHandler(addUserSql);

    if (!result.insertId) {
      res.locals.message = 'Sorry, something went wrong.';
      return res.render('home');
    }

    res.cookie('username', email.split('@')[0]);
    res.redirect('member');
  })
);

app.post(
  '/signin',
  tryCatchHandler(async (req, res) => {
    const { email, password } = req.body;

    const isValid = validateUserDataFormat(req, res);
    if (!isValid) return res.render('home');

    const sql = `SELECT * FROM user WHERE email = "${email}";`;
    const result = await sqlQueryHandler(sql);
    if (result.length === 0) {
      res.locals.error.signin.push('Invalid email or password');
      return res.render('home');
    }

    const isCorrectPassword = bcrypt.compareSync(password, result[0].password);
    if (!isCorrectPassword) {
      res.locals.error.signin.push('Invalid email or password');
      return res.render('home');
    }

    res.cookie('username', email.split('@')[0]);
    res.redirect('/member');
  })
);

app.get('/member', (req, res) => {
  const { username } = req.cookies;
  if (!username) {
    res.locals.message = 'You should go sign in first.';
  } else {
    res.locals.message = `Welcome, ${username}!`;
  }
  res.render('member');
});

app.get('/signout', (req, res) => {
  res.clearCookie('username');
  res.redirect('/');
});

//Global error handler
app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send('Sorry, something went wrong');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
