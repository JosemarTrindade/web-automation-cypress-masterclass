const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    projectId: "cae5b9",
    defaultCommandTimeout: 10000,
    // viewportHeight: 1000,
    // viewportWidth: 400,
    baseUrl: 'https://automationpratice.com.br',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/index.js',
    },
})
