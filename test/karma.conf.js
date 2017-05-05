// Karma configuration
// Generated on Thu Mar 30 2017 21:41:20 GMT-0500 (CDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '..',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'www/js/shared/jquery.min.js',
      'www/js/shared/angular.min.js',
      'www/js/shared/angular-mock.js',
      'www/js/shared/angular-route.min.js',
      'www/js/shared/money.js',
      'www/js/shared/accounting.js',
      'www/js/app.js',
      'www/js/filters/*',
      'www/js/directives/*.js',
      'test/unit/*.js',
      'www/views/*.html'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'www/views/*.html': 'ng-html2js'
    },

    ngHtml2JsPreprocessor: {
      // strip this from the file path
      stripPrefix: 'www/',
      moduleName: 'foo'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
