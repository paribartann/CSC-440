/*
 * Login Component
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectLoginname,
  makeSelectPassword,
  makeSelectSubmitSuccess,
  makeSelectSubmitError
} from './selectors'

import {
  changeLoginname,
  changePassword,
  submitLogin
} from './actions'

import Form from './Form';
import Input from './Input';
import messages from './messages';


import reducer from './reducer';
import saga from './saga';

const key = 'login';

function LoginComponent({loginname, password, submitSuccess,
  submitError, onChangeLoginname,
  onChangePassword, onSubmitLogin}) {
  const successEmpty = submitSuccess === '';
  const noError = submitError === '';

  return (
    <div>
          <Form onSubmit={onSubmitLogin}>
            <label>
              <FormattedMessage {...messages.loginnameLabel} />
              <Input
                type="text"
                placeholder="your login name"
                value={loginname}
                onChange={onChangeLoginname}
              />
            </label>
            <label>
              <FormattedMessage {...messages.passwordLabel} />
              <Input
                type="password"
                placeholder=""
                value={password}
                onChange={onChangePassword}
              />
            </label>
            <input
              type="submit"
              value="Submit"
            />
            {
                !noError && <p> {submitError } </p>
            }
          </Form>
    </div>
  );
}



LoginComponent.propTypes = {
  loginname: PropTypes.string,
  password: PropTypes.string,
  submitSuccess: PropTypes.string,
  submitError: PropTypes.string,
  onChangeLoginname: PropTypes.func,
  onChangePassword: PropTypes.func,
  onSubmitLogin: PropTypes.func,
};


const mapStateToProps = createStructuredSelector({
  loginname: makeSelectLoginname(),
  password: makeSelectPassword(),
  submitSuccess: makeSelectSubmitSuccess(),
  submitError: makeSelectSubmitError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeLoginname: evt => dispatch(changeLoginname(evt.target.value)),
    onChangePassword: evt => dispatch(changePassword(evt.target.value)),
    onSubmitLogin: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(submitLogin());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(LoginComponent);
