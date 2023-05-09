import { defineConfig } from "cypress";
import { MochawesomeReportOptions } from "mochawesome";
import { resolve } from "path";

const reportDir = resolve("reports", "mochawesome");

export default defineConfig({
  // Other configuration options here...
  reporter: "mochawesome",
  reporterOptions: {
    reportDir,
    overwrite: false,
    html: false,
    json: true,
    reportFilename: "index",
    reportTitle: "Cypress Tests",
    inline: false,
    tsConfig: "tsconfig.json",
  } as MochawesomeReportOptions,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

