module.exports = {
  // A list of paths to modules that run some code to configure or set up the testing framework before each test.
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-data-grid|react-native|react-router|expo-linear-gradient|react-router-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base|@wso2/identity-oidc-js)"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.js?$": "ts-jest"
  },
  // The glob patterns Jest uses to detect test files.
  testMatch: ["**/__tests__/**/?(*.)+(spec|test).ts?(x)"],
  // testMatch: ["**/DrawRequest/__tests__/DrawHistory.test.tsx"],

  // An array of file extensions your modules use.
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/assetsTransformer.js"
  },
  // A set of global variables that need to be available in all test environments.
  globals: {
    "ts-jest": {
      tsConfig: {
        jsx: "react"
      }
    },
    window: {
      location: {
        hostname: "localhost"
      }
    }
  },
  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  modulePathIgnorePatterns: ["dist/"],

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    "<rootDir>/src/**/**/*.ts",
    "<rootDir>/src/**/**/*.tsx",
    "!<rootDir>/src/**/**/*.mock.ts",
    "!<rootDir>/src/**/**/*.module.ts",
    "!<rootDir>/src/**/**/*.spec.ts",
    "!<rootDir>/src/**/**/*.test.ts",
    "!<rootDir>/src/**/**/*.test.tsx",
    "!<rootDir>/src/**/**/*.config.ts"
  ],
  // The directory where Jest should output its coverage files
  coverageDirectory: "../../coverage/packages/web-app",
  coverageReporters: ["json", "text", "lcov", "clover", "jest-junit"],

  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    browsers: ["chrome", "firefox", "safari"]
  }

  // An object that configures minimum threshold enforcement for coverage results
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: 80
  //   }
  // }
};
