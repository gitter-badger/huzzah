var LoggerFactory = require('./factory');
var ConsoleHandler = require('./handlers').ConsoleHandler;

var jsonFormat = require('./json-format');

var f = new LoggerFactory();

var logger = f.get('a.b');

f.settings('a.b')
  .addHandler(new ConsoleHandler().setFormat(jsonFormat({
    err: function(err) {
      return { name: err.name, message: err.message, stack: err.stack };
    }
  })));

f.settings('a')
  .setLevel('WARN')

  .addHandler(new ConsoleHandler().setFormat('[%date000] %highlight(%-5level) %cyan.bold(%logger) - %% %message%n%error'))

logger.trace('Boom');
logger.error(new Error('boom'));
logger.warn('Everything seems ok');

logger.with({ a: 10 }).warn(new Error('boom'));
