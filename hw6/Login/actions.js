/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { CHANGE_LOGINNAME, CHANGE_PASSWORD, SUBMIT_LOGIN,
         SUBMIT_SUCCESS, SUBMIT_ERROR } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} username The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_USERNAME
 */
export function changeLoginname(loginname) {
  console.log('changeloginname: ', loginname);
  return {
    type: CHANGE_LOGINNAME,
    loginname,
  };
}

export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}

export function submitLogin() {
  return {
    type: SUBMIT_LOGIN,
  };
}

export function submitSuccess(reply) {
  return {
    type: SUBMIT_SUCCESS,
    reply,
  };
}

export function submitError(error) {
  return {
    type: SUBMIT_ERROR,
    error,
  };
}
