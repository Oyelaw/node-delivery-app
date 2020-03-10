/*
 * Primary file for API
 *
 */

// Dependencies
var server = require('./lib/server');
var cli = require('./lib/cli');

// Decleare the app
var app = {};

// Init function
app.init = function(callback){
  // start server
  server.init();

  // Start CLI
  setTimeout(function(){
    cli.init();
    callback();
  }, 50);
};

// Self invoking only if required directly
if(require.main === module){
  app.init(function(){});
};

// Export the app
module.exports = app;
