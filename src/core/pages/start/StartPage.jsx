import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import StartPageMainContent from './components/StartPageMainContent';
import StartPageMain from './styled/StartPageMain';

function StartPage() {
  const [time, setTime] = useState(5);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!time || !start) return false;

    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  });

  const startGame = () => {
    setStart(true);
  };

  if (!time) {
    return <Redirect to="/Game" />;
  }

  return (
    <>
      <StartPageMain>
        <StartPageMainContent
          startGame={startGame}
          isStart={start}
          time={time}
        />
      </StartPageMain>
    </>
  );
}

export default StartPage;
