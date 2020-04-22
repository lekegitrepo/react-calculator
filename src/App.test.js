import React from 'react';
import { render } from '@testing-library/react';
import App from './components/App';
import Display from './components/display';

/*test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Calculator/i);
  expect(linkElement).toBeInTheDocument();
});*/

it('display default value', () => {
	const { getByDisplayValue } = render(<Display result='0' />)
	const inputValue = getByDisplayValue('0');
	expect(inputValue.type).toBe('text');
	expect(inputValue.value).toBe('0');
})
