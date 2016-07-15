import test from 'ava'
import isTaken from './'

test('taken', async t => {
	const taken = await isTaken('isTaken')
	t.is(taken.name, 'is-taken')
})

test('not taken', async t => {
	const taken = await isTaken('tokaaaaaa')
	t.false(taken)
})

test('error', async t => {
	await isTaken().catch(t.pass)
})

test('with version', async t => {
	const taken = await isTaken('koa', {version: '2.0.0-alpha.3'})
	t.is(taken.version, '2.0.0-alpha.3')
})
