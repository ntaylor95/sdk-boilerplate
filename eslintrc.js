module.exports = {
  extends: 'eslint:recommended',
  env: {
    node: true,
    es6: true
  },
  globals: {
    module: false,
    process: false,
    describe: false,
    it: false,
    expect: false,
    beforeEach: false,
    beforeAll: false,
    afterEach: false,
    afterAll: false,
    xdescribe: false,
    xit: false,
    jest: false,
    isTestEnvironment: false
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  rules: {
    indent: ['warn', 4, { 'SwitchCase': 1 }],
    'no-console': 0,
    console: {
      allow: [ 'error', 'warn', 'info' ]
    }
  }
};