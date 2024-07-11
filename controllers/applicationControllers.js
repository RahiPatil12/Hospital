const Application = require('../models/applicationModel');

const createApplication = async (req, res) => {
  try {
    const newApplication = new Application(req.body);
    await newApplication.save();
    res.status(201).json(newApplication);
  } catch (error) {
    res.status(400).json({ message: 'Error submitting application', error });
  }
};

const getApplications = async (req, res) => {
  try {
    const applications = await Application.find();
    res.status(200).json(applications);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching applications', error });
  }
};

module.exports = {
  createApplication,
  getApplications,
};
