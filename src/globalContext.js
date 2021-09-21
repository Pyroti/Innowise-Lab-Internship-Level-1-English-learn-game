import React from 'react';

export const initialStateStatistics = {
  rightAnswers: [],
  wrongAnswers: []
};

const GlobalContext = React.createContext(0);

export default GlobalContext;
