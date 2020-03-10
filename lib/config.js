// Container for all the environment
var environments = {};

// Staging {defualt} environment
environments.staging = {
  'httpPort': 3000,
  'httpsPort': 3001,
  'envName': 'staging',
  'hashingSecret': 'thisIsASecret',
  'twilio' : {
    'accountSid' : 'ACb32d411ad7fe886aac54c665d25e5c5d',
    'authToken' : '9455e3eb3109edc12e3d8c92768f7a67',
    'fromPhone' : '+15005550006'
  },
  'templateGlobals': {
    'appName': 'Swift Delivery App',
    'companyName': 'Swift Delivery LTD',
    'yearCreated': '2019',
    'baseUrl': 'http://localhost:3000/'
  }
};

// Testing  environment
environments.testing = {
  'httpPort': 4000,
  'httpsPort': 4001,
  'envName': 'testing',
  'hashingSecret': 'thisIsASecret',
  'twilio' : {
    'accountSid' : 'ACb32d411ad7fe886aac54c665d25e5c5d',
    'authToken' : '9455e3eb3109edc12e3d8c92768f7a67',
    'fromPhone' : '+15005550006'
  },
  'templateGlobals': {
    'appName': 'Swift Delivery App',
    'companyName': 'Swift Delivery LTD',
    'yearCreated': '2019',
    'baseUrl': 'http://localhost:3000/'
  }
};

// Production environment
environments.production = {
  'httpPort': 5000,
  'httpsPort': 5001,
  'envName': 'production',
  'hashingSecret': 'thisIsAlsoASecret',
  'twilio' : {
    'accountSid' : 'ACb32d411ad7fe886aac54c665d25e5c5d',
    'authToken' : '9455e3eb3109edc12e3d8c92768f7a67',
    'fromPhone' : '+15005550006'
  },
  'templateGlobals': {
    'appName': 'Swift Delivery App',
    'companyName': 'Swift Delivery LTD',
    'yearCreated': '2019',
    'baseUrl': 'http://localhost:3000/'
  }
};

// Determine which environment was passed as a command line argument
var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check current environment is one of the environment above, if not, default to stagging
var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;

// Export the module
module.exports = environmentToExport;
