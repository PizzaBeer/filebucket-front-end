'use strict';

const app = require('../app-data');

const uploadFile = (success, failure, data) => {
  $.ajax({
      method: 'POST',
      url: app.api + '/files',
      dataType: 'json',
      processData: false,
      contentType: false,
      data,
      headers: {
      Authorization: 'Token token=' + app.user.token
    },
  }).done(success)
    .fail(failure);
  };


module.exports = {
  uploadFile,
};
