import test from 'ava';
import prettier from 'prettier';
import basic from '../configuration/basic.cjs';

test('basic configuration is valid', (t) => {
	const result = prettier.format('', {
		...basic,
		parser: 'babel',
	});

	t.is(result, '');
});
