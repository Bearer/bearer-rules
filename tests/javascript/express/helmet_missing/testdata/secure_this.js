const express = require('express');
const helmet = require('helmet');

class MyApp {
  constructor() {
    this.app = express();

    this.setupMiddleware();
  }

  setupMiddleware() {
    this.app.use(helmet());
  }
}