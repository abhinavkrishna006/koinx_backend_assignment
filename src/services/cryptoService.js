const axios = require('axios');
const CryptoPrice = require('../models/CryptoPriceModel');
const calculateStandardDeviation = require('../utils/calculateDeviation');

const COINS = ['bitcoin', 'matic-network', 'ethereum'];

class CryptoService {
  static async fetchAndStorePrices() {
    try {
      const response = await axios.get(
        `${process.env.COINGECKO_API_BASE_URL}/simple/price`,
        {
          params: {
            ids: COINS.join(','),
            vs_currencies: 'usd',
            include_market_cap: true,
            include_24hr_change: true
          }
        }
      );

      const promises = COINS.map(async (coinId) => {
        const data = response.data[coinId];
        return CryptoPrice.create({
          coinId,
          priceUSD: data.usd,
          marketCapUSD: data.usd_market_cap,
          change24h: data.usd_24h_change
        });
      });

      await Promise.all(promises);
      console.log('Crypto prices updated successfully');
    } catch (error) {
      console.error('Error updating crypto prices:', error);
    }
  }

  static async getLatestStats(coinId) {
    const latestData = await CryptoPrice.findOne(
      { coinId },
      { priceUSD: 1, marketCapUSD: 1, change24h: 1 },
      { sort: { timestamp: -1 } }
    );

    if (!latestData) {
      throw new Error('No data found for the specified coin');
    }

    return {
      price: latestData.priceUSD,
      marketCap: latestData.marketCapUSD,
      '24hChange': latestData.change24h
    };
  }

  static async getPriceDeviation(coinId) {
    const prices = await CryptoPrice.find(
      { coinId },
      { priceUSD: 1 },
      { sort: { timestamp: -1 }, limit: 100 }
    );
  
    if (prices.length === 0) {
      throw new Error('No data found for the specified coin');
    }
  
    const priceValues = prices.map(p => p.priceUSD);
  
    console.log('Fetched Prices:', prices);
    console.log('Price Values:', priceValues);
  
    return calculateStandardDeviation(priceValues);
  }
  
}

module.exports = CryptoService;