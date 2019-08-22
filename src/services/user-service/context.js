import React from 'react';
import reducer from './reducer';
import initialState from './initial-state';

export default React.createContext([
  initialState,
  reducer
])