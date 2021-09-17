import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import AppConfig from '../../../../core/constants/AppConfig';
import RevolvingCircle from './styled/RevolvingCircle';
import TimeElement from './styled/TimeElement';
import TimeWrapper from './styled/TimeWrapper';

function Timer(props) {
  const { seconds, size, command } = props;
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    let timerId = null;

    if (time) {
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime - AppConfig.defaultOne);
      }, AppConfig.secondForTimer);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [time]);

  if (!time) {
    command();
  }

  return (
    <TimeWrapper size={size}>
      <RevolvingCircle size={size} />
      <TimeElement>{time}</TimeElement>
    </TimeWrapper>
  );
}

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  command: PropTypes.func.isRequired,
};

export default Timer;
