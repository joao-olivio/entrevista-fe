const path = require('path');

const mocksPath = path.join(__dirname, '..', 'fractal', 'components', 'mocks');

function replacer(key, value) {
  if (typeof value !== 'string' || value.indexOf('@') === -1) {
    return value;
  }

  return JSON.parse(getMock(value.replace('@', '')));
}

function getMock(target) {
  return JSON.stringify(require(path.join(mocksPath, target)), replacer) // eslint-disable-line
}

exports.getMock = getMock;
