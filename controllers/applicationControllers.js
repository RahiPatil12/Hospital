import Application from '../models/applicationModel.js'; // Correct path

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
    const applications = await Application.find(); // Use the model's method to find documents
    res.status(200).json(applications);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching applications', error });
  }
};

export {
  createApplication,
  getApplications,
};
