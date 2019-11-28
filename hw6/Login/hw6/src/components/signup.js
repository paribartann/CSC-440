/*
 * Login Component
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import {
  makeSelectLoginname,
  makeSelectPassword,
  makeSelectSubmitSuccess,
  makeSelectSubmitError,
  makeSelectEmail,
  makeSelectGender
} from './selectors'

import {
  changeLoginname,
  changePassword,
  submitLogin
} from './actions'

import Form from './Form';
import Input from './Input';
import messages from './messages';


function SignUpComponent({loginname, email, gender, password, submitSuccess,
  submitError, dispatch}) {
  const noError = submitError === '';
  console.log("GENDER == ", gender);


  return (
    <div>
          <Form onSubmit={ e => {
              e.preventDefault();
             var obj = {
                name : loginname,
                password: password,
                email: email,
                gender: gender
            };   
            dispatch(submitLogin(obj));
            
          }}>
            <label>
              <FormattedMessage {...messages.SignupnameLabel} />
              <Input
                type="text"
                placeholder="your name"
               ref={node => {
                loginname = node;
               }}
              />
            </label>
            <label>
              <FormattedMessage {...messages.EmailLabel} />
              <Input
                type="email"
                placeholder="Enter your email"
                ref={node => {
                    email = node;
                }}
              />
            </label>
            <label>
              <FormattedMessage {...messages.passwordLabel} />
              <Input
                type="password"
                placeholder= "Enter your password"
                ref={node => {
                    password = node;
                }}
              />
            </label>
            <label>
              <FormattedMessage {...messages.GenderLabel} />
              <Input
                type="radio"
                id="male"
                name="gender"
                value="male"
                defaultChecked
                onChange = { () => gender = "male"}
              />
               <FormattedMessage {...messages.MaleLabel} />
               <Input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange = { () => gender = "female"}
              />
               <FormattedMessage {...messages.FemaleLabel} />
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



SignUpComponent.propTypes = {
  loginname: PropTypes.string,
  password: PropTypes.string,
  gender: PropTypes.string,
  email: PropTypes.string,
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
  email: makeSelectEmail(),
  gender: makeSelectGender()
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
)(SignUpComponent);
