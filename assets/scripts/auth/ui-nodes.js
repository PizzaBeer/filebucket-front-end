'use strict';

const apiNodes = require('./api-nodes.js');
const app = require('../app-data');
const display = require('../display');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const uploadNodeSuccess = () => {
  console.log('Node successfully uploaded.');
  apiNodes.getDirectory(display.displayAllNodes, failure, app.currentDirectory);
  $('#upload-file-modal').modal('hide');
  $('.upload-form').each(function(){
    this.reset();
  // will create notification/bootstrap alert for success

});
};
const uploadNodeFailure = (error) => {
  console.error(error);
  // will create a modal for upload fail
};

// edits/adds tags
const editNodeSuccess = () => {
  console.log('Tag successfully added');
  apiNodes.getDirectory(display.displayAllNodes, failure, app.currentDirectory);
  $('#edit-tags-modal').modal('hide');
  $( '#edit-tag-form' ).each(function(){
    this.reset();
});
};

const deleteNodeSuccess = () => {
  console.log('Node successfully deleted');
  apiNodes.getDirectory(display.displayAllNodes, failure, app.currentDirectory);
  $('#delete-file-modal').modal('hide');
};

const createFolderSuccess = () => {
  console.log('folder created');
  apiNodes.getDirectory(display.displayAllNodes, failure, app.currentDirectory);
  $('#create-folder-modal').modal('hide');
  $( '#create-folder-form' ).each(function(){
    this.reset();
});
};


module.exports = {
  success,
  failure,
  uploadNodeSuccess,
  uploadNodeFailure,
  editNodeSuccess,
  deleteNodeSuccess,
  createFolderSuccess
};
