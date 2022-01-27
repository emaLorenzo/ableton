import { defineConfig } from "vite";
import stylelint from "stylelint";
import postcssReporter from "postcss-reporter";
import postcssPresetEnv from 'postcss-preset-env';

export default defineConfig({
  build: {
    outDir: "./dist",
    minify: false,
  },
  css: {
    postcss: {
      plugins: [
        stylelint({ fix: true }),
        postcssPresetEnv({
          stage: 3,
          features: {
            'nesting-rules': true
          }
        }),
        postcssReporter({ clearReportedMessages: true })
      ]
    }
  }
});
