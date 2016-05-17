'use strict';

const apiNodes = require('./api-nodes.js');

const uploadNodeSuccess = () => {
  console.log('Node successfully uploaded.');
  apiNodes.getAllNodes();

  // will create toast/tool tip for upload success
};

const uploadNodeFailure = (error) => {
  console.error(error);
  // will create a modal for upload fail
};

const editNodeSuccess = () => {
  console.log('Tag successfully added');
  apiNodes.getAllNodes();
  // will create a toast/tool tip for tag added success
};

const deleteNodeSuccess = () => {
  console.log('Node successfully deleted');
  apiNodes.getAllNodes();
};




const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  uploadNodeSuccess,
  uploadNodeFailure,
  editNodeSuccess,
  deleteNodeSuccess,
  success,
  failure,
};
