'use strict';

const app = require('../app-data');

const signInSuccess = (data) => {
  app.currentUser.token = data.user.token;
  app.currentUser.id = data.user._id;
  console.log(app.currentUser);
  console.log("Sign in successful");
  $('#sign-in-modal').closeModal();
};

const signUpSuccess = (data) => {
  console.log("Sign up successful");
  $('#sign-up-modal').closeModal();
};

const signOutSuccess = () => {
  app.currentUser = null;
  console.log(app);
  console.log("You signed bro. Sweet!");
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  signUpSuccess,
  signOutSuccess,
  signInSuccess,
};
