/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.LoginComponent';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'Start your next react project in seconds',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage:
      'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices',
  },
  loginnameLabel: {
    id: `${scope}.loginname.label`,
    defaultMessage: 'Login Name: ',
  },
  SignupnameLabel: {
    id: `${scope}.Signupname.label`,
    defaultMessage: 'SignUp Name: ',
  },
  GenderLabel: {
    id: `${scope}.Gender.label`,
    defaultMessage: 'Gender: ',
  },
  MaleLabel: {
    id: `${scope}.Male.label`,
    defaultMessage: 'Male',
  },
  FemaleLabel: {
    id: `${scope}.Female.label`,
    defaultMessage: 'Female',
  },
  EmailLabel: {
    id: `${scope}.Email.label`,
    defaultMessage: 'Email: ',
  },
  passwordLabel: {
    id: `${scope}.password.label`,
    defaultMessage: 'Password: ',
  },
  trymeHeader: {
    id: `${scope}.tryme.header`,
    defaultMessage: 'Try me!',
  },
  trymeMessage: {
    id: `${scope}.tryme.message`,
    defaultMessage: 'Show Github repositories by',
  },
  trymeAtPrefix: {
    id: `${scope}.tryme.atPrefix`,
    defaultMessage: '@',
  },
});
