// server/utils/networkAnalyzer.js
const { spawn } = require('child_process');
const logger = require('./logger');

class NetworkAnalyzer {
  constructor() {
    this.wiresharkProcess = null;
  }

  startCapture(interface = 'eth0', filter = '') {
    this.wiresharkProcess = spawn('tshark', ['-i', interface, '-f', filter]);

    this.wiresharkProcess.stdout.on('data', (data) => {
      logger.info(`Wireshark output: ${data}`);
      // Process and analyze the captured data
    });

    this.wiresharkProcess.stderr.on('data', (data) => {
      logger.error(`Wireshark error: ${data}`);
    });

    this.wiresharkProcess.on('close', (code) => {
      logger.info(`Wireshark process exited with code ${code}`);
    });
  }

  stopCapture() {
    if (this.wiresharkProcess) {
      this.wiresharkProcess.kill();
      this.wiresharkProcess = null;
    }
  }
}

module.exports = new NetworkAnalyzer();