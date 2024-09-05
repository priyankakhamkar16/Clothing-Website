const express = require('express');
const router = express.Router();

// Contact form submission
router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  // Logic to handle contact form submission
  console.log('Contact form submitted:', { name, email, message });
  res.status(200).json({ message: 'Message received successfully' });
});

module.exports = router;
