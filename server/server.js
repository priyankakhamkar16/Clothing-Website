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
  origin: 'https://clothing-website-32qm.vercel.app', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Include credentials if needed
};

// Init Middleware
app.use(express.json());

// Apply CORS configuration to all routes
app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/contact', require('./routes/contactRoutes')); // Include contact routes

// Root endpoint for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
