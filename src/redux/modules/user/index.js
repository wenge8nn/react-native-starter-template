import {handleActions, combineActions} from 'redux-actions';

import {
  loginRequest,
  loginSuccess,
  loginFailed,
  signupRequest,
  signupSuccess,
  signupFailed,
  logoutRequest,
  logoutSuccess,
  logoutFailed,
  sessionExpired,
} from './actions';

const defaultState = {
  loading: false,
  isLoggedIn: false,
  error: null,
};

export default handleActions(
  {
    [combineActions(loginRequest, signupRequest)]: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    [loginSuccess]: (state) => ({
      ...state,
      loading: false,
      isLoggedIn: true,
      error: null,
    }),
    [logoutRequest]: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    [logoutSuccess]: () => ({
      ...defaultState,
    }),
    [logoutFailed]: (state, {payload}) => ({
      ...state,
      loading: false,
      error: payload,
    }),
    [signupSuccess]: (state) => ({
      ...state,
      loading: false,
      isLoggedIn: true,
      error: null,
    }),
    [sessionExpired]: () => ({
      ...defaultState,
    }),
    [combineActions(loginFailed, signupFailed)]: (state, {payload}) => ({
      ...state,
      loading: false,
      error: payload,
    }),
  },
  defaultState
);
