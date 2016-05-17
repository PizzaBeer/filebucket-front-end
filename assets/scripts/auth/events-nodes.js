'use strict';

const authApiNodes = require('./api-nodes');
const authUi = require('./ui-user');
const display = require('../display');
const nodeUi = require('./ui-nodes');
const appData = require('../app-data');

const nodeEventHandlers = () => {

  $('#application-x-www-form-urlencoded').on('submit', function(e) {
    e.preventDefault();
    let data = new FormData(this);
    authApiNodes.uploadNode(nodeUi.uploadNodeSuccess, nodeUi.uploadNodeFailure, data);
    console.log(data);
  });

  $('#get-nodes').on('click', function(e) {
    e.preventDefault();
    authApiNodes.getAllNodes(display.displayAllNodes, nodeUi.failure);
  });

  $('#all-nodes').on('click', '.edit-tags', function(e) {
    e.preventDefault();
    let nodeId = $(e.target).attr('data-id');
    $('.edit-tags-btn').attr('data-id', nodeId);
    console.log(nodeId);
  });

  $('#edit-tag-form').on('submit', function(e) {
    e.preventDefault();
    let data = getFormFields(this);
    let nodeId = $('.edit-tags-btn').attr('data-id');
    authApiNodes.editNode(nodeUi.editNodeSuccess, nodeUi.failure, data, nodeId);
  });

  $('#all-nodes').on('click', '.delete-node', function(e) {
    e.preventDefault();
    let nodeId = $(e.target).attr('data-id');
    $('.delete-node-btn').attr('data-id', nodeId);
    console.log('to delete' + nodeId);
  });

  $('.delete-node-btn').on('click', function(e) {
    e.preventDefault();
    let nodeId = $(this).attr('data-id');
    console.log('delete this => ' + nodeId);
    console.log(nodeId);
    authApiNodes.deleteNode(nodeUi.deleteNodeSuccess, authUi.failure, nodeId);
  });

  $('#create-folder-form').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    data += `&node%5Bpath%5D=,${appData.currentDirectory},`;
    console.log('this is data');
    authApiNodes.createFolder(authUi.success, authUi.failure, data); //add ajax call
    console.log(data);
  });





};

module.exports = {
  nodeEventHandlers,
};
