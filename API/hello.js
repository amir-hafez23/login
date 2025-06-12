// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// تست ورود
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log('Login Attempt:', username, password);
  // فرضی: هر چی باشه لاگین موفقه!
  res.json({ message: 'Login successful!' });
});

// تست ثبت‌نام
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  console.log('Signup Attempt:', name, email, password);
  // فرضی: ثبت‌نام موفقه!
  res.json({ message: 'Signup successful!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
