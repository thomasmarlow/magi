'use strict';

const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')

module.exports = () => {
        dotenvExpand.expand(dotenv.config())

        return {}
}
