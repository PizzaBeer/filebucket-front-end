'use strict';

const apiFiles = require('./api-files.js');

const uploadFileSuccess = () => {
  console.log('File successfully uploaded.');
  apiFiles.getAllFiles();

  // will create toast/tool tip for upload success
};

const uploadFileFailure = (error) => {
  console.error(error);
  // will create a modal for upload fail
};

const editFileSuccess = () => {
  console.log('Tag successfully added');
  apiFiles.getAllFiles();
  // will create a toast/tool tip for tag added success
};

const deleteFileSuccess = () => {
  console.log('File successfully deleted');
  apiFiles.getAllFiles();
};




const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  uploadFileSuccess,
  uploadFileFailure,
  editFileSuccess,
  deleteFileSuccess,
  success,
  failure,
};
