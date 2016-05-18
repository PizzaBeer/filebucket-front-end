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

const createFolderSuccess = () => {
  console.log('Create folder success');
  apiNodes.getDirectory(display.displayAllNodes, failure, app.currentDirectory);
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
