'use strict';

const uploadFileSuccess = () => {
  console.log('File successfully uploaded.');
  // will create toast/tool tip for upload success
};

const uploadFileFailure = (error) => {
  console.error(error);
  // will create a modal for upload fail
};

const editFileSuccess = (data) => {
  console.log(data);
  console.log('Tag successfully added');
  // will create a toast/tool tip for tag added success
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
  success,
  failure,
};
