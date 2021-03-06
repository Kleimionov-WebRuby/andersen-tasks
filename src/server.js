const express = require('express');
const config = require('./config/index');

const app = express();

exports.start = () => {
  return new Promise((resolve, reject) => {
    app.listen(config.port, () => {
      console.log(`Server listening on port ${config.port}`);
    });

    resolve();
  });
};
