const assert = require('assert')

describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base.js')
    it('entry', () => {
        assert.equal(baseConfig.entry.index, '/Users/mokz/work bench/extension/FRONT-END/webpack/my-project/build-webpack/test/smoke/template/src/index/index.js')
        assert.equal(baseConfig.entry.search, '/Users/mokz/work bench/extension/FRONT-END/webpack/my-project/build-webpack/test/smoke/template/src/search/index.js')
    })
   
}) 