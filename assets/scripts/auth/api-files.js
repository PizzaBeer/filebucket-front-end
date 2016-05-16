'use strict';

const app = require('../app-data');
const display = require('../display');

const uploadFile = (success, failure, data) => {
  $.ajax({
      method: 'POST',
      url: app.server.api + '/files',
      dataType: 'json',
      processData: false,
      contentType: false,
      data,
      headers: {
        Authorization: 'Token token=' + app.currentUser.token
      },
    }).done(success)
    .fail(failure);
};

const getAllFiles = function(success, failure) {
  $.ajax({
      url: app.server.api + '/files',
      headers: {
        Authorization: 'Token token=' + app.currentUser.token,
      },
    }).done((data) => {
      display.displayAllFiles(data);
    })
    .fail(failure);
};



module.exports = {
  uploadFile,
  getAllFiles
};
