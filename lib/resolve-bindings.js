var os = require('os');

module.exports = function() {
  var platform = os.platform();
  // windows only!
  return require('./hci-socket/bindings');
};
