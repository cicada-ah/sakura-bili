const development_env = require('./development')
const production_env = require('./production')
const test_env = require('./test')
const configs = {
	development: development_env,
	test: test_env,
	production: production_env
}

module.exports = configs[process.env.NODE_ENV || 'development']