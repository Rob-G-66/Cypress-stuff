const fs = require('fs');
const path = require('path');
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Register the 'log' task so cy.task('log', ...) works
      on('task', {
        log(message) {
          const logFile = path.join(__dirname, 'a11y-violations.log');
          fs.appendFileSync(logFile, JSON.stringify(message, null, 2) + '\n');
          return null;
        }
      });

      return config;
    },
  },
});