const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // Your frontend URL
  credentials: true
}));

app.post('/account/login', (req, res) => {
  // Your login logic
  res.send('Login successful');
});

app.listen(7236, () => {
  console.log('Server is running on port 7236');
});
