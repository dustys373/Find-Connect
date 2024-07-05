const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const MissingPerson = require('../models/MissingPerson');

// @route   POST api/missing-persons
// @desc    Report a missing person
// @access  Private
router.post('/', auth, async (req, res) => {
  try {
    const newMissingPerson = new MissingPerson({
      ...req.body,
      reportedBy: req.user.id
    });

    const missingPerson = await newMissingPerson.save();
    res.json(missingPerson);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/missing-persons
// @desc    Get all missing persons
// @access  Public
router.get('/', async (req, res) => {
  try {
    const missingPersons = await MissingPerson.find().sort({ dateReported: -1 });
    res.json(missingPersons);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;