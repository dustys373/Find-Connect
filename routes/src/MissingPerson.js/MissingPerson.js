const mongoose = require('mongoose');

const missingPersonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  lastSeen: { type: Date, required: true },
  description: { type: String },
  reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['missing', 'found'], default: 'missing' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('MissingPerson', missingPersonSchema);
