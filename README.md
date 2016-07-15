# is-taken [![NPM version](https://img.shields.io/npm/v/is-taken.svg)](https://npmjs.com/package/is-taken) [![NPM downloads](https://img.shields.io/npm/dm/is-taken.svg)](https://npmjs.com/package/is-taken) [![Build Status](https://img.shields.io/circleci/project/egoist/is-taken/master.svg)](https://circleci.com/gh/egoist/is-taken)

> Check if an NPM package name is taken.

## Install

```
$ npm install --save is-taken
```

## Usage

```js
const isTaken = require('is-taken')

// version is optional
isTaken('webpack', {version: 'x.x.x'})
	.then(taken => {
		if (taken) {
			console.log(`${taken.name} is taken 😭`)
		} else {
			console.log('Cheers! it belongs to you! 🎉')
		}
	})
```

## License

MIT © [EGOIST](https://github.com/egoist)
