const CryptoService = require('../services/cryptoService');

class CryptoController {
  static async getStats(req, res) {
    try {
      const { coin } = req.query;

      if (!coin || !['bitcoin', 'matic-network', 'ethereum'].includes(coin)) {
        return res.status(400).json({ error: 'Invalid coin specified' });
      }

      const stats = await CryptoService.getLatestStats(coin);
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getDeviation(req, res) {
    try {
      const { coin } = req.query;

      if (!coin || !['bitcoin', 'matic-network', 'ethereum'].includes(coin)) {
        return res.status(400).json({ error: 'Invalid coin specified' });
      }

      const deviation = await CryptoService.getPriceDeviation(coin);
      res.json({ deviation });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = CryptoController;