'use strict';


const authApi = require('./api-user');
// const authApiNodes = require('./api-nodes'); Not being used ATM
const authUi = require('./ui-user');
const app = require('../app-data');



const userEventHandlers = () => {

  $('#sign-up').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    app.server.signUpData = getFormFields(this);
    authApi.signUp(authUi.signUpSuccess, authUi.signUpFailure, data);
  });

  $('#sign-in').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signIn(authUi.signInSuccess, authUi.signInFailure, data);
  });

  $('#sign-out').on('click', function (event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
    console.log("signed out");
  });

  $('#change-password').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    authApi.changePass(authUi.changePwSuccess, authUi.changePwFailure, data);
    console.log(data);
  });
};


  module.exports = {
   userEventHandlers,
  };
