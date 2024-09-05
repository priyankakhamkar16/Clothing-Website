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
  origin: [
    'https://clothing-website-3nju.vercel.app', // Backend URL
    'https://clothing-website-32qm.vercel.app'  // Frontend URL
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // If you need to send cookies with requests
};

// Init Middleware
app.use(express.json());
app.use(cors(corsOptions)); // Apply CORS configuration

// Define Routes
app.use('/api/auth', require('./routes/authRoutes'));  // Auth routes
app.use('/api/contact', require('./routes/contactRoutes'));  // Contact routes

// Root URL response
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
