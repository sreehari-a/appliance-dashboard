export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
    "^.+\\.svg$": "<rootDir>/svgTransform.js"
  },
  testEnvironmentOptions: {
    customExportConditions: [""]
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"]
};
