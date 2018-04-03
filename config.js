const fs = require('fs');
const path = require('path');

let file = path.join(__dirname, 'config' + process.env.NODE_ENV);

if (!fs.existsSync(file)) {
  file = path.join(__dirname, 'config/default.json');
}

const data = JSON.parse(fs.readFileSync(file, 'utf-8'));

module.exports = class Config {

  static get(name, defaultValue = null) {

    if (!this.has(name)) {
      return defaultValue;
    }

    return data[name];
  }

  static has(name) {
    return data.hasOwnProperty(name);
  }
}