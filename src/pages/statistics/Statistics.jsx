import React, { useContext } from 'react';
import statisticsContext from '../../statisticsContext';
import StartPageMain from '../start/styled/StartPageMain';

export default function Statistics() {
  const answers = useContext(statisticsContext);
  return (
    <>
      <StartPageMain>
        <p>right answers:</p>
        {answers.rightAnswers.map((item) => (
          <div>
            <span key={item.word}>{item.word}</span>
            {' '}
            -
            {' '}
            <span key={item.wordTranslate}>{item.wordTranslate}</span>
          </div>
        ))}
        <br />
        <p>wrong answers:</p>
        {answers.wrongAnswers.map((item) => (
          <div>
            <span key={item.word}>{item.word}</span>
            {' '}
            -
            {' '}
            <span key={item.wordTranslate}>{item.wordTranslate}</span>
          </div>
        ))}
      </StartPageMain>
    </>
  );
}
