'use strict';

const authApiFiles = require('./api-files');
const authUi = require('./ui-user');
const display = require('../display');

const fileEventHandlers = () => {


  $('#application-x-www-form-urlencoded').on('submit', function(e) {
    e.preventDefault();
    let data = new FormData(this);
    authApiFiles.uploadFile(authUi.success, authUi.failure, data);
    console.log(data);
  });

  $('#get-files').on('click', function(e) {
    e.preventDefault();
    authApiFiles.getAllFiles(display.displayAllFiles, authUi.failure);
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

  $('#all-files').on('click', '#delete-file', function(e) {
    e.preventDefault();
    let fileId = $(e.target).attr('data-id');
    $('.delete-file-btn').attr('data-id', fileId);
    console.log(fileId);
  });

  $('#delete-file-form').on('click', function(e) {
    e.preventDefault();
    let data = getFormFields(this);
    let fileId = $('.delete-file-btn').attr('data-id');
    authApiFiles.editFile(authUi.success, authUi.failure, data, fileId);
  });
};

module.exports = {
  fileEventHandlers,
};
