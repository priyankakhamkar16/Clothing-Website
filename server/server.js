const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

// Initialize express
const app = express();

// Connect Database
connectDB();

// Configure CORS to allow requests from your Vercel frontend
const corsOptions = {
  origin: 'https://clothing-website-gk7r.vercel.app', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

// Init Middleware
app.use(express.json());
app.use(cors(corsOptions)); // Apply CORS configuration

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/contact', require('./routes/contactRoutes')); // Include contact routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
