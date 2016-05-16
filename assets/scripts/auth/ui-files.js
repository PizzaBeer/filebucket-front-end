'use strict';

const uploadFileSuccess = () => {
  console.log('File successfully uploaded.');
  // will create toast/tool tip for upload success or 
};

const uploadFileFailure = (error) => {
  console.error(error);
  // will create a modal for upload fail
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
  success,
  failure,
};
