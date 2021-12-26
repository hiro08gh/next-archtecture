module.exports = {
  roots: ['<rootDir>'],
  verbose: true,
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'core', 'node'],
  testMatch: ['**/test/**/(*.)+(spec|test)+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx|js)$': 'ts-jest'
  },
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json'
    }
  }
};
