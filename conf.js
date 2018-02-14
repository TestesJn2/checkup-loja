//conf.js

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

	seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [
  'spec.js'  
  ,'./e2e/spec/back-end/backend-checkup.spec.js'
  ],

  baseUrl : 'http://saintyves:8cd07b6ed1e2c3b7@saintyves.agile.jn2.xyz/controle',

  capabilities: {
   'browserName':'chrome',
   chromeOptions: {
    args: ['disable-popup-blocking']
    }
  },

  jasmineNodeOpts: {
    // O tempo padrão para esperar em ms antes de um teste falhar.
    defaultTimeoutInterval: 1000000,
  },

  onPrepare: function() {
    browser.manage().window().setSize(1400, 1000);
    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
      savePath: 'e2e/report',
      takeScreenshots: true,
      takeScreenshotsOnlyOnFailures: false
    }));
  },
}

