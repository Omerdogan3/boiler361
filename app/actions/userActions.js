/*
 * Reducer actions related with login
 */
import * as types from './types';

export function setNumber(number) {
  return {
    type: types.SET_NUMBER,
    number
  };
}
