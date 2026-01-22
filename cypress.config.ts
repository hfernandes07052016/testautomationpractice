import { defineConfig } from "cypress";
// import allureWriter from "cypress-allure-plugin/writer";

export default defineConfig({
  e2e: {
    baseUrl: "https://testautomationpractice.blogspot.com",
    setupNodeEvents(on, config) {
      // allureWriter(on, config);
      return config;
    },
    viewportWidth: 1366,
    viewportHeight: 768,
    video: false,
    screenshotOnRunFailure: true,
  },
});
