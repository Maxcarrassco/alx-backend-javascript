#!/usr/bin/node

const process = require('process');

const displayMessage = (msg) => {
  process.stdout.write(msg);
  process.stdout.write('\n');
};

module.exports = displayMessage;
