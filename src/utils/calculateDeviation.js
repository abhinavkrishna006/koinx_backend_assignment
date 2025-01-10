function calculateStandardDeviation(values) {
  const n = values.length;
  if (n < 2) return 0; // At least 2 values needed for meaningful std dev

  const mean = values.reduce((sum, value) => sum + value, 0) / n;
  const squaredDiffs = values.map(value => Math.pow(value - mean, 2));
  const variance = squaredDiffs.reduce((sum, value) => sum + value, 0) / n;

  return Math.sqrt(variance).toFixed(2);
}

module.exports = calculateStandardDeviation;