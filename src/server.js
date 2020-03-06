const express = require('express');
const config = require('./config/index');

const app = express();

exports.start = () => {
  app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`);
  });
};
