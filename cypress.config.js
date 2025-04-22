const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: process.env.GITHUB_ACTIONS ? 1920 : 1920,
  viewportHeight: process.env.GITHUB_ACTIONS ? 1080 : 1080,
  pageLoadTimeout: 60 * 1000,
  redirectionLimit: 30,
  e2e: {
    setupNodeEvents(on, config) {
      
    },
  },
});
