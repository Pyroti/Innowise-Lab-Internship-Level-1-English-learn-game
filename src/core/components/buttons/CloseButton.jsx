import CloseIcon from '@material-ui/icons/Close';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../../../globalContext';
import MainRouters from '../../constants/MainRouters';
import GameModal from '../GameModal/GameModal';
import HeaderButtonStyled from './styled/HeaderButtonStyled';

function CloseButton() {
  const {
    reset,
    isGamePage,
    isShowGameModal,
    setIsShowGameModal,
    setIsTimerPlay,
    setIsTurnOnSound
  } = useContext(GlobalContext);

  const openGameModal = () => {
    setIsShowGameModal((prevIsShowGameModal) => !prevIsShowGameModal);
  };

  if (isGamePage) {
    return (
      <>
        <HeaderButtonStyled
          onClick={openGameModal}
          isActive={false}
          value="close"
        >
          <CloseIcon />
        </HeaderButtonStyled>
        <GameModal
          isShowGameModal={isShowGameModal}
          setIsShowGameModal={setIsShowGameModal}
          setIsTimerPlay={setIsTimerPlay}
          setIsTurnOnSound={setIsTurnOnSound}
        />
      </>
    );
  }

  return (
    <Link to={MainRouters.home}>
      <HeaderButtonStyled onClick={reset} isActive={false} value="close">
        <CloseIcon />
      </HeaderButtonStyled>
    </Link>
  );
}

export default CloseButton;
