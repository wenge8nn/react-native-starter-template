import {createAction} from 'redux-actions';
import {LOGIN, SIGN_UP, LOGOUT, SESSION_EXPIRED} from './actionTypes';

export const loginRequest = createAction(LOGIN.REQUEST);
export const loginSuccess = createAction(LOGIN.SUCCESS);
export const loginFailed = createAction(LOGIN.FAILED);

export const signupRequest = createAction(SIGN_UP.REQUEST);
export const signupSuccess = createAction(SIGN_UP.SUCCESS);
export const signupFailed = createAction(SIGN_UP.FAILED);

export const logoutRequest = createAction(LOGOUT.REQUEST);
export const logoutSuccess = createAction(LOGOUT.SUCCESS);
export const logoutFailed = createAction(LOGOUT.FAILED);

export const sessionExpired = createAction(SESSION_EXPIRED);
