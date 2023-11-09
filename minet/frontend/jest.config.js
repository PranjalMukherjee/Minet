module.exports = {
  clearMocks: true,

  collectCoverage: true,

  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/*.d.{ts,tsx}',
    '!src/theme/*.{ts,tsx}',
  ],

  coverageDirectory: "coverage",

  coveragePathIgnorePatterns: [
    '<rootDir>/src/theme',
  ],

  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!d3|d3-array|internmap|delaunator|robust-predicates|d3-shape|i18n-js|axios)",
  ],

  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "jest-transform-stub",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};