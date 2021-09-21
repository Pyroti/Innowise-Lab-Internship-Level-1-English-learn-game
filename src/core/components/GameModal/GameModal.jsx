import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import MainRouters from '../../constants/MainRouters';
import CloseModalIcon from './styled/CloseModalIcon';
import GameModalBackground from './styled/GameModalBackground';
import GameModalContent from './styled/GameModalContent';
import GameModalWrapper from './styled/GameModalWrapper';

function GameModal(props) {
  const { t } = useTranslation();
  const {
    isShowGameModal, setIsShowGameModal, setIsTimerPlay, setIsTurnOnSound
  } = props;
  const modalRef = useRef();

  useEffect(() => {
    if (isShowGameModal) {
      setIsTimerPlay(false);
      setIsTurnOnSound(false);
    } else if (!isShowGameModal) {
      setIsTimerPlay(true);
      setIsTurnOnSound(true);
    }
  }, [setIsTimerPlay, isShowGameModal, setIsTurnOnSound]);

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setIsShowGameModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && isShowGameModal) {
        setIsShowGameModal(false);
      }
    },
    [isShowGameModal, setIsShowGameModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  const showGameModal = () => setIsShowGameModal((prev) => !prev);

  return (
    <>
      {isShowGameModal
        ? (
          <GameModalBackground onClick={closeModal} ref={modalRef}>
            <GameModalWrapper isShowGameModal={isShowGameModal}>
              <GameModalContent>
                <h1>{t('theGameIsNotOver')}</h1>
                <p>{t('TheResultAreReset')}</p>
                <Link to={MainRouters.home}>
                  <button type="button" onClick={showGameModal}>{t('CloseTheGame')}</button>
                </Link>
                <button type="button" onClick={showGameModal}>{t('Cancel')}</button>
              </GameModalContent>
              <CloseModalIcon
                onClick={showGameModal}
              />
            </GameModalWrapper>
          </GameModalBackground>
        ) : null}
    </>
  );
}

GameModal.propTypes = {
  isShowGameModal: PropTypes.bool.isRequired,
  setIsShowGameModal: PropTypes.func.isRequired,
  setIsTimerPlay: PropTypes.func.isRequired,
  setIsTurnOnSound: PropTypes.func.isRequired
};

export default GameModal;
