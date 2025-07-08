const fs = require('fs');
const path = require('path');
const { defineConfig } = require("cypress");
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');

// Cucumber preprocessor imports
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // Register the 'log' task so cy.task('log', ...) works
      on('task', {
        log(message) {
          const logFile = path.join(__dirname, 'a11y-violations.log');
          fs.appendFileSync(logFile, JSON.stringify(message, null, 2) + '\n');
          return null;
        }
      });

      // Register the image snapshot plugin
      addMatchImageSnapshotPlugin(on, config);

      // Register the cucumber preprocessor plugin
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      addMatchImageSnapshotPlugin(on); //  <----- move this here
      
      return config;
    },
    // Run both .cy.js and .feature files
    specPattern: ["**/*.cy.{js,ts,jsx,tsx}", "**/*.feature"],
  },
});