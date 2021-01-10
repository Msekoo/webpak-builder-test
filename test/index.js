const path = require('path');

process.chdir(path.join(__dirname, 'smoke/template'))

describe('builder-webapck test case', () => {
    require('./unit/webpack-base-test.js')
})