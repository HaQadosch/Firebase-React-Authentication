export namespace auth {
  function upload(...args: any[]): any;
}
export const cli: {
  Command: Function;
  Option: Function;
  action: Function;
  addImplicitHelpCommand: Function;
  addListener: Function;
  alias: Function;
  allowUnknownOption: Function;
  command: Function;
  commandHelp: Function;
  commands: {
    action: Function;
    addImplicitHelpCommand: Function;
    addListener: Function;
    alias: Function;
    allowUnknownOption: Function;
    command: Function;
    commandHelp: Function;
    commands: any[];
    description: Function;
    emit: Function;
    eventNames: Function;
    executeSubCommand: Function;
    getMaxListeners: Function;
    help: Function;
    helpInformation: Function;
    largestArgLength: Function;
    largestCommandLength: Function;
    largestOptionLength: Function;
    listenerCount: Function;
    listeners: Function;
    missingArgument: Function;
    name: Function;
    normalize: Function;
    off: Function;
    on: Function;
    once: Function;
    option: Function;
    optionFor: Function;
    optionHelp: Function;
    optionMissingArgument: Function;
    options: any[];
    opts: Function;
    outputHelp: Function;
    padWidth: Function;
    parent: any;
    parse: Function;
    parseArgs: Function;
    parseExpectedArgs: Function;
    parseOptions: Function;
    prepareCommands: Function;
    prependListener: Function;
    prependOnceListener: Function;
    rawListeners: Function;
    removeAllListeners: Function;
    removeListener: Function;
    setMaxListeners: Function;
    unknownOption: Function;
    usage: Function;
    variadicArgNotLast: Function;
    version: Function;
  }[];
  description: Function;
  emit: Function;
  eventNames: Function;
  executeSubCommand: Function;
  getMaxListeners: Function;
  help: Function;
  helpInformation: Function;
  largestArgLength: Function;
  largestCommandLength: Function;
  largestOptionLength: Function;
  listenerCount: Function;
  listeners: Function;
  missingArgument: Function;
  name: Function;
  normalize: Function;
  off: Function;
  on: Function;
  once: Function;
  option: Function;
  optionFor: Function;
  optionHelp: Function;
  optionMissingArgument: Function;
  options: {
    attributeName: Function;
    bool: boolean;
    description: string;
    flags: string;
    is: Function;
    long: string;
    name: Function;
    optional: boolean;
    required: boolean;
    short: string;
  }[];
  opts: Function;
  outputHelp: Function;
  padWidth: Function;
  parse: Function;
  parseArgs: Function;
  parseExpectedArgs: Function;
  parseOptions: Function;
  prepareCommands: Function;
  prependListener: Function;
  prependOnceListener: Function;
  rawListeners: Function;
  removeAllListeners: Function;
  removeListener: Function;
  setMaxListeners: Function;
  unknownOption: Function;
  usage: Function;
  variadicArgNotLast: Function;
  version: Function;
};
export namespace database {
  function get(...args: any[]): any;
  function profile(...args: any[]): any;
  function push(...args: any[]): any;
  function remove(...args: any[]): any;
  function set(...args: any[]): any;
  namespace settings {
    function get(...args: any[]): any;
    function set(...args: any[]): any;
  }
  function update(...args: any[]): any;
}
export function deploy(...args: any[]): any;
export namespace emulators {
  function exec(...args: any[]): any;
  function start(...args: any[]): any;
}
export function errorOut(error: any, status: any): void;
export const experimental: {
  functions: {
    shell: Function;
  };
};
export namespace firestore {
  function indexes(...args: any[]): any;
}
export namespace functions {
  namespace config {
    function clone(...args: any[]): any;
    function get(...args: any[]): any;
    function set(...args: any[]): any;
    function unset(...args: any[]): any;
  }
  function log(...args: any[]): any;
  function shell(...args: any[]): any;
}
export function getCommand(name: any): any;
export function help(...args: any[]): any;
export namespace hosting {
  function disable(...args: any[]): any;
}
export function init(...args: any[]): any;
export function list(...args: any[]): any;
export const logger: {
  add: Function;
  addFilter: Function;
  addListener: Function;
  addRewriter: Function;
  clear: Function;
  cli: Function;
  close: Function;
  debug: Function;
  emit: Function;
  emitErrs: boolean;
  error: Function;
  eventNames: Function;
  exceptionHandlers: {};
  exitOnError: boolean;
  extend: Function;
  filters: any[];
  getMaxListeners: Function;
  handleExceptions: Function;
  info: Function;
  level: string;
  levels: {
    debug: number;
    error: number;
    info: number;
    silly: number;
    verbose: number;
    warn: number;
  };
  listenerCount: Function;
  listeners: Function;
  log: Function;
  off: Function;
  on: Function;
  once: Function;
  padLevels: boolean;
  prependListener: Function;
  prependOnceListener: Function;
  profile: Function;
  profilers: {};
  query: Function;
  rawListeners: Function;
  remove: Function;
  removeAllListeners: Function;
  removeListener: Function;
  rewriters: any[];
  setLevels: Function;
  setMaxListeners: Function;
  silly: Function;
  startTimer: Function;
  stream: Function;
  stripColors: boolean;
  transports: {};
  unhandleExceptions: Function;
  verbose: Function;
  warn: Function;
};
export function login(...args: any[]): any;
export namespace login {
  function ci(...args: any[]): any;
}
export function logout(...args: any[]): any;
export function open(...args: any[]): any;
export function serve(...args: any[]): any;
export namespace setup {
  namespace emulators {
    function database(...args: any[]): any;
    function firestore(...args: any[]): any;
  }
  function web(...args: any[]): any;
}
export function target(...args: any[]): any;
export namespace target {
  function apply(...args: any[]): any;
  function clear(...args: any[]): any;
  function remove(...args: any[]): any;
}
export namespace tools {
  function migrate(...args: any[]): any;
}
export function use(...args: any[]): any;
