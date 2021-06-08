if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function (require) {
  return {
    loggers:{
        level: 'info',
        appenders: {
	   app:{
            type: 'console',
            name: 'console',
            appendStrings: true,
            layout: {
              type: 'pattern',
              pattern: '%d{ABSOLUTE} %-6.6relative %-4.4level %logger - %message%n'
            }
          },
	  out: {
            type: "console"
          }
	},
      categories: {
        default: { appenders: [ 'out', 'app' ], level: 'info' }
      },

    }
  };
});
