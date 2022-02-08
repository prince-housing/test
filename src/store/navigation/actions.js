import Types from './types';

const Actions = {
  goBack: (key = '') => ({
    payload: { key },
    type: Types.GO_BACK,
  }),
  navigate: (routeName, params = {}) => ({
    payload: { routeName, params },
    type: Types.NAVIGATE,
  }),
  pop: (numberOfScreens = 1) => ({
    payload: { numberOfScreens },
    type: Types.POP,
  }),
  reset: (routes, index) => ({
    payload: { routes, index },
    type: Types.NAVIGATE,
  }),
};

export default Actions;
