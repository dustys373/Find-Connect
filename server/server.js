// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const { setupSocket } = require('./config/socket');
const { setupDatabase } = require('./config/db');
const logger = require('./utils/logger');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

setupSocket(io);
setupDatabase();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/missing-persons', require('./routes/missingPersons'));
app.use('/api/emergencies', require('./routes/emergencies'));

// Error handling middleware
app.use(require('./middleware/errorHandler'));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => logger.info(`Server running on port ${PORT}`));