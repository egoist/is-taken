import test from 'ava'
import isTaken from './'

test('taken', async t => {
	const taken = await isTaken('toka')
	t.ok(taken)
})

test('not taken', async t => {
	const taken = await isTaken('tokaaaaaa')
	t.false(taken)
})

test('error', async t => {
	await isTaken().catch(t.pass)
})
