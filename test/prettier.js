import test from 'ava';
import prettier from 'prettier';
import basic from '../configuration/basic.js';

test('basic configuration is valid', async (t) => {
	const result = await prettier.format('', {
		...basic,
		parser: 'babel',
	});

	t.is(result, '');
});
