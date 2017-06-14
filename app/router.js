const logger    = require('../util/log');
const sayTools = require('./sayTools');

const mainRouter = (argAry) => {
  let args = argAry ? argAry : process.argv.slice(2);

  if(!args.length) {
    return logger.error(`No arguments provided.`);
  }

  args = args[0].indexOf(' ') > 0 ? args[0].split(' ') : args;

  switch (args[0]) {
    case 'draw':
      sayTools.drawIt(args);
      break;
    case 'write':
      sayTools.writeIt(args);
      break;
    default:
      logger.error(`The action ${args[0]} provided is not in our action list`);
      throw(new Error('The action provided is not in our action list'));
      break;
  }
};

module.exports = {mainRouter};
