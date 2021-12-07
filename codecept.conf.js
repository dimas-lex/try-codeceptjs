const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*.spec.*',
  timeout: 30000,
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://gray-cliff-028eec403.azurestaticapps.net/',
      show: true,
      browser: 'chromium',
      pressKeyDelay: 5,
      waitForAction: 2
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}