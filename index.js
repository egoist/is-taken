'use strict'

var fetch = require('isomorphic-fetch')
var Promise = require('es6-promise').Promise

module.exports = function (name) {
	if (typeof name !== 'string') {
		return Promise.reject(new TypeError('Expected a string'))
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
