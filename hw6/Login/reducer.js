/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CHANGE_LOGINNAME, CHANGE_PASSWORD, SUBMIT_SUCCESS, SUBMIT_ERROR } from './constants';

// The initial state of the Login component
export const initialState = {
  loginname: '',
  password: '',
  reply: '',
  error: ''
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    console.log('loginReducer: ', action);
    switch (action.type) {
      case CHANGE_LOGINNAME:
        // Delete prefixed '@' from the github username
        draft.loginname = action.loginname
        break;
      case CHANGE_PASSWORD:
        // Delete prefixed '@' from the github username
        draft.password = action.password
        break;
      case SUBMIT_SUCCESS:
        // Delete prefixed '@' from the github username
        draft.reply = action.reply
        break;
      case SUBMIT_ERROR:
        // Delete prefixed '@' from the github username
        draft.error = action.error
        break;
    }
  });

export default loginReducer;
