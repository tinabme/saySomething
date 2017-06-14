const util = require('util');
const logger   = require('../util/log');

const sendRequest = (args) => {
  if (!util.isArray(args)) {
    logger.error(`invalid arguments, array expected`);
    return false;
  } else if (args.length < 3) {
    logger.error(`3 arguments expected (print_mode, say_type, say_name) but less received`);
    return false;
  } else {
    return true;
  }
};

module.exports = {sendRequest};
