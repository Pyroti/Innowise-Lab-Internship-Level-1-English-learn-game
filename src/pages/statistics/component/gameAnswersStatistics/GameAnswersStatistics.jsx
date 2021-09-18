import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import AnswersColumn from './styled/AnswersColumn';
import AnswersWrap from './styled/AnswersWrap';

export default function GameAnswerStatistics(props) {
  const { answers } = props;
  const { t } = useTranslation();

  return (
    <AnswersWrap>
      <AnswersColumn>
        <b>{t('rightAnswers')}</b>
        {answers.rightAnswers.map((item) => (
          <div key={item.id}>
            <span>{item.word}</span>
            {' - '}
            <span>{item.wordTranslate}</span>
          </div>
        ))}
      </AnswersColumn>
      <AnswersColumn>
        <b>{t('wrongAnswers')}</b>
        {answers.wrongAnswers.map((item) => (
          <div key={item.id}>
            <span>{item.word}</span>
            {' - '}
            <span>{item.wordTranslate}</span>
          </div>
        ))}
      </AnswersColumn>
    </AnswersWrap>
  );
}

GameAnswerStatistics.propTypes = {
  answers: PropTypes.oneOfType([PropTypes.object]).isRequired
};
