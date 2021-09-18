import PropTypes from 'prop-types';
import React, {
  Component, useContext, useEffect, useState
} from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ReactToPdf from 'react-to-pdf';
import AppConfig from '../../../../core/constants/AppConfig';
import MainRouters from '../../../../core/constants/MainRouters';
import optionsForPDFLaptop from '../../../../core/constants/optionsForPDFLaptop';
import optionsForPDFMobile from '../../../../core/constants/optionsForPDFMobile';
import PointsContext from '../../../../pointsContext';
import StatisticsContext, {
  initialStateStatistics
} from '../../../../statisticsContext';
import StatisticsButton from './styled/StatisticsButton';
import StatisticsButtonWrap from './styled/StatisticsButtonWrap';

const defaultPdfPositionXLaptop = -15;
const defaultPdfPositionYLaptop = 10;
const defaultPdfPositionXMobile = 10;
const defaultPdfPositionYMobile = 10;
const screenWidthMobile = 980;

function StatisticsButtons(props) {
  const [options, SetOptions] = useState(optionsForPDFLaptop);
  const [position, SetPosition] = useState([
    defaultPdfPositionXLaptop,
    defaultPdfPositionYLaptop
  ]);
  const { trRef } = props;
  const [, setAnswers] = useContext(StatisticsContext);
  const [, setPoint] = useContext(PointsContext);
  const { t } = useTranslation();

  const reset = () => {
    setAnswers(initialStateStatistics);
    setPoint(AppConfig.initialPoint);
  };

  useEffect(() => {
    const setMobile = () => {
      if (window.outerWidth <= screenWidthMobile) {
        SetOptions(optionsForPDFMobile);
        SetPosition([defaultPdfPositionXMobile, defaultPdfPositionYMobile]);
      } else {
        SetOptions(optionsForPDFLaptop);
        SetPosition([defaultPdfPositionXLaptop, defaultPdfPositionYLaptop]);
      }
    };
    setMobile();
  }, []);

  return (
    <StatisticsButtonWrap>
      <Link to={MainRouters.game}>
        <StatisticsButton onClick={reset} type="button">
          {t('restartGame')}
        </StatisticsButton>
      </Link>

      <ReactToPdf
        targetRef={trRef}
        options={options}
        x={position[0]}
        y={position[1]}
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
    PropTypes.shape({ current: PropTypes.instanceOf(Component) })
  ]).isRequired
};

export default StatisticsButtons;
