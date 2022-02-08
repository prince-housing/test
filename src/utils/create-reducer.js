/**
 * @param {Object} initialState: initial state of the reducer
 * @param {{ [string]: (Object, Object) => Object }} actionHandlers: { [string]: (reducerState, action) => reducerUpdatedState }
 * @returns
 */
export default function createReducer(initialState, actionHandlers) {
  return (state = initialState, action): StateType => {
    const fn = actionHandlers[action.type];

    if (fn) {
      return fn(state, action);
    }

    return state;
  };
}
