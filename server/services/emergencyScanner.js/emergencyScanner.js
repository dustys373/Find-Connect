// server/services/emergencyScanner.js
const axios = require('axios');
const io = require('../config/socket').getIo();
const logger = require('../utils/logger');

class EmergencyScanner {
  constructor() {
    this.scannerEndpoints = [
      process.env.POLICE_SCANNER_API,
      process.env.FIRE_SCANNER_API,
      process.env.AMBULANCE_SCANNER_API,
    ];
  }

  async startScanning() {
    setInterval(async () => {
      try {
        const emergencies = await this.fetchEmergencies();
        this.broadcastEmergencies(emergencies);
      } catch (error) {
        logger.error('Error scanning emergencies:', error);
      }
    }, 60000); // Scan every minute
  }

  async fetchEmergencies() {
    const emergencyPromises = this.scannerEndpoints.map(endpoint =>
      axios.get(endpoint).then(response => response.data)
    );
    return Promise.all(emergencyPromises);
  }

  broadcastEmergencies(emergencies) {
    io.emit('new-emergencies', emergencies);
  }
}

module.exports = new EmergencyScanner();
