const mongoose = require('mongoose');

const MissingPersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  lastLocation: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  reportedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  dateReported: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('MissingPerson', MissingPersonSchema);