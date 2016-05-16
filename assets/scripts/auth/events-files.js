'use strict';

const authApiFiles = require('./api-files');
const authUi = require('./ui-user');
const display = require('../display');
const fileUi = require('./ui-files');

const fileEventHandlers = () => {

  $('#application-x-www-form-urlencoded').on('submit', function(e) {
    e.preventDefault();
    Add file-ui to file AJAX functions
    let data = new FormData(this);
    authApiFiles.uploadFile(fileUi.uploadFileSuccess, fileUi.uploadFileFailure, data);
    console.log(data);
  });

  $('#get-files').on('click', function(e) {
    e.preventDefault();
    authApiFiles.getAllFiles(display.displayAllFiles, fileUi.failure);
  });

  $('#all-files').on('click', '#edit-tags', function(e) {
    e.preventDefault();
    let fileId = $(e.target).attr('data-id');
    $('.add-tag-btn').attr('data-id', fileId);
    console.log(fileId);
  });

  $('#edit-tag-form').on('click', function(e) {
    e.preventDefault();
    let data = getFormFields(this);
    let fileId = $('.add-tag-btn').attr('data-id');
    authApiFiles.editFile(authUi.success, authUi.failure, data, fileId);
  });

};

module.exports = {
  fileEventHandlers,
};
