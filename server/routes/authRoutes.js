const express = require('express');
const router = express.Router();
const { registerUser, authUser } = require('../controllers/authController');

// Register a new user
router.post('/register', registerUser);

// Authenticate user & get token
router.post('/login', authUser);

module.exports = router;
