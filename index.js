'use strict'

var toKebab = require('camel2kebab')
var fetch = require('isomorphic-fetch')
var Promise = require('es6-promise').Promise

module.exports = function (name, opts) {
	if (typeof name !== 'string') {
		return Promise.reject(new TypeError('Expected a string'))
	}

	// to kebab-case and lowercase
	name = toKebab(name)

	opts = opts || {}
	opts.registry = opts.registry || process.env.NPM_REGISTRY_URL || 'https://registry.npmjs.org/'
	opts.timeout = opts.timeout || 5000

	return fetch(opts.registry + name, {timeout: opts.timeout})
		.then(function (data) {
			if (data.status === 404) {
				return false
			}
			return data.json()
		})
}
