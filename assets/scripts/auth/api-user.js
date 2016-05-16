'use strict';

const app = require('../app-data');

const signUp = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.app.api + '/sign-up',
    data,
  })
  .done((success) => console.log(success))
   .fail((fail) => console.error(fail));
  };

const signIn = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.app.api + '/sign-in',
    data,
    dataProcessing: false,
  })
  .done((success) => console.log(success))
   .fail((fail) => console.error(fail));
};

const signOut = (success, failure, data) => {
  $.ajax({
    method: "DELETE",
    url: app.app.api + '/sign-out/' + app.currentUser.id,
    data,
    headers: {
      Authorization: 'Token token='+ app.currentUser.token,
    },
  })
  .done((success) => console.log(success))
   .fail((fail) => console.error(fail));
};

const changePass = (success, failure, data) => {
  // if (!app.currentUser) bad;
  $.ajax({
    method: "PATCH",
    url: app.app.api + '/change-password/' + app.currentUser.id,
    data,
    headers: {
      Authorization: 'Token token='+ app.currentUser.token,
    },
  })
  .done((success) => console.log(success))
   .fail((fail) => console.error(fail));
  };


module.exports = {
  signUp,
  signIn,
  signOut,
  changePass,
};
