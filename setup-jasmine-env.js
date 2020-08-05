const jasmineReporters = require('jasmine-reporters');

jasmine.VERBOSE = true;
jasmine.getEnv().addReporter(
  new jasmineReporters.JUnitXmlReporter({
    consolidateAll: false,
    savePath: './coverage/frontend',
    filePrefix: 'test-results-'
  })
);
