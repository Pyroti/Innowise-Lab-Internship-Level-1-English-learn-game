import React from 'react';
import AppConfig from './core/constants/AppConfig';

const PointsContext = React.createContext(AppConfig.initialPoint);

export default PointsContext;
