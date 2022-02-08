import createReducer from '../../utils/create-reducer';

import Types from './types';

const initialState = {};

const handleNavigation = (state, action) => state;

const actionHandlers = {
  [Types.NAVIGATE]: handleNavigation,
};

export default createReducer(initialState, actionHandlers);
