const nextJest = require("next/jest");
const creatJestConfig = nextJest({ dir: "./" });
const customJestConfig = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  testEnvironment: "jsdom",
};

module.exports = creatJestConfig(customJestConfig);
