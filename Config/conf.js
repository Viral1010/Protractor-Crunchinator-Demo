exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../Specs/clickCompanies.js'],

    seleniumArgs: ['-browserTimeout=60'],
    'browserName': 'chrome',

    baseUrl: 'http://crunchinator.com/#/crunchinator',
    allScriptsTimeout: 60000,

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 60000,
        isVerbose: true,
        includeStackTrace: true
    }


};