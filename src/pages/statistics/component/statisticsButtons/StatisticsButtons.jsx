import PropTypes from 'prop-types';
import React, {
  Component, useContext, useEffect, useState
} from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ReactToPdf from 'react-to-pdf';
import MainRouters from '../../../../core/constants/MainRouters';
import optionsForPDF from '../../../../core/constants/optionsForPDF';
import GlobalContext from '../../../../globalContext';
import StatisticsButton from './styled/StatisticsButton';
import StatisticsButtonWrap from './styled/StatisticsButtonWrap';

const defaultPdfPositionXLaptop = -15;
const defaultPdfPositionYLaptop = 10;
const defaultPdfPositionXMobile = 10;
const defaultPdfPositionYMobile = 10;
const screenWidthMobile = 980;

function StatisticsButtons(props) {
  const [options, SetOptions] = useState(optionsForPDF.optionsForPDFLaptop);
  const [position, SetPosition] = useState([
    defaultPdfPositionXLaptop,
    defaultPdfPositionYLaptop
  ]);
  const { trRef } = props;
  const { reset } = useContext(GlobalContext);
  const { t } = useTranslation();

  useEffect(() => {
    const setMobile = () => {
      if (window.outerWidth <= screenWidthMobile) {
        SetOptions(optionsForPDF.optionsForPDFMobile);
        SetPosition([defaultPdfPositionXMobile, defaultPdfPositionYMobile]);
      } else {
        SetOptions(optionsForPDF.optionsForPDFLaptop);
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
