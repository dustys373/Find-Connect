const mongoose = require('mongoose');

const emergencyEventSchema = new mongoose.Schema({
  type: { type: String, required: true },
  location: {
    type: { type: String, default: 'Point' },
    coordinates: { type: [Number], required: true }
  },
  description: { type: String },
  reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['active', 'resolved'], default: 'active' },
  createdAt: { type: Date, default: Date.now }
});

emergencyEventSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('EmergencyEvent', emergencyEventSchema);
