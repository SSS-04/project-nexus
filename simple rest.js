const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const users = []; // In-memory data store for users

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Endpoint for user signup
app.post('/signup', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('Invalid data');
  }

  // Check if the username already exists
  if (users.some(user => user.username === username)) {
    return res.status(409).send('Username already exists');
  }

  // Create a new user
  const newUser = { username, password };
  users.push(newUser);

  res.status(201).send('User registered successfully');
});

// Endpoint for user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('Invalid data');
  }

  // Check if the username and password match
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(401).send('Invalid username or password');
  }

  res.status(200).send('Login successful');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
