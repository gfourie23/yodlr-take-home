// Assuming you have Express.js router setup
const express = require('express');
const router = express.Router();

// Import your user model or database connection
const User = require('../models/User');

// POST /register endpoint
router.post('/register', async (req, res) => {
  try {
    const { email, firstName, lastName } = req.body;

    // Validate request data
    if (!email || !firstName || !lastName) {
      return res.status(400).json({ error: 'Please provide email, firstName, and lastName' });
    }

    // Check if email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already registered' });
    }

    // Create a new user record
    const newUser = new User({
      email,
      firstName,
      lastName
    });
    await newUser.save();

    // Return the newly created user data
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
