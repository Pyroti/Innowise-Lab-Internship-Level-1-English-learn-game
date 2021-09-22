import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import countingResult from '../countingResults';

const answers = {
  rightAnswers: [1, 2, 3, 4, 5],
  wrongAnswers: [1]
};

afterEach(cleanup);
it('renders <StartPageMainContent />', () => {
  const { percentageCorrectAnswers } = countingResult(answers);
  expect(Number(percentageCorrectAnswers)).toBeCloseTo(83.3);
});
