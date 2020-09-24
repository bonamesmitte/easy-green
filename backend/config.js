import dotenv from 'dotenv';

port = process.env.PORT || 5000;

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/easygreen',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
};
