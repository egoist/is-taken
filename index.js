'use strict'

var fetch = require('isomorphic-fetch')

module.exports = function (name) {
	if (typeof name !== 'string') {
		throw new TypeError('Expected a string')
	}

	var registry = process.env.NPM_REGISTRY_URL || 'https://registry.npmjs.org/'
	return fetch(registry + name)
		.then(function (data) {
			if (data.status === 404) {
				return false
			}
			return data.json()
		})
}
