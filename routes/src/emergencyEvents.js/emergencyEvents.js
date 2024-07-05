const express = require('express');
const router = express.Router();
const emergencyEventsController = require('../controllers/emergencyEventsController');
const authMiddleware = require('../middleware/auth');

router.get('/', emergencyEventsController.getAllEmergencyEvents);
router.post('/', authMiddleware, emergencyEventsController.createEmergencyEvent);
router.get('/:id', emergencyEventsController.getEmergencyEvent);
router.put('/:id', authMiddleware, emergencyEventsController.updateEmergencyEvent);
router.delete('/:id', authMiddleware, emergencyEventsController.deleteEmergencyEvent);

module.exports = router;
