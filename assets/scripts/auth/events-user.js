'use strict';


const authApi = require('./api-user');
const authApiNodes = require('./api-nodes');
const authUi = require('./ui-user');



const userEventHandlers = () => {

  $('#sign-up').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    // authApi.signUp(authUi.signUpSuccess, authUi.failure, data);
    console.log(data);
  });

  $('#sign-in').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
    console.log(data);
  });

  $('#sign-out').on('click', function (event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
    console.log("signed out");
  });

  $('#change-password').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    authApi.changePass(authUi.success, authUi.failure, data);
    console.log(data);
  });
};


  module.exports = {
   userEventHandlers,
  };
