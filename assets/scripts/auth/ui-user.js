'use strict';

const app = require('../app-data');
const apiNodes = require('./api-nodes.js');
const display = require('../display');
const authApi = require('./api-user');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = (data) => {
  app.currentUser.token = data.user.token;
  app.currentUser.id = data.user._id;
  $('#sign-in-modal').modal('hide');
  console.log("Sign in successful");
  $('.all-nodes').show();
  $('.breadcrumb').show();
  $('.page-content').removeClass('hidden');
  $('.landing-header').addClass('hidden');
  $('.myaccount-dropdown').removeClass('hidden');
  $('body').removeClass('bg-image');
  $('#sidebar-wrapper').removeClass('hidden');
  apiNodes.getDirectory(display.displayAllNodes, failure, app.currentDirectory);
  $('.upload-form').each(function() {
    this.reset();
  });
};

const signInFailure = (error) => {
  console.error(error);
  $('#sign-in-modal').modal('hide');
  $('#sign-in-fail-modal').modal('show');

};

const signUpSuccess = (data) => {
  console.log("Sign up successful");
  $('#sign-up-modal').modal('hide');
  $('#sign-up').each(function() {
    this.reset();
  });
  console.log(app.server.signUpData);
  authApi.signIn(signInSuccess, signInFailure, app.server.signUpData);
};

const signUpFailure = (error) => {
  console.error(error);
  $('#sign-up-modal').modal('hide');
  $('#sign-up-fail-modal').modal('show');
};


const signOutSuccess = () => {
  app.currentUser.token = null;
  app.currentUser.id = null;
  app.currentDirectory = "home";
  $('#sign-out-modal').modal('hide');
  $('.all-nodes').empty();
  $('.breadcrumb').hide();
  $('.breadcrumb .child').remove();
  $('.breadcrumb .root').addClass('active');
  $('.root').replaceWith(`<li class="root active">Home</li>`);
  $('.myaccount-dropdown').addClass('hidden');
  $('body').addClass('bg-image');
  $('.page-content').addClass('hidden');
  $('#sidebar-wrapper').addClass('hidden');
  $('.landing-header').removeClass('hidden');

  //clear contents
};

const changePwSuccess = (data) => {
  console.log("Password change successful!");
  $('#change-password-modal').modal('hide');
  $('#change-password').each(function() {
    this.reset();
    //THIS needs to change to hide in BS
  });
};

const changePwFailure = (error) => {
  console.error(error);
  $('#change-password-modal').modal('hide');
  $('#change-password-fail-modal').modal('show');
};

module.exports = {
  failure,
  success,
  changePwSuccess,
  changePwFailure,
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
  signInSuccess,
  signInFailure
};
