const express = require('express');
const router = express.Router();

// Login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Your login logic here
  if (username === 'admin' && password === 'password') {
    return res.status(200).json({ token: 'fake-jwt-token' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Register route
router.post('/register', (req, res) => {
  const { name, email, username, password } = req.body;
  // Registration logic here
  res.status(201).json({ message: 'User registered successfully' });
});

module.exports = router;
