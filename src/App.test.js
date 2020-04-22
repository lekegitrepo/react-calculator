import React from 'react';
import { render } from '@testing-library/react';
import App from './components/App';
import Display from './components/display';

test('components', () => {
  const { getByAllRole } = render(<App />);
  const display = getByAllRole('input');
  const button = getByAllRole('button')
  expect(button).toBeInTheDocument();
});

it('display default value', () => {
	const { getByDisplayValue } = render(<Display result='0' />)
	const inputValue = getByDisplayValue('0');
	expect(inputValue.type).toBe('text');
	expect(inputValue.value).toBe('0');
})
