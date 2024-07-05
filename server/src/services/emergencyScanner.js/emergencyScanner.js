const WebSocket = require('ws');
const { processEmergencyEvent } = require('../models/EmergencyEvent');
const logger = require('../utils/logger');

const EMERGENCY_SCANNER_URL = process.env.EMERGENCY_SCANNER_URL;

function initEmergencyScanner() {
  const ws = new WebSocket(EMERGENCY_SCANNER_URL);

  ws.on('open', () => {
    logger.info('Connected to Emergency Scanner');
  });

  ws.on('message', (data) => {
    try {
      const event = JSON.parse(data.toString());
      processEmergencyEvent(event);
    } catch (error) {
      logger.error('Error processing emergency event', error);
    }
  });

  ws.on('error', (error) => {
    logger.error('Emergency Scanner WebSocket error', error);
  });

  ws.on('close', () => {
    logger.warn('Emergency Scanner WebSocket closed. Reconnecting...');
    setTimeout(initEmergencyScanner, 5000);
  });
}

module.exports = { initEmergencyScanner };const WebSocket = require('ws');
const { processEmergencyEvent } = require('../models/EmergencyEvent');
const logger = require('../utils/logger');

const EMERGENCY_SCANNER_URL = process.env.EMERGENCY_SCANNER_URL;

function initEmergencyScanner() {
  const ws = new WebSocket(EMERGENCY_SCANNER_URL);

  ws.on('open', () => {
    logger.info('Connected to Emergency Scanner');
  });

  ws.on('message', (data) => {
    try {
      const event = JSON.parse(data.toString());
      processEmergencyEvent(event);
    } catch (error) {
      logger.error('Error processing emergency event', error);
    }
  });

  ws.on('error', (error) => {
    logger.error('Emergency Scanner WebSocket error', error);
  });

  ws.on('close', () => {
    logger.warn('Emergency Scanner WebSocket closed. Reconnecting...');
    setTimeout(initEmergencyScanner, 5000);
  });
}

module.exports = { initEmergencyScanner };import WebSocket from 'ws';
import { processEmergencyEvent } from '../models/EmergencyEvent';
import logger from '../utils/logger';

const EMERGENCY_SCANNER_URL = process.env.EMERGENCY_SCANNER_URL;

export function initEmergencyScanner() {
  const ws = new WebSocket(EMERGENCY_SCANNER_URL);

  ws.on('open', () => {
    logger.info('Connected to Emergency Scanner');
  });

  ws.on('message', (data) => {
    try {
      const event = JSON.parse(data.toString());
      processEmergencyEvent(event);
    } catch (error) {
      logger.error('Error processing emergency event', error);
    }
  });

  ws.on('error', (error) => {
    logger.error('Emergency Scanner WebSocket error', error);
  });

  ws.on('close', () => {
    logger.warn('Emergency Scanner WebSocket closed. Reconnecting...');
    setTimeout(initEmergencyScanner, 5000);
  });
}
