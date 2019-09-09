const baseConfig = require('./jest.config');

const integrationTestConfig = {
    ...baseConfig,
    testMatch: [
        '**/*.integration.tests.js',
    ],
    globals: {
    },
};

module.exports = integrationTestConfig;