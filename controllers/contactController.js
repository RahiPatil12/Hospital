const Contact = require('../models/Contact');

const createContact = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  

  try {
    const newContact = new Contact({
      name,
      email,
      phone,
      subject,
      message
    });

    await newContact.save();
    res.status(201).json({ message: 'Contact submitted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { createContact};
