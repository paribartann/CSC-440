/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SUBMIT_LOGIN } from './constants';
import { loginSuccess, loginFailure } from './actions';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectLoginname, makeSelectPassword } from './selectors';

/**
 * Github repos request/response handler
 */
export function* submitLoginData() {
  // Select username from store
  const loginname = yield select(makeSelectLoginname());
  const password = yield select(makeSelectPassword());
  const data = { loginname, password };
  const options = {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }
  //const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  const requestURL = `http://localhost:3000/login`;

  try {
    // Call our request helper (see 'utils/request')
    const resp = yield call(request, requestURL, options);
    if(resp.error) {
      yield put(submitError(resp.error));
      return;
    }
    yield put(submitSuccess(resp.reply));
    //yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SUBMIT_LOGIN, submitLoginData);
}
