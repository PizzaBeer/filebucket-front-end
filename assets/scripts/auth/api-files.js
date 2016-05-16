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

const editFile = function(success, failure, data, fileId) {
  $.ajax({
    method: "PATCH",
    url: app.server.api + '/files/' + fileId,
    data,
    headers: {
      Authorization: 'Token token='+ app.currentUser.token,
    },
  })
  .done(success)
   .fail(failure);
};



module.exports = {
  uploadFile,
  getAllFiles,
  editFile
};
