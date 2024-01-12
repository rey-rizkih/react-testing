const nextJest = require("next/jest.js");
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");

const paths = compilerOptions.paths ? compilerOptions.paths : {};

const createJestConfig = nextJest({
  dir: "./",
});

const exclusions = ["<rootDir>/src/pages"];

const inclusions = ["<rootDir>/src/**/*.{js,jsx,ts,tsx}"];

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  preset: "ts-jest",
  transform: {
    "^.+\\.(t|j)sx?$": ["ts-jest", { isolatedModules: true }],
  },
  globals: {
    TZ: "utc",
  },
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: pathsToModuleNameMapper(paths, { prefix: "<rootDir>/" }),
  setupFilesAfterEnv: ["<rootDir>/jest/setup-tests.ts"],
  testMatch: [
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
  ],
  coverageDirectory: "<rootDir>/coverage",
  coveragePathIgnorePatterns: exclusions,
  collectCoverageFrom: inclusions,
  coverageThreshold: {
    global: {
      lines: 85,
    },
  },
};

module.exports = createJestConfig(config);
