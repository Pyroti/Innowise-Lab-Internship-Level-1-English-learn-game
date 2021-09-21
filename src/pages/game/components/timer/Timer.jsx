import PropTypes from 'prop-types';
import React, {
  useContext, useEffect, useState
} from 'react';
import timerConfig from '../../../../core/constants/timerConfig';
import GlobalContext from '../../../../globalContext';
import RevolvingCircle from './styled/RevolvingCircle';
import TimeElement from './styled/TimeElement';
import TimeWrapper from './styled/TimeWrapper';

function Timer(props) {
  const {
    seconds, size, command, isTurnOnSound
  } = props;
  const [time, setTime] = useState(seconds);
  const [isSoundTimer, setIsSoundTimer] = useState(true);
  const { soundTimer, isTimerPlay } = useContext(GlobalContext);

  useEffect(() => {
    let timerId = null;

    if (time && isTimerPlay) {
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, timerConfig.secondForTimer);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [time, isTimerPlay]);

  useEffect(() => {
    const timerCountdownSound = () => {
      if (isSoundTimer && isTurnOnSound) {
        soundTimer.load();
        setTimeout(() => {
          soundTimer.play();
        }, 0);
        setIsSoundTimer(false);
      } else if (!isTurnOnSound) {
        soundTimer.pause();
        soundTimer.currentTime = 0;
        setIsSoundTimer(true);
      }
    };
    if (time <= timerConfig.timerAlmostOver) {
      timerCountdownSound();
    }
  }, [time, isSoundTimer, soundTimer, isTurnOnSound]);

  if (!time) {
    command();
  }

  return (
    <TimeWrapper size={size}>
      <RevolvingCircle size={size} />
      <TimeElement>{isTimerPlay ? time : '| |'}</TimeElement>
    </TimeWrapper>
  );
}

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  command: PropTypes.func.isRequired,
  isTurnOnSound: PropTypes.bool.isRequired
};

export default Timer;
