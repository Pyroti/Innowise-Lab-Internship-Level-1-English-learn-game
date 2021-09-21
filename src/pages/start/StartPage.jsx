import React, { useContext, useEffect } from 'react';
import GlobalContext from '../../globalContext';
import StartPageMainContent from './components/StartPageMainContent';
import StartPageMain from './styled/StartPageMain';

function StartPage() {
  const { setIsGamePage } = useContext(GlobalContext);

  useEffect(() => {
    setIsGamePage(false);
  }, [setIsGamePage]);

  return (
    <>
      <StartPageMain>
        <StartPageMainContent />
      </StartPageMain>
    </>
  );
}

export default StartPage;
