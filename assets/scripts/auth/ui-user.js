'use strict';

const app = require('../app-data');
const apiNodes = require('./api-nodes.js');
const display = require('../display');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.currentUser.token = data.user.token;
  app.currentUser.id = data.user._id;
  console.log(app.currentUser);
  console.log("Sign in successful");
  $('#sign-in-modal').modal('hide');
  //Calls GET for User's home directory
  apiNodes.getDirectory(display.displayAllNodes, failure, app.currentDirectory);
  // apiNodes.getAllNodes(); change this to get all folders
};

const signUpSuccess = (data) => {
  console.log("Sign up successful");
  $('#sign-up-modal').modal('hide');
  $('#sign-up').each(function(){
    this.reset();
});
};


const signOutSuccess = () => {
  app.currentUser = null;
  console.log(app);
  console.log("You signed out bro. Sweet!");
  $('#sign-out-modal').modal('hide');
  //clear contents
};


const changePwSuccess = (data) => {
  console.log("Password change successful!");
  $('#change-password-modal').modal('hide');
  //THIS needs to change to hide in BS
};


module.exports = {
  failure,
  success,
  changePwSuccess,
  signUpSuccess,
  signOutSuccess,
  signInSuccess,
};
