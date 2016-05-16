'use strict';

const uploadFileSuccess = (data) => {
  console.log('File successfully uploaded.');
};

const uploadFileFailure = (error) => {
  console.error(error);
};

module.exports = {
  uploadFileSuccess,
  uploadFileFailure,
};
