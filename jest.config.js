const config = {
  maxConcurrency: 1,
  maxWorkers: 1,
  roots:  ["."],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/testdata/"
  ],
};

module.exports = config;