require('dotenv').config();
const express = require('express');
const cron = require('node-cron');
const connectDB = require('./src/config/database');
const cryptoRoutes = require('./src/routes/cryptoRoutes');
const CryptoService = require('./src/services/cryptoService');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());
app.use('/', cryptoRoutes);

cron.schedule('0 */2 * * *', () => {
  console.log('Running scheduled crypto price update');
  CryptoService.fetchAndStorePrices();
});

CryptoService.fetchAndStorePrices();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});