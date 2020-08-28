import merge from 'lodash/merge';
import set from 'lodash/set';
import has from 'lodash/has';
import get from 'lodash/get';

const setReducer = (state, payload, option, path) => {
  let newState = merge({}, state, payload);

  if (option === 'set' && has(payload, path)) {
    if (state.products._page > 1) {
      newState = set(newState, path, [...get(state, path, null), ...get(payload, path, null)]);
    } else {
      newState = set(newState, path, get(payload, path, null));
    }
  }

  return newState;
};

export default setReducer;
