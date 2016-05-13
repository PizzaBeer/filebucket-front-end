'use strict';

const app = require('../app-data');
// const newGame = require('./index.js');

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
  console.log("Sign in successful");
};

const signOutSuccess = () => {
  app.user = null;
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
};
