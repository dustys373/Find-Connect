// server/config/db.js
const mongoose = require('mongoose');
const mysql = require('mysql2/promise');
const logger = require('../utils/logger');

const setupDatabase = async () => {
  try {
    // MongoDB connection
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('MongoDB connected');

    // MySQL connection
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });
    logger.info('MySQL connected');

    return { mongoose, mysqlConnection: connection };
  } catch (error) {
    logger.error('Database connection error:', error);
    process.exit(1);
  }
};

module.exports = { setupDatabase };