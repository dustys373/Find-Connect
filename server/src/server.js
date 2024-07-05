const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { connectDB } = require('./utils/database');
const { setupSocket } = require('./services/socket');
const authRoutes = require('./routes/auth');
const missingPersonsRoutes = require('./routes/missingPersons');
const emergencyEventsRoutes = require('./routes/emergencyEvents');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('combined'));

app.use('/api/auth', authRoutes);
app.use('/api/missing-persons', missingPersonsRoutes);
app.use('/api/emergency-events', emergencyEventsRoutes);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

connectDB();
setupSocket(server);
