const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'example_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://redsys-stage.sandsmedia.com',
      show: true,
      windowSize: '1200x900',
      waitForNavigation: "domcontentloaded",
      highlightElement: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'unitTestingCodeceptJS'
}