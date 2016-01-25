var LEVELS = require('./levels');

var SEP = '.';
var ROOT = 'root';

function parentNames(name) {
  var names = [];
  var parts = name.split(SEP);
  while(parts.length) {
    names.push(parts.join(SEP));
    parts.pop();
  }
  names.push(ROOT);
  return names;
}

/**
 * Produce log records. It could not be create manuall,
 * always use LoggerFactory instance to create loggers.
 *
 * @param {LoggerFactory} factory factory, holding this logger
 * @param {string} name    name of this logger
 * @class
 */
function Logger(factory, name) {
  this._names = parentNames(name);
  this._factory = factory;
}

Logger.prototype = {
  /**
   * Create log record with given level and arguments.
   * Usually not used.
   *
   * @param  {number} level Log level
   * @param  {Array} args   Arguments
   * @private
   */
  log: function(level, args) {
    this._factory.log(this._names, level, args);
  }
}

var SLICE = Array.prototype.slice;

function makeLogAtLevelMethod(level) {
  return function() {
    this.log(level, SLICE.call(arguments));
  }
}

/**
 * Create log record with level TRACE. If first argument is string, it is used as message format, like console.log do.
 * Supported modifiers %s, %d, %j, %%. If you want to output error, it must be one among all arguments and be last.
 *
 * @param {...*} args Any arguments. Error must be one and last.
 * @example
 *
 * logger.trace('User entered %s', userInput);
 *
 * logger.error('Error happen while sending email', err);
 */
Logger.prototype.trace = makeLogAtLevelMethod(LEVELS.TRACE);

/**
 * Create log record with level DEBUG. If first argument is string, it is used as message format, like console.log do.
 * Supported modifiers %s, %d, %j, %%. If you want to output error, it must be one among all arguments and be last.
 *
 * @param {...*} args Any arguments. Error must be one and last.
 * @example
 *
 * logger.trace('User entered %s', userInput);
 *
 * logger.error('Error happen while sending email', err);
 */
Logger.prototype.debug = makeLogAtLevelMethod(LEVELS.DEBUG);

/**
 * Create log record with level INFO. If first argument is string, it is used as message format, like console.log do.
 * Supported modifiers %s, %d, %j, %%. If you want to output error, it must be one among all arguments and be last.
 *
 * @param {...*} args Any arguments. Error must be one and last.
 * @example
 *
 * logger.trace('User entered %s', userInput);
 *
 * logger.error('Error happen while sending email', err);
 */
Logger.prototype.info = makeLogAtLevelMethod(LEVELS.INFO);

/**
 * Create log record with level WARN. If first argument is string, it is used as message format, like console.log do.
 * Supported modifiers %s, %d, %j, %%. If you want to output error, it must be one among all arguments and be last.
 *
 * @param {...*} args Any arguments. Error must be one and last.
 * @example
 *
 * logger.trace('User entered %s', userInput);
 *
 * logger.error('Error happen while sending email', err);
 */
Logger.prototype.warn = makeLogAtLevelMethod(LEVELS.WARN);

/**
 * Create log record with level ERROR. If first argument is string, it is used as message format, like console.log do.
 * Supported modifiers %s, %d, %j, %%. If you want to output error, it must be one among all arguments and be last.
 *
 * @param {...*} args Any arguments. Error must be one and last.
 * @example
 *
 * logger.trace('User entered %s', userInput);
 *
 * logger.error('Error happen while sending email', err);
 */
Logger.prototype.error = makeLogAtLevelMethod(LEVELS.ERROR);


Logger.ROOT = ROOT;

module.exports = Logger;
