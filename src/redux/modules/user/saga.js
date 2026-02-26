import {takeLatest, put, call} from 'redux-saga/effects';

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
} from './actions';

// Login
function* loginWorker({payload}) {
  try {
    const {email, password} = payload;

    yield put(loginSuccess({email}));
  } catch (err) {
    yield put(loginFailed(err));
  }
}

// Signup
function* signupWorker({payload}) {
  try {
    const {email, password} = payload;

    yield put(signupSuccess());
  } catch (err) {
    yield put(signupFailed(err));
  }
}

// Logout
function* logoutWorker() {
  try {
    yield put(logoutSuccess());
  } catch (err) {
    yield put(logoutFailed(err));
  }
}

export default function* () {
  yield takeLatest(loginRequest, loginWorker);
  yield takeLatest(signupRequest, signupWorker);
  yield takeLatest(logoutRequest, logoutWorker);
}
