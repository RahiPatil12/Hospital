const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel'); 

const router = express.Router();
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret'; 

// Sign in route
router.post('/signin', async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  try {
    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create a token
    const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    console.error('Error signing in user:', err);
    res.status(500).json({ message: 'Error signing in user' });
  }
});

module.exports = router;
