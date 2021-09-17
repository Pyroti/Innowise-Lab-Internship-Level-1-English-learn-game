import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ReactToPdf from 'react-to-pdf';
import AppConfig from '../../../../core/constants/AppConfig';
import MainRouters from '../../../../core/constants/MainRouters';
import optionsForPDF from '../../../../core/constants/optionsForPDF';
import StatisticsButton from './styled/StatisticsButton';
import StatisticsButtonWrap from './styled/StatisticsButtonWrap';

function StatisticsButtons(props) {
  const { trRef } = props;
  const { t } = useTranslation();

  return (
    <StatisticsButtonWrap>
      <Link to={MainRouters.game}>
        <StatisticsButton type="button">{t('restartGame')}</StatisticsButton>
      </Link>

      <ReactToPdf
        targetRef={trRef}
        options={optionsForPDF}
        x={AppConfig.defaultPositionX}
        y={AppConfig.defaultPositionY}
        filename="result.pdf"
      >
        {({ toPdf }) => (
          <StatisticsButton onClick={toPdf} type="button">
            {t('printToPdf')}
          </StatisticsButton>
        )}
      </ReactToPdf>
    </StatisticsButtonWrap>
  );
}

StatisticsButtons.propTypes = {
  trRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Component) }),
  ]).isRequired,
};

export default StatisticsButtons;
