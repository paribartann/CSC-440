/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLogin = state => state.login || initialState;

const makeSelectLoginname = () =>
  createSelector(
    selectLogin,
    loginState => loginState.loginname,
  );


const makeSelectPassword = () =>
  createSelector(
    selectLogin,
    loginState => loginState.password,
  );


  const makeSelectEmail = () =>
  createSelector(
    selectLogin,
    loginState => loginState.email,
  );

  const makeSelectGender = () =>
  createSelector(
    selectLogin,
    loginState => loginState.gender,
  );


const makeSelectSubmitSuccess = () =>
  createSelector(
    selectLogin,
    loginState => loginState.reply,
  );

const makeSelectSubmitError = () =>
  createSelector(
    selectLogin,
    loginState => loginState.error,
  );

export { selectLogin, makeSelectLoginname, makeSelectPassword,
         makeSelectSubmitSuccess, makeSelectSubmitError, makeSelectEmail, makeSelectGender};
