// In your backend/server.js
const express = require('express');
const router = express.Router();
const User = require('./models/User');

// Test Create
router.post('/test-create', async (req, res) => {
  try {
    const newUser = new User({
      fullName: "Test User",
      email: "test@example.com",
      password: "test123"
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Test Read
router.get('/test-read', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});