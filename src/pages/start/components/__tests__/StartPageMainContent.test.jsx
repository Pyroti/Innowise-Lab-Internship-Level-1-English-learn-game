import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import StartPageMainContent from '../StartPageMainContent';

it('renders <StartPageMainContent />', () => {
  render(
    <BrowserRouter>
      <StartPageMainContent />
    </BrowserRouter>
  );
  screen.debug();
  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
});
