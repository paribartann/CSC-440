/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_LOGINNAME = 'boilerplate/Login/CHANGE_LOGINNAME';
export const CHANGE_PASSWORD = 'boilerplate/Login/CHANGE_PASSWORD';
export const SUBMIT_LOGIN = 'boilerplate/Login/SUBMIT_LOGIN';
export const SUBMIT_SUCCESS = 'boilerplate/Login/SUBMIT_SUCCESS';
export const SUBMIT_ERROR = 'boilerplate/Login/SUBMIT_ERROR';
