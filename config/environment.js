/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'todolist',
    environment: environment,

    // firebase config BEGIN
    firebase: {
      apiKey: " // hidden // ",
      authDomain: "todolist-ae67b.firebaseapp.com",
      databaseURL: "https://todolist-ae67b.firebaseio.com",
      storageBucket: "todolist-ae67b.appspot.com",
    },
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com http://api.github.com"
    },
    // you also need to relax access to database, creating a rule in https://console.firebase.google.com/project/mycars-e9580/database/rules
    // {
    //   "rules": {
    //     ".read": true,
    //     ".write": true
    //   }
    // }

    // firebase config END


    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
