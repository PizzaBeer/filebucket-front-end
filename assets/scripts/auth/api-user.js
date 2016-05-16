'use strict';

const app = require('../app-data');

const signUp = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.server.api + '/sign-up',
    data,
  })
  .done(success)
   .fail(failure);
  };

const signIn = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.server.api + '/sign-in',
    data,
    dataProcessing: false,
  })
  .done(success)
   .fail(failure);
};

const signOut = (success, failure, data) => {
  $.ajax({
    method: "DELETE",
    url: app.server.api + '/sign-out/' + app.currentUser.id,
    data,
    headers: {
      Authorization: 'Token token='+ app.currentUser.token,
    },
  })
  .done(success)
   .fail(failure);
};

const changePass = (success, failure, data) => {
  // if (!app.currentUser) bad;
  $.ajax({
    method: "PATCH",
    url: app.server.api + '/change-password/' + app.currentUser.id,
    data,
    headers: {
      Authorization: 'Token token='+ app.currentUser.token,
    },
  })
  .done(success)
   .fail(failure);
  };


module.exports = {
  signUp,
  signIn,
  signOut,
  changePass,
};
