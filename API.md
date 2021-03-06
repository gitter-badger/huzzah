# LoggerSettings

[settings.js:10-14](https://github.com/btd/huzzah/blob/447cd09f4e96c13224aa0832345fe7d80cd19a23/settings.js#L10-L14 "Source code on GitHub")

**Extends NullHandler**

Holds settings of one logger.
It is max accepted log level and handlers

## addHandler

[settings.js:41-44](https://github.com/btd/huzzah/blob/447cd09f4e96c13224aa0832345fe7d80cd19a23/settings.js#L41-L44 "Source code on GitHub")

Adds handler to logger

**Parameters**

-   `handler` **NullHandler** instance

Returns **this** 

## setLevel

[settings.js:29-29](https://github.com/btd/huzzah/blob/447cd09f4e96c13224aa0832345fe7d80cd19a23/settings.js#L29-L29 "Source code on GitHub")

Set max accepted log level. Default value ALL.
It means if you set log level for this logger to INFO, than
all lower leveled record will be rejected (e.g DEBUG and TRACE).
To completely disable all logs set to OFF

**Parameters**

-   `level` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **this** 

# BaseHandler

[handlers.js:55-59](https://github.com/btd/huzzah/blob/447cd09f4e96c13224aa0832345fe7d80cd19a23/handlers.js#L55-L59 "Source code on GitHub")

Used as base class for most handlers
All extensions should implement method `_handle(record)`

## setFormat

[handlers.js:92-105](https://github.com/btd/huzzah/blob/447cd09f4e96c13224aa0832345fe7d80cd19a23/handlers.js#L92-L105 "Source code on GitHub")

Set log record format for this handler.
Default record format is `[%date] %-5level %logger - %message%n%error`

Possible parameters:

-   `%d{FORMAT}` or `%date{FORMAT}` - how to format record timestamp. `{FORMAT}` is optional stftime string, by default it is `%Y/%m/%d %H:%M:%S,%L`
-   `%pid` - output process.pid
-   `%level` or `%le` or `%p` - output record level name like ERROR or WARN
-   `%logger` or `%lo` or `%c` - output logger name
-   `%%` - output %
-   `%n` - output EOL
-   `%err` or `%error` - output stack trace of passed error
-   `%x` or `%x{field}` - output JSON.stringified value of context field

Also available text decorators (now only colors):

-   `%highlight(text)` - will decorate passed text with record level decorator
-   `%cyan(text)`
-   other colors
-   `%cyan.bold(text)`
-   other bold colors

Example: `%date000 %highlight(%5level) %cyan(%logger) - %message%n%error`

Also it is possible to set it to function. One of possible examples jsonFormat (`require('huzzah/json-format')` ).
It can accept the same serializers bunyan can accept and you will have json output at the end.

**Parameters**

-   `format` **([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)\|[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function))** It is either formatted string as described, or function returning string and accepts just one argument log record

Returns **this** 

# ConsoleHandler

[handlers.js:112-114](https://github.com/btd/huzzah/blob/447cd09f4e96c13224aa0832345fe7d80cd19a23/handlers.js#L112-L114 "Source code on GitHub")

Just simple console handler

# Logger

[logger.js:15-19](https://github.com/btd/huzzah/blob/447cd09f4e96c13224aa0832345fe7d80cd19a23/logger.js#L15-L19 "Source code on GitHub")

Produce log records. It could not be create manuall,
always use LoggerFactory instance to create loggers.

**Parameters**

-   `factory` **LoggerFactory** factory, holding this logger
-   `onLogCallback`  
-   `name` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** name of this logger
-   `context` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Set of keys, which will be auto-added to each record

## debug

[logger.js:101-101](https://github.com/btd/huzzah/blob/447cd09f4e96c13224aa0832345fe7d80cd19a23/logger.js#L101-L101 "Source code on GitHub")

Create log record with level DEBUG. If first argument is string, it is used as message format, like console.log do.
Supported modifiers %s, %d, %j, %%. If you want to output error, it must be one among all arguments and be last.

**Parameters**

-   `args` **...Any** Any arguments. Error must be one and last.

**Examples**

```javascript
logger.trace('User entered %s', userInput);

logger.error('Error happen while sending email', err);
```

## error

[logger.js:140-140](https://github.com/btd/huzzah/blob/447cd09f4e96c13224aa0832345fe7d80cd19a23/logger.js#L140-L140 "Source code on GitHub")

Create log record with level ERROR. If first argument is string, it is used as message format, like console.log do.
Supported modifiers %s, %d, %j, %%. If you want to output error, it must be one among all arguments and be last.

**Parameters**

-   `args` **...Any** Any arguments. Error must be one and last.

**Examples**

```javascript
logger.trace('User entered %s', userInput);

logger.error('Error happen while sending email', err);
```

## info

[logger.js:114-114](https://github.com/btd/huzzah/blob/447cd09f4e96c13224aa0832345fe7d80cd19a23/logger.js#L114-L114 "Source code on GitHub")

Create log record with level INFO. If first argument is string, it is used as message format, like console.log do.
Supported modifiers %s, %d, %j, %%. If you want to output error, it must be one among all arguments and be last.

**Parameters**

-   `args` **...Any** Any arguments. Error must be one and last.

**Examples**

```javascript
logger.trace('User entered %s', userInput);

logger.error('Error happen while sending email', err);
```

## trace

[logger.js:88-88](https://github.com/btd/huzzah/blob/447cd09f4e96c13224aa0832345fe7d80cd19a23/logger.js#L88-L88 "Source code on GitHub")

Create log record with level TRACE. If first argument is string, it is used as message format, like console.log do.
Supported modifiers %s, %d, %j, %%. If you want to output error, it must be one among all arguments and be last.

**Parameters**

-   `args` **...Any** Any arguments. Error must be one and last.

**Examples**

```javascript
logger.trace('User entered %s', userInput);

logger.error('Error happen while sending email', err);
```

## warn

[logger.js:127-127](https://github.com/btd/huzzah/blob/447cd09f4e96c13224aa0832345fe7d80cd19a23/logger.js#L127-L127 "Source code on GitHub")

Create log record with level WARN. If first argument is string, it is used as message format, like console.log do.
Supported modifiers %s, %d, %j, %%. If you want to output error, it must be one among all arguments and be last.

**Parameters**

-   `args` **...Any** Any arguments. Error must be one and last.

**Examples**

```javascript
logger.trace('User entered %s', userInput);

logger.error('Error happen while sending email', err);
```

## with

[logger.js:56-63](https://github.com/btd/huzzah/blob/447cd09f4e96c13224aa0832345fe7d80cd19a23/logger.js#L56-L63 "Source code on GitHub")

Creates new Logger with the same name, factory but with given context.
Every property and value of context will be added to log record. This
can be usefull for json logging

**Parameters**

-   `context` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

Returns **Logger** new logger with given context

# LoggerFactory

[factory.js:24-27](https://github.com/btd/huzzah/blob/447cd09f4e96c13224aa0832345fe7d80cd19a23/factory.js#L24-L27 "Source code on GitHub")

Handler logger and its settings manipulation

## get

[factory.js:36-43](https://github.com/btd/huzzah/blob/447cd09f4e96c13224aa0832345fe7d80cd19a23/factory.js#L36-L43 "Source code on GitHub")

Returns logger with given name

**Parameters**

-   `name` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Name of logger

Returns **Logger** 

## settings

[factory.js:64-67](https://github.com/btd/huzzah/blob/447cd09f4e96c13224aa0832345fe7d80cd19a23/factory.js#L64-L67 "Source code on GitHub")

Returns settings for logger with given name

**Parameters**

-   `name` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** logger name

Returns **LoggerSettings** 

# LEVELS

[levels.js:6-14](https://github.com/btd/huzzah/blob/447cd09f4e96c13224aa0832345fe7d80cd19a23/levels.js#L6-L14 "Source code on GitHub")

Log levels. Log levels have a priority.
ALL &lt; TRACE &lt; DEBUG &lt; INFO &lt; WARN &lt; ERROR &lt; OFF

# NullHandler

[handlers.js:11-13](https://github.com/btd/huzzah/blob/447cd09f4e96c13224aa0832345fe7d80cd19a23/handlers.js#L11-L13 "Source code on GitHub")

Basic handler. Does not actually handle anything.
Usefull for extensions and stubs. All implementors must implement \_handle(record)
method. record instance shared among all handlers, do not modify it.

## setLevel

[handlers.js:22-31](https://github.com/btd/huzzah/blob/447cd09f4e96c13224aa0832345fe7d80cd19a23/handlers.js#L22-L31 "Source code on GitHub")

Set max accepted log level for this handler

**Parameters**

-   `level` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

Returns **this** 

# StreamHandler

[handlers.js:131-135](https://github.com/btd/huzzah/blob/447cd09f4e96c13224aa0832345fe7d80cd19a23/handlers.js#L131-L135 "Source code on GitHub")

Allow to pass records to stream

## setShouldFormat

[handlers.js:148-151](https://github.com/btd/huzzah/blob/447cd09f4e96c13224aa0832345fe7d80cd19a23/handlers.js#L148-L151 "Source code on GitHub")

Should we format record before passing to stream? By default it is true

**Parameters**

-   `value` **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

Returns **this** 

## setStream

[handlers.js:158-161](https://github.com/btd/huzzah/blob/447cd09f4e96c13224aa0832345fe7d80cd19a23/handlers.js#L158-L161 "Source code on GitHub")

Stream to pass records

**Parameters**

-   `stream` **WritableStream** 

Returns **this** 
