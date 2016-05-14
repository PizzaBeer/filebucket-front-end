'use strict';

const app = require('../app-data');

const signUp = (success, failure, data) => {
  $.ajax({
    method: "POST",
    url: app.api + '/sign-up',
    data,
  })
  .done((success) => console.log(success))
   .fail((fail) => console.error(fail));
  };

const signIn = (data) => {
  $.ajax({
    method: "POST",
    url: app.api + '/sign-in',
    data,
    dataProcessing: false,
  })
  .done((success) => console.log(success))
   .fail((fail) => console.error(fail));
};

const signOut = (success, failure) => {
  $.ajax({
    method: "DELETE",
    url: app.api + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
  })
  .done(success)
  .fail(failure);
};

const changePass = (success, failure, data) => {
  // if (!app.user) bad;
  $.ajax({
    method: "PATCH",
    url: app.api + '/change-password/' + app.user.id,
    data,
    headers: {
      Authorization: 'Token token='+ app.user.token,
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
