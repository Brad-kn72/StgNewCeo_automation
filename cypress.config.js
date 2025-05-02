require('dotenv').config();
const { defineConfig } = require("cypress");


module.exports = defineConfig({
  viewportWidth: process.env.GITHUB_ACTIONS ? 1920 : 1920,
  viewportHeight: process.env.GITHUB_ACTIONS ? 1080 : 1080,
  pageLoadTimeout: 60 * 1000,
  redirectionLimit: 30,
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    env: {
      stgNewCeo: process.env.STG_NEW_CEO_URL,
      stgID: process.env.STG_ID,
      stgID1: process.env.STG_ID1,
      stgPW: process.env.STG_PW,
      stgPW1: process.env.STG_PW1,
      stgEmail: process.env.STG_EMAIL
    }
  },

  
});
