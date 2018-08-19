module.exports = {
  server: {
    port: 8080,
    host: '10.0.0.8',
    logPath: "app/log/info.txt"
  },
  pump: {
    timeout:          3600000,
    wateringDuration: 1200000,
    pauseDuration:    11000000,
    maxTime:          11000000
  },
  feeder: {
    timesPerDay: 2
  }
};
