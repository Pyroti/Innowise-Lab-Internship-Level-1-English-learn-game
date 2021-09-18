import React from 'react';

export const initialStateStatistics = {
  rightAnswers: [],
  wrongAnswers: []
};

const StatisticsContext = React.createContext(initialStateStatistics);

export default StatisticsContext;
