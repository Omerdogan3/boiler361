/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
  number: 1
};

export const userReducer = createReducer(initialState, {
  [types.SET_NUMBER](state, action) {
    return {
        ...state,
        number: action.number
    };
  }
});
