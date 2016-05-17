'use strict';

const app = require('../app-data');
const apiFiles = require('./api-files.js');

const signInSuccess = (data) => {
  app.currentUser.token = data.user.token;
  app.currentUser.id = data.user._id;
  console.log(app.currentUser);
  console.log("Sign in successful");
  $('#sign-in-modal').modal('hide');
  // apiFiles.getAllFiles(); change this to get all folders
};

const signUpSuccess = (data) => {
  console.log("Sign up successful");
  $('#sign-up-modal').modal('hide');
};

const signOutSuccess = () => {
  app.currentUser = null;
  console.log(app);
  console.log("You signed out bro. Sweet!");
  $('#sign-out-modal').modal('hide');
};

const changePwSuccess = (data) => {
  console.log("Sign up successful");
  $('#change-password-modal').modal('hide');
  $('#change-password-modal').closeModal();
  //THIS needs to change to hide in BS
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
  changePwSuccess,
  signUpSuccess,
  signOutSuccess,
  signInSuccess,
};
