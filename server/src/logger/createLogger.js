/**
 * A very simple logger based on `console` object
 * that follows standard NPM Log Levels.
 *
 * @see https://github.com/winstonjs/winston#logging-levels
 * @author Geraldo B. Landre
 */
class Logger {
  constructor (options) {
    const { level = 'debug' } = options || {}
    this.level = Object.keys(LogLevel).includes(level) ? level : 'error'
  }

  // usual log methods (error, warn, info, etc...)
  error = (message, meta) => this.log('error', message, meta)

  warn = (message, meta) => this.log('warn', message, meta)

  info = (message, meta) => this.log('info', message, meta)

  verbose = (message, meta) => this.log('verbose', message, meta)

  debug = (message, meta) => this.log('debug', message, meta)

  silly = (message, meta) => this.log('silly', message, meta)

  log = (level, message, meta) => {
    // if the level defined is not high enough, simply ignores
    if (LogLevel[this.level] < LogLevel[level]) {
      return undefined
    }

    // if default `console` object contains method (e.g., console.log, console.error)
    // except by 'debug' since it's filtered by default by Google Chrome
    if (level !== 'debug' && Object.keys(ConsoleLevel).includes(level)) {
      // uses default console method
      return consoleLog(level, `[${level}] ${message + ''}`, meta)
    }

    // otherwise, use traditional console.log
    return consoleLog('log', `[${level}] ${message + ''}`, meta)
  }
}

const LogLevel = {
  error: 0,
  warn: 1,
  info: 2,
  verbose: 3,
  debug: 4,
  silly: 5
}

const ConsoleLevel = {
  error: 0,
  warn: 1,
  info: 2,
  debug: 4
}

const consoleLog = (level, message, meta) => {
  if (meta) {
    return console[level](message, meta) // eslint-disable-line no-console
  }
  return console[level](message) // eslint-disable-line no-console
}

const createLogger = options => new Logger(options)

export default createLogger
