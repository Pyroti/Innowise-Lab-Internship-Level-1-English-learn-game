import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import languages from '../../../constants/languages';
import ToggleButtons from '../ToggleButtons';

afterEach(cleanup);
describe('ToggleButtons', () => {
  it('language change to RU', () => {
    const { getByTestId } = render(<ToggleButtons />);

    fireEvent.click(getByTestId(languages.ru));

    expect(getByTestId(languages.ru).textContent).toBe('РУС');
  });

  it('language change to on EN', () => {
    const { getByTestId } = render(<ToggleButtons />);

    fireEvent.click(getByTestId(languages.en));

    expect(getByTestId(languages.en).textContent).toBe('en');
  });
});
