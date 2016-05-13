'use strict';

const app = require('../app-data');

let currentUser = {
  id: undefined,
  token:''
};

const signInSuccess = (data) => {
  app.user = currentUser;
  console.log(app);
  console.log(data);
  console.log("Sign in successful");
};

const signOutSuccess = () => {
  currentUser = null;
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
  signOutSuccess,
  signInSuccess,
  app,
  currentUser,
};
