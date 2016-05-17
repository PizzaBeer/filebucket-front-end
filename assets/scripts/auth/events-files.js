'use strict';

const authApiFiles = require('./api-files');
const authUi = require('./ui-user');
const display = require('../display');
const fileUi = require('./ui-files');

const fileEventHandlers = () => {

  $('#application-x-www-form-urlencoded').on('submit', function(e) {
    e.preventDefault();
    let data = new FormData(this);
    authApiFiles.uploadFile(fileUi.uploadFileSuccess, fileUi.uploadFileFailure, data);
    console.log(data);
  });

  $('#get-files').on('click', function(e) {
    e.preventDefault();
    authApiFiles.getAllFiles(display.displayAllFiles, fileUi.failure);
  });

  $('#all-files').on('click', '.edit-tags', function(e) {
    e.preventDefault();
    let fileId = $(e.target).attr('data-id');
    $('.edit-tags-btn').attr('data-id', fileId);
    console.log(fileId);
  });

  $('#edit-tag-form').on('submit', function(e) {
    e.preventDefault();
    let data = getFormFields(this);
    let fileId = $('.edit-tags-btn').attr('data-id');
    authApiFiles.editFile(fileUi.editFileSuccess, fileUi.failure, data, fileId);
  });

  $('#all-files').on('click', '.delete-file', function(e) {
    e.preventDefault();
    let fileId = $(e.target).attr('data-id');
    $('.delete-file-btn').attr('data-id', fileId);
    console.log('to delete' + fileId);
  });

  $('.delete-file-btn').on('click', function(e) {
    e.preventDefault();
    let fileId = $(this).attr('data-id');
    console.log('delete this => ' + fileId);
    console.log(fileId);
    authApiFiles.deleteFile(fileUi.deleteFileSuccess, authUi.failure, fileId);
  });

};

module.exports = {
  fileEventHandlers,
};
